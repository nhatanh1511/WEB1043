let a = parseFloat(prompt("Nhap a = "));
let b = parseFloat(prompt("Nhap b = "));
let c = parseFloat(prompt("Nhap c = "));

if(a==0){
    let x=-c/b;
    document.write(`Nghiệm của CT là ${x}`)
}
else{
    let delta = b*b - 4*a*c;
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
  } else if (delta == 0) {
    // Một nghiệm kép
    let x = -b / (2 * a);
    document.write(`Phương trình có một nghiệm kép: x = ${x}`);
  } else {
    // Không có nghiệm thực
    document.write("Phương trình không có nghiệm");
  }
}