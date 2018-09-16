const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let MediaCharacter = new _Object({
    name: 'MediaCharacter',
    fields: () => ({
        id: { type: id },
        role: { type: string },
        media: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`media-characters/${id}/media`)
            }
        },
        character: {
            type: require('./Character'),
            resolve({ id }) {
                return parseOne(`media-characters/${id}/character`)
            }
        },
        voices: {
            type: list(require('./Voice')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`media-characters/${id}/voices?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = MediaCharacter