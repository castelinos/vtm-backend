import dotenv from 'dotenv'
import dotenvParseVariables from 'dotenv-parse-variables';

let env = dotenv.config({
    path: '.env',
});

if( env.error ) throw env.error;
env = dotenvParseVariables(env.parsed);

const config = {
    server: {
        port: process.env.SERVER_PORT || 3000,
    },
    db:{
        name: process.env.DB_NAME || 'default',
        host: process.env.DB_HOST || 'localhost',
        port: env['DB_PORT'] || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'helloworld'
    }
}

export default config;