resource "aws_ecr_repository" "backend_repo" {
  name = "java-backend-server"
}

# Push existing Docker image to ECR
resource "null_resource" "push_to_ecr" {
  provisioner "local-exec" {
    command = <<EOT
    
      docker tag ${var.docker_image_name} ${aws_ecr_repository.backend_repo.repository_url}:1.0.0
      docker push ${aws_ecr_repository.backend_repo.repository_url}:1.0.0
    EOT
  }
}
