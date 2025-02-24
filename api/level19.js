import { readCookies } from "../server-utils.js";

export default (req, res) => {
  if (req.method !== "GET") return res.sendStatus(400);

  const cookies = readCookies(req);

  if (cookies['Flavor'] == 'ChocolateChip') {
    res.send('Yum yum.')
    return;
  }

  if (cookies['GiveMe'] == 'ACookie') {
    res.setHeaders(new Headers({
      'Set-Cookie': 'MyFavorite=RedVelvet',
    }))
    res.sendStatus(200)
    return;
  }

  res.send("Give me a cookie!");
};
