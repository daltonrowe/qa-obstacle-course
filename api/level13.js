export default (req, res) => {
  if (req.method !== "GET") return res.sendStatus(400);

  res.send("Hello, world!");
};
