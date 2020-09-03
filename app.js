function myfunction() {
    let acceptor = document.getElementById('acceptor').value;
    let range = document.getElementById('range').value;
    if (!isNaN(acceptor || range)) {
        let table = "";
        let result = "";
        for (x = 1; x <= range; x++) {
            result = acceptor * x;
            table += acceptor + 'x' + x + '=' + result + '<br>';
        }
        // document.getElementById('input').innerHTML = acceptor + 'multiplication table';
        document.getElementById('table').innerHTML = table;
        return true;
    } else {
        alert("invalid input");
        return false;
    }
}