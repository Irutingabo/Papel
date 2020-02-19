import request from 'supertest';
import app from '../index';


// Testing user sign up with no email
describe('api/v1/signup', () => {
  let user2 = {
    "username": "dumebi",
    "firstName": "dumba",
    "lastName": "ebikwa",
    "password": "nevasd"
  }
  it('respond with 400 not created', (done) => {
      request(app)
          .post('/api/v1/signup')
          .send(user2)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .end((err) => {
              if (err) return done(err);
              done();
          });
  });
});



