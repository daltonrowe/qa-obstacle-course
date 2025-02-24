export default (req, res) => {
  if (req.method !== "GET") return res.sendStatus(400);

  res.format({
    "text/plain": () => {
      res.send("Here's some plain text!");
    },

    "application/json": () => {
      res.send({
        Hereees: "json!",
      });
    },

    default: () => {
      res.send("Please provide an Accept header");
    },
  });
};
