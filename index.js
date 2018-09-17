const app = require('express')()
const HTTPGraphQL = require('express-graphql')
const schema = require('./Types')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use('/graphql', bodyParser.json(), HTTPGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => console.log('Port 4000!'))