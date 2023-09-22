const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://127.0.0.1:7777",
      changeOrigin: true,
      ws: true,
      pathRewrite: { "^/api": "" },
    })
  );
};