// app/news/[id]/page.tsx
import { client } from '@/lib/microcms';
import { notFound } from 'next/navigation';

type Params = { id: string };

// ① ビルド時 & ISR 時に全 ID を取得して静的化
export async function generateStaticParams() {
  const { contents } = await client.get({
    endpoint: 'news',
    queries: { fields: 'id' },
  });
  return contents.map((c: any) => ({ id: c.id }));
}

// ② ISR 60秒
export const revalidate = 60;

// ③ これが「default export の React コンポーネント」
export default async function NewsDetail({ params }: { params: Params }) {
  try {
    const data = await client.get({
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
    notFound(); // 404 へ
  }
}