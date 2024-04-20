// resolver object follows structure of the schema
// dataSources *contextValue* property is where an instance of our SpotifyApi class will live

export const resolvers = {
    Query: {
        featuredPlaylists: (_, __, { dataSources }) => {
            return dataSources.SpotifyAPI.getFeaturedPlaylists();
        },
    },
};
