const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        sessions(
            id: ID
            title: String
            description: String
            startsAt: String
            endsAt: String
            room: Room
            day: String
            format: String
            track: String
            level: String
        ): [Session]
        sessionById(id:ID): Session
        speakers: [Speaker]
        speakerById(id:ID): Speaker
    }
    type Speaker {
        id: ID!
        bio: String
        name: String
        sessions: [Session]
    }
    type Session {
        id: ID!
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String @deprecated(reason: "Too many sessions do not fit into a single track. We will be migrating to a tags-based system in the future."),
        level: String
        favorite: Boolean
        speakers: [Speaker]
    }
    type Mutation {
        toggleFavoriteSession(id: ID): Session
        addNewSession(session: SessionInput): Session
    }
    input SessionInput {
        title: String!
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String
        favorite: Boolean
    }
    enum Room {
        Callisto
        Earth
        Europa
        Ganymede
        Io
        Jupiter
        Mars
        Mercury
        Neptune
        Saturn
        Sol
        Titan
        Venus
    }
`;