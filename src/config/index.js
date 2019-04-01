const baseConfig = {
    port: 3000,
    expireTime: '30d',
    disableAuth: true,
    secrets: {
        JWT_SECRET: 'SECRET'
    },
    db: {
        database: 'kitchen',
        username: 'postgres',
        password: 'password',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
};

export default baseConfig;