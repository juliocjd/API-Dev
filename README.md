# API-Dev
Aplicação NodeJS utilizando Prisma, Express, Typescript, Docker

VSCODE
Alterar o arquivo .env
- DATABASE_URL="postgresql://postgres:admin@localhost:5432/ligue?schema=public"
Executar yarn prisma migrate dev

DOCKER
Alterar o arquivo .env
 - DATABASE_URL="postgresql://postgres:postgres@postgres:5432/Ligue?schema=public"
No Docker, iniciar o CLI do prisma-postgres-api e executar npx prisma migrate dev para sincronização com o BD.

