resource "aws_db_instance" "vapouropsdb" {
  allocated_storage = 20
  identifier        = "vapouropsdb"
  db_name           = "vapouropsdb"
  engine            = "postgres"
  engine_version    = "14.9"
  instance_class      = "db.t3.micro"
  # manage_master_user_password = true
  # master_user_secret_kms_key_id = aws_kms_key.example.key_id
  username            = "vapourops"
  password            = var.db_password
  skip_final_snapshot = true
  port                = 5432
  vpc_security_group_ids = var.vpc_security_group_ids
  db_subnet_group_name = aws_db_subnet_group.public_subnets.name
  publicly_accessible  = true
}

# resource "aws_kms_key" "example" {
#   description = "Example KMS Key"
# }

# data "aws_secretsmanager_secret" "POSTGRES_USERNAME" {
#   name = "POSTGRES_USERNAME"
# }

# data "aws_secretsmanager_secret_version" "POSTGRES_USERNAME" {
#   secret_id = data.aws_secretsmanager_secret.POSTGRES_USERNAME.id
# }

# data "aws_secretsmanager_secret" "POSTGRES_PASSWORD" {
#   name = "POSTGRES_PASSWORD"
# }

# data "aws_secretsmanager_secret_version" "POSTGRES_PASSWORD" {
#   secret_id = data.aws_secretsmanager_secret.POSTGRES_PASSWORD.id
# }

resource "aws_db_subnet_group" "public_subnets" {
  name = "public_subnets"

  subnet_ids = var.public_subnets

  tags = {
    Name = "My DB subnet group"
  }
}
