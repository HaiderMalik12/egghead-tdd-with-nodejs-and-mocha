const { expect } = require('chai');
const bankAccount = require('../modules/bank-account');

describe('BankAccount',function(){
    this.timeout(3500);
    it('should get the balance', function(done){
        bankAccount.getBalance(1,(err, balance) => {
            if(err){
                throw err;
            }
            expect(balance).to.equals(100);
            done();
        })
    })
})