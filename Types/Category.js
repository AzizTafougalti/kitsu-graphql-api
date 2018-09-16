const { _Object, id, string, int, float, list, bool } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let Category = new _Object({
    name: 'Category',
    fields: () => ({
        id: { type: id },
        title: { type: string },
        description: { type: string },
        totalMediaCount: { type: int },
        nsfw: { type: bool },
        childCount: { type: int },
        parent: {
            type: Category,
            resolve({ id }) {
                return parseOne(`categories/${id}/parent`)
            }
        },
        animes: {
            type: list(require('./Anime')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`categories/${id}/anime?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = Category