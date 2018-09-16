const { _Schema, _Object, id, int, list } = require('../Alias')
const Anime = require('./Anime')
const Genre = require('./Genre')
const Category = require('./Category')
const Person = require('./Person')
const Character = require('./Character')
const { parseOne, parseMany } = require('../Geter')

module.exports = new _Schema({
    query: new _Object({
        name: 'Query',
        fields: () => ({
            anime: {
                type: Anime,
                args: { id: { type: id } },
                resolve(source, { id }) {
                    return parseOne('anime/' + id)
                }
            },
            animes: {
                type: list(Anime),
                args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
                resolve(source, { limit, page }) {
                    return parseMany(`anime?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
                }
            },
            genre: {
                type: Genre,
                args: { id: { type: id } },
                resolve(source, { id }) {
                    return parseOne('genres/' + id)
                }
            },
            genres: {
                type: list(Genre),
                args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
                resolve(source, { limit, page }) {
                    return parseMany(`genres?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
                }
            },
            category: {
                type: Category,
                args: { id: { type: id } },
                resolve(source, { id }) {
                    return parseOne('categories/' + id)
                }
            },
            categories: {
                type: list(Category),
                args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
                resolve(source, { limit, page }) {
                    return parseMany(`categories?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
                }
            },
            person: {
                type: Person,
                args: { id: { type: id } },
                resolve(source, { id }) {
                    return parseOne('people/' + id)
                }
            },
            people: {
                type: list(Person),
                args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
                resolve(source, { limit, page }) {
                    return parseMany(`people?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
                }
            },
            character: {
                type: Character,
                args: { id: { type: id } },
                resolve(source, { id }) {
                    return parseOne('characters/' + id)
                }
            },
            characters: {
                type: list(Character),
                args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
                resolve(source, { limit, page }) {
                    return parseMany(`characters?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
                }
            },
        })
    })
})