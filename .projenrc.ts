import { monorepo } from "@aws/pdk";
import { javascript, YamlFile } from "projen";
import { Changesets, TypeScriptLibProject } from "./projenrc";

const org = "floydspace";
const name = "effect-aws";
const repo = `${org}/${name}`;

const project = new monorepo.MonorepoTsProject({
  name: name,
  description: "Effectful AWS",
  repository: `github:${repo}`,
  authorEmail: "ifloydrose@gmail.com",
  authorName: "Victor Korzunin",
  license: "MIT",
  packageManager: javascript.NodePackageManager.PNPM,
  clobber: false, // enable it and run `pnpm default && pnpm clobber`, if you need to reset the project
  depsUpgrade: false, // enable it and run `pnpm default && pnpm upgrade` to upgrade projen and monorepo deps
  devDeps: ["@types/jest"], // needed for vscode to not complain about jest types
});

new YamlFile(project, ".github/FUNDING.yml", { obj: { github: org } });

new Changesets(project, {
  repo: repo,
  onlyUpdatePeerDependentsWhenOutOfRange: true,
});

const commonDeps = ["@aws-sdk/types@^3"];
const commonDevDeps = ["aws-sdk-client-mock", "aws-sdk-client-mock-jest"];
const commonPeerDeps = ["effect"];

new TypeScriptLibProject({
  parent: project,
  name: "powertools-logger",
  deps: ["@aws-lambda-powertools/logger@^1.9.0"], // lower versions are not supported, raise an issue if you need it
  devDeps: [
    ...commonPeerDeps,
    "@types/aws-lambda", // peer for @aws-lambda-powertools/logger
  ],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-api-gateway-management-api",
  deps: [...commonDeps, "@aws-sdk/client-apigatewaymanagementapi@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-dynamodb",
  deps: [...commonDeps, "@aws-sdk/client-dynamodb@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-eventbridge",
  deps: [...commonDeps, "@aws-sdk/client-eventbridge@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-lambda",
  deps: [...commonDeps, "@aws-sdk/client-lambda@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-s3",
  deps: [
    ...commonDeps,
    "@aws-sdk/client-s3@^3",
    "@aws-sdk/s3-request-presigner@^3",
  ],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sns",
  deps: [...commonDeps, "@aws-sdk/client-sns@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sqs",
  deps: [...commonDeps, "@aws-sdk/client-sqs@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

new TypeScriptLibProject({
  parent: project,
  name: "client-sfn",
  deps: [...commonDeps, "@aws-sdk/client-sfn@^3"],
  devDeps: [...commonPeerDeps, ...commonDevDeps],
  peerDeps: commonPeerDeps,
});

project.addGitIgnore(".direnv/"); // flake environment creates .direnv folder

project.synth();
