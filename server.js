import { fastify } from 'fastify';

const server = fastify()

server.get('/', () => {
    return 'Olá bem vindo ao servidor'
})

server.get('/alunos', () => {
    return 'Aqui tem dados de alunos'
})

//GET, POST, PUT E DELETE
server.post('/alunos');

server.listen({
    port: 3333
})