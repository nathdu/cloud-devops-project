const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vpc = require("./vpc");
const vars = require("../utils/vars")

const cluster = new aws.eks.Cluster(`${vars.projectName}-cluster`, {
    roleArn:vars.roleArn,
    vpcConfig: {
        subnetIds:vpc.privateSubnetIds,
        endpointPublicAccess:true
    }
})

module.exports = cluster