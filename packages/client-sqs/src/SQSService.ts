/**
 * @since 1.0.0
 */
import {
  AddPermissionCommand,
  type AddPermissionCommandInput,
  type AddPermissionCommandOutput,
  CancelMessageMoveTaskCommand,
  type CancelMessageMoveTaskCommandInput,
  type CancelMessageMoveTaskCommandOutput,
  ChangeMessageVisibilityBatchCommand,
  type ChangeMessageVisibilityBatchCommandInput,
  type ChangeMessageVisibilityBatchCommandOutput,
  ChangeMessageVisibilityCommand,
  type ChangeMessageVisibilityCommandInput,
  type ChangeMessageVisibilityCommandOutput,
  CreateQueueCommand,
  type CreateQueueCommandInput,
  type CreateQueueCommandOutput,
  DeleteMessageBatchCommand,
  type DeleteMessageBatchCommandInput,
  type DeleteMessageBatchCommandOutput,
  DeleteMessageCommand,
  type DeleteMessageCommandInput,
  type DeleteMessageCommandOutput,
  DeleteQueueCommand,
  type DeleteQueueCommandInput,
  type DeleteQueueCommandOutput,
  GetQueueAttributesCommand,
  type GetQueueAttributesCommandInput,
  type GetQueueAttributesCommandOutput,
  GetQueueUrlCommand,
  type GetQueueUrlCommandInput,
  type GetQueueUrlCommandOutput,
  ListDeadLetterSourceQueuesCommand,
  type ListDeadLetterSourceQueuesCommandInput,
  type ListDeadLetterSourceQueuesCommandOutput,
  ListMessageMoveTasksCommand,
  type ListMessageMoveTasksCommandInput,
  type ListMessageMoveTasksCommandOutput,
  ListQueuesCommand,
  type ListQueuesCommandInput,
  type ListQueuesCommandOutput,
  ListQueueTagsCommand,
  type ListQueueTagsCommandInput,
  type ListQueueTagsCommandOutput,
  PurgeQueueCommand,
  type PurgeQueueCommandInput,
  type PurgeQueueCommandOutput,
  ReceiveMessageCommand,
  type ReceiveMessageCommandInput,
  type ReceiveMessageCommandOutput,
  RemovePermissionCommand,
  type RemovePermissionCommandInput,
  type RemovePermissionCommandOutput,
  SendMessageBatchCommand,
  type SendMessageBatchCommandInput,
  type SendMessageBatchCommandOutput,
  SendMessageCommand,
  type SendMessageCommandInput,
  type SendMessageCommandOutput,
  SetQueueAttributesCommand,
  type SetQueueAttributesCommandInput,
  type SetQueueAttributesCommandOutput,
  type SQSClient,
  type SQSClientConfig,
  StartMessageMoveTaskCommand,
  type StartMessageMoveTaskCommandInput,
  type StartMessageMoveTaskCommandOutput,
  TagQueueCommand,
  type TagQueueCommandInput,
  type TagQueueCommandOutput,
  UntagQueueCommand,
  type UntagQueueCommandInput,
  type UntagQueueCommandOutput,
} from "@aws-sdk/client-sqs";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  BatchEntryIdsNotDistinctError,
  BatchRequestTooLongError,
  EmptyBatchRequestError,
  InvalidAddressError,
  InvalidAttributeNameError,
  InvalidAttributeValueError,
  InvalidBatchEntryIdError,
  InvalidIdFormatError,
  InvalidMessageContentsError,
  InvalidSecurityError,
  KmsAccessDeniedError,
  KmsDisabledError,
  KmsInvalidKeyUsageError,
  KmsInvalidStateError,
  KmsNotFoundError,
  KmsOptInRequiredError,
  KmsThrottledError,
  MessageNotInflightError,
  OverLimitError,
  PurgeQueueInProgressError,
  QueueDeletedRecentlyError,
  QueueDoesNotExistError,
  QueueNameExistsError,
  ReceiptHandleIsInvalidError,
  RequestThrottledError,
  ResourceNotFoundError,
  TooManyEntriesInBatchRequestError,
  UnsupportedOperationError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./SQSClientInstance.js";
import * as SQSServiceConfig from "./SQSServiceConfig.js";

const commands = {
  AddPermissionCommand,
  CancelMessageMoveTaskCommand,
  ChangeMessageVisibilityCommand,
  ChangeMessageVisibilityBatchCommand,
  CreateQueueCommand,
  DeleteMessageCommand,
  DeleteMessageBatchCommand,
  DeleteQueueCommand,
  GetQueueAttributesCommand,
  GetQueueUrlCommand,
  ListDeadLetterSourceQueuesCommand,
  ListMessageMoveTasksCommand,
  ListQueueTagsCommand,
  ListQueuesCommand,
  PurgeQueueCommand,
  ReceiveMessageCommand,
  RemovePermissionCommand,
  SendMessageCommand,
  SendMessageBatchCommand,
  SetQueueAttributesCommand,
  StartMessageMoveTaskCommand,
  TagQueueCommand,
  UntagQueueCommand,
};

