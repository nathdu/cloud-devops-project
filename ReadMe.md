## Prerequisites

- **Pulumi CLI:** Install the Pulumi CLI. Instructions can be found [here](https://www.pulumi.com/docs/get-started/install/).

- **Cloud Provider Account:** Configure your credentials to authenticate Pulumi with your cloud account. (The Provider used in this project is AWS)

- **Install Node.js:**

Download and install from the official [Node.js website](https://nodejs.org/). npm comes bundled with Node.js, so installing Node.js will automatically install npm.



### Install Dependencies

Will install dependencies from the `package.json` file.

For JavaScript/TypeScript projects:
```bash
npm install 
```



## Module Overview

### VPC Creation

Virtual Private Cloud (VPC) using the AWS provider in Pulumi. It configures a VPC with both public and private subnets, specifying the CIDR blocks for each subnet, enabling DNS hostnames, and setting specific tags for identification.

### RDS Instance

Amazon RDS database instance using the AWS provider in Pulumi. It defines an RDS instance with parameters such as instance class, allocated storage, database name, engine type and version, authentication details, and security group associations.

### EKS Cluster

Amazon Elastic Kubernetes Service (EKS) cluster using the AWS provider in Pulumi. It sets up an EKS cluster with a specified name, role, and VPC configuration to define its networking settings.

### Node Group for EKS

Node group within an existing EKS cluster using the AWS provider in Pulumi. It configures scaling options, networking, instance types, and naming for the nodes.

### Security Group

AWS security group using Pulumi's AWS provider. It configures inbound and outbound rules for different ports, allowing or restricting access based on specified CIDR blocks. It also incorporates IP whitelisting for specific ports by restricting access to designated IP addresses.



## Utils

Use `vars.js` file to declare your variables and costumize the infrastructure to your needs.