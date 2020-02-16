module.exports = {
    development: {
        dialect: "mysql",
        username: 'root',
        password: '',
        // port: '8889',
        database: 'parqueaderos',
        host: '127.0.0.1',
    },
    test: {
        dialect: "mysql",
        username: 'root',
        password: '',
        // port: '8889',
        database: 'parqueaderos',
        host: '127.0.0.1',
    },
    production: {
        username: 'root',
        password: '',
        database: 'parqueaderos',
        host: '127.0.0.1',
        port: '8889',
        dialect: 'mysql',
        use_env_variable: 'DATABASE_URL'
    }
};