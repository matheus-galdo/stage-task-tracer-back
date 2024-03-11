import app from '@/app';
import supertest from 'supertest';

const request = supertest(app);

describe('POST /process', () => {
  it('should create a new process', async () => {
    const response = await request.post('/process').send({
      name: 'Sample Process',
      areaId: 1,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name', 'Sample Process');
    expect(response.body).toHaveProperty('areaId', 1);
  });

  it('should fail creating an area that already exists', async () => {
    const response = await request.post('/areas').send({
      name: '',
      areaId: 1,
    });

    expect(response.status).toBe(500);
  });
});