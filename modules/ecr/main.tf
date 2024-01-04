resource "aws_ecr_repository" "backend_repo" {
  name = "java-backend-server"
}

# Push existing Docker image to ECR
resource "null_resource" "push_to_ecr" {
  # To authenticate AWS CLI, move the command in quotes into command block
  # "aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin REPLACE-ME.dkr.ecr.eu-west-2.amazonaws.com"
  # Repalce with your Account-id without hyphens
  provisioner "local-exec" {
    command = <<EOT
      docker tag ${var.docker_image_name} ${aws_ecr_repository.backend_repo.repository_url}:1.0.0
      docker push ${aws_ecr_repository.backend_repo.repository_url}:1.0.0
    EOT
  }
}
