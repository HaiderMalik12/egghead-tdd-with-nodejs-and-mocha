const bankAccounts = [
    {
        name: 'John',
        id: 1,
        account: '347496844548723216',
        balance: 100
    },
    {
        name: 'Jane',
        id: 2,
        account: '447496844568723219',
        balance: 200
    }
]
module.exports = {
    getBalance(id, cb) {
        setTimeout(() => {
            const { balance } = bankAccounts.find(a => a.id === id);
            if (!balance) cb('could not find balance');
            cb(null, balance)
        }, 1000)
    }
}