/**
 * @since 1.0.0
 */
import {
  CodeDeployServiceException,
  AddTagsToOnPremisesInstancesCommand,
  type AddTagsToOnPremisesInstancesCommandInput,
  type AddTagsToOnPremisesInstancesCommandOutput,
  BatchGetApplicationRevisionsCommand,
  type BatchGetApplicationRevisionsCommandInput,
  type BatchGetApplicationRevisionsCommandOutput,
  BatchGetApplicationsCommand,
  type BatchGetApplicationsCommandInput,
  type BatchGetApplicationsCommandOutput,
  BatchGetDeploymentGroupsCommand,
  type BatchGetDeploymentGroupsCommandInput,
  type BatchGetDeploymentGroupsCommandOutput,
  BatchGetDeploymentInstancesCommand,
  type BatchGetDeploymentInstancesCommandInput,
  type BatchGetDeploymentInstancesCommandOutput,
  BatchGetDeploymentsCommand,
  type BatchGetDeploymentsCommandInput,
  type BatchGetDeploymentsCommandOutput,
  BatchGetDeploymentTargetsCommand,
  type BatchGetDeploymentTargetsCommandInput,
  type BatchGetDeploymentTargetsCommandOutput,
  BatchGetOnPremisesInstancesCommand,
  type BatchGetOnPremisesInstancesCommandInput,
  type BatchGetOnPremisesInstancesCommandOutput,
  ContinueDeploymentCommand,
  type ContinueDeploymentCommandInput,
  type ContinueDeploymentCommandOutput,
  CreateApplicationCommand,
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateDeploymentCommand,
  type CreateDeploymentCommandInput,
  type CreateDeploymentCommandOutput,
  CreateDeploymentConfigCommand,
  type CreateDeploymentConfigCommandInput,
  type CreateDeploymentConfigCommandOutput,
  CreateDeploymentGroupCommand,
  type CreateDeploymentGroupCommandInput,
  type CreateDeploymentGroupCommandOutput,
  DeleteApplicationCommand,
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteDeploymentConfigCommand,
  type DeleteDeploymentConfigCommandInput,
  type DeleteDeploymentConfigCommandOutput,
  DeleteDeploymentGroupCommand,
  type DeleteDeploymentGroupCommandInput,
  type DeleteDeploymentGroupCommandOutput,
  DeleteGitHubAccountTokenCommand,
  type DeleteGitHubAccountTokenCommandInput,
  type DeleteGitHubAccountTokenCommandOutput,
  DeleteResourcesByExternalIdCommand,
  type DeleteResourcesByExternalIdCommandInput,
  type DeleteResourcesByExternalIdCommandOutput,
  DeregisterOnPremisesInstanceCommand,
  type DeregisterOnPremisesInstanceCommandInput,
  type DeregisterOnPremisesInstanceCommandOutput,
  GetApplicationCommand,
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationRevisionCommand,
  type GetApplicationRevisionCommandInput,
  type GetApplicationRevisionCommandOutput,
  GetDeploymentCommand,
  type GetDeploymentCommandInput,
  type GetDeploymentCommandOutput,
  GetDeploymentConfigCommand,
  type GetDeploymentConfigCommandInput,
  type GetDeploymentConfigCommandOutput,
  GetDeploymentGroupCommand,
  type GetDeploymentGroupCommandInput,
  type GetDeploymentGroupCommandOutput,
  GetDeploymentInstanceCommand,
  type GetDeploymentInstanceCommandInput,
  type GetDeploymentInstanceCommandOutput,
  GetDeploymentTargetCommand,
  type GetDeploymentTargetCommandInput,
  type GetDeploymentTargetCommandOutput,
  GetOnPremisesInstanceCommand,
  type GetOnPremisesInstanceCommandInput,
  type GetOnPremisesInstanceCommandOutput,
  ListApplicationRevisionsCommand,
  type ListApplicationRevisionsCommandInput,
  type ListApplicationRevisionsCommandOutput,
  ListApplicationsCommand,
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListDeploymentConfigsCommand,
  type ListDeploymentConfigsCommandInput,
  type ListDeploymentConfigsCommandOutput,
  ListDeploymentGroupsCommand,
  type ListDeploymentGroupsCommandInput,
  type ListDeploymentGroupsCommandOutput,
  ListDeploymentInstancesCommand,
  type ListDeploymentInstancesCommandInput,
  type ListDeploymentInstancesCommandOutput,
  ListDeploymentsCommand,
  type ListDeploymentsCommandInput,
  type ListDeploymentsCommandOutput,
  ListDeploymentTargetsCommand,
  type ListDeploymentTargetsCommandInput,
  type ListDeploymentTargetsCommandOutput,
  ListGitHubAccountTokenNamesCommand,
  type ListGitHubAccountTokenNamesCommandInput,
  type ListGitHubAccountTokenNamesCommandOutput,
  ListOnPremisesInstancesCommand,
  type ListOnPremisesInstancesCommandInput,
  type ListOnPremisesInstancesCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  PutLifecycleEventHookExecutionStatusCommand,
  type PutLifecycleEventHookExecutionStatusCommandInput,
  type PutLifecycleEventHookExecutionStatusCommandOutput,
  RegisterApplicationRevisionCommand,
  type RegisterApplicationRevisionCommandInput,
  type RegisterApplicationRevisionCommandOutput,
  RegisterOnPremisesInstanceCommand,
  type RegisterOnPremisesInstanceCommandInput,
  type RegisterOnPremisesInstanceCommandOutput,
  RemoveTagsFromOnPremisesInstancesCommand,
  type RemoveTagsFromOnPremisesInstancesCommandInput,
  type RemoveTagsFromOnPremisesInstancesCommandOutput,
  SkipWaitTimeForInstanceTerminationCommand,
  type SkipWaitTimeForInstanceTerminationCommandInput,
  type SkipWaitTimeForInstanceTerminationCommandOutput,
  StopDeploymentCommand,
  type StopDeploymentCommandInput,
  type StopDeploymentCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateApplicationCommand,
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateDeploymentGroupCommand,
  type UpdateDeploymentGroupCommandInput,
  type UpdateDeploymentGroupCommandOutput,
} from "@aws-sdk/client-codedeploy";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { Context, Data, Effect, Layer, Record } from "effect";
import {
  CodeDeployClientInstance,
  CodeDeployClientInstanceLayer,
} from "./CodeDeployClientInstance";
import { DefaultCodeDeployClientConfigLayer } from "./CodeDeployClientInstanceConfig";
import {
  AlarmsLimitExceededError,
  ApplicationAlreadyExistsError,
  ApplicationDoesNotExistError,
  ApplicationLimitExceededError,
  ApplicationNameRequiredError,
  ArnNotSupportedError,
  BatchLimitExceededError,
  BucketNameFilterRequiredError,
  DeploymentAlreadyCompletedError,
  DeploymentConfigAlreadyExistsError,
  DeploymentConfigDoesNotExistError,
  DeploymentConfigInUseError,
  DeploymentConfigLimitExceededError,
  DeploymentConfigNameRequiredError,
  DeploymentDoesNotExistError,
  DeploymentGroupAlreadyExistsError,
  DeploymentGroupDoesNotExistError,
  DeploymentGroupLimitExceededError,
  DeploymentGroupNameRequiredError,
  DeploymentIdRequiredError,
  DeploymentIsNotInReadyStateError,
  DeploymentLimitExceededError,
  DeploymentNotStartedError,
  DeploymentTargetDoesNotExistError,
  DeploymentTargetIdRequiredError,
  DeploymentTargetListSizeExceededError,
  DescriptionTooLongError,
  ECSServiceMappingLimitExceededError,
  GitHubAccountTokenDoesNotExistError,
  GitHubAccountTokenNameRequiredError,
  IamArnRequiredError,
  IamSessionArnAlreadyRegisteredError,
  IamUserArnAlreadyRegisteredError,
  IamUserArnRequiredError,
  InstanceDoesNotExistError,
  InstanceIdRequiredError,
  InstanceLimitExceededError,
  InstanceNameAlreadyRegisteredError,
  InstanceNameRequiredError,
  InstanceNotRegisteredError,
  InvalidAlarmConfigError,
  InvalidApplicationNameError,
  InvalidArnError,
  InvalidAutoRollbackConfigError,
  InvalidAutoScalingGroupError,
  InvalidBlueGreenDeploymentConfigurationError,
  InvalidBucketNameFilterError,
  InvalidComputePlatformError,
  InvalidDeployedStateFilterError,
  InvalidDeploymentConfigNameError,
  InvalidDeploymentGroupNameError,
  InvalidDeploymentIdError,
  InvalidDeploymentInstanceTypeError,
  InvalidDeploymentStatusError,
  InvalidDeploymentStyleError,
  InvalidDeploymentTargetIdError,
  InvalidDeploymentWaitTypeError,
  InvalidEC2TagCombinationError,
  InvalidEC2TagError,
  InvalidECSServiceError,
  InvalidExternalIdError,
  InvalidFileExistsBehaviorError,
  InvalidGitHubAccountTokenError,
  InvalidGitHubAccountTokenNameError,
  InvalidIamSessionArnError,
  InvalidIamUserArnError,
  InvalidIgnoreApplicationStopFailuresValueError,
  InvalidInputError,
  InvalidInstanceNameError,
  InvalidInstanceStatusError,
  InvalidInstanceTypeError,
  InvalidKeyPrefixFilterError,
  InvalidLifecycleEventHookExecutionIdError,
  InvalidLifecycleEventHookExecutionStatusError,
  InvalidLoadBalancerInfoError,
  InvalidMinimumHealthyHostValueError,
  InvalidNextTokenError,
  InvalidOnPremisesTagCombinationError,
  InvalidOperationError,
  InvalidRegistrationStatusError,
  InvalidRevisionError,
  InvalidRoleError,
  InvalidSortByError,
  InvalidSortOrderError,
  InvalidTagError,
  InvalidTagFilterError,
  InvalidTagsToAddError,
  InvalidTargetFilterNameError,
  InvalidTargetGroupPairError,
  InvalidTargetInstancesError,
  InvalidTimeRangeError,
  InvalidTrafficRoutingConfigurationError,
  InvalidTriggerConfigError,
  InvalidUpdateOutdatedInstancesOnlyValueError,
  InvalidZonalDeploymentConfigurationError,
  LifecycleEventAlreadyCompletedError,
  LifecycleHookLimitExceededError,
  MultipleIamArnsProvidedError,
  OperationNotSupportedError,
  ResourceArnRequiredError,
  ResourceValidationError,
  RevisionDoesNotExistError,
  RevisionRequiredError,
  RoleRequiredError,
  TagLimitExceededError,
  TagRequiredError,
  TagSetListLimitExceededError,
  ThrottlingError,
  TriggerTargetsLimitExceededError,
  UnsupportedActionForDeploymentTypeError,
  SdkError,
  TaggedException,
} from "./Errors";

