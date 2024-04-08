#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.blue('Welcome to Currency Converter Application'));
const currency : any = {
    USD : 1,
    EUR : 0.92,
    GBP : 0.79,
    INR : 83.31,
    PKR : 278,
    LKR : 0.93,
    AED : 75.81

};

let user_answer = await inquirer.prompt(
    [
        {
         name : "from",
         message : "Convert currency from",
         type : "list",
         choices :["USD" , "EUR" , "GBP", "INR" ,"PKR" , "LKR" ,"AED"]
        },
        {
            name : "to",
            message : "Convert currency to",
            type : "list",
            choices :["USD" , "EUR" , "GBP", "INR" ,"PKR" , "LKR" ,"AED"]
        },
        {
            name : "amount",
            message : "Enter your Amount",
            type : "number",
            
        },
        
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount/ fromAmount;
let convertedAmount = baseAmount * toAmount
console.log(Math.round(convertedAmount));