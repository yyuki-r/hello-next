// app/news/[id]/page.tsx
import { client } from '@/lib/microcms';
import { notFound } from 'next/navigation';
import { News } from '@/lib/types';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

type Params = { id: string };
type NewsIdOnly = { id: string };

export async function generateStaticParams() {
  const { contents } = await client.get<MicroCMSListResponse<NewsIdOnly>>({
    endpoint: 'news',
    queries: { fields: 'id' },
  });
  return contents.map((c) => ({ id: c.id }));
}

export const revalidate = 60;

type Props = {
  params: Params;
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function NewsDetail({
  params,
  searchParams: _searchParams,  // ← ここを変更
}: Props) {
  try {
    const data = await client.get<News>({
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
    notFound();
  }
}
