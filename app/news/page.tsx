import Link from 'next/link';
import { client } from '@/lib/microcms';

export const revalidate = 60; // ISR: 60秒キャッシュ

export default async function NewsList() {
  const { contents } = await client.get({
    endpoint: 'news',
    queries: { orders: '-publishedAt' }, // 新しい順
  });

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">News</h1>

      <ul className="space-y-6">
        {contents.map((item: any) => (
          <li key={item.id} className="border-b pb-4">
            <Link href={`/news/${item.id}`} className="text-xl font-semibold hover:underline">
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