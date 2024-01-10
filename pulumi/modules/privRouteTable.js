const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vpc = require("./vpc");
const vars = require("../utils/vars") 

const privRouteTable = new aws.ec2.RouteTable("vapourops-priv-rt", {
    vpcId: vpc.vpcId,
    routes: [
        {
            cidrBlock: "10.0.4.0/24",
            natGatewayId:vpc.natGatewayId
        },
    ],
});

module.exports = privRouteTable