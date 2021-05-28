const config = {
    STRIPE_KEY: "pk_test_51IvQZSFDVSKiwnenWfkVI0XBd2pzQa641wBZfj2r0qaZJjZh5rBRutZ4pcsaNyrKt2zk7NNhbkOFAT7MWXbdAOxE00EFWUMED8",

    MAX_ATTACHMENT_SIZE: 5000000,

    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-emily",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://9qe1re22yb.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_0Xim1EefX",
      APP_CLIENT_ID: "11frmc450tlrkgj0fahsrhnsej",
      IDENTITY_POOL_ID: "us-east-1:72b558e6-09e8-499c-81c8-ca8638337dec",
    }
  };

  export default config;
