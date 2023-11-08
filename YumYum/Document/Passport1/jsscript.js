function checkTriangle() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var z = parseInt(document.getElementById("z").value);
    if (x + y > z && x + z > y && y + z > x) {
        if (x * x + y * y === z * z || x * x + z * z === y * y || y * y + z * z === x * x) {
            result = "Треугольник существует и является прямоугольным";
            document.getElementById("result").innerText = messageText + result;
            var condition = "Треугольник существует и является прямоугольным";
        } else {
            result = "Треугольник существует, но не является прямоугольным";
            document.getElementById("result").innerText = messageText + result;
            var condition = "Треугольник существует, но не является прямоугольным";
        }
    } else {
        result = "Треугольник не существует";
        document.getElementById("result").innerText = messageText + result;
        var condition = "Треугольник не существует";
    }
}
function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText;
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки, повторите ввод");
    }
}
function checkTriangle_send() {
    checkTriangle();
}
var messageText = document.getElementById("result").innerText;
var result;
var check = true;
const constcheckTriangle = document.getElementById("checkTriangle");
constcheckTriangle.onclick = checkTriangle;
const constSend = document.getElementById("send");
constSend.onclick = send;