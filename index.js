let display = document.getElementById("display");

/*numpad support */
document.addEventListener("keydown", function(event) {
    const key = event.key;
    //console.log(key);
    if(!isNaN(key) || "+-*/.%".includes(key))
    {
        press(key);
    }
    else if (key === "Enter" || key === "=")
    {
        event.preventDefault();
        calculate();
    }
    else if(key === "Backspace")
    {
        display.value = display.value.slice(0, -1);
    }
    else if(key === "Delete")
    {
        clearDisplay();
    }
})


function press(value) {
    if(!isNumOrSymbol(display.value) && display.value != "")
    {
        clearDisplay();
        display.value += value;
    }
    else
        display.value += value;
}

function calculate() {
    if(display.value != "Error" && display.value != "")
    {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
}

function clearDisplay() {
    display.value = "";
}

function changeSign() {
    console.log("WIP");
}

function isNumOrSymbol(str)
{
    return /^[0-9+.\-*\/%]+$/.test(str);
}