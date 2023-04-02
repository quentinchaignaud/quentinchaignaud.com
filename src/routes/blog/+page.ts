import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.quentinchaignaud.com');

export const load = (async ({ fetch, params }) => {
  const records = await pb.collection('posts').getFullList({
      sort: '-created',
  });
  return { 
    posts: records
  };
}) satisfies PageLoad;
