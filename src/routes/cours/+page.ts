import type { PageLoad } from './$types';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.quentinchaignaud.com');

export const load = (async ({ fetch, params }) => {
  const records = await pb.collection('courses').getFullList({
      sort: '-created',
  });
  return { 
    courses: records
  };
}) satisfies PageLoad;
