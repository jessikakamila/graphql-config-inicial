const { ApolloServer} = require ('apollo-server')
const userSchema = require('./user/schema/users.graphql')

const users = [
    {
    nome: "Robin",
    ativo: true
},
{
    nome: "Naome",
    ativo: false
}
]

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })

