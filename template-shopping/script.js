//  mettre à jour le prix total en fonction de la quantité

function checknumber(input, totalPrixid) {
    var nombreProduit = parseInt(input.value) ;
    var prixUnitaire = getPrixUnitaire(totalPrixid);
    var totalPrix = nombreProduit * prixUnitaire;

    var totalPrixElement = document.getElementById(totalPrixid); 
    totalPrixElement.textContent = totalPrix + ' Fcfa';

    miseTotalPrice();
} 
// recuperer le prix unitaire
function getPrixUnitaire(totalPrix) {
if (totalPrix == 'totalPrix1') {
    return 1000;
}

if (totalPrix == 'totalPrix2') {
    return 9000;
}
if (totalPrix == 'totalPrix3') {
    return 19000;
}
}
// Aimez les articles
function like(element) {
    if (element.style.color === 'red') {
    return element.style.color = '';
    } else {
    return element.style.color = 'red';
    }
}
//supprimer lelement du panier
function remove(button) {
    var btn = button.parentElement.parentElement;
    btn.remove();

    miseTotalPrice()
}


// Mettre à jour le prix total en fonction des quantités
function miseTotalPrice() {
    var totalElements = document.querySelectorAll('.total'); 
    var totalPrice =0;

    totalElements.forEach(totalElement => {
        var totalPriceText = totalElement.textContent; 
        var price = parseFloat(totalPriceText); 

            totalPrice += price;
        
    });

    // Met à jour le texte du prix total
    const priceTotalElement = document.getElementById('priceTotal');
    priceTotalElement.textContent = totalPrice + ' Fcfa';
}







