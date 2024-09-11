# Another one sample of the books shop site
**Used technologies:** 
- [Next JS](https://nextjs.org/)
- [Prisma](https://www.prisma.io/docs/getting-started/quickstart)
- [Git](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [Mysql](https://metanit.com/sql/mysql/)
- [Docker](https://docs.docker.com/get-started/)

1. Copy ```.dev.env``` file to ```.env```
2. Replace variables inside ```.env``` file to your own
3. Execute in terminal ```openssl rand -base64 32```
4. Copy 32-chracter random string to the ```SESSION_SECRET``` variable in the .env file 
5. Run ```docker compose up -d``` command for  start
6. Write some code
7. Enjoy

В проекте используется React 18. 
Вместо useActionState реализована отправка формы в ручном режиме, используя server actions 