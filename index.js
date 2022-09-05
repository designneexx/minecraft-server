const express = require('express')
const ip = require('ip')
const { JavaCaller } = require('java-caller')

const app = express()

app.listen(process.env.PORT || 3007, (data) => {
  const java = new JavaCaller({
    jar: 'mcserver.jar',
  })

  java
    .run(['-Xmx1024M', '-Xms1024M', 'nogui'])
    .then((data) => {
      console.log('success', data)
    })
    .catch((err) => {
      console.error(err)
    })

  console.log(`Example app listening on port ${data}`)
})

app.get('/', (req, res) => {
  res.send(`Hi! ${ip.address()}`)
})

module.exports = app
