var month = document.getElementById("month")
console.log(month);
var days = document.getElementById('days')
var year = document.getElementById("year")
year.addEventListener('click', changeyr)
function changeyr() {
    yr = year.value
    console.log(yr)
    document.getElementById('month').value = ''
    document.getElementById('days').value = ''
}
month.addEventListener("click", change)
function change() {
    document.getElementById('days').value = ''
    if (month.value == 2) {
        days.innerHTML = ''
        document.getElementById('days').value = ''
        if ((0 == yr % 4) && (0 != yr % 100) || (0 == yr % 400)) {
            days.innerHTML = ''
            for (i = 1; i <= 29; i++) {
                var op = document.createElement('option')
                var optionText = document.createTextNode(i);
                console.log(op);
                var oop = op.appendChild(optionText)
                days.appendChild(op)
            }
        }
        else {
            days.innerHTML = ''
            for (i = 1; i <= 28; i++) {
                var op = document.createElement('Option')
                var optionText = document.createTextNode(i);
                console.log(op);
                var oop = op.appendChild(optionText)
                days.appendChild(op)
            }
        }
    }
    else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        days.innerHTML = ''
        for (i = 1; i <= 31; i++) {
            var op = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(op);
            days.appendChild(op)
            var oop = op.appendChild(optionText)
        }
    }
    else if (month.value == 00) {
    }
    else {
        days.innerHTML = ''
        for (i = 1; i <= 30; i++) {
            var op = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(op);
            var oop = op.appendChild(optionText)
            days.appendChild(op)
        }
    }
}
