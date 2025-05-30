/**
 * @since 1.0.0
 */
import {
  AcceptCertificateTransferCommand,
  type AcceptCertificateTransferCommandInput,
  type AcceptCertificateTransferCommandOutput,
  AddThingToBillingGroupCommand,
  type AddThingToBillingGroupCommandInput,
  type AddThingToBillingGroupCommandOutput,
  AddThingToThingGroupCommand,
  type AddThingToThingGroupCommandInput,
  type AddThingToThingGroupCommandOutput,
  AssociateSbomWithPackageVersionCommand,
  type AssociateSbomWithPackageVersionCommandInput,
  type AssociateSbomWithPackageVersionCommandOutput,
  AssociateTargetsWithJobCommand,
  type AssociateTargetsWithJobCommandInput,
  type AssociateTargetsWithJobCommandOutput,
  AttachPolicyCommand,
  type AttachPolicyCommandInput,
  type AttachPolicyCommandOutput,
  AttachPrincipalPolicyCommand,
  type AttachPrincipalPolicyCommandInput,
  type AttachPrincipalPolicyCommandOutput,
  AttachSecurityProfileCommand,
  type AttachSecurityProfileCommandInput,
  type AttachSecurityProfileCommandOutput,
  AttachThingPrincipalCommand,
  type AttachThingPrincipalCommandInput,
  type AttachThingPrincipalCommandOutput,
  CancelAuditMitigationActionsTaskCommand,
  type CancelAuditMitigationActionsTaskCommandInput,
  type CancelAuditMitigationActionsTaskCommandOutput,
  CancelAuditTaskCommand,
  type CancelAuditTaskCommandInput,
  type CancelAuditTaskCommandOutput,
  CancelCertificateTransferCommand,
  type CancelCertificateTransferCommandInput,
  type CancelCertificateTransferCommandOutput,
  CancelDetectMitigationActionsTaskCommand,
  type CancelDetectMitigationActionsTaskCommandInput,
  type CancelDetectMitigationActionsTaskCommandOutput,
  CancelJobCommand,
  type CancelJobCommandInput,
  type CancelJobCommandOutput,
  CancelJobExecutionCommand,
  type CancelJobExecutionCommandInput,
  type CancelJobExecutionCommandOutput,
  ClearDefaultAuthorizerCommand,
  type ClearDefaultAuthorizerCommandInput,
  type ClearDefaultAuthorizerCommandOutput,
  ConfirmTopicRuleDestinationCommand,
  type ConfirmTopicRuleDestinationCommandInput,
  type ConfirmTopicRuleDestinationCommandOutput,
  CreateAuditSuppressionCommand,
  type CreateAuditSuppressionCommandInput,
  type CreateAuditSuppressionCommandOutput,
  CreateAuthorizerCommand,
  type CreateAuthorizerCommandInput,
  type CreateAuthorizerCommandOutput,
  CreateBillingGroupCommand,
  type CreateBillingGroupCommandInput,
  type CreateBillingGroupCommandOutput,
  CreateCertificateFromCsrCommand,
  type CreateCertificateFromCsrCommandInput,
  type CreateCertificateFromCsrCommandOutput,
  CreateCertificateProviderCommand,
  type CreateCertificateProviderCommandInput,
  type CreateCertificateProviderCommandOutput,
  CreateCommandCommand,
  type CreateCommandCommandInput,
  type CreateCommandCommandOutput,
  CreateCustomMetricCommand,
  type CreateCustomMetricCommandInput,
  type CreateCustomMetricCommandOutput,
  CreateDimensionCommand,
  type CreateDimensionCommandInput,
  type CreateDimensionCommandOutput,
  CreateDomainConfigurationCommand,
  type CreateDomainConfigurationCommandInput,
  type CreateDomainConfigurationCommandOutput,
  CreateDynamicThingGroupCommand,
  type CreateDynamicThingGroupCommandInput,
  type CreateDynamicThingGroupCommandOutput,
  CreateFleetMetricCommand,
  type CreateFleetMetricCommandInput,
  type CreateFleetMetricCommandOutput,
  CreateJobCommand,
  type CreateJobCommandInput,
  type CreateJobCommandOutput,
  CreateJobTemplateCommand,
  type CreateJobTemplateCommandInput,
  type CreateJobTemplateCommandOutput,
  CreateKeysAndCertificateCommand,
  type CreateKeysAndCertificateCommandInput,
  type CreateKeysAndCertificateCommandOutput,
  CreateMitigationActionCommand,
  type CreateMitigationActionCommandInput,
  type CreateMitigationActionCommandOutput,
  CreateOTAUpdateCommand,
  type CreateOTAUpdateCommandInput,
  type CreateOTAUpdateCommandOutput,
  CreatePackageCommand,
  type CreatePackageCommandInput,
  type CreatePackageCommandOutput,
  CreatePackageVersionCommand,
  type CreatePackageVersionCommandInput,
  type CreatePackageVersionCommandOutput,
  CreatePolicyCommand,
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  CreatePolicyVersionCommand,
  type CreatePolicyVersionCommandInput,
  type CreatePolicyVersionCommandOutput,
  CreateProvisioningClaimCommand,
  type CreateProvisioningClaimCommandInput,
  type CreateProvisioningClaimCommandOutput,
  CreateProvisioningTemplateCommand,
  type CreateProvisioningTemplateCommandInput,
  type CreateProvisioningTemplateCommandOutput,
  CreateProvisioningTemplateVersionCommand,
  type CreateProvisioningTemplateVersionCommandInput,
  type CreateProvisioningTemplateVersionCommandOutput,
  CreateRoleAliasCommand,
  type CreateRoleAliasCommandInput,
  type CreateRoleAliasCommandOutput,
  CreateScheduledAuditCommand,
  type CreateScheduledAuditCommandInput,
  type CreateScheduledAuditCommandOutput,
  CreateSecurityProfileCommand,
  type CreateSecurityProfileCommandInput,
  type CreateSecurityProfileCommandOutput,
  CreateStreamCommand,
  type CreateStreamCommandInput,
  type CreateStreamCommandOutput,
  CreateThingCommand,
  type CreateThingCommandInput,
  type CreateThingCommandOutput,
  CreateThingGroupCommand,
  type CreateThingGroupCommandInput,
  type CreateThingGroupCommandOutput,
  CreateThingTypeCommand,
  type CreateThingTypeCommandInput,
  type CreateThingTypeCommandOutput,
  CreateTopicRuleCommand,
  type CreateTopicRuleCommandInput,
  type CreateTopicRuleCommandOutput,
  CreateTopicRuleDestinationCommand,
  type CreateTopicRuleDestinationCommandInput,
  type CreateTopicRuleDestinationCommandOutput,
  DeleteAccountAuditConfigurationCommand,
  type DeleteAccountAuditConfigurationCommandInput,
  type DeleteAccountAuditConfigurationCommandOutput,
  DeleteAuditSuppressionCommand,
  type DeleteAuditSuppressionCommandInput,
  type DeleteAuditSuppressionCommandOutput,
  DeleteAuthorizerCommand,
  type DeleteAuthorizerCommandInput,
  type DeleteAuthorizerCommandOutput,
  DeleteBillingGroupCommand,
  type DeleteBillingGroupCommandInput,
  type DeleteBillingGroupCommandOutput,
  DeleteCACertificateCommand,
  type DeleteCACertificateCommandInput,
  type DeleteCACertificateCommandOutput,
  DeleteCertificateCommand,
  type DeleteCertificateCommandInput,
  type DeleteCertificateCommandOutput,
  DeleteCertificateProviderCommand,
  type DeleteCertificateProviderCommandInput,
  type DeleteCertificateProviderCommandOutput,
  DeleteCommandCommand,
  type DeleteCommandCommandInput,
  type DeleteCommandCommandOutput,
  DeleteCommandExecutionCommand,
  type DeleteCommandExecutionCommandInput,
  type DeleteCommandExecutionCommandOutput,
  DeleteCustomMetricCommand,
  type DeleteCustomMetricCommandInput,
  type DeleteCustomMetricCommandOutput,
  DeleteDimensionCommand,
  type DeleteDimensionCommandInput,
  type DeleteDimensionCommandOutput,
  DeleteDomainConfigurationCommand,
  type DeleteDomainConfigurationCommandInput,
  type DeleteDomainConfigurationCommandOutput,
  DeleteDynamicThingGroupCommand,
  type DeleteDynamicThingGroupCommandInput,
  type DeleteDynamicThingGroupCommandOutput,
  DeleteFleetMetricCommand,
  type DeleteFleetMetricCommandInput,
  type DeleteFleetMetricCommandOutput,
  DeleteJobCommand,
  type DeleteJobCommandInput,
  type DeleteJobCommandOutput,
  DeleteJobExecutionCommand,
  type DeleteJobExecutionCommandInput,
  type DeleteJobExecutionCommandOutput,
  DeleteJobTemplateCommand,
  type DeleteJobTemplateCommandInput,
  type DeleteJobTemplateCommandOutput,
  DeleteMitigationActionCommand,
  type DeleteMitigationActionCommandInput,
  type DeleteMitigationActionCommandOutput,
  DeleteOTAUpdateCommand,
  type DeleteOTAUpdateCommandInput,
  type DeleteOTAUpdateCommandOutput,
  DeletePackageCommand,
  type DeletePackageCommandInput,
  type DeletePackageCommandOutput,
  DeletePackageVersionCommand,
  type DeletePackageVersionCommandInput,
  type DeletePackageVersionCommandOutput,
  DeletePolicyCommand,
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyVersionCommand,
  type DeletePolicyVersionCommandInput,
  type DeletePolicyVersionCommandOutput,
  DeleteProvisioningTemplateCommand,
  type DeleteProvisioningTemplateCommandInput,
  type DeleteProvisioningTemplateCommandOutput,
  DeleteProvisioningTemplateVersionCommand,
  type DeleteProvisioningTemplateVersionCommandInput,
  type DeleteProvisioningTemplateVersionCommandOutput,
  DeleteRegistrationCodeCommand,
  type DeleteRegistrationCodeCommandInput,
  type DeleteRegistrationCodeCommandOutput,
  DeleteRoleAliasCommand,
  type DeleteRoleAliasCommandInput,
  type DeleteRoleAliasCommandOutput,
  DeleteScheduledAuditCommand,
  type DeleteScheduledAuditCommandInput,
  type DeleteScheduledAuditCommandOutput,
  DeleteSecurityProfileCommand,
  type DeleteSecurityProfileCommandInput,
  type DeleteSecurityProfileCommandOutput,
  DeleteStreamCommand,
  type DeleteStreamCommandInput,
  type DeleteStreamCommandOutput,
  DeleteThingCommand,
  type DeleteThingCommandInput,
  type DeleteThingCommandOutput,
  DeleteThingGroupCommand,
  type DeleteThingGroupCommandInput,
  type DeleteThingGroupCommandOutput,
  DeleteThingTypeCommand,
  type DeleteThingTypeCommandInput,
  type DeleteThingTypeCommandOutput,
  DeleteTopicRuleCommand,
  type DeleteTopicRuleCommandInput,
  type DeleteTopicRuleCommandOutput,
  DeleteTopicRuleDestinationCommand,
  type DeleteTopicRuleDestinationCommandInput,
  type DeleteTopicRuleDestinationCommandOutput,
  DeleteV2LoggingLevelCommand,
  type DeleteV2LoggingLevelCommandInput,
  type DeleteV2LoggingLevelCommandOutput,
  DeprecateThingTypeCommand,
  type DeprecateThingTypeCommandInput,
  type DeprecateThingTypeCommandOutput,
  DescribeAccountAuditConfigurationCommand,
  type DescribeAccountAuditConfigurationCommandInput,
  type DescribeAccountAuditConfigurationCommandOutput,
  DescribeAuditFindingCommand,
  type DescribeAuditFindingCommandInput,
  type DescribeAuditFindingCommandOutput,
  DescribeAuditMitigationActionsTaskCommand,
  type DescribeAuditMitigationActionsTaskCommandInput,
  type DescribeAuditMitigationActionsTaskCommandOutput,
  DescribeAuditSuppressionCommand,
  type DescribeAuditSuppressionCommandInput,
  type DescribeAuditSuppressionCommandOutput,
  DescribeAuditTaskCommand,
  type DescribeAuditTaskCommandInput,
  type DescribeAuditTaskCommandOutput,
  DescribeAuthorizerCommand,
  type DescribeAuthorizerCommandInput,
  type DescribeAuthorizerCommandOutput,
  DescribeBillingGroupCommand,
  type DescribeBillingGroupCommandInput,
  type DescribeBillingGroupCommandOutput,
  DescribeCACertificateCommand,
  type DescribeCACertificateCommandInput,
  type DescribeCACertificateCommandOutput,
  DescribeCertificateCommand,
  type DescribeCertificateCommandInput,
  type DescribeCertificateCommandOutput,
  DescribeCertificateProviderCommand,
  type DescribeCertificateProviderCommandInput,
  type DescribeCertificateProviderCommandOutput,
  DescribeCustomMetricCommand,
  type DescribeCustomMetricCommandInput,
  type DescribeCustomMetricCommandOutput,
  DescribeDefaultAuthorizerCommand,
  type DescribeDefaultAuthorizerCommandInput,
  type DescribeDefaultAuthorizerCommandOutput,
  DescribeDetectMitigationActionsTaskCommand,
  type DescribeDetectMitigationActionsTaskCommandInput,
  type DescribeDetectMitigationActionsTaskCommandOutput,
  DescribeDimensionCommand,
  type DescribeDimensionCommandInput,
  type DescribeDimensionCommandOutput,
  DescribeDomainConfigurationCommand,
  type DescribeDomainConfigurationCommandInput,
  type DescribeDomainConfigurationCommandOutput,
  DescribeEndpointCommand,
  type DescribeEndpointCommandInput,
  type DescribeEndpointCommandOutput,
  DescribeEventConfigurationsCommand,
  type DescribeEventConfigurationsCommandInput,
  type DescribeEventConfigurationsCommandOutput,
  DescribeFleetMetricCommand,
  type DescribeFleetMetricCommandInput,
  type DescribeFleetMetricCommandOutput,
  DescribeIndexCommand,
  type DescribeIndexCommandInput,
  type DescribeIndexCommandOutput,
  DescribeJobCommand,
  type DescribeJobCommandInput,
  type DescribeJobCommandOutput,
  DescribeJobExecutionCommand,
  type DescribeJobExecutionCommandInput,
  type DescribeJobExecutionCommandOutput,
  DescribeJobTemplateCommand,
  type DescribeJobTemplateCommandInput,
  type DescribeJobTemplateCommandOutput,
  DescribeManagedJobTemplateCommand,
  type DescribeManagedJobTemplateCommandInput,
  type DescribeManagedJobTemplateCommandOutput,
  DescribeMitigationActionCommand,
  type DescribeMitigationActionCommandInput,
  type DescribeMitigationActionCommandOutput,
  DescribeProvisioningTemplateCommand,
  type DescribeProvisioningTemplateCommandInput,
  type DescribeProvisioningTemplateCommandOutput,
  DescribeProvisioningTemplateVersionCommand,
  type DescribeProvisioningTemplateVersionCommandInput,
  type DescribeProvisioningTemplateVersionCommandOutput,
  DescribeRoleAliasCommand,
  type DescribeRoleAliasCommandInput,
  type DescribeRoleAliasCommandOutput,
  DescribeScheduledAuditCommand,
  type DescribeScheduledAuditCommandInput,
  type DescribeScheduledAuditCommandOutput,
  DescribeSecurityProfileCommand,
  type DescribeSecurityProfileCommandInput,
  type DescribeSecurityProfileCommandOutput,
  DescribeStreamCommand,
  type DescribeStreamCommandInput,
  type DescribeStreamCommandOutput,
  DescribeThingCommand,
  type DescribeThingCommandInput,
  type DescribeThingCommandOutput,
  DescribeThingGroupCommand,
  type DescribeThingGroupCommandInput,
  type DescribeThingGroupCommandOutput,
  DescribeThingRegistrationTaskCommand,
  type DescribeThingRegistrationTaskCommandInput,
  type DescribeThingRegistrationTaskCommandOutput,
  DescribeThingTypeCommand,
  type DescribeThingTypeCommandInput,
  type DescribeThingTypeCommandOutput,
  DetachPolicyCommand,
  type DetachPolicyCommandInput,
  type DetachPolicyCommandOutput,
  DetachPrincipalPolicyCommand,
  type DetachPrincipalPolicyCommandInput,
  type DetachPrincipalPolicyCommandOutput,
  DetachSecurityProfileCommand,
  type DetachSecurityProfileCommandInput,
  type DetachSecurityProfileCommandOutput,
  DetachThingPrincipalCommand,
  type DetachThingPrincipalCommandInput,
  type DetachThingPrincipalCommandOutput,
  DisableTopicRuleCommand,
  type DisableTopicRuleCommandInput,
  type DisableTopicRuleCommandOutput,
  DisassociateSbomFromPackageVersionCommand,
  type DisassociateSbomFromPackageVersionCommandInput,
  type DisassociateSbomFromPackageVersionCommandOutput,
  EnableTopicRuleCommand,
  type EnableTopicRuleCommandInput,
  type EnableTopicRuleCommandOutput,
  GetBehaviorModelTrainingSummariesCommand,
  type GetBehaviorModelTrainingSummariesCommandInput,
  type GetBehaviorModelTrainingSummariesCommandOutput,
  GetBucketsAggregationCommand,
  type GetBucketsAggregationCommandInput,
  type GetBucketsAggregationCommandOutput,
  GetCardinalityCommand,
  type GetCardinalityCommandInput,
  type GetCardinalityCommandOutput,
  GetCommandCommand,
  type GetCommandCommandInput,
  type GetCommandCommandOutput,
  GetCommandExecutionCommand,
  type GetCommandExecutionCommandInput,
  type GetCommandExecutionCommandOutput,
  GetEffectivePoliciesCommand,
  type GetEffectivePoliciesCommandInput,
  type GetEffectivePoliciesCommandOutput,
  GetIndexingConfigurationCommand,
  type GetIndexingConfigurationCommandInput,
  type GetIndexingConfigurationCommandOutput,
  GetJobDocumentCommand,
  type GetJobDocumentCommandInput,
  type GetJobDocumentCommandOutput,
  GetLoggingOptionsCommand,
  type GetLoggingOptionsCommandInput,
  type GetLoggingOptionsCommandOutput,
  GetOTAUpdateCommand,
  type GetOTAUpdateCommandInput,
  type GetOTAUpdateCommandOutput,
  GetPackageCommand,
  type GetPackageCommandInput,
  type GetPackageCommandOutput,
  GetPackageConfigurationCommand,
  type GetPackageConfigurationCommandInput,
  type GetPackageConfigurationCommandOutput,
  GetPackageVersionCommand,
  type GetPackageVersionCommandInput,
  type GetPackageVersionCommandOutput,
  GetPercentilesCommand,
  type GetPercentilesCommandInput,
  type GetPercentilesCommandOutput,
  GetPolicyCommand,
  type GetPolicyCommandInput,
  type GetPolicyCommandOutput,
  GetPolicyVersionCommand,
  type GetPolicyVersionCommandInput,
  type GetPolicyVersionCommandOutput,
  GetRegistrationCodeCommand,
  type GetRegistrationCodeCommandInput,
  type GetRegistrationCodeCommandOutput,
  GetStatisticsCommand,
  type GetStatisticsCommandInput,
  type GetStatisticsCommandOutput,
  GetThingConnectivityDataCommand,
  type GetThingConnectivityDataCommandInput,
  type GetThingConnectivityDataCommandOutput,
  GetTopicRuleCommand,
  type GetTopicRuleCommandInput,
  type GetTopicRuleCommandOutput,
  GetTopicRuleDestinationCommand,
  type GetTopicRuleDestinationCommandInput,
  type GetTopicRuleDestinationCommandOutput,
  GetV2LoggingOptionsCommand,
  type GetV2LoggingOptionsCommandInput,
  type GetV2LoggingOptionsCommandOutput,
  type IoTClient,
  type IoTClientConfig,
  ListActiveViolationsCommand,
  type ListActiveViolationsCommandInput,
  type ListActiveViolationsCommandOutput,
  ListAttachedPoliciesCommand,
  type ListAttachedPoliciesCommandInput,
  type ListAttachedPoliciesCommandOutput,
  ListAuditFindingsCommand,
  type ListAuditFindingsCommandInput,
  type ListAuditFindingsCommandOutput,
  ListAuditMitigationActionsExecutionsCommand,
  type ListAuditMitigationActionsExecutionsCommandInput,
  type ListAuditMitigationActionsExecutionsCommandOutput,
  ListAuditMitigationActionsTasksCommand,
  type ListAuditMitigationActionsTasksCommandInput,
  type ListAuditMitigationActionsTasksCommandOutput,
  ListAuditSuppressionsCommand,
  type ListAuditSuppressionsCommandInput,
  type ListAuditSuppressionsCommandOutput,
  ListAuditTasksCommand,
  type ListAuditTasksCommandInput,
  type ListAuditTasksCommandOutput,
  ListAuthorizersCommand,
  type ListAuthorizersCommandInput,
  type ListAuthorizersCommandOutput,
  ListBillingGroupsCommand,
  type ListBillingGroupsCommandInput,
  type ListBillingGroupsCommandOutput,
  ListCACertificatesCommand,
  type ListCACertificatesCommandInput,
  type ListCACertificatesCommandOutput,
  ListCertificateProvidersCommand,
  type ListCertificateProvidersCommandInput,
  type ListCertificateProvidersCommandOutput,
  ListCertificatesByCACommand,
  type ListCertificatesByCACommandInput,
  type ListCertificatesByCACommandOutput,
  ListCertificatesCommand,
  type ListCertificatesCommandInput,
  type ListCertificatesCommandOutput,
  ListCommandExecutionsCommand,
  type ListCommandExecutionsCommandInput,
  type ListCommandExecutionsCommandOutput,
  ListCommandsCommand,
  type ListCommandsCommandInput,
  type ListCommandsCommandOutput,
  ListCustomMetricsCommand,
  type ListCustomMetricsCommandInput,
  type ListCustomMetricsCommandOutput,
  ListDetectMitigationActionsExecutionsCommand,
  type ListDetectMitigationActionsExecutionsCommandInput,
  type ListDetectMitigationActionsExecutionsCommandOutput,
  ListDetectMitigationActionsTasksCommand,
  type ListDetectMitigationActionsTasksCommandInput,
  type ListDetectMitigationActionsTasksCommandOutput,
  ListDimensionsCommand,
  type ListDimensionsCommandInput,
  type ListDimensionsCommandOutput,
  ListDomainConfigurationsCommand,
  type ListDomainConfigurationsCommandInput,
  type ListDomainConfigurationsCommandOutput,
  ListFleetMetricsCommand,
  type ListFleetMetricsCommandInput,
  type ListFleetMetricsCommandOutput,
  ListIndicesCommand,
  type ListIndicesCommandInput,
  type ListIndicesCommandOutput,
  ListJobExecutionsForJobCommand,
  type ListJobExecutionsForJobCommandInput,
  type ListJobExecutionsForJobCommandOutput,
  ListJobExecutionsForThingCommand,
  type ListJobExecutionsForThingCommandInput,
  type ListJobExecutionsForThingCommandOutput,
  ListJobsCommand,
  type ListJobsCommandInput,
  type ListJobsCommandOutput,
  ListJobTemplatesCommand,
  type ListJobTemplatesCommandInput,
  type ListJobTemplatesCommandOutput,
  ListManagedJobTemplatesCommand,
  type ListManagedJobTemplatesCommandInput,
  type ListManagedJobTemplatesCommandOutput,
  ListMetricValuesCommand,
  type ListMetricValuesCommandInput,
  type ListMetricValuesCommandOutput,
  ListMitigationActionsCommand,
  type ListMitigationActionsCommandInput,
  type ListMitigationActionsCommandOutput,
  ListOTAUpdatesCommand,
  type ListOTAUpdatesCommandInput,
  type ListOTAUpdatesCommandOutput,
  ListOutgoingCertificatesCommand,
  type ListOutgoingCertificatesCommandInput,
  type ListOutgoingCertificatesCommandOutput,
  ListPackagesCommand,
  type ListPackagesCommandInput,
  type ListPackagesCommandOutput,
  ListPackageVersionsCommand,
  type ListPackageVersionsCommandInput,
  type ListPackageVersionsCommandOutput,
  ListPoliciesCommand,
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPolicyPrincipalsCommand,
  type ListPolicyPrincipalsCommandInput,
  type ListPolicyPrincipalsCommandOutput,
  ListPolicyVersionsCommand,
  type ListPolicyVersionsCommandInput,
  type ListPolicyVersionsCommandOutput,
  ListPrincipalPoliciesCommand,
  type ListPrincipalPoliciesCommandInput,
  type ListPrincipalPoliciesCommandOutput,
  ListPrincipalThingsCommand,
  type ListPrincipalThingsCommandInput,
  type ListPrincipalThingsCommandOutput,
  ListPrincipalThingsV2Command,
  type ListPrincipalThingsV2CommandInput,
  type ListPrincipalThingsV2CommandOutput,
  ListProvisioningTemplatesCommand,
  type ListProvisioningTemplatesCommandInput,
  type ListProvisioningTemplatesCommandOutput,
  ListProvisioningTemplateVersionsCommand,
  type ListProvisioningTemplateVersionsCommandInput,
  type ListProvisioningTemplateVersionsCommandOutput,
  ListRelatedResourcesForAuditFindingCommand,
  type ListRelatedResourcesForAuditFindingCommandInput,
  type ListRelatedResourcesForAuditFindingCommandOutput,
  ListRoleAliasesCommand,
  type ListRoleAliasesCommandInput,
  type ListRoleAliasesCommandOutput,
  ListSbomValidationResultsCommand,
  type ListSbomValidationResultsCommandInput,
  type ListSbomValidationResultsCommandOutput,
  ListScheduledAuditsCommand,
  type ListScheduledAuditsCommandInput,
  type ListScheduledAuditsCommandOutput,
  ListSecurityProfilesCommand,
  type ListSecurityProfilesCommandInput,
  type ListSecurityProfilesCommandOutput,
  ListSecurityProfilesForTargetCommand,
  type ListSecurityProfilesForTargetCommandInput,
  type ListSecurityProfilesForTargetCommandOutput,
  ListStreamsCommand,
  type ListStreamsCommandInput,
  type ListStreamsCommandOutput,
  ListTagsForResourceCommand,
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTargetsForPolicyCommand,
  type ListTargetsForPolicyCommandInput,
  type ListTargetsForPolicyCommandOutput,
  ListTargetsForSecurityProfileCommand,
  type ListTargetsForSecurityProfileCommandInput,
  type ListTargetsForSecurityProfileCommandOutput,
  ListThingGroupsCommand,
  type ListThingGroupsCommandInput,
  type ListThingGroupsCommandOutput,
  ListThingGroupsForThingCommand,
  type ListThingGroupsForThingCommandInput,
  type ListThingGroupsForThingCommandOutput,
  ListThingPrincipalsCommand,
  type ListThingPrincipalsCommandInput,
  type ListThingPrincipalsCommandOutput,
  ListThingPrincipalsV2Command,
  type ListThingPrincipalsV2CommandInput,
  type ListThingPrincipalsV2CommandOutput,
  ListThingRegistrationTaskReportsCommand,
  type ListThingRegistrationTaskReportsCommandInput,
  type ListThingRegistrationTaskReportsCommandOutput,
  ListThingRegistrationTasksCommand,
  type ListThingRegistrationTasksCommandInput,
  type ListThingRegistrationTasksCommandOutput,
  ListThingsCommand,
  type ListThingsCommandInput,
  type ListThingsCommandOutput,
  ListThingsInBillingGroupCommand,
  type ListThingsInBillingGroupCommandInput,
  type ListThingsInBillingGroupCommandOutput,
  ListThingsInThingGroupCommand,
  type ListThingsInThingGroupCommandInput,
  type ListThingsInThingGroupCommandOutput,
  ListThingTypesCommand,
  type ListThingTypesCommandInput,
  type ListThingTypesCommandOutput,
  ListTopicRuleDestinationsCommand,
  type ListTopicRuleDestinationsCommandInput,
  type ListTopicRuleDestinationsCommandOutput,
  ListTopicRulesCommand,
  type ListTopicRulesCommandInput,
  type ListTopicRulesCommandOutput,
  ListV2LoggingLevelsCommand,
  type ListV2LoggingLevelsCommandInput,
  type ListV2LoggingLevelsCommandOutput,
  ListViolationEventsCommand,
  type ListViolationEventsCommandInput,
  type ListViolationEventsCommandOutput,
  PutVerificationStateOnViolationCommand,
  type PutVerificationStateOnViolationCommandInput,
  type PutVerificationStateOnViolationCommandOutput,
  RegisterCACertificateCommand,
  type RegisterCACertificateCommandInput,
  type RegisterCACertificateCommandOutput,
  RegisterCertificateCommand,
  type RegisterCertificateCommandInput,
  type RegisterCertificateCommandOutput,
  RegisterCertificateWithoutCACommand,
  type RegisterCertificateWithoutCACommandInput,
  type RegisterCertificateWithoutCACommandOutput,
  RegisterThingCommand,
  type RegisterThingCommandInput,
  type RegisterThingCommandOutput,
  RejectCertificateTransferCommand,
  type RejectCertificateTransferCommandInput,
  type RejectCertificateTransferCommandOutput,
  RemoveThingFromBillingGroupCommand,
  type RemoveThingFromBillingGroupCommandInput,
  type RemoveThingFromBillingGroupCommandOutput,
  RemoveThingFromThingGroupCommand,
  type RemoveThingFromThingGroupCommandInput,
  type RemoveThingFromThingGroupCommandOutput,
  ReplaceTopicRuleCommand,
  type ReplaceTopicRuleCommandInput,
  type ReplaceTopicRuleCommandOutput,
  SearchIndexCommand,
  type SearchIndexCommandInput,
  type SearchIndexCommandOutput,
  SetDefaultAuthorizerCommand,
  type SetDefaultAuthorizerCommandInput,
  type SetDefaultAuthorizerCommandOutput,
  SetDefaultPolicyVersionCommand,
  type SetDefaultPolicyVersionCommandInput,
  type SetDefaultPolicyVersionCommandOutput,
  SetLoggingOptionsCommand,
  type SetLoggingOptionsCommandInput,
  type SetLoggingOptionsCommandOutput,
  SetV2LoggingLevelCommand,
  type SetV2LoggingLevelCommandInput,
  type SetV2LoggingLevelCommandOutput,
  SetV2LoggingOptionsCommand,
  type SetV2LoggingOptionsCommandInput,
  type SetV2LoggingOptionsCommandOutput,
  StartAuditMitigationActionsTaskCommand,
  type StartAuditMitigationActionsTaskCommandInput,
  type StartAuditMitigationActionsTaskCommandOutput,
  StartDetectMitigationActionsTaskCommand,
  type StartDetectMitigationActionsTaskCommandInput,
  type StartDetectMitigationActionsTaskCommandOutput,
  StartOnDemandAuditTaskCommand,
  type StartOnDemandAuditTaskCommandInput,
  type StartOnDemandAuditTaskCommandOutput,
  StartThingRegistrationTaskCommand,
  type StartThingRegistrationTaskCommandInput,
  type StartThingRegistrationTaskCommandOutput,
  StopThingRegistrationTaskCommand,
  type StopThingRegistrationTaskCommandInput,
  type StopThingRegistrationTaskCommandOutput,
  TagResourceCommand,
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TestAuthorizationCommand,
  type TestAuthorizationCommandInput,
  type TestAuthorizationCommandOutput,
  TestInvokeAuthorizerCommand,
  type TestInvokeAuthorizerCommandInput,
  type TestInvokeAuthorizerCommandOutput,
  TransferCertificateCommand,
  type TransferCertificateCommandInput,
  type TransferCertificateCommandOutput,
  UntagResourceCommand,
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UpdateAccountAuditConfigurationCommand,
  type UpdateAccountAuditConfigurationCommandInput,
  type UpdateAccountAuditConfigurationCommandOutput,
  UpdateAuditSuppressionCommand,
  type UpdateAuditSuppressionCommandInput,
  type UpdateAuditSuppressionCommandOutput,
  UpdateAuthorizerCommand,
  type UpdateAuthorizerCommandInput,
  type UpdateAuthorizerCommandOutput,
  UpdateBillingGroupCommand,
  type UpdateBillingGroupCommandInput,
  type UpdateBillingGroupCommandOutput,
  UpdateCACertificateCommand,
  type UpdateCACertificateCommandInput,
  type UpdateCACertificateCommandOutput,
  UpdateCertificateCommand,
  type UpdateCertificateCommandInput,
  type UpdateCertificateCommandOutput,
  UpdateCertificateProviderCommand,
  type UpdateCertificateProviderCommandInput,
  type UpdateCertificateProviderCommandOutput,
  UpdateCommandCommand,
  type UpdateCommandCommandInput,
  type UpdateCommandCommandOutput,
  UpdateCustomMetricCommand,
  type UpdateCustomMetricCommandInput,
  type UpdateCustomMetricCommandOutput,
  UpdateDimensionCommand,
  type UpdateDimensionCommandInput,
  type UpdateDimensionCommandOutput,
  UpdateDomainConfigurationCommand,
  type UpdateDomainConfigurationCommandInput,
  type UpdateDomainConfigurationCommandOutput,
  UpdateDynamicThingGroupCommand,
  type UpdateDynamicThingGroupCommandInput,
  type UpdateDynamicThingGroupCommandOutput,
  UpdateEventConfigurationsCommand,
  type UpdateEventConfigurationsCommandInput,
  type UpdateEventConfigurationsCommandOutput,
  UpdateFleetMetricCommand,
  type UpdateFleetMetricCommandInput,
  type UpdateFleetMetricCommandOutput,
  UpdateIndexingConfigurationCommand,
  type UpdateIndexingConfigurationCommandInput,
  type UpdateIndexingConfigurationCommandOutput,
  UpdateJobCommand,
  type UpdateJobCommandInput,
  type UpdateJobCommandOutput,
  UpdateMitigationActionCommand,
  type UpdateMitigationActionCommandInput,
  type UpdateMitigationActionCommandOutput,
  UpdatePackageCommand,
  type UpdatePackageCommandInput,
  type UpdatePackageCommandOutput,
  UpdatePackageConfigurationCommand,
  type UpdatePackageConfigurationCommandInput,
  type UpdatePackageConfigurationCommandOutput,
  UpdatePackageVersionCommand,
  type UpdatePackageVersionCommandInput,
  type UpdatePackageVersionCommandOutput,
  UpdateProvisioningTemplateCommand,
  type UpdateProvisioningTemplateCommandInput,
  type UpdateProvisioningTemplateCommandOutput,
  UpdateRoleAliasCommand,
  type UpdateRoleAliasCommandInput,
  type UpdateRoleAliasCommandOutput,
  UpdateScheduledAuditCommand,
  type UpdateScheduledAuditCommandInput,
  type UpdateScheduledAuditCommandOutput,
  UpdateSecurityProfileCommand,
  type UpdateSecurityProfileCommandInput,
  type UpdateSecurityProfileCommandOutput,
  UpdateStreamCommand,
  type UpdateStreamCommandInput,
  type UpdateStreamCommandOutput,
  UpdateThingCommand,
  type UpdateThingCommandInput,
  type UpdateThingCommandOutput,
  UpdateThingGroupCommand,
  type UpdateThingGroupCommandInput,
  type UpdateThingGroupCommandOutput,
  UpdateThingGroupsForThingCommand,
  type UpdateThingGroupsForThingCommandInput,
  type UpdateThingGroupsForThingCommandOutput,
  UpdateThingTypeCommand,
  type UpdateThingTypeCommandInput,
  type UpdateThingTypeCommandOutput,
  UpdateTopicRuleDestinationCommand,
  type UpdateTopicRuleDestinationCommandInput,
  type UpdateTopicRuleDestinationCommandOutput,
  ValidateSecurityProfileBehaviorsCommand,
  type ValidateSecurityProfileBehaviorsCommandInput,
  type ValidateSecurityProfileBehaviorsCommandOutput,
} from "@aws-sdk/client-iot";
import type { HttpHandlerOptions, SdkError, ServiceLogger } from "@effect-aws/commons";
import { Service } from "@effect-aws/commons";
import type { Cause } from "effect";
import { Effect, Layer } from "effect";
import type {
  CertificateConflictError,
  CertificateStateError,
  CertificateValidationError,
  ConflictError,
  ConflictingResourceUpdateError,
  DeleteConflictError,
  IndexNotReadyError,
  InternalError,
  InternalFailureError,
  InternalServerError,
  InvalidAggregationError,
  InvalidQueryError,
  InvalidRequestError,
  InvalidResponseError,
  InvalidStateTransitionError,
  LimitExceededError,
  MalformedPolicyError,
  NotConfiguredError,
  RegistrationCodeValidationError,
  ResourceAlreadyExistsError,
  ResourceNotFoundError,
  ResourceRegistrationFailureError,
  ServiceQuotaExceededError,
  ServiceUnavailableError,
  SqlParseError,
  TaskAlreadyExistsError,
  ThrottlingError,
  TransferAlreadyCompletedError,
  TransferConflictError,
  UnauthorizedError,
  ValidationError,
  VersionConflictError,
  VersionsLimitExceededError,
} from "./Errors.js";
import { AllServiceErrors } from "./Errors.js";
import * as Instance from "./IoTClientInstance.js";
import * as IoTServiceConfig from "./IoTServiceConfig.js";

