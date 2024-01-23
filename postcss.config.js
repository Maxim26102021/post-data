const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss,
        require('autoprefixer')({
            overrideBrowserslist: ['last 2 versions']
        })
    
    ],
};