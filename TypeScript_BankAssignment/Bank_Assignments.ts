
interface account{
    CreateAccount();
    CheckBalanace();
    SavingAccount();
    CurrentAccount();
    TypeofAccount();
    WithdrawAmmount();
    SavingsDeposit();
    CurrentDeposit();
}
interface ICustomerDetails{
    Name: any;
    Age: any;
    Location: any;
    State: any;
    Country: any;
    Email: any;
    AccountNumber: string;
    savingsBalance:number;
    // customerDetails:any;
}
class Account implements account,ICustomerDetails{
    Name: any;
    Age: any;
    Location: any;
    State: any;
    Country: any;
    Email: any;
    customerDetails=new Map<string,any>();
    savingsBalance=0;
    AccountNumber: string;
   CreateAccount(){
       console.log("---------------------------------------------------------")
       console.log("Enter 1 For Checking Bank Balance\n\nEnter 2 for Checking Profile\n\nEnter 3 for Exit")
       var checkbalOrCheckProfile=require('readline-sync').question();
       if(checkbalOrCheckProfile==1){
           this.CheckBalanace();
       }
       else if(checkbalOrCheckProfile==2){
           console.log("-------------------------------------------------")
           console.log(this.AccountNumber);
           console.log("Enter you Account Number");
           var accountNumCheck=require("readline-sync").question();
           if(accountNumCheck==this.AccountNumber){
                  console.log(this.customerDetails);
                  this.CreateAccount();
           }
       }
       else{

       }
   }
   TypeofAccount(){
       console.log("-------------------Please choose the type of account------------------- \n")
       console.log("Enter 1 for Saving account \n");
       console.log("Enter 2 for Current Account\n");
       var chooseAccountType=require('readline-sync').question()
       if(chooseAccountType==1){
           this.SavingAccount();
       }
       else{
           this.CurrentAccount();
       }
       
   }
    CheckBalanace(){
        console.log("--------------------------------------------------------")
         console.log("\nEnter you Account Number\n");
         var accountNumCheck=require("readline-sync").question();
         if(accountNumCheck==this.AccountNumber){
             console.log("\nYour Balance is: INR"+ this.savingsBalance);
         }
         console.log("\nEnter 1 for HomePage\n");
         this.CreateAccount();
        

         
   }
    SavingAccount(){
       console.log("----------------------welocme saving account----------------------");
        this.Name=require('readline-sync').question("Enter full name: ")
        this.Age=require('readline-sync').question("Enter age: ");
        if(this.Age>=68){
            console.log("You are not eligible for new bank account: ")
        }
        else{
        this.Location=require('readline-sync').question("Enter Location: ");
        this.State=require('readline-sync').question("Enter State: ");
        this.Country=require('readline-sync').question("Enter Country: ");
        this.Email=this.EmailCheck();
        this.AccountNumber=`svv${Math.floor(Math.random()*30000000)+20000000}`;
        console.log("\n-------------------------------------------------------------------------------------------------\n🥳🥳🥳🥳🥳🥳🥳🥳  New Account created succesfully  🥳🥳🥳🥳🥳🥳🥳🥳\n\n Current Balance is 0.");
        console.log(`\nYour Account Number : ${this.AccountNumber}`);
        console.log("Please Diposit Money Greater Than 500 To Activate Your Account\n\n");
        this.customerDetails.set("Name",this.Name)
        this.customerDetails.set("Age",this.Age)
        this.customerDetails.set("State",this.State)
        this.customerDetails.set("Location",this.Location)
        this.customerDetails.set("country",this.Country)
        this.customerDetails.set("Email",this.Email);
        this.SavingsDeposit();
        
        }
        
    }
    SavingsDeposit(){
       
        this.savingsBalance +=parseInt(require('readline-sync').question("Enter The Ammout To Be Deposited: "));
       if(this.savingsBalance<500)
       {
          console.log("Enter The Amount Greater Than 500");
          this.savingsBalance=0;
          this.SavingsDeposit();
       }
   else 
       {
        console.log(`--------------------------------------------------\n\n-------Ammount Added Successfuly------\n\nyour current balanace is ${this.savingsBalance}`);
        console.log("\nPlease Enter 1 for Withdraw money.\n\nPlease enter 2 for Deposit Money");
        var withdraw=require('readline-sync').question();
        if(withdraw==1){
            this.WithdrawAmmount();
        }
        if(withdraw==2){
            this.SavingsDeposit();
        }
        if(withdraw==3){
            this.CheckBalanace();
        }
        

       }
    }
    CurrentAccount(){
       console.log("Welocme Current Account");
        this.Name=require('readline-sync').question("Enter full name: ")
        this.Age=require('readline-sync').question("Enter age: ");
        if(this.Age>=68){
            console.log("You are not eligible for new bank account: ")
        }
        else{
        this.Location=require('readline-sync').question("Enter Location: ");
        this.State=require('readline-sync').question("Enter State: ");
        this.Country=require('readline-sync').question("Enter Country: ");
        this.Email=this.EmailCheck();
        this.AccountNumber=`svv${Math.floor(Math.random()*30000000)+20000000}`;
        console.log("\n-------------------------------------------------------------------------------------------------\n🥳🥳🥳🥳🥳🥳🥳🥳  New Account created succesfully  🥳🥳🥳🥳🥳🥳🥳🥳\n\n Current Balance is 0.");
        console.log(`\nYour Account Number : ${this.AccountNumber}`);
        console.log("Please Diposit Money Greater Than INR800 To Activate Your Account\n\n");
        this.customerDetails.set("Name",this.Name)
        this.customerDetails.set("Age",this.Age)
        this.customerDetails.set("State",this.State)
        this.customerDetails.set("Location",this.Location)
        this.customerDetails.set("country",this.Country)
        this.customerDetails.set("Email",this.Email);
       //  this.DipositAmmount(AccountNumber);  
        this.CurrentDeposit();
       }
    }
    CurrentDeposit(){
       this.savingsBalance +=require('readline-sync').question("Enter The Ammout To Be Deposited");
      if(this.savingsBalance<800)
       {
          console.log("Please Enter The Ammount Greater Than INR800");
          this.savingsBalance=0;
          this.CurrentDeposit();
       }
   else 
       {
      
        console.log(`--------------------------------------------------\n\n-------Ammount Added Successfuly------\n\nyour current balanace is INR${this.savingsBalance}`);
        console.log("\nPlease Enter 1 for Withdraw money.\n\nPlease enter 2 for Deposit Money");
        var withdraw=require('readline-sync').question();
        if(withdraw==1){
            this.WithdrawAmmount();
        }
        if(withdraw==2){
            this.CurrentDeposit();
        }
        if(withdraw==3){
            this.CheckBalanace();
        }
       }
    }
    
