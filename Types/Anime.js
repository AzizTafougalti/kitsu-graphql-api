const { _Object, id, string, int, float, list } = require('../Alias')
const { parseOne, parseMany } = require('../Geter')
const ScaleImage = require('./ScaleImage')

let Anime = new _Object({
    name: 'Anime',
    fields: () => ({
        id: { type: id },
        synopsis: { type: string },
        canonicalTitle: { type: string },
        averageRating: { type: float },
        startDate: { type: string },
        endDate: { type: string },
        nextRelease: { type: string },
        popularityRank: { type: int },
        ratingRank: { type: int },
        ageRating: { type: string },
        ageRatingGuide: { type: string },
        subtype: { type: string },
        status: { type: string },
        posterImage: { type: ScaleImage },
        coverImage: { type: ScaleImage },
        episodeCount: { type: int },
        episodeLength: { type: int },
        totalLength: { type: int },
        youtubeVideoId: { type: string },
        showType: { type: string },
        genres: {
            type: list(require('./Genre')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/genres?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        categories: {
            type: list(require('./Category')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/categories?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        episodes: {
            type: list(require('./Episode')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/episodes?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}&sort=number`)
            }
        },
        castings: {
            type: list(require('./Casting')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/castings?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        characters: {
            type: list(require('./MediaCharacter')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/characters?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        productions: {
            type: list(require('./MediaProduction')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/productions?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        animeProductions: {
            type: list(require('./AnimeProduction')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/anime-productions?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        staff: {
            type: list(require('./Staff')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/staff?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        animeStaff: {
            type: list(require('./AnimeStaff')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/anime-staff?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        animeCharacters: {
            type: list(require('./AnimeCharacter')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/anime-characters?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        },
        streamingLinks: {
            type: list(require('./StreamingLink')),
            args: { limit: { type: int, defaultValue: 10 }, page: { type: int, defaultValue: 1 } },
            resolve({ id }, { limit, page }) {
                return parseMany(`anime/${id}/streaming-links?page%5Blimit%5D=${limit}&page%5Boffset%5D=${limit * (page - 1)}`)
            }
        }
    })
})

module.exports = Anime