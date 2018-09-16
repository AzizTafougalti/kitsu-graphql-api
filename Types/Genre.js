const { _Object, id, string, int, float } = require('../Alias')

let Genre = new _Object({
    name: 'Genre',
    fields: () => ({
        id: { type: id },
        name: { type: string },
        description: { type: string }
    })
})

module.exports = Genre