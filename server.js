import { fastify } from 'fastify';
const server = fastify()
server.get('/', () => {
return 'Olá bem vindo ao servidor'
})
server.get('/alunos', () => {
return 'Aqui tem dados de alunos'
})
server.post('/alunos', () => {
return 'Aqui inserimos alunos'
})
server.put('/alunos/:id', () => {
return 'Aqui atualizamos alunos'
})
server.delete('/alunos/:id', () => {
return 'Aqui deletamos alunos'
})
server.listen({
port: 3333
})