# @effect-aws/client-s3

## 1.10.0

### Minor Changes

- [#150](https://github.com/floydspace/effect-aws/pull/150) [`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8) Thanks [@floydspace](https://github.com/floydspace)! - add expected Cause.TimeoutException in error channel to all the methods

### Patch Changes

- Updated dependencies [[`6215146`](https://github.com/floydspace/effect-aws/commit/62151460cb125298b24375a4c69dcf8d562148f8)]:
  - @effect-aws/commons@0.3.0

## 1.9.5

### Patch Changes

- Updated dependencies [[`2bc82e9`](https://github.com/floydspace/effect-aws/commit/2bc82e9ae2e5b0ca423d0adce578b16ca4ea024a)]:
  - @effect-aws/commons@0.2.1

## 1.9.4

### Patch Changes

- [#129](https://github.com/floydspace/effect-aws/pull/129) [`1b198d8`](https://github.com/floydspace/effect-aws/commit/1b198d8776b15ced769e2bddaaec86150e63a352) Thanks [@floydspace](https://github.com/floydspace)! - handle only known errors, fix explicit service accessors types

## 1.9.3

### Patch Changes

- [#117](https://github.com/floydspace/effect-aws/pull/117) [`6989a08`](https://github.com/floydspace/effect-aws/commit/6989a08df041108ad3a2b08272647a20f1a5d662) Thanks [@floydspace](https://github.com/floydspace)! - fix service logger, so it respect loglevel configuration within current scope

  For example this snipped produced following output Before/After

  ```typescript
  import { S3 } from "@effect-aws/client-s3";
  import { Effect, Logger, LogLevel } from "effect";

  S3.listBuckets({}).pipe(
    Logger.withMinimumLogLevel(LogLevel.Warning),
    Effect.tap(() => Effect.logInfo("Done")),
    Effect.provide(Logger.structured),
    Effect.provide(S3.layer({ logger: true })),
    Effect.runPromise,
  );
  ```

  Before

  ```log
  timestamp=2025-03-12T22:49:37.007Z level=INFO fiber=#5 message="{
    \"clientName\": \"S3Client\",
    \"commandName\": \"ListBucketsCommand\",
    \"input\": {},
    \"output\": {
      \"Buckets\": [],
      \"Owner\": {
        \"ID\": \"<REDACTED>\"
      }
    },
    \"metadata\": {
      \"httpStatusCode\": 200,
      \"requestId\": \"<REDACTED>\",
      \"extendedRequestId\": \"<REDACTED>\",
      \"attempts\": 1,
      \"totalRetryDelay\": 0
    }
  }"
  {
    message: 'Done',
    logLevel: 'INFO',
    timestamp: '2025-03-12T22:49:37.009Z',
    cause: undefined,
    annotations: {},
    spans: {},
    fiberId: '#0'
  }
  ```

  After

  ```log
  {
    message: 'Done',
    logLevel: 'INFO',
    timestamp: '2025-03-12T22:51:13.799Z',
    cause: undefined,
    annotations: {},
    spans: {},
    fiberId: '#0'
  }
  ```

  closes #92

- Updated dependencies [[`6989a08`](https://github.com/floydspace/effect-aws/commit/6989a08df041108ad3a2b08272647a20f1a5d662)]:
  - @effect-aws/commons@0.2.0

## 1.9.0

### Minor Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - ## Refactored service configuration and layer management

  Since this version the effectful logger is not added into native AWS client constructor. Providing logger by default causes risk of logging sensitive information. The logger should be added explicitly by the choice of a user. It can be done by using extended `logger` option:

  ```ts
  import { DynamoDB } from "@effect-aws/client-dynamodb";

  // using default logger
  DynamoDB.layer({ logger: true });

  // or using custom logger (the same as default)
  DynamoDB.layer({
    logger: {
      trace: Effect.logTrace,
      debug: Effect.logDebug,
      info: Effect.logInfo,
      warn: Effect.logWarning,
      error: Effect.logError,
    },
  });

  // and you could remap logger methods as you want
  DynamoDB.layer({
    logger: {
      debug: Effect.logDebug,
      info: Effect.logDebug,
      warn: Effect.logWarning,
      error: Effect.logError,
    },
  });
  ```

  Additionally to that, the whole service configuration was refactored in better way, now it is not a strict layer dependency, but the global value which defaults to empty object. The global value can be configured by using the effect higher order function or the layer setter.

  ```ts
  import { DynamoDBServiceConfig } from "@effect-aws/client-dynamodb";

  // using effect higher order function
  DynamoDBServiceConfig.withDynamoDBServiceConfig({ logger: true });

  // or using layer setter
  Layer.provide(
    DynamoDBServiceConfig.setDynamoDBServiceConfig({ logger: true }),
  );
  ```

  ### Breaking changes

  This release is not a breaking change if you just use service methods and service layer, which in most cases should be the case.

  If you had to use custom configuration, you should update your code to use new configuration methods.

### Patch Changes

- [#106](https://github.com/floydspace/effect-aws/pull/106) [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f) Thanks [@floydspace](https://github.com/floydspace)! - drop support for effect version lower than 3.0.4

- Updated dependencies [[`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f), [`e07e3c0`](https://github.com/floydspace/effect-aws/commit/e07e3c0d8e9e03650e1fd443b1c5a6bdc14baa3f)]:
  - @effect-aws/commons@0.1.0

## 1.6.0

### Minor Changes

- [`ca9ea34`](https://github.com/floydspace/effect-aws/commit/ca9ea3451567a2ab25a5919ea79b9169605890d6) Thanks [@floydspace](https://github.com/floydspace)! - updates is sdk client functions

- [#93](https://github.com/floydspace/effect-aws/pull/93) [`a96fbd8`](https://github.com/floydspace/effect-aws/commit/a96fbd8840a7a6cfb795a2a6ab96aa32d32a3525) Thanks [@godu](https://github.com/godu)! - Destroy client after layer lifecycle to release idle connections.

## 1.5.1

### Patch Changes

- [`a17e239`](https://github.com/floydspace/effect-aws/commit/a17e239530a7050459b78b4781a4c8ce8dcbc32b) Thanks [@floydspace](https://github.com/floydspace)! - Fix service level function types exporting when using overloading

## 1.5.0

### Minor Changes

- [#80](https://github.com/floydspace/effect-aws/pull/80) [`4b16fbe`](https://github.com/floydspace/effect-aws/commit/4b16fbebce8131df7798ee92f43cf6b7df3e907c) Thanks [@floydspace](https://github.com/floydspace)! - simplify layers configuration (closes #78)

## 1.4.1

### Patch Changes

- [#75](https://github.com/floydspace/effect-aws/pull/75) [`9dc170d`](https://github.com/floydspace/effect-aws/commit/9dc170d975c04888bbc7ca7b241b4b5265668fb5) Thanks [@godu](https://github.com/godu)! - export the HttpHandlerOptions type

## 1.4.0

### Minor Changes

- [`dfddb5a`](https://github.com/floydspace/effect-aws/commit/dfddb5a5f1f3c2bacb27ddbfbe9b65e1a5cea6e7) Thanks [@floydspace](https://github.com/floydspace)! - replace generic tag with effect tag for ec2 and s3 services

- [`e540420`](https://github.com/floydspace/effect-aws/commit/e5404208c2438e1e1546637a8edbbdc1c9468850) Thanks [@floydspace](https://github.com/floydspace)! - integrate aws-sdk abort signal with effect interruption

## 1.3.0

### Minor Changes

- [`0cfcda0`](https://github.com/floydspace/effect-aws/commit/0cfcda0d5617916d966807f5d5120df9ba461c12) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v3

## 1.2.0

### Minor Changes

- [#42](https://github.com/floydspace/effect-aws/pull/42) [`2fd893a`](https://github.com/floydspace/effect-aws/commit/2fd893abe4bcc2b4d7c3bc346cc618ca704171f3) Thanks [@godu](https://github.com/godu)! - extended errors in s3 service

## 1.1.1

### Patch Changes

- [`b2f00db`](https://github.com/floydspace/effect-aws/commit/b2f00db5fdffaa74bcb124324db7313bd4f218df) Thanks [@floydspace](https://github.com/floydspace)! - update effect peer version

## 1.1.0

### Minor Changes

- [`82eaea7`](https://github.com/floydspace/effect-aws/commit/82eaea778048c9ebba98682196448b0aa1586d2e) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect to v2.3 and fix breaking changes

## 1.0.2

### Patch Changes

- [`88676ae`](https://github.com/floydspace/effect-aws/commit/88676ae3a5f7fa514cab58ba83a50a0774be1aa1) Thanks [@floydspace](https://github.com/floydspace)! - use effect@~2.2 as maximum allowed peer version

## 1.0.1

### Patch Changes

- [#29](https://github.com/floydspace/effect-aws/pull/29) [`4b6c521`](https://github.com/floydspace/effect-aws/commit/4b6c521206c8ff76ff878938f6b90ee474cc8da2) Thanks [@godu](https://github.com/godu)! - improve tree shaking by using sideEffects flag

## 1.0.0

### Major Changes

- [`3e5d0b3`](https://github.com/floydspace/effect-aws/commit/3e5d0b3b3882e0aa6d07bc06432990551316ac30) Thanks [@floydspace](https://github.com/floydspace)! - Upgrade to effect v2 and release stable version

## 0.7.0

### Minor Changes

- [`744df3c`](https://github.com/floydspace/effect-aws/commit/744df3ca6406b3a35e3066d5fe11ca7082c4c454) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect dependency

## 0.6.0

### Minor Changes

- [`0a969d8`](https://github.com/floydspace/effect-aws/commit/0a969d8a74c3bf1b87ff6a1c8bf689af849797e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect peer version

## 0.5.0

### Minor Changes

- [`280d8bd`](https://github.com/floydspace/effect-aws/commit/280d8bd6686d6e7a2b73322a047e8eb22263b1e1) Thanks [@floydspace](https://github.com/floydspace)! - add an ability return presined url for getObject and putObject

- [`c3b6768`](https://github.com/floydspace/effect-aws/commit/c3b6768ec54b62e05f8fbb771cb890ba6aee27c2) Thanks [@floydspace](https://github.com/floydspace)! - return tagged errors in the failure channel

### Patch Changes

- [`280d8bd`](https://github.com/floydspace/effect-aws/commit/280d8bd6686d6e7a2b73322a047e8eb22263b1e1) Thanks [@floydspace](https://github.com/floydspace)! - upgrade dependencies

## 0.4.1

### Patch Changes

- [`6b99904`](https://github.com/floydspace/effect-aws/commit/6b9990497bdb20f240d8261b6382db421e9a3ec2) Thanks [@floydspace](https://github.com/floydspace)! - as @mikearnaldi said: "we should really never do tacit passing"

## 0.4.0

### Minor Changes

- [#14](https://github.com/floydspace/effect-aws/pull/14) [`cddfb74`](https://github.com/floydspace/effect-aws/commit/cddfb74a00b10a13ccfe3749e90961119c4f0906) Thanks [@floydspace](https://github.com/floydspace)! - upgrade effect version to the next one

## 0.3.0

### Minor Changes

- [`d7d6c50`](https://github.com/floydspace/effect-aws/commit/d7d6c500de9aa538f76a5b8cfc9ffac741210d33) Thanks [@floydspace](https://github.com/floydspace)! - introduce tagged clients options for better narrowing

## 0.2.1

### Patch Changes

- [`f7e9e3e`](https://github.com/floydspace/effect-aws/commit/f7e9e3ed4c2cb5dc0e0b9e0895278307a182a0d2) Thanks [@floydspace](https://github.com/floydspace)! - correct way of propagating default logger instance inside S3Client, thanks to @mikearnaldi

## 0.2.0

### Minor Changes

- [`73d43f9`](https://github.com/floydspace/effect-aws/commit/73d43f94752109bdad9682b8260e8f84ac8c6d5b) Thanks [@floydspace](https://github.com/floydspace)! - add an ability to provide S3Client configuration through layer, and provide default logger as part of default configuration

## 0.1.0

### Minor Changes

- [`fa8be3e`](https://github.com/floydspace/effect-aws/commit/fa8be3ed0dcd2109b831f233f3edf6bece65b914) Thanks [@floydspace](https://github.com/floydspace)! - Implemented basic Effectful S3 client
