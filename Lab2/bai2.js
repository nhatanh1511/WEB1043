
        let a = parseInt(prompt("Nhập cạnh a: "));
        let b = parseInt(prompt("Nhập cạnh b: "));
        let c = parseInt(prompt("Nhập cạnh c: "));
        if (a + b > c && a + c > b && b + c > a) {
            if (a === b || a === c || b === c) {
                document.write("Đây là tam giác cân");
            } else if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2) {
                document.write("Đây là tam giác vuông");
            } else {
                document.write("Đây là tam giác thường");
            }
        } else {
            document.write("đây không phải là tam giác");
        }
 