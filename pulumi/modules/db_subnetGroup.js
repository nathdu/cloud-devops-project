const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const vpc = require("./vpc");
const vars = require("../utils/vars")

const db_subnetGroup = new aws.rds.SubnetGroup("public_subnets", {
    subnetIds:vpc.publicSubnetIds
})

module.exports = db_subnetGroup