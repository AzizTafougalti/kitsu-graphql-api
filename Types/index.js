const { _Schema, _Object, id, int, list, bool, string } = require('../Alias')
const Anime = require('./Anime')
const Genre = require('./Genre')
const Category = require('./Category')
const Person = require('./Person')
const Character = require('./Character')
const { parseOne, parseMany } = require('../Geter')
const Scalar = require('../Scalar')

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
                args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 }, trending: { type: bool }, filter: { type: Scalar }, sort: { type: string } },
                resolve(source, { limit, page, trending, filter, sort }) {
                    let filterString = ''
                    for (key in filter) {
                        filterString += `&filter%5B${key}%5D=`
                        if (filter[key].min) {
                            filterString += `${filter[key].min}..${filter[key].max}`
                        }
                        else if (typeof filter[key] == 'object') {
                            filter[key].forEach(element => {
                                filterString += `${element}%2C`
                            })
                            filterString = filterString.slice(0, -3)
                        }
                        else {
                            filterString += filter[key]
                        }
                    }
                    console.log(filter)
                    console.log(filterString)
                    return parseMany(`${trending ? 'trending/' : ''}anime?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}${filterString}&sort=${sort}`)
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