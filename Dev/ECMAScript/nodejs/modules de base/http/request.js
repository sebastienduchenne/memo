//----------------request GET ------------------------------

const https = require('https')

const options = {
  hostname: 'name.com',
  port: 443,
  path: '/path',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()


//----------------request POST ------------------------------

const https = require('https')

const data = JSON.stringify({
  key: 'value'
})

const options = {
  hostname: 'name.com',
  port: 443,
  path: '/path',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()

//--------------------------------------------

//PUT et DELETE sont comme POST