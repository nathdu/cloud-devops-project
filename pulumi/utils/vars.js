const projectName = "vapourops"
const vpcCidrBlock = "10.0.0.0/16"
const pubCidrBlocks = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
const privCidrBlocks = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
const roleArn = "arn:aws:iam::807021613609:role/pulumi"
const dbUsername= "vapourops"
const dbPassword = "password"

module.exports = {
    projectName:projectName,
    vpcCidrBlock:vpcCidrBlock,
    pubCidrBlocks:pubCidrBlocks,
    privCidrBlocks:privCidrBlocks,
    roleArn:roleArn,
    dbUsername:dbUsername,
    dbPassword:dbPassword
}