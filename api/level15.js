export default (req, res) => {
  switch (req.method) {
    case "POST":
      return res.send("I");

    case "PUT":
      return res.send("love");

    case "PATCH":
      return res.send("to");

    case "DELETE":
      return res.send("dance!");

    default:
      return res.sendStatus(400);
  }
};
