const { _Object, id, string, int, float } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let Staff = new _Object({
    name: 'Staff',
    fields: () => ({
        id: { type: id },
        role: { type: string },
        media: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`media-staff/${id}/media`)
            }
        },
        person: {
            type: require('./Person'),
            resolve({ id }) {
                return parseOne(`media-staff/${id}/person`)
            }
        }
    })
})

module.exports = Staff