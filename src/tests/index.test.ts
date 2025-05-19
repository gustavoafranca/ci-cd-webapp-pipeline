import request from 'supertest';
import app from '../index';

describe('GET /', () => {
  it('deve retornar mensagem de boas-vidas', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hello from GitHub Actions');
  });
});
