#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency:any={
   USD:      1,     // BASS CURRENCY
   EURO:     0.92,
   PKR:      277.5,
   INR:      83.3,
   POUND:    0.79,
   AED:      3.67,
   SAR:      3.75,
   CNY:      7.23,
   AFN:      71.23,
   BDT:      109.6,
   JPY:      151.61,
};
let useranswer = await inquirer.prompt(
[
    {
        name:"from",
        message: "ENTER FROM CURRENCY",
        type: "list",
        choices:[ "USD","EURO","PKR","INR","POUND","AED","SAR","CNY","AFN","BDT","JPY"]
    },
    {
        name:"to",
        message: "ENTER TO CURRENCY",
        type: "list",
        choices:[ "USD","EURO","PKR","INR","POUND","AED","SAR","CNY","AFN","BDT","JPY"] 
    },
    {
        name:"amount",
        message: "ENTER YOUR AMOUNT",
        type: "number",
    }, 
]);
let fromAmount = currency[useranswer.from]
let toAmount = currency[useranswer.to]
let Amount = useranswer.amount
let baseamount = Amount / fromAmount //  USD BASE AMOUNT
let convertedamount = baseamount * toAmount

console.log(chalk.blue      ("FROM CURRENCY: ",useranswer.from,"   ",fromAmount));
console.log(chalk.yellow    ("TO CURRENCY:   ",useranswer.to,    "   ",toAmount));
console.log(chalk.red       ("AMOUNT:                ",Amount));
console.log(chalk.green.bold("CONVERTED AMOUNT:      ",convertedamount.toFixed(2)));

