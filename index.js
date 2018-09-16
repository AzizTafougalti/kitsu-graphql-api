const app = require('express')()
const HTTPGraphQL = require('express-graphql')
const schema = require('./Types')

app.use('/graphql', HTTPGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('Port 4000!'))