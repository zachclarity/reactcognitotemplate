

const AWSConfig = {
    MAX_ATTACHMENT_SIZE: 5000000,
    ALLOW_DEV_LOGIN: "true",
    METRICS_USERS:"TBD" ,
    s3: {
        REGION: "TBD",
        BUCKET: "TBD"
    },
    apiGateway: {
        REGION: "TBD",
        URL: "TBD"
    },
    cognito: {
        REGION: "TBD",
        USER_POOL_ID: "TBD",
        APP_CLIENT_ID: "TBD",
        APP_CLIENT_DOMAIN: "TBD",
        IDENTITY_POOL_ID: "TBD",
    }
};

export default AWSConfig;
