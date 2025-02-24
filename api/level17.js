export default (req, res) => {
  if (req.method !== "GET") return res.sendStatus(400);

  res.format({
    'text/plain': function () {
      res.send("Here's some plain text!")
    },

    'application/json': function () {
      res.send({
        "Hereees": "json!"
      })
    },

    default: function () {
      res.send("Please provide an Accept header")
    }
  })
};
