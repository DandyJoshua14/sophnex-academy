module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        './src/routes/**/*.{svelte,ts}',
        './src/lib/**/*.{svelte,ts}'
    ],
    theme: {
        extend: {
            colors: {
                steelblue: '#3469B2',
                slateindigo: '#5254A3',
                navynight: '#10112A',
                coralred: '#FF5E5E',
                aquagreen: '#00C2A8',
                brandwhite: '#FFFFFF',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}; 