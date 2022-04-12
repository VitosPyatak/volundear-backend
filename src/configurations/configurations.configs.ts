export const variableNames = Object.freeze({
  app: { port: 'PORT' },
  mongo: {
    host: 'MONGO_HOST',
    port: 'MONGO_PORT',
    query: 'MONGO_QUERY',
    user: 'MONGO_INITDB_ROOT_USERNAME',
    password: 'MONGO_INITDB_ROOT_PASSWORD',
    database: 'MONGO_DB',
  },
});

export const collectionsNames = {
  users: 'users',
  volunteerRequests: 'volunteer-requests',
};
