import type { PageLoad } from './$types';
import { pb } from '$lib/pocketbase'

export const load = (async () => {
  const records = await pb.collection('posts').getFullList({
      sort: '-created',
  });
  return { 
    posts: records
  };
}) satisfies PageLoad;
