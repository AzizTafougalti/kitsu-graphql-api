const { _Object, id, string, int, float } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let Voice = new _Object({
    name: 'Voice',
    fields: () => ({
        id: { type: id },
        locale: { type: string },
        media: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`character-voices/${id}/media`)
            }
        },
        person: {
            type: require('./Person'),
            resolve({ id }) {
                return parseOne(`character-voices/${id}/person`)
            }
        }
    })
})

module.exports = Voice