export default (req, res) => {
  if (req.method !== "POST") return res.sendStatus(400);

  const contentType = req.get("Content-Type");

  if (contentType === "text/plain" && req.body === "Just plain ol talkin") {
    res.send("Understood.");
    return;
  }

  if (
    contentType === "application/json" &&
    JSON.stringify(req.body) === JSON.stringify({ how: "about this?" })
  ) {
    res.json({ Yup: "got it" });
    return;
  }

  res.send("Sorry I can't read that.");
};
