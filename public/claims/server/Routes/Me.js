const Router = require('express').Router()

let users = {
  batch_encoder: {
    _id: '5d805496a2ff611855884f2f',
    username: 'batch_encoder_1',
    role: 'BATCH_ENCODER'
  },
  claims_encoder: {
    _id: '5d805496a2ff611855884f30',
    username: 'claims_encoder_1',
    role: 'CLAIMS_DETAILS_ENCODER'
  },
  claims_analyst: {
    _id: '5d805496a2ff611855884f31',
    username: 'claims_analyst_1',
    role: 'CLAIMS_ANALYST'
  }
}

Router.get('/me', (req, res) => {
  const { authorization } = req.headers

  if (!authorization) return res.send('unauthorize')

  const [bearer, token] = authorization.split('Bearer ')

  if (bearer !== '') return res.send('unauthorize')

  try {
    req.token = JSON.parse(JSON.parse(token))
  } catch (error) {
    req.token = JSON.parse(token)
  }

  const _id = req.token.user._id
  let user = null
  switch (_id) {
    case '5d805496a2ff611855884f2f':
      user = users['batch_encoder']
      break

    case '5d805496a2ff611855884f30':
      user = users['claims_encoder']
      break

    case '5d805496a2ff611855884f31':
      user = users['claims_analyst']
      break

    default:
      break
  }

  res.send({
    status: 200,
    message: 'Success',
    data: user
  })
})

module.exports = {
  basePath: '/',
  Router
}
