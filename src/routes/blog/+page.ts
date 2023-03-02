import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const res = await fetch('https://cms-quentinchaignaud.herokuapp.com/api/posts?populate=*');
  const data = await res.json();   
  return { 
    posts: data
  };
}) satisfies PageLoad;
