const fetch = require('node-fetch')
const config = require('../config.json')

exports.create = (body) => {
  return fetch(`${config.hostname}/api/articles`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => response.json())
}

exports.show = (id) => {
  return fetch(`${config.hostname}/api/articles/${id}`).then((response) => response.json())
}

exports.update = (id, body) => {
  return fetch(`${config.hostname}/api/articles/${id}`,
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then((response) => response.json())
}
