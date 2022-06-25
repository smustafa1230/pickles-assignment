import 'reflect-metadata';
import request from 'supertest';

import App from '../app';
import IndexRoute from '../routes/index.route';

const indexRoute = new IndexRoute();
const app = new App([indexRoute]);

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Integration Test: Testing Index', () => {
  describe('[GET] /api/v1/', () => {
    it('response statusCode 200', () => {
      return request(app.getServer()).get(`${indexRoute.path}api/v1`).expect(200);
    });
  });

  describe('[POST] /api/v1/send-email', () => {
    it('response statusCode 200', () => {
      const payload = {
        templateName: 'welcome',
        data: {
          fullName: 'salman Mustafa',
        },
        sendTo: 'salman.mustafa1230@gmail.com',
      };
      return request(app.getServer()).post(`${indexRoute.path}api/v1/send-email`).send(payload).expect(200);
    });
    it('response statusCode 400', () => {
      const payload = {
        data: {
          fullName: 'salman Mustafa',
        },
        sendTo: 'salman.mustafa1230@gmail.com',
      };
      return request(app.getServer()).post(`${indexRoute.path}api/v1/send-email`).send(payload).expect(400);
    });
  });
});
