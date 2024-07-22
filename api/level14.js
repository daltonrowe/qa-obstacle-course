export default (req, res) => {
  if (req.method !== 'GET') return res.sendStatus(400)

  if (req.query['food'] === 'pizza' && req.query['size'] === 'medium') return res.send('Coming right up!')
  if (req.query['food'] === 'pizza') return res.send('What size?')

  res.send("What are you hungry for?");
}