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
