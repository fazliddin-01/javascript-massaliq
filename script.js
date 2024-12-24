function cartObj() {
    let rand = randomNumbers(1, 2);
  
    const priceList = {
        1: {
            'Lavash': {
                info: 'big cheese',
                price: 22000
            },
            'Hot-dog': {
                info: 'mini',
                price: 15000
            },
            'Cola': {
                info: '1.5 L',
                price: 9000
            },
        },
        2: {
            'Sushi': {
                info: 'max-roll',
                price: 32000
            },
            'Soya': {
                info: '200ml',
                price: 5000
            },
        }
    }

    const Menu = priceList[rand];
  
    let bowlanigich = 0; 
    let dastavkasi = 9000
    for (const item in Menu) {
        const product = Menu[item];
        console.log(`${item}: ${product.info}, ${product.price} so'm`);
        bowlanigich += product.price; 
    }

    console.log(`Dastavkasi bilan: ${bowlanigich+dastavkasi} so'm boladi | dastavkasi narxi ${dastavkasi}`);
    return bowlanigich;
}
  
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
cartObj();
