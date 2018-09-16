const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')

let Producer = new _Object({
    name: 'Producer',
    fields: () => ({
        id: { type: id },
        name: { type: string },
        animeProductions: {
            type: list(require('./AnimeProduction')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`producers/${id}/anime-productions?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        productions: {
            type: list(require('./MediaProduction')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {

                return parseMany(`producers/${id}/productions?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = Producer