const commands = {
  AddTagsToOnPremisesInstancesCommand,
  BatchGetApplicationRevisionsCommand,
  BatchGetApplicationsCommand,
  BatchGetDeploymentGroupsCommand,
  BatchGetDeploymentInstancesCommand,
  BatchGetDeploymentsCommand,
  BatchGetDeploymentTargetsCommand,
  BatchGetOnPremisesInstancesCommand,
  ContinueDeploymentCommand,
  CreateApplicationCommand,
  CreateDeploymentCommand,
  CreateDeploymentConfigCommand,
  CreateDeploymentGroupCommand,
  DeleteApplicationCommand,
  DeleteDeploymentConfigCommand,
  DeleteDeploymentGroupCommand,
  DeleteGitHubAccountTokenCommand,
  DeleteResourcesByExternalIdCommand,
  DeregisterOnPremisesInstanceCommand,
  GetApplicationCommand,
  GetApplicationRevisionCommand,
  GetDeploymentCommand,
  GetDeploymentConfigCommand,
  GetDeploymentGroupCommand,
  GetDeploymentInstanceCommand,
  GetDeploymentTargetCommand,
  GetOnPremisesInstanceCommand,
  ListApplicationRevisionsCommand,
  ListApplicationsCommand,
  ListDeploymentConfigsCommand,
  ListDeploymentGroupsCommand,
  ListDeploymentInstancesCommand,
  ListDeploymentsCommand,
  ListDeploymentTargetsCommand,
  ListGitHubAccountTokenNamesCommand,
  ListOnPremisesInstancesCommand,
  ListTagsForResourceCommand,
  PutLifecycleEventHookExecutionStatusCommand,
  RegisterApplicationRevisionCommand,
  RegisterOnPremisesInstanceCommand,
  RemoveTagsFromOnPremisesInstancesCommand,
  SkipWaitTimeForInstanceTerminationCommand,
  StopDeploymentCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateDeploymentGroupCommand,
};

