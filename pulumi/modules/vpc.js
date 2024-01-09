const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vars = require("../utils/vars")

const vpc = new awsx.ec2.Vpc(`${vars.projectName}-vpc`, {
  cidrBlock: vars.vpcCidrBlock,
  enableDnsHostnames: true,
  subnetSpecs: [
    {
      type: "public",
      name: `${vars.projectName}-pub-subnet`,
      cidrBlocks: vars.pubCidrBlocks,
      tags: {
        "kubernetes.io/cluster/vapourops":"shared",    "kubernetes.io/role/elb":1
      }
    },
    {
      type: "private",
      name: `${vars.projectName}-priv-subnet`,
      cidrBlocks: vars.privCidrBlocks,
      tags: {
        "kubernetes.io/cluster/vapourops":"shared",    "kubernetes.io/role/internal-elb":1
      }
    },
  ],
  natGateways: {
    strategy: awsx.ec2.NatGatewayStrategy.Single,
  },
});

module.exports = vpc;