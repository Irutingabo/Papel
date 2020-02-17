/* eslint-disable linebreak-style */
import {should} from 'chai'
import { assert } from 'chai';
import User from '../models/user.model';
should()

describe('User', () => {
    let user;

    before(() => {
        user = new User({
            email: 'wes@dfsd.com',
            username: 'shama',
            firstName: 'cfdsgfd',
            lastName: 'Ma',
            password: "dfsfdfsdfsfd",
            type: 'user',
            isAdmin: false,
            createdAt: '2020-02-18T23:27:53.427+02:00'
        });
    });

    describe('Defaults', () => {
        it('has a valid email', () => {
            assert(user.email, 'valid email is missing');
        });

        it('has a valid first name', () => {
            assert(user.firstName, 'valid first name is missing');
        });

        it('has a valid last name', () => {
            assert(user.lastName, 'valid last name is missing');
        });

        it('has a valid type', () => {
            assert.equal(user.type, 'user', 'valid type is missing');
        });

        it('has a valid password', () => {
            assert(user.password, 'valid password is missing');
        });

        it('has a valid username', () => {
            assert(user.username, 'valid username is missing');
        });

        it('if is admin or not', () => {
            assert.equal((user.isAdmin),false, 'is he/she admin?');
            
        });

        it('has when is created at', () => {
            user.createdAt.should.not.be.undefined;
        });
    });
});
