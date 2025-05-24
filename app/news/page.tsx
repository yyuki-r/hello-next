import Link from 'next/link';
import { client } from '@/lib/microcms';
import { News } from '@/lib/types';
import { MicroCMSListResponse } from 'microcms-js-sdk';

export const revalidate = 60; // ISR

export default async function NewsList() {
  const data = await client.get<MicroCMSListResponse<News>>({
    endpoint: 'news',
    queries: { orders: '-publishedAt' },
  });

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">News</h1>

      <ul className="space-y-6">
        {data.contents.map((item: News) => (   /* ← ここは (item: News) のみ */
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
