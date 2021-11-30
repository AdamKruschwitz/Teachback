const resolvers = {
    Query: {me: () => {
        return 'helloworld';
    }},
    
}

module.exports = resolvers