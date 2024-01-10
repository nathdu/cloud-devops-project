const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vpc = require("./vpc");
const vars = require("../utils/vars")
const secrets = require("../utils/secrets")

const ip = secrets.myIp()

const sg = new aws.ec2.SecurityGroup(`${vars.projectName}-sg`, {
  vpcId: vpc.vpcId,
  ingress: [
    {
      fromPort: 80,
      toPort: 80,
      protocol: "tcp",
      cidrBlocks: ["0.0.0.0/0"],
    },
    {
      fromPort: 443,
      toPort: 443,
      protocol: "tcp",
      cidrBlocks: ["0.0.0.0/0"],
    },
    {
      fromPort: 5432,
      toPort: 5432,
      protocol: "tcp",
      cidrBlocks: [`${ip}/32`],
    },
  ],
  egress: [
    {
      fromPort: 0,
      toPort: 0,
      protocol: -1,
      cidrBlocks: ["0.0.0.0/0"],
    },
  ],
  tags: {
    Name: `${vars.projectName}-sg`,
  },
});

module.exports = sg;
