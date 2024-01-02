module "vpc" {
  source = "./modules/vpc"

  vpc_name       = var.vpc_name
  vpc_cidr_block = var.vpc_cidr_block
  # public_subnet_cidr_blocks = var.public_subnet_cidr_blocks     # Uncomment to set specific cidr blocks
  # private_subnet_cidr_blocks = var.private_subnet_cidr_blocks   # Uncomment to set specific cidr blocks
}

