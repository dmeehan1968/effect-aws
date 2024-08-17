/**
 * @since 1.0.0
 */
import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Runtime from "effect/Runtime";

/**
 * @since 1.0.0
 * @category tags
 */
export class CodeDeployClientInstanceConfig extends Context.Tag(
  "@effect-aws/client-codedeploy/CodeDeployClientInstanceConfig",
)<CodeDeployClientInstanceConfig, CodeDeployClientConfig>() {}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeDefaultCodeDeployClientInstanceConfig: Effect.Effect<CodeDeployClientConfig> =
  Effect.gen(function* (_) {
    const runtime = yield* _(Effect.runtime<never>());
    const runSync = Runtime.runSync(runtime);

    return {
      logger: {
        info(m) {
          Effect.logInfo(m).pipe(runSync);
        },
        warn(m) {
          Effect.logWarning(m).pipe(runSync);
        },
        error(m) {
          Effect.logError(m).pipe(runSync);
        },
        debug(m) {
          Effect.logDebug(m).pipe(runSync);
        },
        trace(m) {
          Effect.logTrace(m).pipe(runSync);
        },
      },
    };
  });

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCodeDeployClientConfigLayer = Layer.effect(
  CodeDeployClientInstanceConfig,
  makeDefaultCodeDeployClientInstanceConfig,
);
