const paths = require('./paths');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
//cssModule의 고유 className을 만들 때 필요한 옵션
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const getCientEnvironment = require('env');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css/;
const sassRegex = /\.(scss|sass)$/;
const sasssModuleRegex = /\.module.\.(scss|sass)/;

const publicUrl = paths.servedPath.slice(0 ,-1);
const env = getCientEnvironment(publicUrl);

module.exports = {
    mode: 'production',     //프로덕션 모드로 설정하여 최적화 옵션 활성화
    entry: paths.ssrIndexJS,    //엔트리 경로
    target: 'node',             //node에서 실행됨
    output: {
        path: paths.ssrBuild,   //빌드 경로
        filename: 'sever.js',    //파일 이름
        chunckFilename: 'js/[name].chunk.js',   //chunk 파일 이름
        publicPath: paths.servedPath,   //정적 파일이 제공될 경로
    },
    module: {
        rules: [
            {
                oneOf: [
                    //자바 스크립트를 위한 처리
                    //기존 webpack.config.js를 참고하여 작성
                    {
                        test: /\.(js|mjs|jsx|ts|tsx)/,
                        include: paths.appSrc,
                        loader: require.resolve.apply('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-perset-react-app/webpack-overrides'
                            ),
                            plugins: [
                                [
                                    require.resolve('babel-pulgin-named-asset-import'),
                                    {
                                        loaderMap: {
                                            svg: {
                                                ReactComponent: '@svgr/webpack?-svgo![path]'
                                            }
                                        }
                                    }
                                ]
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: false
                        }
                    },
                    //css처리
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        //exportOnlyLocals: true옵션을 설정해야 실제 css파일을 생성하지 않습니다.
                        loader: require.resolve('css-loader'),
                        options: {
                            exportOnlyLocals: true
                        }
                    },
                    //cssModule을 위한 처리
                    {
                        test: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: true,
                            exportOnlyLocals: true,
                            getLocalIdent: getCSSModuleLocalIdent
                        }
                    },
                    //Sass를 위한 처리
                    {
                        test: sassRegex,
                        exclude: sasssModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    exportOnlyLocals: true
                                }
                            },
                            require.resolve('sass-loader')
                        ]
                    },
                    //Sass + Css Module을 위한 처리
                    {
                        test: sassRegex,
                        exclude: sasssModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    modules: true,
                                    exportOnlyLocals: true,
                                    getLocalIdent: getCSSModuleLocalIdent
                                }
                            },
                            require.resolve('sass-loader')
                        ]
                    },
                    //url-loader를 위한 설정
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            emitFile: false,    //파일을 따로 저장하지 않는 옵션
                            limit: 1000,        //원래는 9.76KB가 넘아가면 파일로 저장
                            //emitFile값이 false일 때는 경로만 준비하고 파일은 저장하지 않는다
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    //위에서 설정된 확장자를 제외한 파일들
                    //file-loader를 사용한다.
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                        options: {
                            emitFile: false,     //파일을 따로 저장하지 않는 옵션
                            name: 'static/media/[name].[hahs:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules']
    },
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin(env.stringified)   //환경 변수 주입
    ]
};