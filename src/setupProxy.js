const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/jian', {
            // target: 'http://127.0.0.1:3000',
            target: 'https://www.jianshu.com/asimov',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                "^/jian": ""
            }
        })
    );

    app.use(
        createProxyMiddleware('/zhi', {
            // target: 'http://127.0.0.1:3000',
            target: 'https://news-at.zhihu.com/api/4',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                "^/zhi": ""
            }
        })
    );
}