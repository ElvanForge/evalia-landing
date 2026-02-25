import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess()],
    kit: {
        // adapter-static is perfect for your Vaelia landing page
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html', // Changed from 404.html to better support Vercel SPA routing
            precompress: false,
            strict: true
        }),
        paths: {
            // REMOVED the '/evalia-landing' prefix. 
            // This ensures your assets load correctly from the root of vaelia.app
            base: '',
        }
    }
};

export default config;