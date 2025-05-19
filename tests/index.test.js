const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('deve retornar mensagem de boas-vidas', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Hello from GitHub Actions');
  });
});
