require('dotnev').config()
const express = require('express')
const server = express()

if (process.env.NODE_ENV === 'production') {
  console.log('this mean this code is deployed');
}

const PORT = process.env.PORT || 5000
console.log('port is ->', PORT);

server.get('/api', (req, res) => {
  res.json({
    message: `${process.env.cohort} Rocks`
  })
})

server.listen(PORT, () => {
  console.log(`listenting on ${PORT}`);
})

