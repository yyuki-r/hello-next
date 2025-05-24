import Link from 'next/link';          // ① 追加
import { client } from '@/lib/microcms';

export default async function Home() {
  // news API から最新1件を取得
  const { contents } = await client.get({
    endpoint: 'news',
    queries: { limit: 1 },
  });

  const article = contents[0];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        {article ? article.title : 'No News Yet'}
      </h1>

      {article && (
        <article className="prose max-w-xl text-center">
          <div
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </article>
      )}
      
      <Link href="/news" className="mt-6 text-blue-600 underline">
        → すべてのお知らせを見る
      </Link>

    </main>
  );
}