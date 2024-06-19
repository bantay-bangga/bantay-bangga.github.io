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
                primary: {
                    '50': '#fffaeb',
                    '100': '#feefc7',
                    '200': '#fcdd8b',
                    '300': '#fac64f',
                    '400': '#f9ae22',
                    '500': '#f38d0d',
                    '600': '#d76908',
                    '700': '#b2470b',
                    '800': '#91370f',
                    '900': '#772e10',
                    '950': '#441604',
                },
                secondary: '#DB6659',
                tertiary: {
                    '50': '#f5f8f7',
                    '100': '#ddeae6',
                    '200': '#bcd3ce',
                    '300': '#92b6ae',
                    '400': '#6b968e',
                    '500': '#517b74',
                    '600': '#426661',
                    '700': '#35504d',
                    '800': '#2e413f',
                    '900': '#293836',
                    '950': '#141f1e',
                },
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
