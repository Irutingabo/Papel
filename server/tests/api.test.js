import request from 'supertest'
import { should } from 'chai'
import app from '../index'
should();




// Testing user sign up
describe('api/v1/signup', () => {
  let user1 = {
    "username": "claude",
    "firstName": "Rema",
    "lastName": "claude",
    "email": "clauderema@gmail.com",
    "password": "Andela1."
  }
  it('respond with 201 user created', (done) => {
    request(app)
      .post('/api/v1/signup')
      .send(user1)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        res.body.should.be.a('object')
        done();
      });
  });

});


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
      .end((err, res) => {
        res.body.should.be.a('object')
        res.body.should.have.property('status')
        res.body.should.have.property('error')
        res.body.status.should.equal('400')
        res.body.error.should.equal('\"email\" is required')
        if (err) return done(err);
        done();
      });
  });
});



