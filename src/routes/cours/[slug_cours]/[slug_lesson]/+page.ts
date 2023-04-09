import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.quentinchaignaud.com');

export const load = (async ({ fetch, params }) => {
  const record = await pb.collection('lessons').getFirstListItem(`slug="${params.slug_lesson}"`);
  return { 
    lesson: record
  };
}) satisfies PageLoad;
