
import request from 'supertest'
import { App } from './app';

describe('Meu primeiro teste de Integração', ()=>{
    const app = new App().app;
    it('O servidor deve estar rodando', async ()=> {
        const response = await request(app).get('/');
        expect(response.body).toStrictEqual({ ok: true });
    }); 
    it('Deve checar se foi criado o user', async () => {
        const response = await request(app).post('/user').send({
            name: 'Yuri de Bairros de Oliveira',
            email: 'yuri@yuri.com.br',
            password: '12121212122'
        });

        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('id');
    });

    it('Deve checar se irá retornar o user', async () => {
        const response = await request(app).get('/users')
        console.log("~file: app.spec.ts:16 ~ response ~ response:", response)
        expect(response.statusCode).toEqual(200);
    });
});