const projectName = "vapourops"
const vpcCidrBlock = "10.0.0.0/16"
const pubCidrBlocks = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
const privCidrBlocks = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
const roleArn = "arn:aws:iam::807021613609:role/pulumi"
const dbUsername= "vapourops"
const dbPassword = "password"
const nodeMin= 1
const nodeDesired=3
const nodeMax=5
const nodeAmiType="AL2_x86_64"
const nodeInstanceTypes=["t3.small"]
const dbInstanceClass="db.t3.micro"
const dbAllocatedSotrage=20
const dbEngine="postgres"
const dbEngineVersion="14.9"


module.exports = {
    projectName:projectName,
    vpcCidrBlock:vpcCidrBlock,
    pubCidrBlocks:pubCidrBlocks,
    privCidrBlocks:privCidrBlocks,
    roleArn:roleArn,
    dbUsername:dbUsername,
    dbPassword:dbPassword,
    nodeMin:nodeMin,
    nodeDesired:nodeDesired,
    nodeMax:nodeMax,
    nodeAmiType:nodeAmiType,
    nodeInstanceTypes:nodeInstanceTypes,
    dbInstanceClass:dbInstanceClass,
    dbAllocatedSotrage:dbAllocatedSotrage,
    dbEngine:dbEngine,
    dbEngineVersion:dbEngineVersion
}