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



## CircleCI


CircleCI is a continuous integration (CI) platform.

    Modify .circleci/config.yml file in this project repository with your desired workflow.

    Add CircleCI configuration to trigger deployments, run tests, or any other necessary tasks.

    Configure your CircleCI project settings to include environment variables such as access tokens or AWS credentials for deployment.

    Refer to the CircleCI documentation for detailed instructions on configuring and customizing your CI pipeline.



## ArgoCD


ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. To integrate ArgoCD with this project:

    Follow the official ArgoCD installation guide to install ArgoCD in your Kubernetes cluster.

    Configure ArgoCD to sync with your deployment by creating a new Application in the ArgoCD UI or using the ArgoCD CLI.



## Prometheus


[Prometheus](https://prometheus.io/) is an open-source monitoring and alerting toolkit designed for reliability and scalability. [Grafana](https://grafana.com/) is an open-source platform for monitoring and observability that works seamlessly with Prometheus. To integrate Prometheus and Grafana with this project:

1. **Deploy Prometheus:**
   - Follow the official [Prometheus installation guide](https://prometheus.io/docs/prometheus/latest/getting_started/) to deploy Prometheus in your Kubernetes cluster.
   - Configure Prometheus to scrape metrics from relevant services in your infrastructure.

2. **Deploy Grafana:**
   - Install Grafana by following the [official Grafana installation guide](https://grafana.com/docs/grafana/latest/installation/).
   - Set up Grafana data sources to connect to Prometheus for metrics.
   - Create dashboards in Grafana to visualize the metrics collected by Prometheus.

3. **Monitoring Infrastructure:**
   - Update scripts or Helm charts to include Prometheus exporters or annotations for relevant services to expose metrics.

4. **Configure Alerts:**
   - Set up alerting rules in Prometheus to detect abnormal behavior or issues in your infrastructure.
   - Configure Grafana to use Prometheus alerts and notify relevant channels.
