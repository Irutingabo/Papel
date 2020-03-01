/* eslint-disable linebreak-style */
import { should } from 'chai'
import { assert } from 'chai';
import User from '../models/user.model';
import Account from '../models/account.model';
should()

describe('Models', () => {

    describe('User', () => {
        let user;

        before(() => {
            user = new User({
                email: 'wes@dfsd.com',
                username: 'shama',
                firstname: 'cfdsgfd',
                lastname: 'Ma',
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
                assert(user.firstname, 'valid first name is missing');
            });

            it('has a valid last name', () => {
                assert(user.lastname, 'valid last name is missing');
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
                assert.equal((user.isAdmin), false, 'is he/she admin?');

            });

            it('has when is created at', () => {
                user.createdAt.should.not.be.undefined;
            });
        });
    });


    describe('Account', () => {
        let anAccount;

        before(() => {
            anAccount = new Account({
                username: 'shama',
                email: 'wes@dfsd.com',
                accountType: "Savings",
                status: 'Draft',
                openingBalance: 0,
                balance: 0,
                createdOn: '2020-02-18T23:27:53.427+02:00'

            });
        });

        describe('Defaults', () => {
            it('has a valid email', () => {
                assert(anAccount.email, 'valid email is missing');
            });

            it('has a valid user name', () => {
                assert(anAccount.username, 'valid user name is missing');
            });

            it('has a valid account type', () => {
                assert.equal(anAccount.accountType, 'Savings', 'valid account type is missing');
            });

            it('has a valid status', () => {
                assert(anAccount.status, 'valid status is missing');
            });

            it('has a valid opening balance', () => {
                assert.equal(anAccount.openingBalance, 0, 'valid opening balance is missing');
            });

            it('has a valid balance', () => {
                assert.equal(anAccount.balance, 0, 'valid balance is missing');
            });

            it('has when is created on', () => {
                anAccount.createdOn.should.not.be.undefined;
            });
        });
    });


})
