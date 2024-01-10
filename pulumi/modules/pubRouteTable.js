const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vpc = require("./vpc");
const vars = require("../utils/vars") 

const pubRouteTable = new aws.ec2.RouteTable("vapourops-pub-rt", {
    vpcId: vpc.vpcId,
    routes: [
        {
            cidrBlock: "10.0.1.0/24",
            gatewayId: vpc.gatewayId,
        },
    ],
});

const pubRouteTableAssociationPubSub1 = new aws.ec2.RouteTableAssociation("pubRouteTableAssociationPubSub1", {
    subnetId: vpc.publicSubnetIds[0],
    routeTableId: pubRouteTable.id
});

const pubRouteTableAssociationPubSub2 = new aws.ec2.RouteTableAssociation("pubRouteTableAssociationPubSub2", {
    subnetId: vpc.publicSubnetIds[1],
    routeTableId: pubRouteTable.id
});

module.exports = {
    pubRouteTable,
    pubRouteTableAssociationPubSub1,
    pubRouteTableAssociationPubSub2
}