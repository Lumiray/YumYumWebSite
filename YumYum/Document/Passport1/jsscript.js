function checkTriangle() {
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var z = parseFloat(document.getElementById("z").value);
    if (x + y > z && x + z > y && y + z > x) {
        if (x * x + y * y === z * z || x * x + z * z === y * y || y * y + z * z === x * x) {
            document.getElementById("result").innerHTML = "Треугольник существует и является прямоугольным";
            var condition = "Треугольник существует и является прямоугольным";
        } else {
            document.getElementById("result").innerHTML = "Треугольник существует, но не является прямоугольным";
            var condition = "Треугольник существует, но не является прямоугольным";
        }
    } else {
        document.getElementById("result").innerHTML = "Треугольник не существует";
        var condition = "Треугольник не существует";
    }
    var form = document.getElementById("UserEnter");
    form.addEventListener("submit", function (event) {
        var queryString = "";
        queryString += "formulation=" + encodeURIComponent("Существует ли треугольник с такими длинами сторон, и, если существует, будет ли он прямоугольным?") + "&";
        queryString += "x=" + encodeURIComponent(x) + "&";
        queryString += "y=" + encodeURIComponent(y) + "&";
        queryString += "z=" + encodeURIComponent(z) + "&";
        queryString += "result=" + encodeURIComponent(condition) + "&";
        if (queryString !== "") {
            queryString = queryString.slice(0, -1);
            var url = form.action + "?" + queryString;
            window.open(url, "_blank");
        }
        event.preventDefault();
    });
}