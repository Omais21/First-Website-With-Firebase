if(c != null){
    showShopItems(databaseRef, products, filter = {
      byChild:true,
      child:'category',
      equalTo:c
    });
  
    document.getElementById('products').style = 'display:block';
  }
  
  if(c == null){
  document.getElementById('products').style = 'display:none';
  
  const tablets = document.getElementById('tablets');
  showShopItemsMain(databaseRef, tablets, filter = {
    byChild:true,
    child:'category',
    equalTo:'tablets',
    limitToFirst:{limit:4},
  }, 'tablets');
  
  const phones = document.getElementById('phones');
  showShopItemsMain(databaseRef, phones, filter = {
    byChild:true,
    child:'category',
    equalTo:'phones',
    limitToFirst:{limit:4},
  }, 'phones');
  
  
  const laptops = document.getElementById('laptops');
  showShopItemsMain(databaseRef, laptops, filter = {
    byChild:true,
    child:'category',
    equalTo:'laptops',
    limitToFirst:{limit:4},
  }, 'laptops');
  
  const gaming = document.getElementById('gaming');
  showShopItemsMain(databaseRef, gaming, filter = {
    byChild:true,
    child:'category',
    equalTo:'gaming',
    limitToFirst:{limit:4},
  }, 'gaming');
  
  const cameras = document.getElementById('cameras');
  showShopItemsMain(databaseRef, cameras, filter = {
    byChild:true,
    child:'category',
    equalTo:'cameras',
    limitToFirst:{limit:4},
  }, 'cameras');
  
  }else {
    tablets.style = 'display:none';
    phones.style = 'display:none';
    laptops.style = 'display:none';
    gaming.style = 'display:none';
    cameras.style  ='display:none';
  }