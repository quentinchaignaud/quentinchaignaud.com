import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.quentinchaignaud.com');

export const load = (async ({ fetch, params }) => {
  const record = await pb.collection('posts').getFirstListItem(`slug="${params.slug}"`);
  return { 
    posts: record
  };
}) satisfies PageLoad;
