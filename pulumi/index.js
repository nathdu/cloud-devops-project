const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

const vpc = require("./modules/vpc")
const sg = require("./modules/sg")
const cluster = require("./modules/eks")
const nodeGroup = require("./modules/nodeGroup")
const db_instance = require("./modules/db_instance")
const db_subnetGroup = require("./modules/db_subnetGroup")

exports.vpcId=vpc.vpcId
exports.vpcPrivSubnetIds = vpc.privateSubnetIds
exports.vpcPubSubnetIds = vpc.publicSubnetIds