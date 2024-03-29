module "vpc" {
  source       = "./modules/vpc"
  cluster_name = var.cluster_name
  vpc_name     = var.vpc_name
}

module "security" {
  source   = "./modules/security"
  vpc_id   = module.vpc.vpc_id
  vpc_name = var.vpc_name
}

module "database" {
  source                 = "./modules/database"
  vpc_security_group_ids = [module.security.web_sg_id]
  public_subnets         = module.vpc.public_subnets
}
module "eks_cluster" {
  source          = "./modules/eks"
  vpc_id          = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnets
  cluster_name    = var.cluster_name
}
