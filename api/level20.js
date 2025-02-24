export default (req, res) => {
  if (req.method !== "GET") return res.sendStatus(400);

  if (req.get('X-Api-Key') == 'mysupercoolapikey') {
    res.send('Approved!')
    return;
  }

  const basicAuth = req.get('Authorization')
  if (basicAuth) {
    const [type, value] = basicAuth.split(' ')
    const authBuffer = Buffer.from(value, 'base64')
    const authString = authBuffer.toString()
    const [user, pass] = authString.split(":")


    if (type === "Basic" && user === 'CuriousGeorge' && pass === 'yellowhat') {
      res.send('Welcome Mr. George.')
      return;
    }
  }

  res.sendStatus(401);
};
