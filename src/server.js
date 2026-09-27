const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5500;
const ROOT = __dirname;
const DIST = path.join(__dirname, "..", "dist");
const SRC_SHELL = path.join(ROOT, "html", "index.html");
const SPA_ROUTES = new Set(["/", "/projetos", "/cadastro"]);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function findDistShell() {
  var candidates = [
    path.join(DIST, "index.html"),
    path.join(DIST, "html", "index.html"),
    path.join(DIST, "src", "html", "index.html"),
  ];
  for (var i = 0; i < candidates.length; i++) {
    if (fs.existsSync(candidates[i])) {
      return candidates[i];
    }
  }
  return null;
}

function isInside(root, filePath) {
  var safeRoot = root.endsWith(path.sep) ? root : root + path.sep;
  return filePath === root || filePath.startsWith(safeRoot);
}

function resolveStatic(pathname) {
  var relative = pathname.replace(/^\//, "");
  var distFile = path.normalize(path.join(DIST, relative));
  if (isInside(DIST, distFile) && fs.existsSync(distFile) && fs.statSync(distFile).isFile()) {
    return distFile;
  }
  var srcFile = path.normalize(path.join(ROOT, relative));
  if (isInside(ROOT, srcFile) && fs.existsSync(srcFile) && fs.statSync(srcFile).isFile()) {
    return srcFile;
  }
  return null;
}

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
      sendFile(res, findDistShell() || SRC_SHELL);
      return;
    }

    var filePath = resolveStatic(pathname);
    if (!filePath) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    sendFile(res, filePath);
  })
  .listen(PORT, function () {
    console.log("http://localhost:" + PORT + "/");
  });
