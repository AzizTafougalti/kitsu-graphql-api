const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let Streamer = new _Object({
    name: 'Streamer',
    fields: () => ({
        id: { type: id },
        siteName: { type: string },
        streamingLinksCount: { type: int },
        logo: { type: string },
        streamingLinks: {
            type: list(require('./StreamingLink')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`streamers/${id}/streaming-links?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = Streamer