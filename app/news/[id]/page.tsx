import { client } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import { MicroCMSListResponse } from 'microcms-js-sdk';
import { News } from '@/lib/types';      // ① 共通 News 型をインポート

type Params = { id: string };
type NewsIdOnly = { id: string };        // ② id だけ欲しいとき用の型

/* -------------------------------------------------- */
/* ① ビルド時 & ISR 時に全 ID を取得して静的化       */
/* -------------------------------------------------- */
export async function generateStaticParams() {
  const { contents } = await client.get<MicroCMSListResponse<NewsIdOnly>>({
    endpoint: 'news',
    queries: { fields: 'id' },           // id だけ取得
  });

  // contents の型は NewsIdOnly[] になる
  return contents.map((c) => ({ id: c.id }));
}

/* -------------------------------------------------- */
/* ② ISR キャッシュ期間（秒）                         */
/* -------------------------------------------------- */
export const revalidate = 60;

/* -------------------------------------------------- */
/* ③ 記事詳細ページの React コンポーネント           */
/* -------------------------------------------------- */
export default async function NewsDetail({ params }: { params: Params }) {
  try {
    const data = await client.get<News>({          // ③-1 News 型を指定
      endpoint: 'news',
      contentId: params.id,
    });

    return (
      <main className="max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">{data.title}</h1>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
      </main>
    );
  } catch {
    notFound();                                    // ③-2 404 へ遷移
  }
}