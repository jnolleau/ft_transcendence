// var path = require('path')
// var webpack = require('webpack')

// module.exports = {
//   devtool: 'source-map',
//   entry: [
//     './index'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/static/'
//   },
//   module: {
//     rules: [
//       {
//         test: /my_client\/.*\.js$/,
//         use: 'imports-loader?define=>false',
//         loader: 'ts-loader',
//         options: {
//           getCustomTransformers: (program: any) => ({
//             before: [require('@nestjs/swagger/plugin').before({}, program)]
//           })
//         }
//       }
//     ]
//   },
//   node: {
//     fs: 'empty'
//   }
// }