interface SQSService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AddPermissionCommand}
   */
  addPermission(
    args: AddPermissionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddPermissionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | OverLimitError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CancelMessageMoveTaskCommand}
   */
  cancelMessageMoveTask(
    args: CancelMessageMoveTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelMessageMoveTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | ResourceNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ChangeMessageVisibilityCommand}
   */
  changeMessageVisibility(
    args: ChangeMessageVisibilityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ChangeMessageVisibilityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | MessageNotInflightError
    | QueueDoesNotExistError
    | ReceiptHandleIsInvalidError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ChangeMessageVisibilityBatchCommand}
   */
  changeMessageVisibilityBatch(
    args: ChangeMessageVisibilityBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ChangeMessageVisibilityBatchCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BatchEntryIdsNotDistinctError
    | EmptyBatchRequestError
    | InvalidAddressError
    | InvalidBatchEntryIdError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | TooManyEntriesInBatchRequestError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(
    args: CreateQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateQueueCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidAttributeNameError
    | InvalidAttributeValueError
    | InvalidSecurityError
    | QueueDeletedRecentlyError
    | QueueNameExistsError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteMessageCommand}
   */
  deleteMessage(
    args: DeleteMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMessageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidIdFormatError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | ReceiptHandleIsInvalidError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteMessageBatchCommand}
   */
  deleteMessageBatch(
    args: DeleteMessageBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMessageBatchCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BatchEntryIdsNotDistinctError
    | EmptyBatchRequestError
    | InvalidAddressError
    | InvalidBatchEntryIdError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | TooManyEntriesInBatchRequestError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(
    args: DeleteQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteQueueCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetQueueAttributesCommand}
   */
  getQueueAttributes(
    args: GetQueueAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueueAttributesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidAttributeNameError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link GetQueueUrlCommand}
   */
  getQueueUrl(
    args: GetQueueUrlCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetQueueUrlCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListDeadLetterSourceQueuesCommand}
   */
  listDeadLetterSourceQueues(
    args: ListDeadLetterSourceQueuesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDeadLetterSourceQueuesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListMessageMoveTasksCommand}
   */
  listMessageMoveTasks(
    args: ListMessageMoveTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMessageMoveTasksCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | ResourceNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueueTagsCommand}
   */
  listQueueTags(
    args: ListQueueTagsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListQueueTagsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(
    args: ListQueuesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListQueuesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link PurgeQueueCommand}
   */
  purgeQueue(
    args: PurgeQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PurgeQueueCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | PurgeQueueInProgressError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link ReceiveMessageCommand}
   */
  receiveMessage(
    args: ReceiveMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReceiveMessageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | KmsAccessDeniedError
    | KmsDisabledError
    | KmsInvalidKeyUsageError
    | KmsInvalidStateError
    | KmsNotFoundError
    | KmsOptInRequiredError
    | KmsThrottledError
    | OverLimitError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
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
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link SendMessageCommand}
   */
  sendMessage(
    args: SendMessageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendMessageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidMessageContentsError
    | InvalidSecurityError
    | KmsAccessDeniedError
    | KmsDisabledError
    | KmsInvalidKeyUsageError
    | KmsInvalidStateError
    | KmsNotFoundError
    | KmsOptInRequiredError
    | KmsThrottledError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link SendMessageBatchCommand}
   */
  sendMessageBatch(
    args: SendMessageBatchCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SendMessageBatchCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | BatchEntryIdsNotDistinctError
    | BatchRequestTooLongError
    | EmptyBatchRequestError
    | InvalidAddressError
    | InvalidBatchEntryIdError
    | InvalidSecurityError
    | KmsAccessDeniedError
    | KmsDisabledError
    | KmsInvalidKeyUsageError
    | KmsInvalidStateError
    | KmsNotFoundError
    | KmsOptInRequiredError
    | KmsThrottledError
    | QueueDoesNotExistError
    | RequestThrottledError
    | TooManyEntriesInBatchRequestError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link SetQueueAttributesCommand}
   */
  setQueueAttributes(
    args: SetQueueAttributesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetQueueAttributesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidAttributeNameError
    | InvalidAttributeValueError
    | InvalidSecurityError
    | OverLimitError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link StartMessageMoveTaskCommand}
   */
  startMessageMoveTask(
    args: StartMessageMoveTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartMessageMoveTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | RequestThrottledError
    | ResourceNotFoundError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link TagQueueCommand}
   */
  tagQueue(
    args: TagQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TagQueueCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;

  /**
   * @see {@link UntagQueueCommand}
   */
  untagQueue(
    args: UntagQueueCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UntagQueueCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidAddressError
    | InvalidSecurityError
    | QueueDoesNotExistError
    | RequestThrottledError
    | UnsupportedOperationError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeSQSService = Effect.gen(function*() {
  const client = yield* Instance.SQSClientInstance;

  return yield* Service.fromClientAndCommands<SQSService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: SQSServiceConfig.toSQSClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class SQSService extends Effect.Tag("@effect-aws/client-sqs/SQSService")<
  SQSService,
  SQSService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeSQSService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: SQSService.Config) =>
    Layer.effect(this, makeSQSService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(SQSServiceConfig.setSQSServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: SQSClientConfig) => SQSClient,
  ) =>
    Layer.effect(this, makeSQSService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.SQSClientInstance,
          Effect.map(SQSServiceConfig.toSQSClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace SQSService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<SQSClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
