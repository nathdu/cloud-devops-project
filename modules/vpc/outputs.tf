output "vpc_id" {
  value = module.vpc.vpc_id
}


output "private_subnets" {
  description = "The IDs of the private subnets created"
  value       = module.vpc.private_subnets
}
output "public_subnets" {
  description = "The IDs of the public subnets created"
  value       = module.vpc.public_subnets
}
