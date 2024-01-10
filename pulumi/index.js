const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

const sg = require("./modules/sg")
const vpc = require("./modules/vpc")
const cluster = require("./modules/eks")
const nodeGroup = require("./modules/nodeGroup")
const db_instance = require("./modules/db_instance")
const db_subnetGroup = require("./modules/db_subnetGroup")
const {pubRouteTable,
    pubRouteTableAssociation} = require("./modules/pubRouteTable")

exports.vpcId=vpc.vpcId
exports.vpcPrivSubnetIds = vpc.privateSubnetIds
exports.vpcPubSubnetIds = vpc.publicSubnetIds
exports.gatewayId=vpc.internetGateway.id
exports.natGatewayId=vpc.natGateways