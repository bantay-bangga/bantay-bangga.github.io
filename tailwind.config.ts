import type { Config } from 'tailwindcss';
import theme from 'tailwindcss/defaultTheme';
import typo from '@tailwindcss/typography';

export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    plugins: [typo],
    theme: {
        extend: {
            colors: {
                primary: '#F9AE22',
                secondary: '#DB6659',
                tertiary: { 50: '#EBF0F0', 400: '#7C999B' },
                surface: {
                    '50': '#f5f6f6',
                    '100': '#e5e8e8',
                    '200': '#cdd2d4',
                    '300': '#aab3b6',
                    '400': '#808c90',
                    '500': '#657175',
                    '600': '#576063',
                    '700': '#4a5154',
                    '800': '#414649',
                    '900': '#3a3d3f',
                    '950': '#272a2c',
                },
            },
            fontFamily: {
                raleway: ['Raleway', ...theme.fontFamily.sans],
                anon: ['Anonymous Pro', ...theme.fontFamily.sans],
            },
        },
    },
} satisfies Config;
