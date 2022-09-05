const express = require('express')
const ip = require('ip')
const { JavaCaller } = require('java-caller')

const app = express()

const java = new JavaCaller({
  jar: 'minecraft_server.1.16.1.jar',
})

java
  .run(['-Xmx1024M', '-Xms1024M', 'nogui'])
  .then((data) => {
    console.log('success', data)
  })
  .catch((err) => {
    console.error(err)
  })

app.listen(process.env.PORT || 3007, (data) => {
  console.log(`Example app listening on port ${data}`)
})

app.get('/', (req, res) => {
  res.send(`Hi! ${ip.address()}`)
})

module.exports = app
