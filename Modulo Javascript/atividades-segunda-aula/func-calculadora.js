function calculadora(num1, num2, op) {
    if (op == "+") {
        console.log(num1 + num2);
    } else if (op == "-") {
        console.log(num1 - num2);
    } else if (op == "/") {
        console.log(num1 / num2);
    } else if (op == "*") {
        console.log(num1 * num2);
    } else {
        console.log("calma lá, paizão.");
    }
}

calculadora(5, 7, "+");

calculadora(23, 40, "-");

calculadora(60, 24, "/");

calculadora(15, 31, "*");