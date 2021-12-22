// Algoritmo que señaña el producto con el precio más bajo
function lowestPrice(){
    let mayor=0;
    let products = [];
    let prices = [];
    //se crea un ciclo for de 5 repeticiones
    for (var i = 0; i<3; i++ ){
        let userList = prompt('Ingresa los productos que deseas comprar: ');
        let addPrice = prompt('Ingresa los precios: ');

        products.push(userList);
        prices.push(parseInt(addPrice));
    }
    if (prices[0] < prices[1]){
        alert(prices[0]);
    } else if (prices[2] < prices[1]){ 
        alert(prices[2])
    } else {
        console.log(prices)
    }
    
}

alert(lowestPrice());