const config = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/mydatabase',
    API_VERSION: 'v1',
};

module.exports = config;