const commands = {
  AcceptCertificateTransferCommand,
  AddThingToBillingGroupCommand,
  AddThingToThingGroupCommand,
  AssociateSbomWithPackageVersionCommand,
  AssociateTargetsWithJobCommand,
  AttachPolicyCommand,
  AttachPrincipalPolicyCommand,
  AttachSecurityProfileCommand,
  AttachThingPrincipalCommand,
  CancelAuditMitigationActionsTaskCommand,
  CancelAuditTaskCommand,
  CancelCertificateTransferCommand,
  CancelDetectMitigationActionsTaskCommand,
  CancelJobCommand,
  CancelJobExecutionCommand,
  ClearDefaultAuthorizerCommand,
  ConfirmTopicRuleDestinationCommand,
  CreateAuditSuppressionCommand,
  CreateAuthorizerCommand,
  CreateBillingGroupCommand,
  CreateCertificateFromCsrCommand,
  CreateCertificateProviderCommand,
  CreateCommandCommand,
  CreateCustomMetricCommand,
  CreateDimensionCommand,
  CreateDomainConfigurationCommand,
  CreateDynamicThingGroupCommand,
  CreateFleetMetricCommand,
  CreateJobCommand,
  CreateJobTemplateCommand,
  CreateKeysAndCertificateCommand,
  CreateMitigationActionCommand,
  CreateOTAUpdateCommand,
  CreatePackageCommand,
  CreatePackageVersionCommand,
  CreatePolicyCommand,
  CreatePolicyVersionCommand,
  CreateProvisioningClaimCommand,
  CreateProvisioningTemplateCommand,
  CreateProvisioningTemplateVersionCommand,
  CreateRoleAliasCommand,
  CreateScheduledAuditCommand,
  CreateSecurityProfileCommand,
  CreateStreamCommand,
  CreateThingCommand,
  CreateThingGroupCommand,
  CreateThingTypeCommand,
  CreateTopicRuleCommand,
  CreateTopicRuleDestinationCommand,
  DeleteAccountAuditConfigurationCommand,
  DeleteAuditSuppressionCommand,
  DeleteAuthorizerCommand,
  DeleteBillingGroupCommand,
  DeleteCACertificateCommand,
  DeleteCertificateCommand,
  DeleteCertificateProviderCommand,
  DeleteCommandCommand,
  DeleteCommandExecutionCommand,
  DeleteCustomMetricCommand,
  DeleteDimensionCommand,
  DeleteDomainConfigurationCommand,
  DeleteDynamicThingGroupCommand,
  DeleteFleetMetricCommand,
  DeleteJobCommand,
  DeleteJobExecutionCommand,
  DeleteJobTemplateCommand,
  DeleteMitigationActionCommand,
  DeleteOTAUpdateCommand,
  DeletePackageCommand,
  DeletePackageVersionCommand,
  DeletePolicyCommand,
  DeletePolicyVersionCommand,
  DeleteProvisioningTemplateCommand,
  DeleteProvisioningTemplateVersionCommand,
  DeleteRegistrationCodeCommand,
  DeleteRoleAliasCommand,
  DeleteScheduledAuditCommand,
  DeleteSecurityProfileCommand,
  DeleteStreamCommand,
  DeleteThingCommand,
  DeleteThingGroupCommand,
  DeleteThingTypeCommand,
  DeleteTopicRuleCommand,
  DeleteTopicRuleDestinationCommand,
  DeleteV2LoggingLevelCommand,
  DeprecateThingTypeCommand,
  DescribeAccountAuditConfigurationCommand,
  DescribeAuditFindingCommand,
  DescribeAuditMitigationActionsTaskCommand,
  DescribeAuditSuppressionCommand,
  DescribeAuditTaskCommand,
  DescribeAuthorizerCommand,
  DescribeBillingGroupCommand,
  DescribeCACertificateCommand,
  DescribeCertificateCommand,
  DescribeCertificateProviderCommand,
  DescribeCustomMetricCommand,
  DescribeDefaultAuthorizerCommand,
  DescribeDetectMitigationActionsTaskCommand,
  DescribeDimensionCommand,
  DescribeDomainConfigurationCommand,
  DescribeEndpointCommand,
  DescribeEventConfigurationsCommand,
  DescribeFleetMetricCommand,
  DescribeIndexCommand,
  DescribeJobCommand,
  DescribeJobExecutionCommand,
  DescribeJobTemplateCommand,
  DescribeManagedJobTemplateCommand,
  DescribeMitigationActionCommand,
  DescribeProvisioningTemplateCommand,
  DescribeProvisioningTemplateVersionCommand,
  DescribeRoleAliasCommand,
  DescribeScheduledAuditCommand,
  DescribeSecurityProfileCommand,
  DescribeStreamCommand,
  DescribeThingCommand,
  DescribeThingGroupCommand,
  DescribeThingRegistrationTaskCommand,
  DescribeThingTypeCommand,
  DetachPolicyCommand,
  DetachPrincipalPolicyCommand,
  DetachSecurityProfileCommand,
  DetachThingPrincipalCommand,
  DisableTopicRuleCommand,
  DisassociateSbomFromPackageVersionCommand,
  EnableTopicRuleCommand,
  GetBehaviorModelTrainingSummariesCommand,
  GetBucketsAggregationCommand,
  GetCardinalityCommand,
  GetCommandCommand,
  GetCommandExecutionCommand,
  GetEffectivePoliciesCommand,
  GetIndexingConfigurationCommand,
  GetJobDocumentCommand,
  GetLoggingOptionsCommand,
  GetOTAUpdateCommand,
  GetPackageCommand,
  GetPackageConfigurationCommand,
  GetPackageVersionCommand,
  GetPercentilesCommand,
  GetPolicyCommand,
  GetPolicyVersionCommand,
  GetRegistrationCodeCommand,
  GetStatisticsCommand,
  GetThingConnectivityDataCommand,
  GetTopicRuleCommand,
  GetTopicRuleDestinationCommand,
  GetV2LoggingOptionsCommand,
  ListActiveViolationsCommand,
  ListAttachedPoliciesCommand,
  ListAuditFindingsCommand,
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsTasksCommand,
  ListAuditSuppressionsCommand,
  ListAuditTasksCommand,
  ListAuthorizersCommand,
  ListBillingGroupsCommand,
  ListCACertificatesCommand,
  ListCertificateProvidersCommand,
  ListCertificatesCommand,
  ListCertificatesByCACommand,
  ListCommandExecutionsCommand,
  ListCommandsCommand,
  ListCustomMetricsCommand,
  ListDetectMitigationActionsExecutionsCommand,
  ListDetectMitigationActionsTasksCommand,
  ListDimensionsCommand,
  ListDomainConfigurationsCommand,
  ListFleetMetricsCommand,
  ListIndicesCommand,
  ListJobExecutionsForJobCommand,
  ListJobExecutionsForThingCommand,
  ListJobTemplatesCommand,
  ListJobsCommand,
  ListManagedJobTemplatesCommand,
  ListMetricValuesCommand,
  ListMitigationActionsCommand,
  ListOTAUpdatesCommand,
  ListOutgoingCertificatesCommand,
  ListPackageVersionsCommand,
  ListPackagesCommand,
  ListPoliciesCommand,
  ListPolicyPrincipalsCommand,
  ListPolicyVersionsCommand,
  ListPrincipalPoliciesCommand,
  ListPrincipalThingsCommand,
  ListPrincipalThingsV2Command,
  ListProvisioningTemplateVersionsCommand,
  ListProvisioningTemplatesCommand,
  ListRelatedResourcesForAuditFindingCommand,
  ListRoleAliasesCommand,
  ListSbomValidationResultsCommand,
  ListScheduledAuditsCommand,
  ListSecurityProfilesCommand,
  ListSecurityProfilesForTargetCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  ListTargetsForPolicyCommand,
  ListTargetsForSecurityProfileCommand,
  ListThingGroupsCommand,
  ListThingGroupsForThingCommand,
  ListThingPrincipalsCommand,
  ListThingPrincipalsV2Command,
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTasksCommand,
  ListThingTypesCommand,
  ListThingsCommand,
  ListThingsInBillingGroupCommand,
  ListThingsInThingGroupCommand,
  ListTopicRuleDestinationsCommand,
  ListTopicRulesCommand,
  ListV2LoggingLevelsCommand,
  ListViolationEventsCommand,
  PutVerificationStateOnViolationCommand,
  RegisterCACertificateCommand,
  RegisterCertificateCommand,
  RegisterCertificateWithoutCACommand,
  RegisterThingCommand,
  RejectCertificateTransferCommand,
  RemoveThingFromBillingGroupCommand,
  RemoveThingFromThingGroupCommand,
  ReplaceTopicRuleCommand,
  SearchIndexCommand,
  SetDefaultAuthorizerCommand,
  SetDefaultPolicyVersionCommand,
  SetLoggingOptionsCommand,
  SetV2LoggingLevelCommand,
  SetV2LoggingOptionsCommand,
  StartAuditMitigationActionsTaskCommand,
  StartDetectMitigationActionsTaskCommand,
  StartOnDemandAuditTaskCommand,
  StartThingRegistrationTaskCommand,
  StopThingRegistrationTaskCommand,
  TagResourceCommand,
  TestAuthorizationCommand,
  TestInvokeAuthorizerCommand,
  TransferCertificateCommand,
  UntagResourceCommand,
  UpdateAccountAuditConfigurationCommand,
  UpdateAuditSuppressionCommand,
  UpdateAuthorizerCommand,
  UpdateBillingGroupCommand,
  UpdateCACertificateCommand,
  UpdateCertificateCommand,
  UpdateCertificateProviderCommand,
  UpdateCommandCommand,
  UpdateCustomMetricCommand,
  UpdateDimensionCommand,
  UpdateDomainConfigurationCommand,
  UpdateDynamicThingGroupCommand,
  UpdateEventConfigurationsCommand,
  UpdateFleetMetricCommand,
  UpdateIndexingConfigurationCommand,
  UpdateJobCommand,
  UpdateMitigationActionCommand,
  UpdatePackageCommand,
  UpdatePackageConfigurationCommand,
  UpdatePackageVersionCommand,
  UpdateProvisioningTemplateCommand,
  UpdateRoleAliasCommand,
  UpdateScheduledAuditCommand,
  UpdateSecurityProfileCommand,
  UpdateStreamCommand,
  UpdateThingCommand,
  UpdateThingGroupCommand,
  UpdateThingGroupsForThingCommand,
  UpdateThingTypeCommand,
  UpdateTopicRuleDestinationCommand,
  ValidateSecurityProfileBehaviorsCommand,
};

