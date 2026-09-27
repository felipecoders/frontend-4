export function baseUrl() {
  var b = "/";
  if (import.meta.env && import.meta.env.BASE_URL) {
    b = import.meta.env.BASE_URL;
  }
  if (!b.endsWith("/")) {
    b += "/";
  }
  return b;
}

export function pathDaUrl(pathname) {
  var path = String(pathname || "/");
  var base = baseUrl().replace(/\/$/, "");
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length) || "/";
  }
  if (path === "./" || path === "." || path === "") {
    path = "/";
  }
  if (path.charAt(0) !== "/") {
    path = "/" + path;
  }
  path = path.replace(/\/$/, "") || "/";
  if (path === "/index.html") {
    path = "/";
  }
  return path;
}

export function urlDaRota(rota) {
  var r = rota === "/" ? "" : String(rota).replace(/^\//, "");
  return baseUrl() + r;
}

export function asset(rel) {
  return baseUrl() + String(rel).replace(/^\//, "");
}
