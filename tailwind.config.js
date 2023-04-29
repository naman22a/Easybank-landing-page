/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                // Primary
                Dark_Blue: 'hsl(233, 26%, 24%)',
                Lime_Green: 'hsl(136, 65%, 51%)',
                Bright_Cyan: 'hsl(192, 70%, 51%)',

                // Neutrals
                Grayish_Blue: 'hsl(233, 8%, 62%)',
                Light_Grayish_Blue: 'hsl(220, 16%, 96%)',
                Very_Light_Gray: 'hsl(0, 0%, 98%)',
                White: 'hsl(0, 0%, 100%)'
            }
        }
    },
    plugins: []
};
