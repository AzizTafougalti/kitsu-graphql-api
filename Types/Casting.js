const { _Object, id, string, int, float, bool } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let Casting = new _Object({
    name: 'Casting',
    fields: () => ({
        id: { type: id },
        role: { type: string },
        voiceActor: { type: bool },
        featured: { type: bool },
        language: { type: string },
        media: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`castings/${id}/media`)
            }
        },
        character: {
            type: require('./Character'),
            resolve({ id }) {
                return parseOne(`castings/${id}/character`)
            }
        },
        person: {
            type: require('./Person'),
            resolve({ id }) {
                return parseOne(`castings/${id}/person`)
            }
        }
    })
})

module.exports = Casting