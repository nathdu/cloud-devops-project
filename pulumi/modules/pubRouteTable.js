// const pulumi = require("@pulumi/pulumi");
// const aws = require("@pulumi/aws");
// const awsx = require("@pulumi/awsx");
// const vpc = require("./vpc");
// const vars = require("../utils/vars"); 
// const { pubSubnet1, pubSubnet2 } = require("./pubSubnets");

// const pubRouteTable = new aws.ec2.RouteTable("vapourops-pub-rt", {
//     vpcId: vpc.vpcId,
//     routes: [
//         {
//             cidrBlock: "0.0.0.0/0",
//             gatewayId: vpc.internetGateway.id,
//         },
//     ],
// });

// const pubRouteTableAssociationPubSub1 = new aws.ec2.RouteTableAssociation("pubRouteTableAssociationPubSub1", {
//     subnetId: pubSubnet1.id,
//     routeTableId: pubRouteTable.id
// });

// const pubRouteTableAssociationPubSub2 = new aws.ec2.RouteTableAssociation("pubRouteTableAssociationPubSub2", {
//     subnetId: pubSubnet2.id,
//     routeTableId: pubRouteTable.id
// });

// module.exports = {
//     pubRouteTable,
//     pubRouteTableAssociationPubSub1,
//     pubRouteTableAssociationPubSub2
// }