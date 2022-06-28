/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                auto: "repeat(auto-fill, minmax(170px, 1fr))",
            },
        },
    },
    plugins: [],
};
