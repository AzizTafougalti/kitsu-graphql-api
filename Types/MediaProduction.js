const { _Object, id, string, int, float, bool } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let MediaProduction = new _Object({
    name: 'MediaProduction',
    fields: () => ({
        id: { type: id },
        role: { type: string },
        media: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`media-productions/${id}/media`)
            }
        },
        company: {
            type: require('./Producer'),
            resolve({ id }) {
                return parseOne(`media-productions/${id}/company`)
            }
        }
    })
})

module.exports = MediaProduction