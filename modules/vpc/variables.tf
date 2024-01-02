variable "vpc_name" {
  type        = string
  description = "Name of the VPC"
}

variable "vpc_cidr_block" {
  type = string
  description = "CIDR block of the VPC"
}

# Uncomment to set specific cidr blocks
# variable "public_subnet_cidr_blocks" {
#   type        = list(string)
#   description = "CIDR blocks for the public subnets"
# }

# Uncomment to set specific cidr blocks
# variable "private_subnet_cidr_blocks" {
#   type        = list(string)
#   description = "CIDR blocks for the private subnets"
# }