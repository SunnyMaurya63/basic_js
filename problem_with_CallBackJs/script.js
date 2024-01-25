var purchaseInfo={ /* some key values*/ };

trackCheckout(purchaseInfo,function finish(){
    chargeCreditCard(purchaseInfo);
    showThankYouPage();
})

// trackCheckout -> gives to us by an external api

// problem of inversion control
