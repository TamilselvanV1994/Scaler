class BankAccount {
  constructor(accNumber, accName, balance = 0) {
    this.accNumber = accNumber;
    this.accName = accName;
    this.balance = balance;
  }

  deposite(amount) {
    if (amount > 0) {
      this.balance = this.balance + amount;
      console.log(
        `Deposited Amount ${amount} and Current Balance ${this.balance}`
      );
    } else {
      console.log(`Deposite Amount Should be in positive`);
    }
  }

  withdra(amount) {
    if (amount <= this.balance && amount > 0) {
      this.balance = this.balance - amount;
      console.log(
        `Withdrawal Amount ${amount} and Current Balance ${this.balance}`
      );
    } else {
      console.log(
        `sorry, Insuficient fund or Invalid withrwal amount, Current Balance ${this.balance}`
      );
    }
  }

  amountTransfer(account, amount) {
    account.deposite(amount);
    this.withdra(amount);
    console.log(
      `Amount ${amount} transfered to ${account.accNumber}, current balance ${this.balance}`
    );
  }
}

const account1 = new BankAccount(101, "Tamilselvan");
account1.deposite(10000);

console.log(account1);

const account2 = new BankAccount(102, "Pavithara");
account2.deposite(5000);

account2.amountTransfer(account1, 1000);

account1.amountTransfer(account2, 50);
