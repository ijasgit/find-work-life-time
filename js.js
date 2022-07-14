var month = document.getElementById("month")
console.log(month);
var days = document.getElementById('days')
month.addEventListener("click", change)
function change() {
    if (month.value == 2) {
        console.log("hello");

        for (i = 1; i <= 28; i++) {
            var op = document.createElement('Option')
            var optionText = document.createTextNode(i);
            console.log(op);
            // console.log(optionText)
            var oop = op.appendChild(optionText)
            days.appendChild(op)
            // days.value=optionText
            // console.log(days)
            // console.log(oop);


            // days = document.getElementById("days")
        }


    }
    else if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7 || month.value == 8 || month.value == 10 || month.value == 12) {
        for (i = 1; i <= 31; i++) {
            var op = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(op);
            // console.log(optionText)
            days.appendChild(op)

            var oop = op.appendChild(optionText)
        }
    }
    else if (month.value == 00) {
    }
    else {
        for (i = 1; i <= 30; i++) {
            var op = document.createElement('Option')
            const optionText = document.createTextNode(i);
            console.log(op);
            // console.log(optionText)
            var oop = op.appendChild(optionText)
            days.appendChild(op)

            // days = document.getElementById("days")
        }
    }
}
// var option=document.getElementsByTagName("option")
// console.log(option);