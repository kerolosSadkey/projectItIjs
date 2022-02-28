function removeFormCart(productId) {
    var currentUserId=localStorage.getItem("currUserId");
    var currentKey= "cart_"+currentUserId
    var storageProducts = JSON.parse(localStorage.getItem(currentKey));
    var products = storageProducts.filter(product => product.productId !== productId);
    localStorage.setItem(currentKey, JSON.stringify(products));
    Swal.fire("Successfully", "Deleted Successfully!", "success");
    
}


function decreaseInCart(){
    _id="mob_2"
    var products = [];
    var currentUserId=localStorage.getItem("currUserId");
    var currentKey= "cart_"+currentUserId
    if (localStorage.getItem(currentKey)) 
            products = JSON.parse(localStorage.getItem(currentKey));
          
    if(products.find(p=>p.productId==_id)){
          products.find(p=>p.productId==_id).qauntity -=1

          if( products.find(p=>p.productId==_id).qauntity== 0 )
                   products=  products.filter(product => product.productId !== _id);
          
           localStorage.setItem(currentKey, JSON.stringify(products));
              
      }
}


function IncearseInCart(){
    _id="mob_2"
    var currentUserId=localStorage.getItem("currUserId");
    var currentKey= "cart_"+currentUserId
    var products = [];
    if (localStorage.getItem(currentKey)) 
            products = JSON.parse(localStorage.getItem(currentKey));
          
    if(products.find(p=>p.productId==_id)){
          products.find(p=>p.productId==_id).qauntity +=1
              localStorage.setItem(currentKey, JSON.stringify(products));
          }
}


function getOneCart(id){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","products.json");
    xhr.send();
   
    xhr.addEventListener("readystatechange",function(){
        if(xhr.readyState==4&&xhr.status==200){

            var products =  JSON.parse( xhr.response);
   
            products.filter(elem=>elem.id==id).forEach(item => {
                var elem = document.getElementById("contain");
                
                elem.innerHTML += '<div class="col-4"><div class="card" >'+
                '<img src="'+item.imageURL+'" class="card-img-top" alt="...">'+
                '<div class="card-body"> <h5 class="card-title">'+item.name+
                '</h5> <p class="card-text">'+item.description+'</p>'
            });
        }
        
    })
        
       
}



function getAllCart(){

    var currentUserId=localStorage.getItem("currUserId");
    var currentKey= "cart_"+currentUserId
    var xhr = new XMLHttpRequest();
    xhr.open("GET","products.json");
    xhr.send();
    xhr.addEventListener("readystatechange",function(){
        if(xhr.readyState==4&&xhr.status==200){
             var productsId = JSON.parse(localStorage.getItem(currentKey))
               var products =  JSON.parse( xhr.response );


                productsId.forEach(id => {
                   console.log(id.productId)
                    products.filter(elem=>elem.id==id.productId).forEach(item => {
                        var elem = document.getElementById("contain");
                        
                        elem.innerHTML += '<div class="col-4"><div class="card" >'+
                        '<img src="'+item.imageURL+'" class="card-img-top" alt="...">'+
                        '<div class="card-body"> <h5 class="card-title">'+item.name+
                        '</h5> <p class="card-text">'+item.description+'</p>'
                    });
                });
        }

    });

}

