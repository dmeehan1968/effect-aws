/**
 * @since 1.0.0
 */
import {
  CreateActivityCommand,
  type CreateActivityCommandInput,
  type CreateActivityCommandOutput,
  CreateStateMachineAliasCommand,
  type CreateStateMachineAliasCommandInput,
  type CreateStateMachineAliasCommandOutput,
  CreateStateMachineCommand,
  type CreateStateMachineCommandInput,
  type CreateStateMachineCommandOutput,
  DeleteActivityCommand,
  type DeleteActivityCommandInput,
  type DeleteActivityCommandOutput,
  DeleteStateMachineAliasCommand,
  type DeleteStateMachineAliasCommandInput,
  type DeleteStateMachineAliasCommandOutput,
  DeleteStateMachineCommand,
  type DeleteStateMachineCommandInput,
  type DeleteStateMachineCommandOutput,
  DeleteStateMachineVersionCommand,
  type DeleteStateMachineVersionCommandInput,
  type DeleteStateMachineVersionCommandOutput,
  DescribeActivityCommand,
  type DescribeActivityCommandInput,
  type DescribeActivityCommandOutput,
  DescribeExecutionCommand,
  type DescribeExecutionCommandInput,
  type DescribeExecutionCommandOutput,
  DescribeMapRunCommand,
  type DescribeMapRunCommandInput,
  type DescribeMapRunCommandOutput,
  DescribeStateMachineAliasCommand,
  type DescribeStateMachineAliasCommandInput,
  type DescribeStateMachineAliasCommandOutput,
  DescribeStateMachineCommand,
  type DescribeStateMachineCommandInput,
  type DescribeStateMachineCommandOutput,
  DescribeStateMachineForExecutionCommand,
  type DescribeStateMachineForExecutionCommandInput,
  type DescribeStateMachineForExecutionCommandOutput,
  GetActivityTaskCommand,
  type GetActivityTaskCommandInput,
  type GetActivityTaskCommandOutput,
  GetExecutionHistoryCommand,
  type GetExecutionHistoryCommandInput,
  type GetExecutionHistoryCommandOutput,
  ListActivitiesCommand,
  type ListActivitiesCommandInput,
  type ListActivitiesCommandOutput,
  ListExecutionsCommand,
  type ListExecutionsCommandInput,
  type ListExecutionsCommandOutput,
  ListMapRunsCommand,
  type ListMapRunsCommandInput,
  type ListMapRunsCommandOutput,
  ListStateMachineAliasesCommand,
  type ListStateMachineAliasesCommandInput,
  type ListStateMachineAliasesCommandOutput,
  ListStateMachinesCommand,
  type ListStateMachinesCommandInput,
  type ListStateMachinesCommandOutput,
  ListStateMachineVersionsCommand,
  type ListStateMachineVersionsCommandInput,
  type ListStateMachineVersionsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PublishStateMachineVersionCommand,
  type PublishStateMachineVersionCommandInput,
  type PublishStateMachineVersionCommandOutput,
  RedriveExecutionCommand,
  type RedriveExecutionCommandInput,
  type RedriveExecutionCommandOutput,
  SendTaskFailureCommand,
  type SendTaskFailureCommandInput,
  type SendTaskFailureCommandOutput,
  SendTaskHeartbeatCommand,
  type SendTaskHeartbeatCommandInput,
  type SendTaskHeartbeatCommandOutput,
  SendTaskSuccessCommand,
  type SendTaskSuccessCommandInput,
  type SendTaskSuccessCommandOutput,
  type SFNClient,
  type SFNClientConfig,
  StartExecutionCommand,
  type StartExecutionCommandInput,
  type StartExecutionCommandOutput,
  StartSyncExecutionCommand,
  type StartSyncExecutionCommandInput,
  type StartSyncExecutionCommandOutput,
  StopExecutionCommand,
  type StopExecutionCommandInput,
  type StopExecutionCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestStateCommand,
  type TestStateCommandInput,
  type TestStateCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateMapRunCommand,
  type UpdateMapRunCommandInput,
  type UpdateMapRunCommandOutput,
  UpdateStateMachineAliasCommand,
  type UpdateStateMachineAliasCommandInput,
  type UpdateStateMachineAliasCommandOutput,
  UpdateStateMachineCommand,
  type UpdateStateMachineCommandInput,
  type UpdateStateMachineCommandOutput,
  ValidateStateMachineDefinitionCommand,
  type ValidateStateMachineDefinitionCommandInput,
  type ValidateStateMachineDefinitionCommandOutput,
} from "@aws-sdk/client-sfn";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  ActivityAlreadyExistsError,
  ActivityDoesNotExistError,
  ActivityLimitExceededError,
  ActivityWorkerLimitExceededError,
  ConflictError,
  ExecutionAlreadyExistsError,
  ExecutionDoesNotExistError,
  ExecutionLimitExceededError,
  ExecutionNotRedrivableError,
  InvalidArnError,
  InvalidDefinitionError,
  InvalidEncryptionConfigurationError,
  InvalidExecutionInputError,
  InvalidLoggingConfigurationError,
  InvalidNameError,
  InvalidOutputError,
  InvalidTokenError,
  InvalidTracingConfigurationError,
  KmsAccessDeniedError,
  KmsInvalidStateError,
  KmsThrottlingError,
  MissingRequiredParameterError,
  ResourceNotFoundError,
  ServiceQuotaExceededError,
  StateMachineAlreadyExistsError,
  StateMachineDeletingError,
  StateMachineDoesNotExistError,
  StateMachineLimitExceededError,
  StateMachineTypeNotSupportedError,
  TaskDoesNotExistError,
  TaskTimedOutError,
  TooManyTagsError,
  ValidationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./SFNClientInstance.js";
