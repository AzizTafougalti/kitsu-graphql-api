const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let StreamingLink = new _Object({
    name: 'StreamingLink',
    fields: () => ({
        id: { type: id },
        url: { type: string },
        subs: { type: list(string) },
        dubs: { type: list(string) },
        streamer: {
            type: require('./Streamer'),
            resolve({ id }) {
                return parseOne(`streaming-links/${id}/streamer`)
            }
        },
        media: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`streaming-links/${id}/media`)
            }
        }
    })
})

module.exports = StreamingLink