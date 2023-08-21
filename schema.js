export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        #Games Queries
        games: [Game]
        game(id : ID!): Game

        #Reviews Queries
        reviews: [Review]
        review(id: ID!): Review

        #Authors Queries
        authors: [Author]
        author(id:ID!): Author
    }
`