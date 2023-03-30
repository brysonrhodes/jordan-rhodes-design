import adapter from "svelte-adapter-appengine";

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
   	adapter: adapter(),
  },
};
