const { _ } = require('lodash');

module.exports = {
  sessions: async (speaker, args, { dataSources }, info) => {
    const sessions = await dataSources.sessionAPI.getSessions();
    const filtered = sessions.filter((session) => {
      return _.filter(speaker.sessions, { id: session.id }).length > 0;
    });
    return filtered;
  }
};