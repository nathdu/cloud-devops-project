module "vpc" {
  source = "./modules/vpc"

  vpc_name       = var.vpc_name
  vpc_cidr_block = var.vpc_cidr_block
  # public_subnet_cidr_blocks = var.public_subnet_cidr_blocks     # Uncomment to set specific cidr blocks
  # private_subnet_cidr_blocks = var.private_subnet_cidr_blocks   # Uncomment to set specific cidr blocks
}

module "security" {
  source = "./modules/security"

  vpc_id   = module.vpc.vpc_id
  vpc_name = var.vpc_name
}

module "database" {
  source   = "./modules/database"
  vpc_security_group_ids = [module.security.web_sg_id]
  public_subnet_ids = module.vpc.public_subnet_ids
}