const chai = require('chai');
const expect = chai.expect;
import request from 'supertest'
import { should } from 'chai'
import app from '../index'
should();

describe('App', () => {
  it('Should exists', () => {
    expect(app).to.be.a('function');
  })
})


// Users' controller
describe('Sign Up Endpoint,', () => {

  // Testing user sign up
  describe('api/v1/signup', () => {
    const user1 = {
      "username": "claude",
      "firstname": "Rema",
      "lastname": "claude",
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
    const user2 = {
      "username": "dumebi",
      "firstname": "dumba",
      "lastname": "ebikwa",
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

})

describe('Sign In Endpoint,', () => {

  // Testing user sign in
  describe('/api/v1/signup', () => {
    const user2 = {
      "email": "irushajj@gmail.com",
      "password": "passwordq"
    }
    it('User signing in does not exist', (done) => {
      request(app)
        .post('/api/v1/signin')
        .send(user2)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });

  // Testing user signing in with no valid data
  describe('/api/v1/signin', () => {
    const user2 = {
      "email": "irushajjgmail.com",
      "password": "passwordq"
    }
    it('User signing in with no valid data', (done) => {
      request(app)
        .post('/api/v1/signin')
        .send(user2)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          res.body.should.be.a('object')
          res.body.should.have.property('status')
          res.body.should.have.property('error')
          res.body.status.should.equal('400')
          done();
        });
    });
  });




})
