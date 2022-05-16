'use strict'

const { isTypedArray } = require('util/types');

class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = []; 
    }

    balance(){
        let sum = 0;
        for(let i=0; i<this.transactions.length; i++){
            sum += this.transactions[i].amount;
        }
        return sum
    }

    charge(payee, amt){
        let currentBalance = this.balance;
        if(amt <= currentBalance) {
            let chargeTransaction = new Transaction(-amt, payee)
            this.transactions.push(chargeTransaction);
    }
}

    deposit(amt){
        if(amt>0){
        let depositTransaction = new Transaction(amt, this.owner);
        this.transactions.push(depositTransaction);
    }
}

}

class Transaction {
    constructor(amount, payee){
        this.amount = amount;
        this.payee = payee;
        this.date = new Date(); 
    }
}

class SavingsAccount extends BankAccount{
    constructor(accountNumber, owner, interestRate){
        super(accountNumber, owner);
        this.interestRate = interestRate
}
}

// testing below

if (typeof describe === 'function') {
    const assert = require('assert');

    describe('#testing account creation', function(){
        it('should create a new account real good like', function(){
            let acct1 = new BankAccount('xx4432', "James Bond");
            assert.equal(acct1.owner, 'James Bond');
            assert.equal(acct1.accountNumber, 'xx432');
            assert.equal(acct1.transactions.length, 0);
        });

    });

    describe('#testing transaction creation', function(){
        it('Should create a " deposit" transaction correctly', function(){
            let t1 = new Transaction(30, "Deposit");
            assert.equal(t1.amount, 30)
            assert.equal(t1.payee, "Deposit");
            assert.notEqual(t1.date, undefined);
            assert.notEqual(t1.date, null);
        })
        it('Should create a "charge" transaction correctly', function(){
        let t1 = new Transaction(-34.45, "Charge");
        assert.equal(t1.amount, -34.45)
        assert.equal(t1.payee, "Charge");
        assert.notEqual(t1.date, undefined);
        assert.notEqual(t1.date, null);
        }) 
    })
}