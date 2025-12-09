const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/execute", // Specify the path you want to proxy
    createProxyMiddleware({
      target: "https://stage.jdoodle.com",
      headers: {
        accept: "application/json",
        method: "POST",
      },
      changeOrigin: true,
    })
  );
};
