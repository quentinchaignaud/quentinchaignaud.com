import type { PageLoad } from './$types';
import { pb } from '$lib/pocketbase'

export const load = (async ({ params }) => {
  const record = await pb.collection('lessons').getFirstListItem(`slug="${params.slug_lesson}"`);
  return { 
    lesson: record
  };
}) satisfies PageLoad;
