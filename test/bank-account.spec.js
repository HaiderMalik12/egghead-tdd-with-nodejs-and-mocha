const { expect } = require('chai');
const bankAccount = require('../modules/bank-account');
describe('bank account feature', () => {
    it('it should return the balance of the account', () => {
        const balance = bankAccount.getBalance(1);
        expect(balance).to.equals(100);
    })
})