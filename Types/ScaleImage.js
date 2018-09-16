const { _Object, id, string, int, float } = require('../Alias')

let ScaleImage = new _Object({
    name: 'ScaleImage',
    fields: () => ({
        tiny: { type: string },
        small: { type: string },
        large: { type: string },
        original: { type: string }
    })
})

module.exports = ScaleImage