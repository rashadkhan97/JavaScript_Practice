const prompt = require("prompt-sync")();

console.log(
    "1. Check Balance\n" +
    "2. Check Statement\n" +
    "3. Cash Withdraw\n" +
    "4. Money Transfer"
);

let input = parseInt(
    prompt("Input any of the following numbers: ")
);

switch (input) {
    case 1:
        console.log("You have selected Balance Check option.");
        break;

    case 2:
        console.log("You have selected Statement Check option.");
        break;

    case 3:
        console.log("You have selected Cash Withdraw option.");
        break;

    case 4:
        console.log("You have selected Money Transfer option.");
        break;

    default:
        console.log(
            "You must select one of the available options."
        );
}