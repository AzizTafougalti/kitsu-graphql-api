const { _Object, id, string, int, float } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')
const ScaleImage = require('./ScaleImage')

let Episode = new _Object({
    name: 'Episode',
    fields: () => ({
        id: { type: string },
        canonicalTitle: { type: string },
        seasonNumber: { type: int },
        number: { type: int },
        synopsis: { type: string },
        airdate: { type: string },
        length: { type: int },
        thumbnail: { type: ScaleImage },
        media: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`episodes/${id}/media`)
            }
        }
    })
})

module.exports = Episode