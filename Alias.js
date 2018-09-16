const _ = require("graphql")

module.exports = {
    id: _.GraphQLID,
    string: _.GraphQLString,
    int: _.GraphQLInt,
    float: _.GraphQLFloat,
    bool: _.GraphQLBoolean,
    _Input: _.GraphQLInputObjectType,
    _Object: _.GraphQLObjectType,
    _Schema: _.GraphQLSchema,
    list: type => (new _.GraphQLList(type)),
    nonNull: type => (new _.GraphQLNonNull(type))
}