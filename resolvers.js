const { _ } = require('lodash');

module.exports = {
    Query: {
        sessions: (parent, args, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessions(args);
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        },
        speakers: (parent, args, { dataSources }, info) => {
            return dataSources.speakerAPI.getSpeakers();
        },
        sessionById: (parent, { id }, { dataSources }, info) => {
            return dataSources.speakerAPI.getSpeakerById(id);
        }
    },
    Session: {
        async speakers(session, args, { dataSources }, info) {
            const speakers = await dataSources.speakerAPI.getSpeakers();
            const filtered = speakers.filter((speaker) => {
                return _.filter(session.speakers, { id: speaker.id }).length > 0;
            });
            return filtered;
        }
    }
};