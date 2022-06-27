# Lex Note API 1.0.0

Uma API para o projeto Lex Note, contendo rotas de usuário (Cadastro, Login e Auto-login) e rotas para cadastro e execlusão de rotas.

URL: `https://lx-note-api.herokuapp.com/`

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
//Este token é somente um exemplo
{
	"headers": {
        "auth": "eBJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyYThkNzNlZmVmNWRjZDQxMjAwYmVmOSIsIm5hbWUiOiJBbGV4IENvbmRlciIsImVtYWlsIjoiYWxleC52LmNvbmRlckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzYxNTIsImV4cCI6MTY1NTI3OTM1Mn0.trsb8P58a6U5aTV7Xjf2x1fRIEHa81X-kEx7p_DEOPE",
    }
}
```

Padrão de resposta:

```json
{
	"user": {
		"id": "62a8d73efef5dcd41200bef3",
		"name": "José da Silva",
		"email": "josedasilva@email.com"
	}
}
```

## Rotas de Gerenciamento de Notas

Todas as rotas de gerenciamento de nota são privadas, por isso precisam do token no `headers`

```json
//Este token é somente um exemplo
{
	"headers": {
        "auth": "eBJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyYThkNzNlZmVmNWRjZDQxMjAwYmVmOSIsIm5hbWUiOiJBbGV4IENvbmRlciIsImVtYWlsIjoiYWxleC52LmNvbmRlckBnbWFpbC5jb20iLCJpYXQiOjE2NTUyMzYxNTIsImV4cCI6MTY1NTI3OTM1Mn0.trsb8P58a6U5aTV7Xjf2x1fRIEHa81X-kEx7p_DEOPE",
    }
}
```

### GET /notes

Padrão de corpo (`body`) para a requisição:

Padrão de resposta:

```json
{
	"response": [
		{
			"_id": "62a9c3ceb4b3d666df8ea985",
			"userID": "62h8d73dfef5dcd41a01bef9",
			"title": "Nota de exemplo",
			"text": "Texto de exemplo 1",
			"createdAt": "2022-06-15T11:34:38.734Z",
			"updatedAt": "2022-06-15T11:34:38.734Z",
			"__v": 0
		},
		{
			"_id": "62a9c3d4b4b3d666df8ea987",
			"userID": "62h8d73dfef5dcd41a01bef9",
			"title": "Nota de exemplo 2",
			"text": "Texto de exemplo 1",
			"createdAt": "2022-06-15T11:34:44.847Z",
			"updatedAt": "2022-06-15T11:34:44.847Z",
			"__v": 0
		},
		{
			"_id": "62a8c3ddbab3d666df8ea989",
			"userID": "62h8d73dfef5dcd41a01bef9",
			"title": "Nota de exemplo 3",
			"text": "Texto de exemplo 1",
			"createdAt": "2022-06-15T11:34:51.149Z",
			"updatedAt": "2022-06-15T11:34:51.149Z",
			"__v": 0
		}
	]
}
```

### POST /notes (Criar uma nota)

Padrão de corpo (`body`) para a requisição:

```json
{
    "title": "Título da nota",
    "text": "Texto da nota",
}
```

Padrão de resposta:

```json
{
	"message": "Nota criada com sucesso!",
	"response": {
		"userID": "63ad7aefefadcd41200bef9",
		"title": "Título da nota",
		"text": "Texto da nota",
		"createdAt": "2022-06-15T11:56:53.226Z",
		"updatedAt": "2022-06-15T11:56:53.226Z",
		"_id": "62a9c905822ef7606b1a1531",
		"__v": 0
	}
}
```

### DELETE /notes/:noteId (Excluir uma nota)

Não é necessário um `body`

Padrão de resposta:

```json
{
	"message": "Nota foi excluida com sucesso!"
}
```

### Erros

Padrão de erro para todas as rotas

```json
{
	"error": "Mensagem de erro..."	
}
```
