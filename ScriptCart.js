function RemoveFromCart(itemId) {

    var currentUserId;
    if(localStorage.getItem("isLogged")){
        currentUserId =localStorage.getItem("currUserId");
    }
    else if (sessionStorage.getItem("isLogged")){
        currentUserId =sessionStorage.getItem("currUserId");
    }
    var currentKey= "cart_"+currentUserId
    var products = [];
    if (localStorage.getItem(currentKey)) 
         products = JSON.parse(localStorage.getItem(currentKey));
    if(products.find(p=>p.productId==itemId)){
        products=  products.filter(product => product.productId !== itemId);
        localStorage.setItem(currentKey, JSON.stringify(products));
        location.reload();
    }
}

function decreaseInCart(_id){
    // _id="mob_2"
    var products = [];
    // var currentUserId=localStorage.getItem("currUserId");
    var currentUserId;
        if(localStorage.getItem("isLogged")){
            currentUserId =localStorage.getItem("currUserId");
        }
        else if (sessionStorage.getItem("isLogged")){
            currentUserId =sessionStorage.getItem("currUserId");
        }
    var currentKey= "cart_"+currentUserId
    if (localStorage.getItem(currentKey)) 
            products = JSON.parse(localStorage.getItem(currentKey));
          
    if(products.find(p=>p.productId==_id)){
          products.find(p=>p.productId==_id).qauntity -=1
          document.getElementById(_id).innerText =  products.find(p=>p.productId==_id).qauntity; 
          if( products.find(p=>p.productId==_id).qauntity== 0 )
          {
                   products=  products.filter(product => product.productId !== _id);
                   localStorage.setItem(currentKey, JSON.stringify(products));
                   location.reload();  
          }
           localStorage.setItem(currentKey, JSON.stringify(products));
        //    location.reload(); 
      }
}


function IncearseInCart(_id){
    var currentUserId;
        if(localStorage.getItem("isLogged")){
            currentUserId =localStorage.getItem("currUserId");
        }
        else if (sessionStorage.getItem("isLogged")){
            currentUserId =sessionStorage.getItem("currUserId");
        }
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

