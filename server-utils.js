export function readCookies(req) {
  if (req?.headers?.cookie) {
    const header = req.headers.cookie;
    const cookies = header.split(";");
    const formatted = {};

    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (!key || !value) continue;

      formatted[key] = value;
    }

    return formatted;
  }

  return {};
}
