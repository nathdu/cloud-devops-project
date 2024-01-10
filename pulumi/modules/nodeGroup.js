const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vpc = require("./vpc");
const cluster = require("./eks")
const vars = require("../utils/vars")

const nodeGroup = new aws.eks.NodeGroup(`${vars.projectName}-nodeGroup`, {
    clusterName:cluster.name,
    nodeRoleArn:vars.roleArn,
    scalingConfig:{
        minSize:vars.nodeMin,
        desiredSize:vars.nodeDesired,
        maxSize:vars.nodeMax
    },
    subnetIds:vpc.privateSubnetIds,
    amiType:vars.nodeAmiType,
    instanceTypes:vars.nodeInstanceTypes,
    nodeGroupName:`${vars.projectName}-nodeGroup`
})

module.exports = nodeGroup