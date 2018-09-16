const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')
const ScaleImage = require('./ScaleImage')

let Character = new _Object({
    name: 'Character',
    fields: () => ({
        id: { type: id },
        name: { type: string },
        description: { type: string },
        image: { type: ScaleImage },
        castings: {
            type: list(require('./Casting')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`characters/${id}/castings?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        mediaCharacters: {
            type: list(require('./MediaCharacter')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`characters/${id}/media-characters?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = Character