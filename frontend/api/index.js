import app from "./app.js";

export default function handler(req, res) {
  if (req.url && req.url.startsWith("/isarva-erp")) {
    req.url = req.url.replace("/isarva-erp", "");
  }
  return app(req, res);
}
