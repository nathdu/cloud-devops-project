const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vpc = require("./vpc");
const vars = require("../utils/vars") 

const privRouteTable = new aws.ec2.RouteTable("vapourops-priv-rt", {
    vpcId: vpc.vpcId,
    routes: [
        {
            natGatewayId:vpc.natGatewayId
        },
    ],
});

module.exports = privRouteTable