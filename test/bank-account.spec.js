const { expect } = require('chai');
const bankAccount = require('../modules/bank-account');

describe('BankAccount',() => {
    it('should get the balance', (done) =>{
        bankAccount.getBalance(1,(err, balance) => {
            if(err){
                throw err;
            }
            expect(balance).to.equals(100);
            done();
        })
    })
})