interface IoTService$ {
  readonly _: unique symbol;

  /**
   * @see {@link AcceptCertificateTransferCommand}
   */
  acceptCertificateTransfer(
    args: AcceptCertificateTransferCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AcceptCertificateTransferCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | TransferAlreadyCompletedError
    | UnauthorizedError
  >;

  /**
   * @see {@link AddThingToBillingGroupCommand}
   */
  addThingToBillingGroup(
    args: AddThingToBillingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddThingToBillingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link AddThingToThingGroupCommand}
   */
  addThingToThingGroup(
    args: AddThingToThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AddThingToThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link AssociateSbomWithPackageVersionCommand}
   */
  associateSbomWithPackageVersion(
    args: AssociateSbomWithPackageVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateSbomWithPackageVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link AssociateTargetsWithJobCommand}
   */
  associateTargetsWithJob(
    args: AssociateTargetsWithJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AssociateTargetsWithJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link AttachPolicyCommand}
   */
  attachPolicy(
    args: AttachPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link AttachPrincipalPolicyCommand}
   */
  attachPrincipalPolicy(
    args: AttachPrincipalPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachPrincipalPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link AttachSecurityProfileCommand}
   */
  attachSecurityProfile(
    args: AttachSecurityProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachSecurityProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link AttachThingPrincipalCommand}
   */
  attachThingPrincipal(
    args: AttachThingPrincipalCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    AttachThingPrincipalCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CancelAuditMitigationActionsTaskCommand}
   */
  cancelAuditMitigationActionsTask(
    args: CancelAuditMitigationActionsTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelAuditMitigationActionsTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CancelAuditTaskCommand}
   */
  cancelAuditTask(
    args: CancelAuditTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelAuditTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CancelCertificateTransferCommand}
   */
  cancelCertificateTransfer(
    args: CancelCertificateTransferCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelCertificateTransferCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | TransferAlreadyCompletedError
    | UnauthorizedError
  >;

  /**
   * @see {@link CancelDetectMitigationActionsTaskCommand}
   */
  cancelDetectMitigationActionsTask(
    args: CancelDetectMitigationActionsTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelDetectMitigationActionsTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CancelJobCommand}
   */
  cancelJob(
    args: CancelJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link CancelJobExecutionCommand}
   */
  cancelJobExecution(
    args: CancelJobExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CancelJobExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | InvalidStateTransitionError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link ClearDefaultAuthorizerCommand}
   */
  clearDefaultAuthorizer(
    args: ClearDefaultAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ClearDefaultAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ConfirmTopicRuleDestinationCommand}
   */
  confirmTopicRuleDestination(
    args: ConfirmTopicRuleDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ConfirmTopicRuleDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateAuditSuppressionCommand}
   */
  createAuditSuppression(
    args: CreateAuditSuppressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAuditSuppressionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateAuthorizerCommand}
   */
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateBillingGroupCommand}
   */
  createBillingGroup(
    args: CreateBillingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateBillingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateCertificateFromCsrCommand}
   */
  createCertificateFromCsr(
    args: CreateCertificateFromCsrCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCertificateFromCsrCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateCertificateProviderCommand}
   */
  createCertificateProvider(
    args: CreateCertificateProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCertificateProviderCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateCommandCommand}
   */
  createCommand(
    args: CreateCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCommandCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreateCustomMetricCommand}
   */
  createCustomMetric(
    args: CreateCustomMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateCustomMetricCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateDimensionCommand}
   */
  createDimension(
    args: CreateDimensionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDimensionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateDomainConfigurationCommand}
   */
  createDomainConfiguration(
    args: CreateDomainConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDomainConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateValidationError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateDynamicThingGroupCommand}
   */
  createDynamicThingGroup(
    args: CreateDynamicThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateDynamicThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidQueryError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateFleetMetricCommand}
   */
  createFleetMetric(
    args: CreateFleetMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateFleetMetricCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidAggregationError
    | InvalidQueryError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateJobCommand}
   */
  createJob(
    args: CreateJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateJobTemplateCommand}
   */
  createJobTemplate(
    args: CreateJobTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateJobTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateKeysAndCertificateCommand}
   */
  createKeysAndCertificate(
    args: CreateKeysAndCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateKeysAndCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateMitigationActionCommand}
   */
  createMitigationAction(
    args: CreateMitigationActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateMitigationActionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateOTAUpdateCommand}
   */
  createOTAUpdate(
    args: CreateOTAUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateOTAUpdateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreatePackageCommand}
   */
  createPackage(
    args: CreatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePackageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePackageVersionCommand}
   */
  createPackageVersion(
    args: CreatePackageVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePackageVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ServiceQuotaExceededError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MalformedPolicyError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreatePolicyVersionCommand}
   */
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreatePolicyVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | MalformedPolicyError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | VersionsLimitExceededError
  >;

  /**
   * @see {@link CreateProvisioningClaimCommand}
   */
  createProvisioningClaim(
    args: CreateProvisioningClaimCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateProvisioningClaimCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateProvisioningTemplateCommand}
   */
  createProvisioningTemplate(
    args: CreateProvisioningTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateProvisioningTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateProvisioningTemplateVersionCommand}
   */
  createProvisioningTemplateVersion(
    args: CreateProvisioningTemplateVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateProvisioningTemplateVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
    | VersionsLimitExceededError
  >;

  /**
   * @see {@link CreateRoleAliasCommand}
   */
  createRoleAlias(
    args: CreateRoleAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateRoleAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateScheduledAuditCommand}
   */
  createScheduledAudit(
    args: CreateScheduledAuditCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateScheduledAuditCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateSecurityProfileCommand}
   */
  createSecurityProfile(
    args: CreateSecurityProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateSecurityProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateStreamCommand}
   */
  createStream(
    args: CreateStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateThingCommand}
   */
  createThing(
    args: CreateThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateThingGroupCommand}
   */
  createThingGroup(
    args: CreateThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link CreateThingTypeCommand}
   */
  createThingType(
    args: CreateThingTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateThingTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link CreateTopicRuleCommand}
   */
  createTopicRule(
    args: CreateTopicRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTopicRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | SqlParseError
  >;

  /**
   * @see {@link CreateTopicRuleDestinationCommand}
   */
  createTopicRuleDestination(
    args: CreateTopicRuleDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    CreateTopicRuleDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link DeleteAccountAuditConfigurationCommand}
   */
  deleteAccountAuditConfiguration(
    args: DeleteAccountAuditConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAccountAuditConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteAuditSuppressionCommand}
   */
  deleteAuditSuppression(
    args: DeleteAuditSuppressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAuditSuppressionCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link DeleteAuthorizerCommand}
   */
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteBillingGroupCommand}
   */
  deleteBillingGroup(
    args: DeleteBillingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteBillingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link DeleteCACertificateCommand}
   */
  deleteCACertificate(
    args: DeleteCACertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCACertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateStateError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteCertificateCommand}
   */
  deleteCertificate(
    args: DeleteCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateStateError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteCertificateProviderCommand}
   */
  deleteCertificateProvider(
    args: DeleteCertificateProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCertificateProviderCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteCommandCommand}
   */
  deleteCommand(
    args: DeleteCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCommandCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DeleteCommandExecutionCommand}
   */
  deleteCommandExecution(
    args: DeleteCommandExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCommandExecutionCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DeleteCustomMetricCommand}
   */
  deleteCustomMetric(
    args: DeleteCustomMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteCustomMetricCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link DeleteDimensionCommand}
   */
  deleteDimension(
    args: DeleteDimensionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDimensionCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link DeleteDomainConfigurationCommand}
   */
  deleteDomainConfiguration(
    args: DeleteDomainConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDomainConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteDynamicThingGroupCommand}
   */
  deleteDynamicThingGroup(
    args: DeleteDynamicThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteDynamicThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link DeleteFleetMetricCommand}
   */
  deleteFleetMetric(
    args: DeleteFleetMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteFleetMetricCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | VersionConflictError
  >;

  /**
   * @see {@link DeleteJobCommand}
   */
  deleteJob(
    args: DeleteJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | InvalidStateTransitionError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteJobExecutionCommand}
   */
  deleteJobExecution(
    args: DeleteJobExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteJobExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | InvalidStateTransitionError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteJobTemplateCommand}
   */
  deleteJobTemplate(
    args: DeleteJobTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteJobTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteMitigationActionCommand}
   */
  deleteMitigationAction(
    args: DeleteMitigationActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteMitigationActionCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link DeleteOTAUpdateCommand}
   */
  deleteOTAUpdate(
    args: DeleteOTAUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteOTAUpdateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | VersionConflictError
  >;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(
    args: DeletePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePackageCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DeletePackageVersionCommand}
   */
  deletePackageVersion(
    args: DeletePackageVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePackageVersionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeletePolicyVersionCommand}
   */
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeletePolicyVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteProvisioningTemplateCommand}
   */
  deleteProvisioningTemplate(
    args: DeleteProvisioningTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisioningTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteProvisioningTemplateVersionCommand}
   */
  deleteProvisioningTemplateVersion(
    args: DeleteProvisioningTemplateVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteProvisioningTemplateVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteRegistrationCodeCommand}
   */
  deleteRegistrationCode(
    args: DeleteRegistrationCodeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRegistrationCodeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteRoleAliasCommand}
   */
  deleteRoleAlias(
    args: DeleteRoleAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteRoleAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteScheduledAuditCommand}
   */
  deleteScheduledAudit(
    args: DeleteScheduledAuditCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteScheduledAuditCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DeleteSecurityProfileCommand}
   */
  deleteSecurityProfile(
    args: DeleteSecurityProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteSecurityProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link DeleteStreamCommand}
   */
  deleteStream(
    args: DeleteStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | DeleteConflictError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteThingCommand}
   */
  deleteThing(
    args: DeleteThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | VersionConflictError
  >;

  /**
   * @see {@link DeleteThingGroupCommand}
   */
  deleteThingGroup(
    args: DeleteThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link DeleteThingTypeCommand}
   */
  deleteThingType(
    args: DeleteThingTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteThingTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteTopicRuleCommand}
   */
  deleteTopicRule(
    args: DeleteTopicRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTopicRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteTopicRuleDestinationCommand}
   */
  deleteTopicRuleDestination(
    args: DeleteTopicRuleDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteTopicRuleDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link DeleteV2LoggingLevelCommand}
   */
  deleteV2LoggingLevel(
    args: DeleteV2LoggingLevelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeleteV2LoggingLevelCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | InvalidRequestError | ServiceUnavailableError
  >;

  /**
   * @see {@link DeprecateThingTypeCommand}
   */
  deprecateThingType(
    args: DeprecateThingTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DeprecateThingTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeAccountAuditConfigurationCommand}
   */
  describeAccountAuditConfiguration(
    args: DescribeAccountAuditConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAccountAuditConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | ThrottlingError
  >;

  /**
   * @see {@link DescribeAuditFindingCommand}
   */
  describeAuditFinding(
    args: DescribeAuditFindingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAuditFindingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeAuditMitigationActionsTaskCommand}
   */
  describeAuditMitigationActionsTask(
    args: DescribeAuditMitigationActionsTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAuditMitigationActionsTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeAuditSuppressionCommand}
   */
  describeAuditSuppression(
    args: DescribeAuditSuppressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAuditSuppressionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeAuditTaskCommand}
   */
  describeAuditTask(
    args: DescribeAuditTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAuditTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeAuthorizerCommand}
   */
  describeAuthorizer(
    args: DescribeAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeBillingGroupCommand}
   */
  describeBillingGroup(
    args: DescribeBillingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeBillingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeCACertificateCommand}
   */
  describeCACertificate(
    args: DescribeCACertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCACertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeCertificateCommand}
   */
  describeCertificate(
    args: DescribeCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeCertificateProviderCommand}
   */
  describeCertificateProvider(
    args: DescribeCertificateProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCertificateProviderCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeCustomMetricCommand}
   */
  describeCustomMetric(
    args: DescribeCustomMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeCustomMetricCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeDefaultAuthorizerCommand}
   */
  describeDefaultAuthorizer(
    args: DescribeDefaultAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDefaultAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeDetectMitigationActionsTaskCommand}
   */
  describeDetectMitigationActionsTask(
    args: DescribeDetectMitigationActionsTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDetectMitigationActionsTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeDimensionCommand}
   */
  describeDimension(
    args: DescribeDimensionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDimensionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeDomainConfigurationCommand}
   */
  describeDomainConfiguration(
    args: DescribeDomainConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeDomainConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEndpointCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError | UnauthorizedError
  >;

  /**
   * @see {@link DescribeEventConfigurationsCommand}
   */
  describeEventConfigurations(
    args: DescribeEventConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeEventConfigurationsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | ThrottlingError
  >;

  /**
   * @see {@link DescribeFleetMetricCommand}
   */
  describeFleetMetric(
    args: DescribeFleetMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeFleetMetricCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeIndexCommand}
   */
  describeIndex(
    args: DescribeIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeIndexCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeJobCommand}
   */
  describeJob(
    args: DescribeJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeJobExecutionCommand}
   */
  describeJobExecution(
    args: DescribeJobExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeJobExecutionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeJobTemplateCommand}
   */
  describeJobTemplate(
    args: DescribeJobTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeJobTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeManagedJobTemplateCommand}
   */
  describeManagedJobTemplate(
    args: DescribeManagedJobTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeManagedJobTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServerError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeMitigationActionCommand}
   */
  describeMitigationAction(
    args: DescribeMitigationActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeMitigationActionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeProvisioningTemplateCommand}
   */
  describeProvisioningTemplate(
    args: DescribeProvisioningTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeProvisioningTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeProvisioningTemplateVersionCommand}
   */
  describeProvisioningTemplateVersion(
    args: DescribeProvisioningTemplateVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeProvisioningTemplateVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeRoleAliasCommand}
   */
  describeRoleAlias(
    args: DescribeRoleAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeRoleAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeScheduledAuditCommand}
   */
  describeScheduledAudit(
    args: DescribeScheduledAuditCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeScheduledAuditCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeSecurityProfileCommand}
   */
  describeSecurityProfile(
    args: DescribeSecurityProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeSecurityProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeStreamCommand}
   */
  describeStream(
    args: DescribeStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeThingCommand}
   */
  describeThing(
    args: DescribeThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeThingGroupCommand}
   */
  describeThingGroup(
    args: DescribeThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DescribeThingRegistrationTaskCommand}
   */
  describeThingRegistrationTask(
    args: DescribeThingRegistrationTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeThingRegistrationTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DescribeThingTypeCommand}
   */
  describeThingType(
    args: DescribeThingTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DescribeThingTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DetachPolicyCommand}
   */
  detachPolicy(
    args: DetachPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DetachPrincipalPolicyCommand}
   */
  detachPrincipalPolicy(
    args: DetachPrincipalPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachPrincipalPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DetachSecurityProfileCommand}
   */
  detachSecurityProfile(
    args: DetachSecurityProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachSecurityProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link DetachThingPrincipalCommand}
   */
  detachThingPrincipal(
    args: DetachThingPrincipalCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DetachThingPrincipalCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link DisableTopicRuleCommand}
   */
  disableTopicRule(
    args: DisableTopicRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisableTopicRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link DisassociateSbomFromPackageVersionCommand}
   */
  disassociateSbomFromPackageVersion(
    args: DisassociateSbomFromPackageVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    DisassociateSbomFromPackageVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link EnableTopicRuleCommand}
   */
  enableTopicRule(
    args: EnableTopicRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    EnableTopicRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetBehaviorModelTrainingSummariesCommand}
   */
  getBehaviorModelTrainingSummaries(
    args: GetBehaviorModelTrainingSummariesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBehaviorModelTrainingSummariesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link GetBucketsAggregationCommand}
   */
  getBucketsAggregation(
    args: GetBucketsAggregationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetBucketsAggregationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidAggregationError
    | InvalidQueryError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetCardinalityCommand}
   */
  getCardinality(
    args: GetCardinalityCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCardinalityCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidAggregationError
    | InvalidQueryError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetCommandCommand}
   */
  getCommand(
    args: GetCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCommandCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetCommandExecutionCommand}
   */
  getCommandExecution(
    args: GetCommandExecutionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetCommandExecutionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetEffectivePoliciesCommand}
   */
  getEffectivePolicies(
    args: GetEffectivePoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetEffectivePoliciesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetIndexingConfigurationCommand}
   */
  getIndexingConfiguration(
    args: GetIndexingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetIndexingConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetJobDocumentCommand}
   */
  getJobDocument(
    args: GetJobDocumentCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetJobDocumentCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link GetLoggingOptionsCommand}
   */
  getLoggingOptions(
    args: GetLoggingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetLoggingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | InvalidRequestError | ServiceUnavailableError
  >;

  /**
   * @see {@link GetOTAUpdateCommand}
   */
  getOTAUpdate(
    args: GetOTAUpdateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetOTAUpdateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetPackageCommand}
   */
  getPackage(
    args: GetPackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPackageCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetPackageConfigurationCommand}
   */
  getPackageConfiguration(
    args: GetPackageConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPackageConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ThrottlingError
  >;

  /**
   * @see {@link GetPackageVersionCommand}
   */
  getPackageVersion(
    args: GetPackageVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPackageVersionCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link GetPercentilesCommand}
   */
  getPercentiles(
    args: GetPercentilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPercentilesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidAggregationError
    | InvalidQueryError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetPolicyVersionCommand}
   */
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetPolicyVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetRegistrationCodeCommand}
   */
  getRegistrationCode(
    args: GetRegistrationCodeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetRegistrationCodeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetStatisticsCommand}
   */
  getStatistics(
    args: GetStatisticsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetStatisticsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidAggregationError
    | InvalidQueryError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetThingConnectivityDataCommand}
   */
  getThingConnectivityData(
    args: GetThingConnectivityDataCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetThingConnectivityDataCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetTopicRuleCommand}
   */
  getTopicRule(
    args: GetTopicRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTopicRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetTopicRuleDestinationCommand}
   */
  getTopicRuleDestination(
    args: GetTopicRuleDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetTopicRuleDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link GetV2LoggingOptionsCommand}
   */
  getV2LoggingOptions(
    args: GetV2LoggingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    GetV2LoggingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | NotConfiguredError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListActiveViolationsCommand}
   */
  listActiveViolations(
    args: ListActiveViolationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListActiveViolationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListAttachedPoliciesCommand}
   */
  listAttachedPolicies(
    args: ListAttachedPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAttachedPoliciesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListAuditFindingsCommand}
   */
  listAuditFindings(
    args: ListAuditFindingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAuditFindingsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListAuditMitigationActionsExecutionsCommand}
   */
  listAuditMitigationActionsExecutions(
    args: ListAuditMitigationActionsExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAuditMitigationActionsExecutionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListAuditMitigationActionsTasksCommand}
   */
  listAuditMitigationActionsTasks(
    args: ListAuditMitigationActionsTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAuditMitigationActionsTasksCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListAuditSuppressionsCommand}
   */
  listAuditSuppressions(
    args: ListAuditSuppressionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAuditSuppressionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListAuditTasksCommand}
   */
  listAuditTasks(
    args: ListAuditTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAuditTasksCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListAuthorizersCommand}
   */
  listAuthorizers(
    args: ListAuthorizersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListAuthorizersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListBillingGroupsCommand}
   */
  listBillingGroups(
    args: ListBillingGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListBillingGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListCACertificatesCommand}
   */
  listCACertificates(
    args: ListCACertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCACertificatesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListCertificateProvidersCommand}
   */
  listCertificateProviders(
    args: ListCertificateProvidersCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCertificateProvidersCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListCertificatesCommand}
   */
  listCertificates(
    args: ListCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCertificatesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListCertificatesByCACommand}
   */
  listCertificatesByCA(
    args: ListCertificatesByCACommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCertificatesByCACommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListCommandExecutionsCommand}
   */
  listCommandExecutions(
    args: ListCommandExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCommandExecutionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListCommandsCommand}
   */
  listCommands(
    args: ListCommandsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCommandsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListCustomMetricsCommand}
   */
  listCustomMetrics(
    args: ListCustomMetricsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListCustomMetricsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListDetectMitigationActionsExecutionsCommand}
   */
  listDetectMitigationActionsExecutions(
    args: ListDetectMitigationActionsExecutionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDetectMitigationActionsExecutionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListDetectMitigationActionsTasksCommand}
   */
  listDetectMitigationActionsTasks(
    args: ListDetectMitigationActionsTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDetectMitigationActionsTasksCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListDimensionsCommand}
   */
  listDimensions(
    args: ListDimensionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDimensionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListDomainConfigurationsCommand}
   */
  listDomainConfigurations(
    args: ListDomainConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListDomainConfigurationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListFleetMetricsCommand}
   */
  listFleetMetrics(
    args: ListFleetMetricsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListFleetMetricsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListIndicesCommand}
   */
  listIndices(
    args: ListIndicesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListIndicesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListJobExecutionsForJobCommand}
   */
  listJobExecutionsForJob(
    args: ListJobExecutionsForJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListJobExecutionsForJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListJobExecutionsForThingCommand}
   */
  listJobExecutionsForThing(
    args: ListJobExecutionsForThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListJobExecutionsForThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListJobTemplatesCommand}
   */
  listJobTemplates(
    args: ListJobTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListJobTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListJobsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link ListManagedJobTemplatesCommand}
   */
  listManagedJobTemplates(
    args: ListManagedJobTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListManagedJobTemplatesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalServerError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListMetricValuesCommand}
   */
  listMetricValues(
    args: ListMetricValuesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMetricValuesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListMitigationActionsCommand}
   */
  listMitigationActions(
    args: ListMitigationActionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListMitigationActionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListOTAUpdatesCommand}
   */
  listOTAUpdates(
    args: ListOTAUpdatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOTAUpdatesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListOutgoingCertificatesCommand}
   */
  listOutgoingCertificates(
    args: ListOutgoingCertificatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListOutgoingCertificatesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListPackageVersionsCommand}
   */
  listPackageVersions(
    args: ListPackageVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPackageVersionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPackagesCommand}
   */
  listPackages(
    args: ListPackagesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPackagesCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPoliciesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListPolicyPrincipalsCommand}
   */
  listPolicyPrincipals(
    args: ListPolicyPrincipalsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyPrincipalsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPolicyVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListPrincipalPoliciesCommand}
   */
  listPrincipalPolicies(
    args: ListPrincipalPoliciesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPrincipalPoliciesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListPrincipalThingsCommand}
   */
  listPrincipalThings(
    args: ListPrincipalThingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPrincipalThingsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListPrincipalThingsV2Command}
   */
  listPrincipalThingsV2(
    args: ListPrincipalThingsV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListPrincipalThingsV2CommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListProvisioningTemplateVersionsCommand}
   */
  listProvisioningTemplateVersions(
    args: ListProvisioningTemplateVersionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisioningTemplateVersionsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListProvisioningTemplatesCommand}
   */
  listProvisioningTemplates(
    args: ListProvisioningTemplatesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListProvisioningTemplatesCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError | UnauthorizedError
  >;

  /**
   * @see {@link ListRelatedResourcesForAuditFindingCommand}
   */
  listRelatedResourcesForAuditFinding(
    args: ListRelatedResourcesForAuditFindingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRelatedResourcesForAuditFindingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListRoleAliasesCommand}
   */
  listRoleAliases(
    args: ListRoleAliasesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListRoleAliasesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListSbomValidationResultsCommand}
   */
  listSbomValidationResults(
    args: ListSbomValidationResultsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSbomValidationResultsCommandOutput,
    Cause.TimeoutException | SdkError | InternalServerError | ResourceNotFoundError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link ListScheduledAuditsCommand}
   */
  listScheduledAudits(
    args: ListScheduledAuditsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListScheduledAuditsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link ListSecurityProfilesCommand}
   */
  listSecurityProfiles(
    args: ListSecurityProfilesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityProfilesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListSecurityProfilesForTargetCommand}
   */
  listSecurityProfilesForTarget(
    args: ListSecurityProfilesForTargetCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListSecurityProfilesForTargetCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListStreamsCommand}
   */
  listStreams(
    args: ListStreamsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListStreamsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTagsForResourceCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListTargetsForPolicyCommand}
   */
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTargetsForPolicyCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListTargetsForSecurityProfileCommand}
   */
  listTargetsForSecurityProfile(
    args: ListTargetsForSecurityProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTargetsForSecurityProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListThingGroupsCommand}
   */
  listThingGroups(
    args: ListThingGroupsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingGroupsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListThingGroupsForThingCommand}
   */
  listThingGroupsForThing(
    args: ListThingGroupsForThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingGroupsForThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListThingPrincipalsCommand}
   */
  listThingPrincipals(
    args: ListThingPrincipalsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingPrincipalsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListThingPrincipalsV2Command}
   */
  listThingPrincipalsV2(
    args: ListThingPrincipalsV2CommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingPrincipalsV2CommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListThingRegistrationTaskReportsCommand}
   */
  listThingRegistrationTaskReports(
    args: ListThingRegistrationTaskReportsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingRegistrationTaskReportsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError | UnauthorizedError
  >;

  /**
   * @see {@link ListThingRegistrationTasksCommand}
   */
  listThingRegistrationTasks(
    args: ListThingRegistrationTasksCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingRegistrationTasksCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError | UnauthorizedError
  >;

  /**
   * @see {@link ListThingTypesCommand}
   */
  listThingTypes(
    args: ListThingTypesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingTypesCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListThingsCommand}
   */
  listThings(
    args: ListThingsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListThingsInBillingGroupCommand}
   */
  listThingsInBillingGroup(
    args: ListThingsInBillingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingsInBillingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListThingsInThingGroupCommand}
   */
  listThingsInThingGroup(
    args: ListThingsInThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListThingsInThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ListTopicRuleDestinationsCommand}
   */
  listTopicRuleDestinations(
    args: ListTopicRuleDestinationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTopicRuleDestinationsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link ListTopicRulesCommand}
   */
  listTopicRules(
    args: ListTopicRulesCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListTopicRulesCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | InvalidRequestError | ServiceUnavailableError
  >;

  /**
   * @see {@link ListV2LoggingLevelsCommand}
   */
  listV2LoggingLevels(
    args: ListV2LoggingLevelsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListV2LoggingLevelsCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidRequestError
    | NotConfiguredError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link ListViolationEventsCommand}
   */
  listViolationEvents(
    args: ListViolationEventsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ListViolationEventsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link PutVerificationStateOnViolationCommand}
   */
  putVerificationStateOnViolation(
    args: PutVerificationStateOnViolationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    PutVerificationStateOnViolationCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link RegisterCACertificateCommand}
   */
  registerCACertificate(
    args: RegisterCACertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterCACertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateValidationError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | RegistrationCodeValidationError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link RegisterCertificateCommand}
   */
  registerCertificate(
    args: RegisterCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateConflictError
    | CertificateStateError
    | CertificateValidationError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link RegisterCertificateWithoutCACommand}
   */
  registerCertificateWithoutCA(
    args: RegisterCertificateWithoutCACommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterCertificateWithoutCACommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateStateError
    | CertificateValidationError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link RegisterThingCommand}
   */
  registerThing(
    args: RegisterThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RegisterThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalFailureError
    | InvalidRequestError
    | ResourceRegistrationFailureError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link RejectCertificateTransferCommand}
   */
  rejectCertificateTransfer(
    args: RejectCertificateTransferCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RejectCertificateTransferCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | TransferAlreadyCompletedError
    | UnauthorizedError
  >;

  /**
   * @see {@link RemoveThingFromBillingGroupCommand}
   */
  removeThingFromBillingGroup(
    args: RemoveThingFromBillingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveThingFromBillingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link RemoveThingFromThingGroupCommand}
   */
  removeThingFromThingGroup(
    args: RemoveThingFromThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    RemoveThingFromThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link ReplaceTopicRuleCommand}
   */
  replaceTopicRule(
    args: ReplaceTopicRuleCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ReplaceTopicRuleCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | SqlParseError
    | UnauthorizedError
  >;

  /**
   * @see {@link SearchIndexCommand}
   */
  searchIndex(
    args: SearchIndexCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SearchIndexCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidQueryError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link SetDefaultAuthorizerCommand}
   */
  setDefaultAuthorizer(
    args: SetDefaultAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetDefaultAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceAlreadyExistsError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link SetDefaultPolicyVersionCommand}
   */
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetDefaultPolicyVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link SetLoggingOptionsCommand}
   */
  setLoggingOptions(
    args: SetLoggingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetLoggingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | InvalidRequestError | ServiceUnavailableError
  >;

  /**
   * @see {@link SetV2LoggingLevelCommand}
   */
  setV2LoggingLevel(
    args: SetV2LoggingLevelCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetV2LoggingLevelCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalError
    | InvalidRequestError
    | LimitExceededError
    | NotConfiguredError
    | ServiceUnavailableError
  >;

  /**
   * @see {@link SetV2LoggingOptionsCommand}
   */
  setV2LoggingOptions(
    args: SetV2LoggingOptionsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    SetV2LoggingOptionsCommandOutput,
    Cause.TimeoutException | SdkError | InternalError | InvalidRequestError | ServiceUnavailableError
  >;

  /**
   * @see {@link StartAuditMitigationActionsTaskCommand}
   */
  startAuditMitigationActionsTask(
    args: StartAuditMitigationActionsTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartAuditMitigationActionsTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | TaskAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link StartDetectMitigationActionsTaskCommand}
   */
  startDetectMitigationActionsTask(
    args: StartDetectMitigationActionsTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartDetectMitigationActionsTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | TaskAlreadyExistsError
    | ThrottlingError
  >;

  /**
   * @see {@link StartOnDemandAuditTaskCommand}
   */
  startOnDemandAuditTask(
    args: StartOnDemandAuditTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartOnDemandAuditTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ThrottlingError
  >;

  /**
   * @see {@link StartThingRegistrationTaskCommand}
   */
  startThingRegistrationTask(
    args: StartThingRegistrationTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StartThingRegistrationTaskCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError | UnauthorizedError
  >;

  /**
   * @see {@link StopThingRegistrationTaskCommand}
   */
  stopThingRegistrationTask(
    args: StopThingRegistrationTaskCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    StopThingRegistrationTaskCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | UnauthorizedError
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
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link TestAuthorizationCommand}
   */
  testAuthorization(
    args: TestAuthorizationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestAuthorizationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link TestInvokeAuthorizerCommand}
   */
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TestInvokeAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | InvalidResponseError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link TransferCertificateCommand}
   */
  transferCertificate(
    args: TransferCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    TransferCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateStateError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | TransferConflictError
    | UnauthorizedError
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
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateAccountAuditConfigurationCommand}
   */
  updateAccountAuditConfiguration(
    args: UpdateAccountAuditConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAccountAuditConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link UpdateAuditSuppressionCommand}
   */
  updateAuditSuppression(
    args: UpdateAuditSuppressionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAuditSuppressionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateAuthorizerCommand}
   */
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateAuthorizerCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateBillingGroupCommand}
   */
  updateBillingGroup(
    args: UpdateBillingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateBillingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link UpdateCACertificateCommand}
   */
  updateCACertificate(
    args: UpdateCACertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCACertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateCertificateCommand}
   */
  updateCertificate(
    args: UpdateCertificateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCertificateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateStateError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateCertificateProviderCommand}
   */
  updateCertificateProvider(
    args: UpdateCertificateProviderCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCertificateProviderCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateCommandCommand}
   */
  updateCommand(
    args: UpdateCommandCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCommandCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateCustomMetricCommand}
   */
  updateCustomMetric(
    args: UpdateCustomMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateCustomMetricCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateDimensionCommand}
   */
  updateDimension(
    args: UpdateDimensionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDimensionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateDomainConfigurationCommand}
   */
  updateDomainConfiguration(
    args: UpdateDomainConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDomainConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | CertificateValidationError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateDynamicThingGroupCommand}
   */
  updateDynamicThingGroup(
    args: UpdateDynamicThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateDynamicThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidQueryError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link UpdateEventConfigurationsCommand}
   */
  updateEventConfigurations(
    args: UpdateEventConfigurationsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateEventConfigurationsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;

  /**
   * @see {@link UpdateFleetMetricCommand}
   */
  updateFleetMetric(
    args: UpdateFleetMetricCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateFleetMetricCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | IndexNotReadyError
    | InternalFailureError
    | InvalidAggregationError
    | InvalidQueryError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | VersionConflictError
  >;

  /**
   * @see {@link UpdateIndexingConfigurationCommand}
   */
  updateIndexingConfiguration(
    args: UpdateIndexingConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateIndexingConfigurationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateJobCommand}
   */
  updateJob(
    args: UpdateJobCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateJobCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateMitigationActionCommand}
   */
  updateMitigationAction(
    args: UpdateMitigationActionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateMitigationActionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdatePackageCommand}
   */
  updatePackage(
    args: UpdatePackageCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePackageCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdatePackageConfigurationCommand}
   */
  updatePackageConfiguration(
    args: UpdatePackageConfigurationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePackageConfigurationCommandOutput,
    Cause.TimeoutException | SdkError | ConflictError | InternalServerError | ThrottlingError | ValidationError
  >;

  /**
   * @see {@link UpdatePackageVersionCommand}
   */
  updatePackageVersion(
    args: UpdatePackageVersionCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdatePackageVersionCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictError
    | InternalServerError
    | ResourceNotFoundError
    | ThrottlingError
    | ValidationError
  >;

  /**
   * @see {@link UpdateProvisioningTemplateCommand}
   */
  updateProvisioningTemplate(
    args: UpdateProvisioningTemplateCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateProvisioningTemplateCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateRoleAliasCommand}
   */
  updateRoleAlias(
    args: UpdateRoleAliasCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateRoleAliasCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateScheduledAuditCommand}
   */
  updateScheduledAudit(
    args: UpdateScheduledAuditCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateScheduledAuditCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateSecurityProfileCommand}
   */
  updateSecurityProfile(
    args: UpdateSecurityProfileCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateSecurityProfileCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link UpdateStreamCommand}
   */
  updateStream(
    args: UpdateStreamCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateStreamCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | LimitExceededError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateThingCommand}
   */
  updateThing(
    args: UpdateThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
    | VersionConflictError
  >;

  /**
   * @see {@link UpdateThingGroupCommand}
   */
  updateThingGroup(
    args: UpdateThingGroupCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateThingGroupCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
    | VersionConflictError
  >;

  /**
   * @see {@link UpdateThingGroupsForThingCommand}
   */
  updateThingGroupsForThing(
    args: UpdateThingGroupsForThingCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateThingGroupsForThingCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ThrottlingError
  >;

  /**
   * @see {@link UpdateThingTypeCommand}
   */
  updateThingType(
    args: UpdateThingTypeCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateThingTypeCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | InternalFailureError
    | InvalidRequestError
    | ResourceNotFoundError
    | ServiceUnavailableError
    | ThrottlingError
    | UnauthorizedError
  >;

  /**
   * @see {@link UpdateTopicRuleDestinationCommand}
   */
  updateTopicRuleDestination(
    args: UpdateTopicRuleDestinationCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    UpdateTopicRuleDestinationCommandOutput,
    | Cause.TimeoutException
    | SdkError
    | ConflictingResourceUpdateError
    | InternalError
    | InvalidRequestError
    | ServiceUnavailableError
    | UnauthorizedError
  >;

  /**
   * @see {@link ValidateSecurityProfileBehaviorsCommand}
   */
  validateSecurityProfileBehaviors(
    args: ValidateSecurityProfileBehaviorsCommandInput,
    options?: HttpHandlerOptions,
  ): Effect.Effect<
    ValidateSecurityProfileBehaviorsCommandOutput,
    Cause.TimeoutException | SdkError | InternalFailureError | InvalidRequestError | ThrottlingError
  >;
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const makeIoTService = Effect.gen(function*() {
  const client = yield* Instance.IoTClientInstance;

  return yield* Service.fromClientAndCommands<IoTService$>(
    client,
    commands,
    {
      errorTags: AllServiceErrors,
      resolveClientConfig: IoTServiceConfig.toIoTClientConfig,
    },
  );
});

/**
 * @since 1.0.0
 * @category models
 */
export class IoTService extends Effect.Tag("@effect-aws/client-iot/IoTService")<
  IoTService,
  IoTService$
>() {
  static readonly defaultLayer = Layer.effect(this, makeIoTService).pipe(Layer.provide(Instance.layer));
  static readonly layer = (config: IoTService.Config) =>
    Layer.effect(this, makeIoTService).pipe(
      Layer.provide(Instance.layer),
      Layer.provide(IoTServiceConfig.setIoTServiceConfig(config)),
    );
  static readonly baseLayer = (
    evaluate: (defaultConfig: IoTClientConfig) => IoTClient,
  ) =>
    Layer.effect(this, makeIoTService).pipe(
      Layer.provide(
        Layer.effect(
          Instance.IoTClientInstance,
          Effect.map(IoTServiceConfig.toIoTClientConfig, evaluate),
        ),
      ),
    );
}

/**
 * @since 1.0.0
 */
export declare namespace IoTService {
  /**
   * @since 1.0.0
   */
  export interface Config extends Omit<IoTClientConfig, "logger"> {
    readonly logger?: ServiceLogger.ServiceLoggerConstructorProps | true;
  }
}
