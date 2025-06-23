// src/app/interaction/[id]/page.jsx (unchanged)
'use client';
import React from 'react';
import useSWR from 'swr';
import { useParams } from 'next/navigation';

const fetcher = url => fetch(url).then(r => r.json());

export default function InteractionPage() {
  // const { id: rawId } = useParams();
  // const username = rawId ? decodeURIComponent(rawId) : '';
  // const { data, error } = useSWR(
  //   username ? `/api/interaction-comments?user=${encodeURIComponent(username)}` : null,
  //   fetcher
  // );

  // if (error) return <p className="text-red-500">Failed to load comments.</p>;
  // if (!data) return <p>Loading…</p>;
  // if (!data.posts.length) {
  //   return <p>No comments found for user “{username}”.</p>;
  // }

  return (
    <div className="p-6">
      <h1>Data</h1>
      {/* <h1 className="text-2xl mb-4">Posts commented on by {username}</h1>
      <ul className="space-y-4">
        {data.posts.map(post => (
          <li key={post.id} className="border p-4 rounded-lg">
            <a href={post.url} target="_blank" rel="noopener noreferrer"
               className="font-semibold hover:underline">
              {post.title}
            </a>
            <p className="text-sm text-gray-500 mt-1">
              commented at {new Date(post.commentedAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