/**
 * @since 1.0.0
 * @category models
 */
export interface CodeDeployService {
  readonly _: unique symbol;

  /**
   * @see {@link AddTagsToOnPremisesInstancesCommand}
   */
  addTagsToOnPremisesInstances(
    args: AddTagsToOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    AddTagsToOnPremisesInstancesCommandOutput,
    | SdkError
    | InstanceLimitExceededError
    | InstanceNameRequiredError
    | InstanceNotRegisteredError
    | InvalidInstanceNameError
    | InvalidTagError
    | TagLimitExceededError
    | TagRequiredError
  >;

  /**
   * @see {@link BatchGetApplicationRevisionsCommand}
   */
  batchGetApplicationRevisions(
    args: BatchGetApplicationRevisionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetApplicationRevisionsCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BatchLimitExceededError
    | InvalidApplicationNameError
    | InvalidRevisionError
    | RevisionRequiredError
  >;

  /**
   * @see {@link BatchGetApplicationsCommand}
   */
  batchGetApplications(
    args: BatchGetApplicationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetApplicationsCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BatchLimitExceededError
    | InvalidApplicationNameError
  >;

  /**
   * @see {@link BatchGetDeploymentGroupsCommand}
   */
  batchGetDeploymentGroups(
    args: BatchGetDeploymentGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentGroupsCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BatchLimitExceededError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
  >;

  /**
   * @see {@link BatchGetDeploymentInstancesCommand}
   */
  batchGetDeploymentInstances(
    args: BatchGetDeploymentInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentInstancesCommandOutput,
    | SdkError
    | BatchLimitExceededError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InstanceIdRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentIdError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link BatchGetDeploymentsCommand}
   */
  batchGetDeployments(
    args: BatchGetDeploymentsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentsCommandOutput,
    | SdkError
    | BatchLimitExceededError
    | DeploymentIdRequiredError
    | InvalidDeploymentIdError
  >;

  /**
   * @see {@link BatchGetDeploymentTargetsCommand}
   */
  batchGetDeploymentTargets(
    args: BatchGetDeploymentTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetDeploymentTargetsCommandOutput,
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | DeploymentTargetDoesNotExistError
    | DeploymentTargetIdRequiredError
    | DeploymentTargetListSizeExceededError
    | InstanceDoesNotExistError
    | InvalidDeploymentIdError
    | InvalidDeploymentTargetIdError
  >;

  /**
   * @see {@link BatchGetOnPremisesInstancesCommand}
   */
  batchGetOnPremisesInstances(
    args: BatchGetOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    BatchGetOnPremisesInstancesCommandOutput,
    | SdkError
    | BatchLimitExceededError
    | InstanceNameRequiredError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link ContinueDeploymentCommand}
   */
  continueDeployment(
    args: ContinueDeploymentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ContinueDeploymentCommandOutput,
    | SdkError
    | DeploymentAlreadyCompletedError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentIsNotInReadyStateError
    | InvalidDeploymentIdError
    | InvalidDeploymentStatusError
    | InvalidDeploymentWaitTypeError
    | UnsupportedActionForDeploymentTypeError
  >;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateApplicationCommandOutput,
    | SdkError
    | ApplicationAlreadyExistsError
    | ApplicationLimitExceededError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
    | InvalidComputePlatformError
    | InvalidTagsToAddError
  >;

  /**
   * @see {@link CreateDeploymentCommand}
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentCommandOutput,
    | SdkError
    | AlarmsLimitExceededError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | DeploymentLimitExceededError
    | DescriptionTooLongError
    | InvalidAlarmConfigError
    | InvalidApplicationNameError
    | InvalidAutoRollbackConfigError
    | InvalidAutoScalingGroupError
    | InvalidDeploymentConfigNameError
    | InvalidDeploymentGroupNameError
    | InvalidFileExistsBehaviorError
    | InvalidGitHubAccountTokenError
    | InvalidIgnoreApplicationStopFailuresValueError
    | InvalidLoadBalancerInfoError
    | InvalidRevisionError
    | InvalidRoleError
    | InvalidTargetInstancesError
    | InvalidTrafficRoutingConfigurationError
    | InvalidUpdateOutdatedInstancesOnlyValueError
    | RevisionDoesNotExistError
    | RevisionRequiredError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateDeploymentConfigCommand}
   */
  createDeploymentConfig(
    args: CreateDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentConfigCommandOutput,
    | SdkError
    | DeploymentConfigAlreadyExistsError
    | DeploymentConfigLimitExceededError
    | DeploymentConfigNameRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentConfigNameError
    | InvalidMinimumHealthyHostValueError
    | InvalidTrafficRoutingConfigurationError
    | InvalidZonalDeploymentConfigurationError
  >;

  /**
   * @see {@link CreateDeploymentGroupCommand}
   */
  createDeploymentGroup(
    args: CreateDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    CreateDeploymentGroupCommandOutput,
    | SdkError
    | AlarmsLimitExceededError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupAlreadyExistsError
    | DeploymentGroupLimitExceededError
    | DeploymentGroupNameRequiredError
    | ECSServiceMappingLimitExceededError
    | InvalidAlarmConfigError
    | InvalidApplicationNameError
    | InvalidAutoRollbackConfigError
    | InvalidAutoScalingGroupError
    | InvalidBlueGreenDeploymentConfigurationError
    | InvalidDeploymentConfigNameError
    | InvalidDeploymentGroupNameError
    | InvalidDeploymentStyleError
    | InvalidEC2TagCombinationError
    | InvalidEC2TagError
    | InvalidECSServiceError
    | InvalidInputError
    | InvalidLoadBalancerInfoError
    | InvalidOnPremisesTagCombinationError
    | InvalidRoleError
    | InvalidTagError
    | InvalidTagsToAddError
    | InvalidTargetGroupPairError
    | InvalidTrafficRoutingConfigurationError
    | InvalidTriggerConfigError
    | LifecycleHookLimitExceededError
    | RoleRequiredError
    | TagSetListLimitExceededError
    | ThrottlingError
    | TriggerTargetsLimitExceededError
  >;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteApplicationCommandOutput,
    | SdkError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
    | InvalidRoleError
  >;

  /**
   * @see {@link DeleteDeploymentConfigCommand}
   */
  deleteDeploymentConfig(
    args: DeleteDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeploymentConfigCommandOutput,
    | SdkError
    | DeploymentConfigInUseError
    | DeploymentConfigNameRequiredError
    | InvalidDeploymentConfigNameError
    | InvalidOperationError
  >;

  /**
   * @see {@link DeleteDeploymentGroupCommand}
   */
  deleteDeploymentGroup(
    args: DeleteDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDeploymentGroupCommandOutput,
    | SdkError
    | ApplicationNameRequiredError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
    | InvalidRoleError
  >;

  /**
   * @see {@link DeleteGitHubAccountTokenCommand}
   */
  deleteGitHubAccountToken(
    args: DeleteGitHubAccountTokenCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeleteGitHubAccountTokenCommandOutput,
    | SdkError
    | GitHubAccountTokenDoesNotExistError
    | GitHubAccountTokenNameRequiredError
    | InvalidGitHubAccountTokenNameError
    | OperationNotSupportedError
    | ResourceValidationError
  >;

  /**
   * @see {@link DeleteResourcesByExternalIdCommand}
   */
  deleteResourcesByExternalId(
    args: DeleteResourcesByExternalIdCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<DeleteResourcesByExternalIdCommandOutput, SdkError>;

  /**
   * @see {@link DeregisterOnPremisesInstanceCommand}
   */
  deregisterOnPremisesInstance(
    args: DeregisterOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    DeregisterOnPremisesInstanceCommandOutput,
    SdkError | InstanceNameRequiredError | InvalidInstanceNameError
  >;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetApplicationCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
  >;

  /**
   * @see {@link GetApplicationRevisionCommand}
   */
  getApplicationRevision(
    args: GetApplicationRevisionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetApplicationRevisionCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
    | InvalidRevisionError
    | RevisionDoesNotExistError
    | RevisionRequiredError
  >;

  /**
   * @see {@link GetDeploymentCommand}
   */
  getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentCommandOutput,
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InvalidDeploymentIdError
  >;

  /**
   * @see {@link GetDeploymentConfigCommand}
   */
  getDeploymentConfig(
    args: GetDeploymentConfigCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentConfigCommandOutput,
    | SdkError
    | DeploymentConfigDoesNotExistError
    | DeploymentConfigNameRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentConfigNameError
  >;

  /**
   * @see {@link GetDeploymentGroupCommand}
   */
  getDeploymentGroup(
    args: GetDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentGroupCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
  >;

  /**
   * @see {@link GetDeploymentInstanceCommand}
   */
  getDeploymentInstance(
    args: GetDeploymentInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentInstanceCommandOutput,
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InstanceDoesNotExistError
    | InstanceIdRequiredError
    | InvalidComputePlatformError
    | InvalidDeploymentIdError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link GetDeploymentTargetCommand}
   */
  getDeploymentTarget(
    args: GetDeploymentTargetCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetDeploymentTargetCommandOutput,
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | DeploymentTargetDoesNotExistError
    | DeploymentTargetIdRequiredError
    | InvalidDeploymentIdError
    | InvalidDeploymentTargetIdError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link GetOnPremisesInstanceCommand}
   */
  getOnPremisesInstance(
    args: GetOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    GetOnPremisesInstanceCommandOutput,
    | SdkError
    | InstanceNameRequiredError
    | InstanceNotRegisteredError
    | InvalidInstanceNameError
  >;

  /**
   * @see {@link ListApplicationRevisionsCommand}
   */
  listApplicationRevisions(
    args: ListApplicationRevisionsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListApplicationRevisionsCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | BucketNameFilterRequiredError
    | InvalidApplicationNameError
    | InvalidBucketNameFilterError
    | InvalidDeployedStateFilterError
    | InvalidKeyPrefixFilterError
    | InvalidNextTokenError
    | InvalidSortByError
    | InvalidSortOrderError
  >;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListApplicationsCommandOutput,
    SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDeploymentConfigsCommand}
   */
  listDeploymentConfigs(
    args: ListDeploymentConfigsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentConfigsCommandOutput,
    SdkError | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDeploymentGroupsCommand}
   */
  listDeploymentGroups(
    args: ListDeploymentGroupsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentGroupsCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
    | InvalidNextTokenError
  >;

  /**
   * @see {@link ListDeploymentInstancesCommand}
   */
  listDeploymentInstances(
    args: ListDeploymentInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentInstancesCommandOutput,
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | InvalidComputePlatformError
    | InvalidDeploymentIdError
    | InvalidDeploymentInstanceTypeError
    | InvalidInstanceStatusError
    | InvalidInstanceTypeError
    | InvalidNextTokenError
    | InvalidTargetFilterNameError
  >;

  /**
   * @see {@link ListDeploymentsCommand}
   */
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentsCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | InvalidApplicationNameError
    | InvalidDeploymentGroupNameError
    | InvalidDeploymentStatusError
    | InvalidExternalIdError
    | InvalidInputError
    | InvalidNextTokenError
    | InvalidTimeRangeError
  >;

  /**
   * @see {@link ListDeploymentTargetsCommand}
   */
  listDeploymentTargets(
    args: ListDeploymentTargetsCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListDeploymentTargetsCommandOutput,
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | InvalidDeploymentIdError
    | InvalidDeploymentInstanceTypeError
    | InvalidInstanceStatusError
    | InvalidInstanceTypeError
    | InvalidNextTokenError
    | InvalidTargetFilterNameError
  >;

  /**
   * @see {@link ListGitHubAccountTokenNamesCommand}
   */
  listGitHubAccountTokenNames(
    args: ListGitHubAccountTokenNamesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListGitHubAccountTokenNamesCommandOutput,
    | SdkError
    | InvalidNextTokenError
    | OperationNotSupportedError
    | ResourceValidationError
  >;

  /**
   * @see {@link ListOnPremisesInstancesCommand}
   */
  listOnPremisesInstances(
    args: ListOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListOnPremisesInstancesCommandOutput,
    | SdkError
    | InvalidNextTokenError
    | InvalidRegistrationStatusError
    | InvalidTagFilterError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    SdkError | ArnNotSupportedError | InvalidArnError | ResourceArnRequiredError
  >;

  /**
   * @see {@link PutLifecycleEventHookExecutionStatusCommand}
   */
  putLifecycleEventHookExecutionStatus(
    args: PutLifecycleEventHookExecutionStatusCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    PutLifecycleEventHookExecutionStatusCommandOutput,
    | SdkError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | InvalidDeploymentIdError
    | InvalidLifecycleEventHookExecutionIdError
    | InvalidLifecycleEventHookExecutionStatusError
    | LifecycleEventAlreadyCompletedError
    | UnsupportedActionForDeploymentTypeError
  >;

  /**
   * @see {@link RegisterApplicationRevisionCommand}
   */
  registerApplicationRevision(
    args: RegisterApplicationRevisionCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterApplicationRevisionCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DescriptionTooLongError
    | InvalidApplicationNameError
    | InvalidRevisionError
    | RevisionRequiredError
  >;

  /**
   * @see {@link RegisterOnPremisesInstanceCommand}
   */
  registerOnPremisesInstance(
    args: RegisterOnPremisesInstanceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RegisterOnPremisesInstanceCommandOutput,
    | SdkError
    | IamArnRequiredError
    | IamSessionArnAlreadyRegisteredError
    | IamUserArnAlreadyRegisteredError
    | IamUserArnRequiredError
    | InstanceNameAlreadyRegisteredError
    | InstanceNameRequiredError
    | InvalidIamSessionArnError
    | InvalidIamUserArnError
    | InvalidInstanceNameError
    | MultipleIamArnsProvidedError
  >;

  /**
   * @see {@link RemoveTagsFromOnPremisesInstancesCommand}
   */
  removeTagsFromOnPremisesInstances(
    args: RemoveTagsFromOnPremisesInstancesCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    RemoveTagsFromOnPremisesInstancesCommandOutput,
    | SdkError
    | InstanceLimitExceededError
    | InstanceNameRequiredError
    | InstanceNotRegisteredError
    | InvalidInstanceNameError
    | InvalidTagError
    | TagLimitExceededError
    | TagRequiredError
  >;

  /**
   * @see {@link SkipWaitTimeForInstanceTerminationCommand}
   */
  skipWaitTimeForInstanceTermination(
    args: SkipWaitTimeForInstanceTerminationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    SkipWaitTimeForInstanceTerminationCommandOutput,
    | SdkError
    | DeploymentAlreadyCompletedError
    | DeploymentDoesNotExistError
    | DeploymentIdRequiredError
    | DeploymentNotStartedError
    | InvalidDeploymentIdError
    | UnsupportedActionForDeploymentTypeError
  >;

  /**
   * @see {@link StopDeploymentCommand}
   */
  stopDeployment(
    args: StopDeploymentCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    StopDeploymentCommandOutput,
    | SdkError
    | DeploymentAlreadyCompletedError
    | DeploymentDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | DeploymentIdRequiredError
    | InvalidDeploymentIdError
    | UnsupportedActionForDeploymentTypeError
  >;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    TagResourceCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ArnNotSupportedError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | InvalidArnError
    | InvalidTagsToAddError
    | ResourceArnRequiredError
    | TagRequiredError
  >;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UntagResourceCommandOutput,
    | SdkError
    | ApplicationDoesNotExistError
    | ArnNotSupportedError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupDoesNotExistError
    | InvalidArnError
    | InvalidTagsToAddError
    | ResourceArnRequiredError
    | TagRequiredError
  >;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateApplicationCommandOutput,
    | SdkError
    | ApplicationAlreadyExistsError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | InvalidApplicationNameError
  >;

  /**
   * @see {@link UpdateDeploymentGroupCommand}
   */
  updateDeploymentGroup(
    args: UpdateDeploymentGroupCommandInput,
    options?: __HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDeploymentGroupCommandOutput,
    | SdkError
    | AlarmsLimitExceededError
    | ApplicationDoesNotExistError
    | ApplicationNameRequiredError
    | DeploymentConfigDoesNotExistError
    | DeploymentGroupAlreadyExistsError
    | DeploymentGroupDoesNotExistError
    | DeploymentGroupNameRequiredError
    | ECSServiceMappingLimitExceededError
    | InvalidAlarmConfigError
    | InvalidApplicationNameError
    | InvalidAutoRollbackConfigError
    | InvalidAutoScalingGroupError
    | InvalidBlueGreenDeploymentConfigurationError
    | InvalidDeploymentConfigNameError
    | InvalidDeploymentGroupNameError
    | InvalidDeploymentStyleError
    | InvalidEC2TagCombinationError
    | InvalidEC2TagError
    | InvalidECSServiceError
    | InvalidInputError
    | InvalidLoadBalancerInfoError
    | InvalidOnPremisesTagCombinationError
    | InvalidRoleError
    | InvalidTagError
    | InvalidTargetGroupPairError
    | InvalidTrafficRoutingConfigurationError
    | InvalidTriggerConfigError
    | LifecycleHookLimitExceededError
    | TagSetListLimitExceededError
    | ThrottlingError
    | TriggerTargetsLimitExceededError
  >;
}

/**
 * @since 1.0.0
 * @category tags
 */
export const CodeDeployService = Context.GenericTag<CodeDeployService>(
  "@effect-aws/client-codedeploy/CodeDeployService",
);

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeCodeDeployService = Effect.gen(function* (_) {
  const client = yield* _(CodeDeployClientInstance);

  return Record.toEntries(commands).reduce((acc, [command]) => {
    const CommandCtor = commands[command] as any;
    const methodImpl = (args: any, options: any) =>
      Effect.tryPromise({
        try: () => client.send(new CommandCtor(args), options ?? {}),
        catch: (e) => {
          if (e instanceof CodeDeployServiceException) {
            const ServiceException = Data.tagged<
              TaggedException<CodeDeployServiceException>
            >(e.name);

            return ServiceException({
              ...e,
              message: e.message,
              stack: e.stack,
            });
          }
          if (e instanceof Error) {
            return SdkError({
              ...e,
              name: "SdkError",
              message: e.message,
              stack: e.stack,
            });
          }
          throw e;
        },
      });
    const methodName = (command[0].toLowerCase() + command.slice(1)).replace(
      /Command$/,
      "",
    );
    return { ...acc, [methodName]: methodImpl };
  }, {}) as CodeDeployService;
});

/**
 * @since 1.0.0
 * @category layers
 */
export const BaseCodeDeployServiceLayer = Layer.effect(
  CodeDeployService,
  makeCodeDeployService,
);

/**
 * @since 1.0.0
 * @category layers
 */
export const CodeDeployServiceLayer = BaseCodeDeployServiceLayer.pipe(
  Layer.provide(CodeDeployClientInstanceLayer),
);

/**
 * @since 1.0.0
 * @category layers
 */
export const DefaultCodeDeployServiceLayer = CodeDeployServiceLayer.pipe(
  Layer.provide(DefaultCodeDeployClientConfigLayer),
);
