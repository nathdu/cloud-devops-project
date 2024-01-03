variable "vpc_name" {}
variable "vpc_cidr_block" {}
# variable "public_subnet_cidr_blocks" {}   # Uncomment to set specific cidr blocks
# variable "private_subnet_cidr_blocks" {}  # Uncomment to set specific cidr blocks
variable "key_name" {}
variable "ec2_type" {}
variable "cluster_name" { 
    default = "vapourops" 
    }