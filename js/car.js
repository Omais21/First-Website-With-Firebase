
let checkout = document.getElementById('checkout');
let cart = document.getElementById('cart');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
firebase.database().ref('cart/' + user.uid).on('value', snap => {
  if(document.getElementById('checkoutRow') != null){
    document.getElementById('checkoutRow').parentNode.removeChild(document.getElementById('checkoutRow'));
  }
  buildProceedToCheckOut(snap, checkout);
});
//user logs in
firebase.database().ref('cart/' + user.uid).on('child_added', snap => {
  buildCartProducts(snap, cart);
});

  }else {
    //user logs out
    if(document.getElementById('checkoutRow') != null){
      document.getElementById('checkoutRow').parentNode.removeChild(document.getElementById('checkoutRow'));
    }

    let items = document.getElementsByClassName('item');
    if(items[items.length - 1]){
      for(let i = 0; i < items.length; i++){
        items[i].parentNode.removeChild(items[i]);
      }
    }
    buildLoginBtn(cart, 'auth.html?auth=login');
  }
});