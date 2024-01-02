# VPC
resource "aws_vpc" "vapourops_vpc" {
  cidr_block = var.vpc_cidr_block
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name = "${var.vpc_name}_vpc"
  }
}

# Internet Gateway
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vapourops_vpc.id

  tags = {
    Name = "${var.vpc_name}_igw"
  }
}

# List of availability zones
data "aws_availability_zones" "available" {}

# Public subnets
resource "aws_subnet" "public_subnet" {
  count = 3

  vpc_id            = aws_vpc.vapourops_vpc.id
  cidr_block        = cidrsubnet(aws_vpc.vapourops_vpc.cidr_block, 3, count.index)
  # cidr_block        = var.public_subnet_cidrs[count.index] # Uncomment to set specific cidr blocks
  availability_zone = element(data.aws_availability_zones.available.names, count.index)
  map_public_ip_on_launch = true
  
  tags = {
    Name = "public_subnet_${count.index + 1}"
  }
}

# Private subnets
resource "aws_subnet" "private_subnet" {
  count = 3

  vpc_id            = aws_vpc.vapourops_vpc.id
  cidr_block        = cidrsubnet(aws_vpc.vapourops_vpc.cidr_block, 3, count.index + 3)
  # cidr_block        = var.private_subnet_cidrs[count.index] # Uncomment to set specific cidr blocks
  availability_zone = element(data.aws_availability_zones.available.names, count.index)

  tags = {
    Name = "private_subnet_${count.index + 1}"
  }
}

# Routing table for public subnets
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.vapourops_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "${var.vpc_name}_public_rt"
  }
}

# Routing table for private subnets
resource "aws_route_table" "private_rt" {
  vpc_id = aws_vpc.vapourops_vpc.id

  tags = {
    Name = "${var.vpc_name}_private_rt"
  }
}

# Associate public routing table with public subnets
resource "aws_route_table_association" "public_rta" {
  count = length(aws_subnet.public_subnet)

  subnet_id      = aws_subnet.public_subnet[count.index].id
  route_table_id = aws_route_table.public_rt.id
}

# Associate private routing table with private subnets
resource "aws_route_table_association" "private_rta" {
  count = length(aws_subnet.private_subnet)

  subnet_id      = aws_subnet.private_subnet[count.index].id
  route_table_id = aws_route_table.private_rt.id
}
