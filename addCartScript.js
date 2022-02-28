function addToCart() {
  //  _id="mob_2"
    qauntity=parseInt(document.getElementById("qty").value);
     var x = localStorage.getItem("isLogged");
     console.log(x);
     if (localStorage.getItem("isLogged")||sessionStorage.getItem("isLogged")) {
        var currentUserId=localStorage.getItem("currUserId");
        var currentKey= "cart_"+currentUserId
            var products = []
           
            if (localStorage.getItem(currentKey)) {
                products = JSON.parse(localStorage.getItem(currentKey));
               
            }
                
            if(products.find(p=>p.productId==_id)){
    
                    Swal.fire({ title: "Attention",text: "this product already exists in cart !!",}).then(function(){
                            products.find(p=>p.productId==_id).qauntity += qauntity
                            localStorage.setItem(currentKey, JSON.stringify(products));
                        })
            
            }else{
                products.push({ 'productId': _id,"qauntity": qauntity});
                localStorage.setItem(currentKey, JSON.stringify(products));
            }
         
 
     } else{
 
       Swal.fire({
             title: "Attention", text: "you must submit at first !!",  }).then(function(){
                  location.replace("login.html")
              })
      
              }
       
 }
 
 
 