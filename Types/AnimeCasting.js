const { _Object, id, string, int, float, bool } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let AnimeCasting = new _Object({
    name: 'AnimeCasting',
    fields: () => ({
        id: { type: id },
        locale: { type: string },
        notes: { type: string },
        character: {
            type: require('./AnimeCharacter'),
            resolve({ id }) {
                return parseOne(`anime-castings/${id}/anime-character`)
            }
        },
        person: {
            type: require('./Person'),
            resolve({ id }) {
                return parseOne(`anime-castings/${id}/person`)
            }
        }
    })
})

module.exports = AnimeCasting