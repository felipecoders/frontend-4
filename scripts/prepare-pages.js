const fs = require("fs");
const path = require("path");

var dist = path.join(__dirname, "..", "dist");
var built = path.join(dist, "src", "html", "index.html");
var index = path.join(dist, "index.html");
var fallback = path.join(dist, "404.html");
var imagensSrc = path.join(__dirname, "..", "src", "imagens");
var imagensDest = path.join(dist, "imagens");

if (!fs.existsSync(built)) {
  throw new Error("HTML da build nao encontrado: " + built);
}

fs.copyFileSync(built, index);
fs.copyFileSync(built, fallback);

fs.mkdirSync(imagensDest, { recursive: true });
fs.readdirSync(imagensSrc).forEach(function (nome) {
  fs.copyFileSync(path.join(imagensSrc, nome), path.join(imagensDest, nome));
});
