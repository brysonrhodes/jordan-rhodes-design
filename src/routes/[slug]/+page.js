import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === 'holland-america') {
    return {
      title: 'Holland America',
      page: 'hollandAmerica',
      slug: params.slug
    };
  }
 
  throw error(404, 'Not found');
}
