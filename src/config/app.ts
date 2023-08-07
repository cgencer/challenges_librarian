export default process.env.APP_ENVIRONMENT === 'prod' ? {
    app: {
        environment: "prod",
        port: process.env.PORT,
        db_uri: process.env.NGROK_DB,
    } } : {
    app: {
        environment: "dev",
        port: process.env.PORT,
        db_uri: process.env.NGROK_DB
    }
};
