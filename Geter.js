const request = require('request')
const api = 'https://kitsu.io/api/edge/'
const { inspect } = require('util')

let parseOne = url => {
    return new Promise((resolve, reject) => {
        request.get(api + url, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            let body = JSON.parse(res.body)
            if (body.errors) {
                reject(inspect(body.errors, false, null))
                return
            }
            if (body.data != null) {
                body.data = {
                    id: body.data.id,
                    ...body.data.attributes
                }
            }
            resolve(body.data)
        })
    })
}

let parseMany = url => {
    return new Promise((resolve, reject) => {
        request.get(api + url, (err, res) => {
            if (err) {
                reject(err)
                return
            }
            let body = JSON.parse(res.body)
            if (body.errors) {
                reject(inspect(body.errors, false, null))
                return
            }
            body.data = body.data.map(item => ({
                id: item.id,
                ...item.attributes
            }))
            resolve(body.data)
        })
    })
}

module.exports = {
    parseOne,
    parseMany
}