import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // <--- THIS CHANGED

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess()], // Use brackets here to be safe
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
            // Ensure this is your repo name
            base: process.env.NODE_ENV === 'production' ? '/evalia-landing' : '',
        }
    }
};

export default config;