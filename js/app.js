// memory
const memoryCost = document.getElementById('memory-cost');
document.getElementById('click-16gb').addEventListener('click',function(){
    memoryCost.innerText = '180';
    updateTotal();
})
document.getElementById('click-8gb').addEventListener('click', function(){
    memoryCost.innerText = '0';
    updateTotal();
})

// storage 
const storageCost = document.getElementById('storage-cost');
document.getElementById('click-256gb').addEventListener('click', function(){
   storageCost.innerText = '0'; 
   updateTotal();
})
document.getElementById('click-512gb').addEventListener('click', function(){
    storageCost.innerText = '100'; 
    updateTotal();
 })
 document.getElementById('click-1tb').addEventListener('click', function(){
    storageCost.innerText = '180'; 
    updateTotal();
 })

//  delivery
const deliveryCost = document.getElementById('delivery-cost');
document.getElementById('delivery-free').addEventListener('click', function(){
    deliveryCost.innerText = '0'; 
    updateTotal();
})
document.getElementById('delivery-paid').addEventListener('click', function(){
    deliveryCost.innerText = '20'; 
    updateTotal();
})

// totalamount
const total = document.getElementById('total-price');
let finalTotal = document.getElementById('final-total');
function updateTotal(){
 const memoryValue = memoryCost.innerText;
 const storageValue = storageCost.innerText;
 const deliveryValue = deliveryCost.innerText;
 const valueTotal =1299 + parseInt(memoryValue)+parseInt(storageValue)+parseInt(deliveryValue);
 total.innerText = valueTotal;
 finalTotal.innerText = valueTotal;
}
// promo
document.getElementById('promo-apply').addEventListener('click', function(){
    const promo = document.getElementById('promo-code');
    const promoCode = promo.value; 
    const amountTotal = finalTotal.innerText;
    if(promoCode=='stevekaku'){
        console.log(amountTotal);
        const promoBalance = amountTotal*(20/100);
        const grandTotal = amountTotal - promoBalance;
        finalTotal.innerText = grandTotal;
        document.getElementById('promo-apply').disabled = true;
        document.getElementById('promo-code').value = '';
    }
    else{
        alert('Enter Valid Promo code');
    }
})