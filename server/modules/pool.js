const pg = require('pg');

const config = {
    database: 'real_estate',
    host: 'localhost',
    port: 5432,
    idleTimeoutMillis: 3000,
    max: 10,
};
const pool = new Pool(config);
//connections to Postgresql
pool.on('connect', () => {
    console.log('PostgreSQL Connected');
});
pool.on('error', (error) => {
    console.log('Error Connecting to PostgreSQL', error);
});

module.exports = pg.Pool(config);;