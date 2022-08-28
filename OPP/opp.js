

function Bankaccount(custmername,balance=0){
    this.userName=custmername;
    this.balance=balance;
    this.accountNumber=Date.now();
}

let ParulAccount=new Bankaccount("Parul");

let akshuAccount=new Bankaccount("Akhsu");

console.log(ParulAccount.userName);

 akshuAccount.balance=10000000000  //not use to this feature not good practice

console.log(akshuAccount.userName);