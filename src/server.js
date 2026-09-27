const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5500;
const ROOT = __dirname;
const SHELL = path.join(ROOT, "html", "index.html");
const SPA_ROUTES = new Set(["/", "/projetos", "/cadastro"]);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

function sendFile(res, filePath) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    var ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
    });
    res.end(data);
  });
}

http
  .createServer(function (req, res) {
    var url = new URL(req.url, "http://" + req.headers.host);
    var pathname = decodeURIComponent(url.pathname);
    if (pathname.length > 1) {
      pathname = pathname.replace(/\/$/, "");
    }

    if (SPA_ROUTES.has(pathname)) {
      sendFile(res, SHELL);
      return;
    }

    var relative = pathname.replace(/^\//, "");
    var filePath = path.normalize(path.join(ROOT, relative));
    var safeRoot = ROOT.endsWith(path.sep) ? ROOT : ROOT + path.sep;
    if (filePath !== ROOT && !filePath.startsWith(safeRoot)) {
      res.writeHead(403);
      res.end();
      return;
    }

    fs.stat(filePath, function (err, stat) {
      if (err || !stat.isFile()) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }
      sendFile(res, filePath);
    });
  })
  .listen(PORT, function () {
    console.log("http://localhost:" + PORT + "/");
  });
