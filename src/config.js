export default {
  STRIPE_KEY: "pk_test_MUWemqxb5p16MJQFConQ1IiT004XdKVFly",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "bucket-up-app"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://r0oiw85rf5.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_2rieaX44i",
    APP_CLIENT_ID: "5nbru6f8kjb9fqjqh1pf5jhfhb",
    IDENTITY_POOL_ID: "us-east-1:d42279b1-404c-4942-83cf-d442c26cecf7"
  }
};