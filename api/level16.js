export default (req, res) => {
  if (req.method !== "POST") return res.sendStatus(400);

  if (req.body.greeting === "Good morning")
    return res.json({ greeting: "Hiya~!" });

  res.sendStatus(200);
};
