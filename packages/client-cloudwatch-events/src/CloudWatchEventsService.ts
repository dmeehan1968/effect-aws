/**
 * @since 1.0.0
 */
import {
  ActivateEventSourceCommand,
  type ActivateEventSourceCommandInput,
  type ActivateEventSourceCommandOutput,
  CancelReplayCommand,
  type CancelReplayCommandInput,
  type CancelReplayCommandOutput,
  type CloudWatchEventsClient,
  type CloudWatchEventsClientConfig,
  CreateApiDestinationCommand,
  type CreateApiDestinationCommandInput,
  type CreateApiDestinationCommandOutput,
  CreateArchiveCommand,
  type CreateArchiveCommandInput,
  type CreateArchiveCommandOutput,
  CreateConnectionCommand,
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateEventBusCommand,
  type CreateEventBusCommandInput,
  type CreateEventBusCommandOutput,
  CreatePartnerEventSourceCommand,
  type CreatePartnerEventSourceCommandInput,
  type CreatePartnerEventSourceCommandOutput,
  DeactivateEventSourceCommand,
  type DeactivateEventSourceCommandInput,
  type DeactivateEventSourceCommandOutput,
  DeauthorizeConnectionCommand,
  type DeauthorizeConnectionCommandInput,
  type DeauthorizeConnectionCommandOutput,
  DeleteApiDestinationCommand,
  type DeleteApiDestinationCommandInput,
  type DeleteApiDestinationCommandOutput,
  DeleteArchiveCommand,
  type DeleteArchiveCommandInput,
  type DeleteArchiveCommandOutput,
  DeleteConnectionCommand,
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteEventBusCommand,
  type DeleteEventBusCommandInput,
  type DeleteEventBusCommandOutput,
  DeletePartnerEventSourceCommand,
  type DeletePartnerEventSourceCommandInput,
  type DeletePartnerEventSourceCommandOutput,
  DeleteRuleCommand,
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DescribeApiDestinationCommand,
  type DescribeApiDestinationCommandInput,
  type DescribeApiDestinationCommandOutput,
  DescribeArchiveCommand,
  type DescribeArchiveCommandInput,
  type DescribeArchiveCommandOutput,
  DescribeConnectionCommand,
  type DescribeConnectionCommandInput,
  type DescribeConnectionCommandOutput,
  DescribeEventBusCommand,
  type DescribeEventBusCommandInput,
  type DescribeEventBusCommandOutput,
  DescribeEventSourceCommand,
  type DescribeEventSourceCommandInput,
  type DescribeEventSourceCommandOutput,
  DescribePartnerEventSourceCommand,
  type DescribePartnerEventSourceCommandInput,
  type DescribePartnerEventSourceCommandOutput,
  DescribeReplayCommand,
  type DescribeReplayCommandInput,
  type DescribeReplayCommandOutput,
  DescribeRuleCommand,
  type DescribeRuleCommandInput,
  type DescribeRuleCommandOutput,
  DisableRuleCommand,
  type DisableRuleCommandInput,
  type DisableRuleCommandOutput,
  EnableRuleCommand,
  type EnableRuleCommandInput,
  type EnableRuleCommandOutput,
  ListApiDestinationsCommand,
  type ListApiDestinationsCommandInput,
  type ListApiDestinationsCommandOutput,
  ListArchivesCommand,
  type ListArchivesCommandInput,
  type ListArchivesCommandOutput,
  ListConnectionsCommand,
  type ListConnectionsCommandInput,
  type ListConnectionsCommandOutput,
  ListEventBusesCommand,
  type ListEventBusesCommandInput,
  type ListEventBusesCommandOutput,
  ListEventSourcesCommand,
  type ListEventSourcesCommandInput,
  type ListEventSourcesCommandOutput,
  ListPartnerEventSourceAccountsCommand,
  type ListPartnerEventSourceAccountsCommandInput,
  type ListPartnerEventSourceAccountsCommandOutput,
  ListPartnerEventSourcesCommand,
  type ListPartnerEventSourcesCommandInput,
  type ListPartnerEventSourcesCommandOutput,
  ListReplaysCommand,
  type ListReplaysCommandInput,
  type ListReplaysCommandOutput,
  ListRuleNamesByTargetCommand,
  type ListRuleNamesByTargetCommandInput,
  type ListRuleNamesByTargetCommandOutput,
  ListRulesCommand,
  type ListRulesCommandInput,
  type ListRulesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTargetsByRuleCommand,
  type ListTargetsByRuleCommandInput,
  type ListTargetsByRuleCommandOutput,
  PutEventsCommand,
  type PutEventsCommandInput,
  type PutEventsCommandOutput,
  PutPartnerEventsCommand,
  type PutPartnerEventsCommandInput,
  type PutPartnerEventsCommandOutput,
  PutPermissionCommand,
  type PutPermissionCommandInput,
  type PutPermissionCommandOutput,
  PutRuleCommand,
  type PutRuleCommandInput,
  type PutRuleCommandOutput,
  PutTargetsCommand,
  type PutTargetsCommandInput,
  type PutTargetsCommandOutput,
  RemovePermissionCommand,
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  RemoveTargetsCommand,
  type RemoveTargetsCommandInput,
  type RemoveTargetsCommandOutput,
  StartReplayCommand,
  type StartReplayCommandInput,
  type StartReplayCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestEventPatternCommand,
  type TestEventPatternCommandInput,
  type TestEventPatternCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateApiDestinationCommand,
  type UpdateApiDestinationCommandInput,
  type UpdateApiDestinationCommandOutput,
  UpdateArchiveCommand,
  type UpdateArchiveCommandInput,
  type UpdateArchiveCommandOutput,
  UpdateConnectionCommand,
  type UpdateConnectionCommandInput,
  type UpdateConnectionCommandOutput,
} from "@aws-sdk/client-cloudwatch-events";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import * as Instance from "./CloudWatchEventsClientInstance.js";
import * as CloudWatchEventsServiceConfig from "./CloudWatchEventsServiceConfig.js";
import type {
  ConcurrentModificationError,
  IllegalStatusError,
  InternalError,
  InvalidEventPatternError,
  InvalidStateError,
  LimitExceededError,
  ManagedRuleError,
  OperationDisabledError,
  PolicyLengthExceededError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";

const commands = {
  ActivateEventSourceCommand,
  CancelReplayCommand,
  CreateApiDestinationCommand,
  CreateArchiveCommand,
  CreateConnectionCommand,
  CreateEventBusCommand,
  CreatePartnerEventSourceCommand,
  DeactivateEventSourceCommand,
  DeauthorizeConnectionCommand,
  DeleteApiDestinationCommand,
  DeleteArchiveCommand,
  DeleteConnectionCommand,
  DeleteEventBusCommand,
  DeletePartnerEventSourceCommand,
  DeleteRuleCommand,
  DescribeApiDestinationCommand,
  DescribeArchiveCommand,
  DescribeConnectionCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribePartnerEventSourceCommand,
  DescribeReplayCommand,
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
  ListApiDestinationsCommand,
  ListArchivesCommand,
  ListConnectionsCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourcesCommand,
  ListReplaysCommand,
  ListRuleNamesByTargetCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsByRuleCommand,
  PutEventsCommand,
  PutPartnerEventsCommand,
  PutPermissionCommand,
  PutRuleCommand,
  PutTargetsCommand,
  RemovePermissionCommand,
  RemoveTargetsCommand,
  StartReplayCommand,
  TagResourceCommand,
  TestEventPatternCommand,
  UntagResourceCommand,
  UpdateApiDestinationCommand,
  UpdateArchiveCommand,
  UpdateConnectionCommand,
};

interface CloudWatchEventsService$ {
  readonly _: unique symbol;

  /**
   * @see {@link ActivateEventSourceCommand}
   */
  activateEventSource(
    args: ActivateEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ActivateEventSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidStateError
    | OperationDisabledError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CancelReplayCommand}
   */
  cancelReplay(
    args: CancelReplayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelReplayCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | IllegalStatusError
    | InternalError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateApiDestinationCommand}
   */
  createApiDestination(
    args: CreateApiDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateApiDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateArchiveCommand}
   */
  createArchive(
    args: CreateArchiveCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateArchiveCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateConnectionCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | LimitExceededError | ResourceAlreadyExistsError
  >;

  /**
   * @see {@link CreateEventBusCommand}
   */
  createEventBus(
    args: CreateEventBusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateEventBusCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidStateError
    | LimitExceededError
    | OperationDisabledError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link CreatePartnerEventSourceCommand}
   */
  createPartnerEventSource(
    args: CreatePartnerEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePartnerEventSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | OperationDisabledError
    | ResourceAlreadyExistsError
  >;

  /**
   * @see {@link DeactivateEventSourceCommand}
   */
  deactivateEventSource(
    args: DeactivateEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeactivateEventSourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidStateError
    | OperationDisabledError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DeauthorizeConnectionCommand}
   */
  deauthorizeConnection(
    args: DeauthorizeConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeauthorizeConnectionCommandOutput,
    Cause.TimeoutException | SdkError | ConcurrentModificationError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteApiDestinationCommand}
   */
  deleteApiDestination(
    args: DeleteApiDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApiDestinationCommandOutput,
    Cause.TimeoutException | SdkError | ConcurrentModificationError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteArchiveCommandOutput,
    Cause.TimeoutException | SdkError | ConcurrentModificationError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteConnectionCommandOutput,
    Cause.TimeoutException | SdkError | ConcurrentModificationError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DeleteEventBusCommand}
   */
  deleteEventBus(
    args: DeleteEventBusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteEventBusCommandOutput,
    Cause.TimeoutException | SdkError | ConcurrentModificationError | InternalError
  >;

  /**
   * @see {@link DeletePartnerEventSourceCommand}
   */
  deletePartnerEventSource(
    args: DeletePartnerEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePartnerEventSourceCommandOutput,
    Cause.TimeoutException | SdkError | ConcurrentModificationError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeApiDestinationCommand}
   */
  describeApiDestination(
    args: DescribeApiDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeApiDestinationCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeArchiveCommand}
   */
  describeArchive(
    args: DescribeArchiveCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeArchiveCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceAlreadyExistsError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeConnectionCommand}
   */
  describeConnection(
    args: DescribeConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeConnectionCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEventBusCommand}
   */
  describeEventBus(
    args: DescribeEventBusCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventBusCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeEventSourceCommand}
   */
  describeEventSource(
    args: DescribeEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventSourceCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribePartnerEventSourceCommand}
   */
  describePartnerEventSource(
    args: DescribePartnerEventSourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribePartnerEventSourceCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeReplayCommand}
   */
  describeReplay(
    args: DescribeReplayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeReplayCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DescribeRuleCommand}
   */
  describeRule(
    args: DescribeRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRuleCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link DisableRuleCommand}
   */
  disableRule(
    args: DisableRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link EnableRuleCommand}
   */
  enableRule(
    args: EnableRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link ListApiDestinationsCommand}
   */
  listApiDestinations(
    args: ListApiDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListApiDestinationsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError
  >;

  /**
   * @see {@link ListArchivesCommand}
   */
  listArchives(
    args: ListArchivesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListArchivesCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListConnectionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError
  >;

  /**
   * @see {@link ListEventBusesCommand}
   */
  listEventBuses(
    args: ListEventBusesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventBusesCommandOutput,
    Cause.TimeoutException | SdkError | InternalError
  >;

  /**
   * @see {@link ListEventSourcesCommand}
   */
  listEventSources(
    args: ListEventSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListEventSourcesCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link ListPartnerEventSourceAccountsCommand}
   */
  listPartnerEventSourceAccounts(
    args: ListPartnerEventSourceAccountsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourceAccountsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | OperationDisabledError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListPartnerEventSourcesCommand}
   */
  listPartnerEventSources(
    args: ListPartnerEventSourcesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPartnerEventSourcesCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link ListReplaysCommand}
   */
  listReplays(
    args: ListReplaysCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListReplaysCommandOutput,
    Cause.TimeoutException | SdkError | InternalError
  >;

  /**
   * @see {@link ListRuleNamesByTargetCommand}
   */
  listRuleNamesByTarget(
    args: ListRuleNamesByTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRuleNamesByTargetCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRulesCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link ListTargetsByRuleCommand}
   */
  listTargetsByRule(
    args: ListTargetsByRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTargetsByRuleCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | ResourceNotFoundError
  >;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutEventsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError
  >;

  /**
   * @see {@link PutPartnerEventsCommand}
   */
  putPartnerEvents(
    args: PutPartnerEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutPartnerEventsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | OperationDisabledError
  >;

  /**
   * @see {@link PutPermissionCommand}
   */
  putPermission(
    args: PutPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutPermissionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | OperationDisabledError
    | PolicyLengthExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutRuleCommand}
   */
  putRule(
    args: PutRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link PutTargetsCommand}
   */
  putTargets(
    args: PutTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutTargetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RemovePermissionCommand}
   */
  removePermission(
    args: RemovePermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemovePermissionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | OperationDisabledError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link RemoveTargetsCommand}
   */
  removeTargets(
    args: RemoveTargetsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTargetsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link StartReplayCommand}
   */
  startReplay(
    args: StartReplayCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartReplayCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link TestEventPatternCommand}
   */
  testEventPattern(
    args: TestEventPatternCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestEventPatternCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | InvalidEventPatternError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | ManagedRuleError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateApiDestinationCommand}
   */
  updateApiDestination(
    args: UpdateApiDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApiDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateArchiveCommand}
   */
  updateArchive(
    args: UpdateArchiveCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateArchiveCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | InvalidEventPatternError
    | LimitExceededError
    | ResourceNotFoundError
  >;

  /**
   * @see {@link UpdateConnectionCommand}
   */
  updateConnection(
    args: UpdateConnectionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateConnectionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConcurrentModificationError
    | InternalError
    | LimitExceededError
    | ResourceNotFoundError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCloudWatchEventsService = Effect.gen(function*() {
  const client = yield* Instance.CloudWatchEventsClientInstance;

  return yield* Service.fromClientAndCommands<CloudWatchEventsService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: CloudWatchEventsServiceConfig.toCloudWatchEventsClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class CloudWatchEventsService extends Effect.Tag("@effect-aws/client-cloudwatch-events/CloudWatchEventsService")<
  CloudWatchEventsService,
  CloudWatchEventsService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeCloudWatchEventsService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: CloudWatchEventsService.Config) =>
    Layer.effect(this, makeCloudWatchEventsService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(CloudWatchEventsServiceConfig.setCloudWatchEventsServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: CloudWatchEventsClientConfig) => CloudWatchEventsClient,
  ) =>
    Layer.effect(this, makeCloudWatchEventsService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.CloudWatchEventsClientInstance,
          Effect.map(CloudWatchEventsServiceConfig.toCloudWatchEventsClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace CloudWatchEventsService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<CloudWatchEventsClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
