import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.quentinchaignaud.com');

export const load = (async ({ fetch, params }) => {
  const record = await pb.collection('courses').getFirstListItem(`slug="${params.slug}"`);
  return { 
    course: record
  };
}) satisfies PageLoad;
