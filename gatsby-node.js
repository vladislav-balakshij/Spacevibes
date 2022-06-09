//TODO: configurate webpack to have global media mixins.

// exports.onCreateWebpackConfig = ({actions, getConfig}) => {
//     const config = getConfig()
//     config.module.rules = [
//         {
//             test: /\.scss$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'postcss-loader',
//                 'sass-loader',
//                 'sass',
//                 'gatsby-plugin-sass',
//                 'node-sass',
//                 {
//                     loader: 'sass-resources-loader',
//                     options: {
//                         // Provide path to the file with resources
//                         resources: 'src/styles/_device.scss',
//                     },
//                 },
//             ],
//         }
//     ]
//     // This will completely replace the webpack config with the modified object.
//     actions.replaceWebpackConfig(config)
// }