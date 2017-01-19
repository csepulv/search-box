const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    context: path.join(__dirname, '.'),
    devServer: {
        // This is required for older versions of webpack-dev-server
        // if you use absolute 'to' paths. The path should be an
        // absolute path to your build destination.
        outputPath: path.join(__dirname, 'build')
    },
    output: {
        filename: 'bundle.js',
        path: './build'
    },
    plugins: [
        new CopyWebpackPlugin([

            // {output}/to/file.txt
            {from: './crayola.json', to: '../../color-web/src/crayola.json'},
            {from: './colors.js', to: '../../color-web/src/colors.js'},

            {from: './SearchBox.js', to: '../../color-web/src/'},
            {from: './Web*.js', to: '../../color-web/src/', flatten:true},

            {from: './SearchBox.js', to: '../../github-web/src/'},
            {from: './Web*.js', to: '../../github-web/src', flatten:true},


            {from: './crayola.json', to: '../../color-mobile/crayola.json'},
            {from: './colors.js', to: '../../color-mobile/colors.js'},

            {from: './SearchBox.js', to: '../../color-mobile/'},
            {from: './Mobile*.js', to: '../../color-mobile/', flatten:true},

            {from: './SearchBox.js', to: '../../github-mobile/'},
            {from: './Mobile*.js', to: '../../github-mobile/', flatten:true},


        ], {

            ignore: [
                // Doesn't copy any files with a txt extension
                '*.test.js',
                '*.config.js',
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ]
};