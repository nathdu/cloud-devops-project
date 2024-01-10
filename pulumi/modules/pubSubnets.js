// const pulumi = require("@pulumi/pulumi");
// const aws = require("@pulumi/aws");
// const awsx = require("@pulumi/awsx");
// const vpc = require("./vpc");
// const vars = require("../utils/vars") 

// const pubSubnet1 = new aws.ec2.Subnet("vapourops-pub-subnet1", {
//     availabilityZone: "eu-west-2a",
//     cidrBlock: vars.pubCidrBlocks[0],
//     vpcId:vpc.vpcId,
//     tags: {
//               "kubernetes.io/cluster/vapourops":"shared",    "kubernetes.io/role/elb":1
//             }
// })

// const pubSubnet2 = new aws.ec2.Subnet("vapourops-pub-subnet2", {
//     availabilityZone: "eu-west-2b",
//     cidrBlock: vars.pubCidrBlocks[1],
//     vpcId:vpc.vpcId,
//     tags: {
//               "kubernetes.io/cluster/vapourops":"shared",    "kubernetes.io/role/elb":1
//             }
// })

// module.exports = {
//     pubSubnet1,
//     pubSubnet2,
// }