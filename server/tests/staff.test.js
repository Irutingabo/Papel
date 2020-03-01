import request from 'supertest'
import { should } from 'chai'
import app from '../index'
should();

describe('Testing protected endpoints can be accessed by signed staff', () => {

    let url = ''
    let token = null
    const user1 = {
        email: 'cashierLee@gmail.com',
        password: 'Andela1.'
    }
    before((done) => {
        request(url)
            .post('/user/token')
            .send(user1)
            .end(function (err, res) {
                done();
            });
    })


    describe('Get All Users', () => {

        // Testing Admin/ staff gets users' list
        describe('/api/v1/users', () => {
            it('Staff gets all users succesfully', (done) => {
                request('app')
                    .get('/users')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end((err, res) => {
                        done();
                    });
            });
        });

    })


    describe('Get all accounts user owns ', () => {

        it('Staff gets all users succesfully', (done) => {
            request(app)
                .get('/users/:emailId/accounts')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    res.body.should.be.a('object')
                    done();
                });
        });
    })
})
