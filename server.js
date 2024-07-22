import * as fs from "fs"
import express from 'express'
const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const portFlagIndex = process.argv.findIndex(item => item === '--port');
const port = portFlagIndex !== -1 ? process.argv[portFlagIndex + 1] : 3000

app.use(express.static('public', { extensions: ['html'] }))

fs.readdirSync('api').forEach(async file => {
  const { default: route } = await import(`./api/${file}`)
  const level = file.split('.')[0]
  app.use(`/api/${level}`, route)
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})