import * as SFNServiceConfig from "./SFNServiceConfig.js";

const commands = {
  CreateActivityCommand,
  CreateStateMachineCommand,
  CreateStateMachineAliasCommand,
  DeleteActivityCommand,
  DeleteStateMachineCommand,
  DeleteStateMachineAliasCommand,
  DeleteStateMachineVersionCommand,
  DescribeActivityCommand,
  DescribeExecutionCommand,
  DescribeMapRunCommand,
  DescribeStateMachineCommand,
  DescribeStateMachineAliasCommand,
  DescribeStateMachineForExecutionCommand,
  GetActivityTaskCommand,
  GetExecutionHistoryCommand,
  ListActivitiesCommand,
  ListExecutionsCommand,
  ListMapRunsCommand,
  ListStateMachineAliasesCommand,
  ListStateMachineVersionsCommand,
  ListStateMachinesCommand,
  ListTagsForResourceCommand,
  PublishStateMachineVersionCommand,
  RedriveExecutionCommand,
  SendTaskFailureCommand,
  SendTaskHeartbeatCommand,
  SendTaskSuccessCommand,
  StartExecutionCommand,
  StartSyncExecutionCommand,
  StopExecutionCommand,
  TagResourceCommand,
  TestStateCommand,
  UntagResourceCommand,
  UpdateMapRunCommand,
  UpdateStateMachineCommand,
  UpdateStateMachineAliasCommand,
  ValidateStateMachineDefinitionCommand,
};

interface SFNService$ {
  readonly _: unique symbol;

