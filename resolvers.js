import db from './_db.js'

export const resolvers = {
    Query: {
        //Games 
        games() {
            return db.games
        },

        game(parent, args) {
            return db.games.find((game) => game.id === args.id)
        },

        //Reviews
        reviews() { 
            return db.reviews
        },

        review(parent, args) {
            return db.reviews.find((review) => review.id === args.id)
        },

        //Authors
        authors() {
            return db.authors
        },

        author(parent, args) {
            return db.authors.find((author) => author.id === args.id)
        }
    }
}