    WithdrawAmmount() { 
        var withdrawAmmount=parseInt(require('readline-sync').question("Enter The Amount to Withdraw: "));
        
        if(withdrawAmmount>this.savingsBalance){
             console.log("😒😒😒😒---Insuffecient Balanace Please try again---😒😒😒😒");
             this.WithdrawAmmount();
        }
        else{
            this.savingsBalance -=withdrawAmmount;
            console.log("---------------------------------------------\n\nPlease collect the cash: INR" + withdrawAmmount);
            console.log("\nRemaining balanace: " +this.savingsBalance )
            console.log("\nWelocme")
            var redirect=require('readline-sync').question("Enter 1 for Home Screen\n\nEnter 2 for Exit\n------------------------------------------------------\n");
            if(redirect==1){
                this.CreateAccount();
            }
            else{
               //  this.Exit();
            }
        }
    }
     EmailCheck(){
        this.Email=require('readline-sync').question("Enter Email: ");
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regexp.test(this.Email)){
            return this.Email
        }
        else{
            console.log("😒😒😒😒-----------Please enter a valid email address----------😒😒😒😒")
            this.EmailCheck();
        }
    }
}
console.log("\n\n------------------Welcome to HDFC Bank management system-----------------\n")
console.log("Enter 1 For Create Bank Account\n");
console.log("Enter 2 For Checking the Bank Balance\n");
var choice=require('readline-sync').question()
var acc=new Account();
if(choice==1){
  var num= acc.TypeofAccount();
}
else if(choice==2){
}



