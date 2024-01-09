output "ecr_repository_uri" {
  value = aws_ecr_repository.backend_repo.repository_url
}
