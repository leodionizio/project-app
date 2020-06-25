import { Server } from 'miragejs';
import users from '@mock/users.mock';

export function makeServer() {
  let server = new Server({
    routes() {
      this.namespace = 'api';
      this.timing = 2000;

      this.get(
        '/user/:id',
        (schema, request) => {
          const foundUser = users.find(
            (user) => user.id === parseInt(request.params.id)
          );

          const response = new Response(new Blob(), {});
          response.status = foundUser ? 200 : 404;
          response.statusText = foundUser
            ? 'Usuário encontrado!'
            : 'Usuário não encontrado!';
          response.type = foundUser ? 'default' : 'error';
          response.ok = !!foundUser;
          response.body = foundUser;

          return response;
        },
        { timing: 100 }
      );

      this.get('/users', () => {
        const response = new Response(new Blob(), {});
        response.status = users.length ? 200 : 404;
        response.statusText = users.length
          ? 'Lista de usuários!'
          : 'Nenhum usuário cadastrado !';
        response.type = users.length ? 'default' : 'error';
        response.ok = !!users.length;
        response.body = users;

        return response;
      });

      this.post('/user', (schema, request) => {
        const { email, password } = request.requestBody;

        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        const response = new Response(new Blob(), {});
        response.status = user ? 200 : 401;
        response.statusText = user
          ? 'Usuário autenticado!'
          : 'Usuário e/ou senha inválidos!';
        response.type = user ? 'default' : 'error';
        response.ok = !!user;
        response.body = user;

        return response;
      });
    },
  });

  return server;
}
