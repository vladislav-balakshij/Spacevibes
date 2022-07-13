exports.onCreateWebpackConfig = ({actions}, options) => {
    console.log(process.cwd(), "CWD")
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'sass-loader',
                        {
                            loader: "sass-resources-loader",
                            options: {
                                hoistUseStatements: true,
                                resources: [
                                    'src/styles/resources/devices.scss'
                                ]
                            }
                        }
                    ]

                }
            ]
        }
    });
};