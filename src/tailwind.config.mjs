/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '600' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.015em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '800' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '900' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: ['"Oswald"', 'sans-serif'],
                paragraph: ['"Manrope"', 'sans-serif'],
                samarkan: ['"Samarkan"', '"Yatra One"', '"Rozha One"', 'serif']
            },
            colors: {
                background: '#FCFCFA',
                surface: '#F5F4F0',
                foreground: '#111111',
                primary: '#111111',
                'primary-foreground': '#FFFFFF',
                secondary: '#E7E5DF',
                'secondary-foreground': '#5F5F5A',
                accent: {
                    DEFAULT: '#F4B93A',
                    hover: '#D98C22',
                    light: '#FFF2CC',
                    dark: '#D98C22'
                },
                tiranga: {
                    saffron: '#FF9933',
                    white: '#FFFFFF',
                    green: '#138808'
                },
                muted: {
                    DEFAULT: '#94948D',
                    light: '#E7E5DF',
                    dark: '#5F5F5A'
                },
                border: '#E7E5DF',
                illustration: {
                    terracotta: '#C95E2F',
                    orange: '#D96A32',
                    saffron: '#E8892E',
                    sand: '#F4D18A',
                    green: '#58745A',
                    teal: '#285B5D',
                    indigo: '#37466E'
                }
            },
            borderRadius: {
                none: '0',
                sm: '12px',
                DEFAULT: '16px',
                md: '20px',
                lg: '28px',
                xl: '36px',
                '2xl': '40px',
                '3xl': '48px',
                full: '9999px',
            },
            boxShadow: {
                sm: '0 4px 16px rgba(20,20,15,0.06)',
                DEFAULT: '0 10px 28px rgba(20,20,15,0.08)',
                md: '0 18px 50px rgba(20,20,15,0.12)',
                lg: '0 28px 80px rgba(20,20,15,0.14)',
            }
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
