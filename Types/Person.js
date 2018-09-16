const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')
const ScaleImage = require('./ScaleImage')

let Person = new _Object({
    name: 'Person',
    fields: () => ({
        id: { type: id },
        name: { type: string },
        image: { type: ScaleImage },
        castings: {
            type: list(require('./Casting')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`people/${id}/castings?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        staff: {
            type: list(require('./Staff')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`people/${id}/staff?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        voices: {
            type: list(require('./Voice')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`people/${id}/voices?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = Person