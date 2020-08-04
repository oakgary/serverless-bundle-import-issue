// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const { Lambda } = require('aws-sdk');

const lambda = new Lambda({
  region: 'eu-central-1',
  apiVersion: '2015-03-31',
  endpoint: 'http://localhost:8111',
});

const params = {
  FunctionName: 'my-service-staging-myLambda',
  InvocationType: 'RequestResponse',
  Payload: JSON.stringify({ data: 'foo' }),
};

(async () => {
  try {
    const response = await lambda.invoke(params).promise();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
})();
