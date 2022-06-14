# Lex Note API 1.0.0

Uma API para o projeto Lex Note, contendo rotas de usuário (Cadastro, Login e Auto-login) e rotas para cadastro e execlusão de rotas.

URL: 

### Iniciar localmente

```ssh
yarn server
```

## Rotas de Usuário

### POST /user/ (Criação de Usuário)

Padrão de corpo (`body`) para a requisição:

```json
{
    "name": "José da Silva",
    "email": "josedasilva@email.com",
    "password": "12345678"
}
```

Padrão de resposta:

```json
{
    "message": "Cadastro realizado com sucesso!"
}
```

### POST /user/login (Login)

Padrão de corpo (`body`) para a requisição:

```json
{
    "email": "josedasilva@email.com",
    "password": "12345678"
}
```

Padrão de resposta:

```json
{
	"user": {
		"id": "62a8d73efef5dcd41200bef3",
		"name": "José da Silva",
		"email": "josedasilva@email.com"
	},
	"token": "eBJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyYThkNzNlZmVmNWRjZDQxMjAwYmVmOSIsIm5hbWUiOiJBbGV4IENvbmRlciIsImVtYWlsIjoiYWxleC52LmNvbmRlckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzYxNTIsImV4cCI6MTY1NTI3OTM1Mn0.trsb8P58a6U5aTV7Xjf2x1fRIEHa81X-kEx7p_DEOPE"
}
```

### POST /user/autologin (Autologin)

Não é necessário um `body`, mas será necessário o envio da token no `headers`

```json
{
	"headers": {
        "auth": "eBJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyYThkNzNlZmVmNWRjZDQxMjAwYmVmOSIsIm5hbWUiOiJBbGV4IENvbmRlciIsImVtYWlsIjoiYWxleC52LmNvbmRlckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzYxNTIsImV4cCI6MTY1NTI3OTM1Mn0.trsb8P58a6U5aTV7Xjf2x1fRIEHa81X-kEx7p_DEOPE"
    }
}
```

Padrão de resposta