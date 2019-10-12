const path = require('path');

const config = {
    mode: 'development',
    entry: { search: './src/search.js' },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "env": {
                            "test": {
                                "plugins": [["istanbul", {
                                    exclude: ['**/*-spec.js']
                                }]]
                            }
                        },
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": "last 5 versions"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../main/resources/static/js'),
        filename: '[name].js'
    }
};
const esConfig = {
    devtool: 'source-map',
    mode: 'development',
    entry: { search: './src/search.js' },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "env": {
                            "test": {
                                "plugins": [["istanbul", {
                                    exclude: ['**/*-spec.js']
                                }]]
                            }
                        },
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    "debug": true,
                                    targets: {
                                        esmodules: true
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [],
    output: {
        path: path.resolve(__dirname, '../main/resources/static/js'),
        filename: '[name].mjs'
    }
};

const tableConfig = {
    mode: 'development',
    entry: { tables: './src/tables.js' },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "env": {
                            "test": {
                                "plugins": [["istanbul", {
                                    exclude: ['**/*-spec.js']
                                }]]
                            }
                        },
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": "last 5 versions"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../main/resources/static/js'),
        filename: '[name].js'
    }
};
const tablesEsConfig = {
    devtool: 'source-map',
    mode: 'development',
    entry: { tables: './src/tables.js' },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "env": {
                            "test": {
                                "plugins": [["istanbul", {
                                    exclude: ['**/*-spec.js']
                                }]]
                            }
                        },
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    "debug": true,
                                    targets: {
                                        esmodules: true
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [],
    output: {
        path: path.resolve(__dirname, '../main/resources/static/js'),
        filename: '[name].mjs'
    }
};

const validationConfig = {
    mode: 'development',
    entry: { validation: './src/main-validation.js' },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "env": {
                            "test": {
                                "plugins": [["istanbul", {
                                    exclude: ['**/*-spec.js']
                                }]]
                            }
                        },
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": "last 5 versions"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../main/resources/static/js'),
        filename: '[name].js'
    }
};
const validationEsConfig = {
    devtool: 'source-map',
    mode: 'development',
    entry: { validation: './src/main-validation.js' },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "env": {
                            "test": {
                                "plugins": [["istanbul", {
                                    exclude: ['**/*-spec.js']
                                }]]
                            }
                        },
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    "debug": true,
                                    targets: {
                                        esmodules: true
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [],
    output: {
        path: path.resolve(__dirname, '../main/resources/static/js'),
        filename: '[name].mjs'
    }
};


module.exports = [
    config,
    esConfig,
    tableConfig,
    tablesEsConfig,
    validationConfig,
    validationEsConfig
];