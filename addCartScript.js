function addToCart() {
    
    // var x = localStorage.getItem("isLogged")=="true"||sessionStorage.getItem("isLogged")=="true";
    // alert(x)
     if (localStorage.getItem("isLogged")=="true"||sessionStorage.getItem("isLogged")=="true") {
        qauntity=parseInt(document.getElementById("qty").value);
        if((qauntity<1)||isNaN(qauntity)){
            Swal.fire({
                title: "Wrong", text: "Invalid Quantity",  });
                return;
        }
        var currentUserId;
        if(localStorage.getItem("isLogged")){
            currentUserId =localStorage.getItem("currUserId");
        }
        else if (sessionStorage.getItem("isLogged")){
            currentUserId =sessionStorage.getItem("currUserId");
        }
        var currentKey= "cart_"+currentUserId
            var products = []
           
            if (localStorage.getItem(currentKey)) {
                products = JSON.parse(localStorage.getItem(currentKey));
               
            }
                
            if(products.find(p=>p.productId==_id)){
                products.find(p=>p.productId==_id).qauntity += qauntity
                localStorage.setItem(currentKey, JSON.stringify(products));
            
            }else{
                products.push({ 'productId': _id,"qauntity": qauntity});
                localStorage.setItem(currentKey, JSON.stringify(products));
            }
            Swal.fire({ title: "Done",text: "the product has been adde successfully  ",})
 
     } else{
 
       Swal.fire({
             title: "Attention", text: "you must login at first !!",  }).then(function(){
                  location.replace("login.html")
              })
      
              }
       
 }
 
 
 