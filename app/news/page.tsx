// app/news/page.tsx
import Link from 'next/link';
import { client } from '@/lib/microcms';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

// ページ内にインライン定義
type News = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
};

export const revalidate = 60;

export default async function NewsList() {
  const { contents } = await client.get<MicroCMSListResponse<News>>({
    endpoint: 'news',
    queries: { orders: '-publishedAt' },
  });

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">News</h1>
      <ul className="space-y-6">
        {contents.map((item) => (
          <li key={item.id} className="border-b pb-4">
            <Link
              href={`/news/${item.id}`}
              className="text-xl font-semibold hover:underline"
            >
              {item.title}
            </Link>
            <p className="text-gray-500 text-sm">
              {new Date(item.publishedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
