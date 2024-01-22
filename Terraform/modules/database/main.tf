resource "aws_db_instance" "vapouropsdb" {
  allocated_storage             = 20
  identifier                    = "vapouropsdb"
  db_name                       = "vapouropsdb"
  engine                        = "postgres"
  engine_version                = "14.9"
  instance_class                = "db.t3.micro"
  manage_master_user_password   = true
  master_user_secret_kms_key_id = aws_kms_key.vapourops.key_id
  username                      = "vapourops"
  skip_final_snapshot           = true
  port                          = 5432
  vpc_security_group_ids        = var.vpc_security_group_ids
  db_subnet_group_name          = aws_db_subnet_group.private_subnets.name
  publicly_accessible           = false
}

resource "aws_kms_key" "vapourops" {
  description = "VapourOps KMS Key"
}
resource "aws_kms_alias" "vapourops_alias" {
  name          = "alias/VapourOps_Key"
  target_key_id = aws_kms_key.vapourops.key_id
}

resource "aws_db_subnet_group" "private_subnets" {
  name = "private_subnets"

  subnet_ids = var.private_subnets

  tags = {
    Name = "My DB subnet group"
  }
}
