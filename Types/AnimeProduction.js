const { _Object, id, string, int, float, bool } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let AnimeProduction = new _Object({
    name: 'AnimeProduction',
    fields: () => ({
        id: { type: id },
        role: { type: string },
        anime: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`anime-productions/${id}/anime`)
            }
        },
        producer: {
            type: require('./Producer'),
            resolve({ id }) {
                return parseOne(`anime-productions/${id}/producer`)
            }
        }
    })
})

module.exports = AnimeProduction