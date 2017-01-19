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
            {from: './colors.js', to: '../../web/src/colors.js'},
            {from: './crayola.json', to: '../../web/src/crayola.json'},
            {from: './ColorListItem.js', to: '../../web/src/ColorListItem.js'},
            {from: './SearchBox.js', to: '../../web/src/SearchBox.js'},
            {from: './SearchResults.js', to: '../../web/src/SearchResults.js'},
            {from: './SearchInput.js', to: '../../web/src/SearchInput.js'},

            {from: './SearchBox.js', to: '../../github-web/src/SearchBox.js'},
            {from: './SearchResults.js', to: '../../github-web/src/SearchResults.js'},
            {from: './SearchInput.js', to: '../../github-web/src/SearchInput.js'},


            // Copy directory contents to {output}/to/directory/
            // { from: 'from/directory', to: 'to/directory' },

            // Copy glob results (with dot files) to /absolute/path/
            // {
            //     from: {
            //         glob:'from/directory/**/*',
            //         dot: true
            //     },
            //     to: '/absolute/path'
            // },

        ], {

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ]
};