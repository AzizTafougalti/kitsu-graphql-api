const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let AnimeCharacter = new _Object({
    name: 'AnimeCharacter',
    fields: () => ({
        id: { type: id },
        role: { type: string },
        anime: {
            type: require('./Anime'),
            resolve({ id }) {
                return parseOne(`anime-characters/${id}/anime`)
            }
        },
        character: {
            type: require('./Character'),
            resolve({ id }) {
                return parseOne(`anime-characters/${id}/character`)
            }
        },
        castings: {
            type: list(require('./AnimeCasting')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {

                return parseMany(`anime-characters/${id}/castings?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = AnimeCharacter