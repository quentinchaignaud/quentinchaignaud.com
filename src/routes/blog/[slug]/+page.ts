import type { PageLoad } from './$types';
import { pb } from '$lib/pocketbase'

export const load = (async ({ params }) => {
  const record = await pb.collection('posts').getFirstListItem(`slug="${params.slug}"`);
  return { 
    post: record
  };
}) satisfies PageLoad;
