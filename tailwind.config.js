import typo from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    plugins: [typo],
    theme: {
        extend: {
            colors: {
                'primary': '#F9AE22',
                'secondary': '#DB6659',
                'tertiary': {
                    50: '#EBF0F0',
                    400: '#7C999B',
                },
                'surface': '#272A2C',
            }
        }
    }
};
