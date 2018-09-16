const { _Object, id, string, int, float } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let AnimeStaff = new _Object({
    name: 'AnimeStaff',
    fields: () => ({
        id: { type: id },
        role: { type: string },
        anime: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`anime-staff/${id}/anime`)
            }
        },
        person: {
            type: require('./Person'),
            resolve({ id }) {
                return parseOne(`anime-staff/${id}/person`)
            }
        }
    })
})

module.exports = AnimeStaff