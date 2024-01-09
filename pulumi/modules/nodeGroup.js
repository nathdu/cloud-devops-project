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
        minSize:1,
        desiredSize:3,
        maxSize:5
    },
    subnetIds:vpc.privateSubnetIds,
    amiType:"AL2_x86_64",
    instanceTypes:["t3.small"],
    nodeGroupName:`${vars.projectName}-nodeGroup`
})

module.exports = nodeGroup