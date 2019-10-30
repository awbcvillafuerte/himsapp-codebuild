const Router = require('express').Router()

let user = {
  batch_encoder: {
    user: { _id: '5d805496a2ff611855884f2f' },
    pm: {
      access_token: 'fc7cf6287f8ca2993d42bf0c9becf814caf79726',
      token_type: 'bearer',
      refresh_token: '666fdfcbe0468c2a06a42580566550fb4af80da9'
    }
  },
  claims_encoder: {
    user: { _id: '5d805496a2ff611855884f30' },
    pm: {
      access_token: '6bac07b2746bc774a5368af905f2d26bf53423b3',
      token_type: 'bearer',
      refresh_token: 'ada300217337aa68ae825eecd6f72cfc840f6a46'
    }
  },
  claims_analyst: {
    user: { _id: '5d805496a2ff611855884f31' },
    pm: {
      access_token: 'f68e3d910f8cda825d8651eef4aec72a46f5d0bf',
      token_type: 'bearer',
      refresh_token: 'f56921fe147999abaf6913782fb75f8a2d7d96ce'
    }
  }
}
Router.post('/auth/login', (req, res) => {
  const { username } = req.body

  let token = null

  switch (username) {
    case 'batch_encoder_1':
      token = user['batch_encoder']
      break

    case 'claims_encoder_1':
      token = user['claims_encoder']
      break

    case 'claims_analyst_1':
      token = user['claims_analyst']
      break

    default:
      break
  }

  return res.send({
    status: 200,
    message: 'Success',
    data: {
      token: JSON.stringify(token)
    }
  })
})

module.exports = {
  basePath: '/',
  Router
}
