# Simple Calculator

A simple calculator built using HTML, CSS, and JavaScript. This project demonstrates basic web development skills and provides a functional calculator with a clean and modern design.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Clear and delete functionalities.
- Responsive design with a modern look.
## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/simple-calculator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd simple-calculator
    ```

## Usage

1. Open the `index.html` file in your web browser to use the calculator.

## Code Overview

### HTML

The HTML file contains the structure of the calculator:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Calculator</title>
    </head>
    <body>
        <div class="container">
            <div class="calculator">
                <input type="text" placeholder="0" id="output-screen">
                <button onclick="clearInput()">Cl</button>
                <button onclick="del()">DEL</button>
                <button onclick="display('%')">%</button>
                <button onclick="display('/')">/</button>
                <button onclick="display('7')">7</button>
                <button onclick="display('8')">8</button>
                <button onclick="display('9')">9</button>
                <button onclick="display('*')">*</button>
                <button onclick="display('4')">4</button>
                <button onclick="display('5')">5</button>
                <button onclick="display('6')">6</button>
                <button onclick="display('-')">-</button>
                <button onclick="display('1')">1</button>
                <button onclick="display('2')">2</button>
                <button onclick="display('3')">3</button>
                <button onclick="display('+')">+</button>
                <button onclick="display('0')">0</button>
                <button onclick="display('.')">.</button>
                <button onclick="calculate()" class="equal">=</button>
            </div>
        </div>
        <script>
            let outputscreen=document.getElementById("output-screen");
            function display(num){
                outputscreen.value +=num;
            }
            function calculate(){
                try{
                    outputscreen.value=eval(outputscreen.value);

                }
                catch(err)
                {
                    alert("Invalid");
                }
            }
            function clearInput(){
                outputscreen.value="";
            }
            function del()
            {
                outputscreen.value=outputscreen.value.slice(0,-1);
            }
        </script>
    </body>
</html>
```

### CSS

The CSS file styles the calculator:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    outline: none;
}

body {
    background-color: black;
}

.container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculator {
    background-color: #ecf0f3;
    padding: 25px;
    box-shadow: inset 5px 5px 12px #ffffff, 5px 5px 12px rgba(0,0,0,.16);
    display: grid;
    grid-template-columns: repeat(4, 68px);
    border-radius: 30px;
}

input {
    grid-column: span 4;
    height: 80px;
    width: 250px;
    background-color: #ecf0f3;
    box-shadow: inset -5px -5px 12px #ffffff, inset 5px 5px 12px rgba(0,0,0,.16);
    border: none;
    border-radius: 50px;
    font-size: 50px;
    text-align: end;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 25px;
}

button {
    height: 40px;
    width: 48px;
    background-color: #ecf0f3;
    box-shadow: inset -5px -5px 12px #ffffff, inset 5px 5px 12px rgba(0,0,0,.16);
    border: none;
    border-radius: 50%;
    font-size: 16px;
}

.equal {
    width: 115px;
    border-radius: 40px;
    background-color: #ecf0f3;
    box-shadow: inset -5px -5px 12px #ffffff, inset 5px 5px 12px rgba(0,0,0,.16);
}
```

### JavaScript

The JavaScript file provides the functionality:

```javascript
let outputscreen = document.getElementById("output-screen");

function display(num) {
    if (outputscreen.value === "0" || outputscreen.value === "Invalid") {
        outputscreen.value = num;
    } else {
        outputscreen.value += num;
    }
}

function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch (err) {
        outputscreen.value = "Invalid";
    }
}

function clearInput() {
    outputscreen.value = "0";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
    if (outputscreen.value === "") {
        outputscreen.value = "0";
    }
}
```

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
