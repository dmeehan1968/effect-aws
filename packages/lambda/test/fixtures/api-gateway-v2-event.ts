import type { APIGatewayProxyEventV2 } from "aws-lambda";

export const apiGatewayV2Event: APIGatewayProxyEventV2 = {
  version: "2.0",
  routeKey: "$default",
  rawPath: "/my/path",
  rawQueryString: "parameter1=value1&parameter1=value2&parameter2=value",
  cookies: ["cookie1", "cookie2"],
  headers: {
    "content-type": "application/json",
    header1: "value1",
    header2: "value1,value2",
  },
  queryStringParameters: {
    parameter1: "value1,value2",
    parameter2: "value",
  },
  requestContext: {
    accountId: "123456789012",
    apiId: "api-id",
    domainName: "id.execute-api.us-east-1.amazonaws.com",
    domainPrefix: "id",
    http: {
      method: "POST",
      path: "/my/path",
      protocol: "HTTP/1.1",
      sourceIp: "192.0.2.1",
      userAgent: "agent",
    },
    requestId: "id",
    routeKey: "$default",
    stage: "$default",
    time: "12/Mar/2020:19:03:58 +0000",
    timeEpoch: 1583348638390,
  },
  body: "Hello from Lambda",
  pathParameters: {
    parameter1: "value1",
  },
  isBase64Encoded: false,
  stageVariables: {
    stageVariable1: "value1",
    stageVariable2: "value2",
  },
};