  /**
   * @see {@link CreateActivityCommand}
   */
  createActivity(
    args: CreateActivityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateActivityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ActivityAlreadyExistsError
    | ActivityLimitExceededError
    | InvalidEncryptionConfigurationError
    | InvalidNameError
    | KmsAccessDeniedError
    | KmsThrottlingError
    | TooManyTagsError
  >;

  /**
   * @see {@link CreateStateMachineCommand}
   */
  createStateMachine(
    args: CreateStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStateMachineCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidEncryptionConfigurationError
    | InvalidLoggingConfigurationError
    | InvalidNameError
    | InvalidTracingConfigurationError
    | KmsAccessDeniedError
    | KmsThrottlingError
    | StateMachineAlreadyExistsError
    | StateMachineDeletingError
    | StateMachineLimitExceededError
    | StateMachineTypeNotSupportedError
    | TooManyTagsError
    | ValidationError
  >;

  /**
   * @see {@link CreateStateMachineAliasCommand}
   */
  createStateMachineAlias(
    args: CreateStateMachineAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStateMachineAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidNameError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | ValidationError
  >;

  /**
   * @see {@link DeleteActivityCommand}
   */
  deleteActivity(
    args: DeleteActivityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteActivityCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError
  >;

  /**
   * @see {@link DeleteStateMachineCommand}
   */
  deleteStateMachine(
    args: DeleteStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | ValidationError
  >;

  /**
   * @see {@link DeleteStateMachineAliasCommand}
   */
  deleteStateMachineAlias(
    args: DeleteStateMachineAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineAliasCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | InvalidArnError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DeleteStateMachineVersionCommand}
   */
  deleteStateMachineVersion(
    args: DeleteStateMachineVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStateMachineVersionCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | InvalidArnError | ValidationError
  >;

  /**
   * @see {@link DescribeActivityCommand}
   */
  describeActivity(
    args: DescribeActivityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeActivityCommandOutput,
    Cause.TimeoutException | SdkError | ActivityDoesNotExistError | InvalidArnError
  >;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link DescribeMapRunCommand}
   */
  describeMapRun(
    args: DescribeMapRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMapRunCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeStateMachineCommand}
   */
  describeStateMachine(
    args: DescribeStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | StateMachineDoesNotExistError
  >;

  /**
   * @see {@link DescribeStateMachineAliasCommand}
   */
  describeStateMachineAlias(
    args: DescribeStateMachineAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineAliasCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link DescribeStateMachineForExecutionCommand}
   */
  describeStateMachineForExecution(
    args: DescribeStateMachineForExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStateMachineForExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link GetActivityTaskCommand}
   */
  getActivityTask(
    args: GetActivityTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetActivityTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ActivityDoesNotExistError
    | ActivityWorkerLimitExceededError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link GetExecutionHistoryCommand}
   */
  getExecutionHistory(
    args: GetExecutionHistoryCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetExecutionHistoryCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | InvalidTokenError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
  >;

  /**
   * @see {@link ListActivitiesCommand}
   */
  listActivities(
    args: ListActivitiesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListActivitiesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidTokenError
  >;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListExecutionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidArnError
    | InvalidTokenError
    | ResourceNotFoundError
    | StateMachineDoesNotExistError
    | StateMachineTypeNotSupportedError
    | ValidationError
  >;

  /**
   * @see {@link ListMapRunsCommand}
   */
  listMapRuns(
    args: ListMapRunsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMapRunsCommandOutput,
    Cause.TimeoutException | SdkError | ExecutionDoesNotExistError | InvalidArnError | InvalidTokenError
  >;

  /**
   * @see {@link ListStateMachineAliasesCommand}
   */
  listStateMachineAliases(
    args: ListStateMachineAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachineAliasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidArnError
    | InvalidTokenError
    | ResourceNotFoundError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
  >;

  /**
   * @see {@link ListStateMachineVersionsCommand}
   */
  listStateMachineVersions(
    args: ListStateMachineVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachineVersionsCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | InvalidTokenError | ValidationError
  >;

  /**
   * @see {@link ListStateMachinesCommand}
   */
  listStateMachines(
    args: ListStateMachinesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStateMachinesCommandOutput,
    Cause.TimeoutException | SdkError | InvalidTokenError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | ResourceNotFoundError
  >;

  /**
   * @see {@link PublishStateMachineVersionCommand}
   */
  publishStateMachineVersion(
    args: PublishStateMachineVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PublishStateMachineVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InvalidArnError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError
  >;

  /**
   * @see {@link RedriveExecutionCommand}
   */
  redriveExecution(
    args: RedriveExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RedriveExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExecutionDoesNotExistError
    | ExecutionLimitExceededError
    | ExecutionNotRedrivableError
    | InvalidArnError
    | ValidationError
  >;

  /**
   * @see {@link SendTaskFailureCommand}
   */
  sendTaskFailure(
    args: SendTaskFailureCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskFailureCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidTokenError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | TaskDoesNotExistError
    | TaskTimedOutError
  >;

  /**
   * @see {@link SendTaskHeartbeatCommand}
   */
  sendTaskHeartbeat(
    args: SendTaskHeartbeatCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskHeartbeatCommandOutput,
    Cause.TimeoutException | SdkError | InvalidTokenError | TaskDoesNotExistError | TaskTimedOutError
  >;

  /**
   * @see {@link SendTaskSuccessCommand}
   */
  sendTaskSuccess(
    args: SendTaskSuccessCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendTaskSuccessCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidOutputError
    | InvalidTokenError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | TaskDoesNotExistError
    | TaskTimedOutError
  >;

  /**
   * @see {@link StartExecutionCommand}
   */
  startExecution(
    args: StartExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExecutionAlreadyExistsError
    | ExecutionLimitExceededError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError
  >;

  /**
   * @see {@link StartSyncExecutionCommand}
   */
  startSyncExecution(
    args: StartSyncExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartSyncExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidArnError
    | InvalidExecutionInputError
    | InvalidNameError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | StateMachineTypeNotSupportedError
  >;

  /**
   * @see {@link StopExecutionCommand}
   */
  stopExecution(
    args: StopExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ExecutionDoesNotExistError
    | InvalidArnError
    | KmsAccessDeniedError
    | KmsInvalidStateError
    | KmsThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | ResourceNotFoundError | TooManyTagsError
  >;

  /**
   * @see {@link TestStateCommand}
   */
  testState(
    args: TestStateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestStateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidExecutionInputError
    | ValidationError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateMapRunCommand}
   */
  updateMapRun(
    args: UpdateMapRunCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMapRunCommandOutput,
    Cause.TimeoutException | SdkError | InvalidArnError | ResourceNotFoundError | ValidationError
  >;

  /**
   * @see {@link UpdateStateMachineCommand}
   */
  updateStateMachine(
    args: UpdateStateMachineCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStateMachineCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InvalidArnError
    | InvalidDefinitionError
    | InvalidEncryptionConfigurationError
    | InvalidLoggingConfigurationError
    | InvalidTracingConfigurationError
    | KmsAccessDeniedError
    | KmsThrottlingError
    | MissingRequiredParameterError
    | ServiceQuotaExceededError
    | StateMachineDeletingError
    | StateMachineDoesNotExistError
    | ValidationError
  >;

  /**
   * @see {@link UpdateStateMachineAliasCommand}
   */
  updateStateMachineAlias(
    args: UpdateStateMachineAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStateMachineAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InvalidArnError
    | ResourceNotFoundError
    | StateMachineDeletingError
    | ValidationError
  >;

  /**
   * @see {@link ValidateStateMachineDefinitionCommand}
   */
  validateStateMachineDefinition(
    args: ValidateStateMachineDefinitionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ValidateStateMachineDefinitionCommandOutput,
    Cause.TimeoutException | SdkError | ValidationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSFNService = Effect.gen(function*() {
  const client = yield* Instance.SFNClientInstance;

  return yield* Service.fromClientAndCommands<SFNService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: SFNServiceConfig.toSFNClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class SFNService extends Effect.Tag("@effect-aws/client-sfn/SFNService")<
  SFNService,
  SFNService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSFNService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: SFNService.Config) =>
    Layer.effect(this, makeSFNService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(SFNServiceConfig.setSFNServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SFNClientConfig) => SFNClient,
  ) =>
    Layer.effect(this, makeSFNService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.SFNClientInstance,
          Effect.map(SFNServiceConfig.toSFNClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace SFNService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<SFNClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
