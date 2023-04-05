function caculate() {
    var pricelbl = document.getElementById("pro");
    var qtyinput = document.getElementById("qty");

    var price = Number(pricelbl.getAttribute("data-price"));
    var qty = Number(qtyinput.value);

   var names= document.getElementById("name") 
   var amounts =  document.getElementById("amount")

   names.innerText = "Oppo Reno 9";
   amounts.innerText = "$" +price *qty;
    
}
