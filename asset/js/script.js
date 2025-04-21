function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('displayTime').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function ajouterTicket(){

  var xhr = new XMLHttpRequest();

  xhr.open('GET','iniTicket.php',true)

  xhr.onload = function() {

    if(xhr.status==200){

      var  data = JSON.parse(this.response);
      
      //totalTickets
      var totalTicket = data.pop();
      document.getElementById('totalTickets').innerText=totalTicket;

      //displayNrTicket
      var lastNrTicket = data.pop();
      document.getElementById('displayNrTicket').innerText=lastNrTicket;

      
      //console.log(totalTicket+"\n");
      //console.log(lastNrTicket+"\n");
      console.log(data);
      
      if(data.length > 0) {

        document.getElementById('displayNum').innerHTML='';
    
        data.forEach(element => {
    
        //  console.log(element.id_ticket);
        var idTicket=element.id_ticket
        var numTicket=element.nr_ticket
        var totalTicket=element.total_ticket
        var headTicket= ` <tr class="border border-dark fw-bold">
                          <td>`+numTicket+`</td>
                          <td>`+totalTicket+`</td>
                          <td>
                          <div class="d-flex">
    
                          <button class="supItemCart`+idTicket+` btn btn-danger btn-sm"
                          onclick="deleteTicket(`+idTicket+`)">
                          <i class="fa-solid fa-trash-can"></i>
                          </button>
    
                          <button class="editTicket`+idTicket+` btn btn-success btn-sm"
                          onclick="displayTicket(`+idTicket+`)">
                          <i class="fa-solid fa-pencil"></i>
                          </button>
    
                          </div>
    
                          </td>
                          </tr>                  
                        `; 
    
        document.getElementById('displayNum').innerHTML+=headTicket;                      
    
        });//forEach
    
      }//if(data.length > 0)


    }
  }

  xhr.send()
  
}

function deleteTicket(idTicket){
//  alert(idTicket);

  var xhr = new XMLHttpRequest();

  xhr.open('GET','deleteTicket.php?idTicket='+idTicket,true);

  xhr.onload = function() {

    if(xhr.status==200){

    var  data =  JSON.parse(this.response);

    if(data.length > 0) {

      document.getElementById('displayNum').innerHTML='';

      data.forEach(element => {

        //  console.log(element.id_ticket);
        var idTicket=element.id_ticket
        var numTicket=element.nr_ticket
        var totalTicket=element.total_ticket
        var headTicket= ` <tr class="border border-dark fw-bold">
                      <td>`+numTicket+`</td>
                      <td>`+totalTicket+`</td>
                      <td>
                      <div class="d-flex">

                      <button class="supItemCart`+idTicket+` btn btn-danger btn-sm"
                      onclick="deleteTicket(`+idTicket+`)">
                      <i class="fa-solid fa-trash-can"></i>
                      </button>

                      <button class="editTicket`+idTicket+` btn btn-success btn-sm"
                      onclick="displayTicket(`+idTicket+`)">
                      <i class="fa-solid fa-pencil"></i>
                      </button>

                      </div>

                      </td>
                      </tr>                  
                    `; 

        document.getElementById('displayNum').innerHTML+=headTicket;                      

      });//forEach

    }//if(data.length > 0)


    }//status==200

  }

  xhr.send()
 
}//deleteTicket

function pickProduct(idProduct){

  // Add one line on the table lignes_ticket with quantity=1 (pickProduct.php)
  //alert(idProduct);

  var xhr = new XMLHttpRequest();
  xhr.open('GET','pickProduct.php?idProduct='+idProduct,true);

  xhr.onload = function() {

    if(xhr.status==200){

    var  data =  JSON.parse(this.response);

    //data bring the id Ticket where the product will be added
    console.log(data);
    
    //data.newProduct
    //var newItem = false;
    displayTicket(data.idTicket,idProduct,data.newProduct);

    }//status==200

  }//function

  xhr.send();
  
  
}//choisirProduit

function getQuantity(idLigneTicket,plusMinus){

  //console.log(idLigneTicket);
  //console.log(typeof(plusMinus));

  //Get quantity from lignes_ticket   
  //=====================================
  var xhr = new XMLHttpRequest();
    
  xhr.open('GET','getQuantity.php?idLigneTicket='+idLigneTicket+'&plusMinus='+plusMinus,true);

  xhr.onload = function() {

   if(xhr.status==200){

     var  data =  JSON.parse(this.response);

    //idTicket
    // console.log(data);

     displayTicket(data,0,false)

   }//status==200 
    

  }//xhr.onload 

  xhr.send();
   
  }//getQuantity
  

function supItemTicket(idLigneTicket){

  var xhr = new XMLHttpRequest();

  xhr.open('GET','deleteItemTicket.php?idLigneTicket='+idLigneTicket,true);

  xhr.onload = function() {

    if(xhr.status==200){

      var  data =  JSON.parse(this.response);

      //idTicket
      console.log(data);

      displayTicket(data,0,false)

    }//status==200
  
  }//xhr.onload 

  xhr.send();

}

function displayTicket(idTicket,idProduit,newProduct){
  
  //alert(idTicket)

  var xhr = new XMLHttpRequest();

  xhr.open('GET','ticketData.php?idTicket='+idTicket,true);

  xhr.onload = function() {

      if(xhr.status==200){

      var  data =  JSON.parse(this.response);

      //displayNrTicket
      var NrTicket = data.pop();
      document.getElementById('displayNrTicket').innerText=NrTicket;

      //totalTickets
      var totalTicket = data.pop();
      document.getElementById('totalTicket').innerText=totalTicket;

      console.log(data);

      document.getElementById('displayTicket').innerHTML="";
     
      if(data.length > 0) {

       
        data.forEach(element => {
                
        //  console.log(element.id_ticket);
        var idTicket=element.id_ticket
        var idLigneTicket=element.id_ligne_ticket
        var idProduct=element.id_product
        var idCategory=element.id_category
        var imgSrc = element.imgSrc
        var nameProduct=element.name_product
        var quantity = element.quantity
        var price = element.price
        var totalItem = element.totalItem 
               
        //***************************************/   
        var datailTicket=`<tr id="trDetailTicket`+idLigneTicket+`" class="border border-dark fw-bold">                           
                            <td id="tdIdTicket">`+idLigneTicket+`</td>
                            <td>`+idProduct+`</td>

                            <td>`+idCategory+`</td>

                            <td>`+
                            `<img class="img img-fluid" src="/uploads/products/`+imgSrc+`" width="70px" alt="`+`">`+
                            `</td>

                            <td>`+nameProduct+`</td>

                            <td><!---Quantity------> 
                              <div class="d-flex border-top border-bottom border-dark">
                                <button id="supItemCart`+idLigneTicket+`" class="supItemCart btn btn-danger btn-sm"
                                 onclick="supItemTicket(`+idLigneTicket+`)">
                                 <i class="fa-solid fa-trash-can"></i>
                                </button>               
                                <button id="decrementQuantity`+idLigneTicket+`" class="decrementQuantity btn btn-primary"
                                 onclick="getQuantity(`+idLigneTicket+`,`+0+`)">
                                -
                                </button>
                                <span id="quantity`+idLigneTicket+`" class="quantity">`+quantity+`</span>
                                <button id="incrementQuantity`+idLigneTicket+`" class="incrementQuantity btn btn-primary"
                                 onclick="getQuantity(`+idLigneTicket+`,`+1+`)">
                                +
                                </button> 
                              </div>
                            </td>

                            <td>`+price+`</td>

                            <td>`+totalItem+`</td>
                          </tr>`; 
          //************************************/
          
        document.getElementById('displayTicket').innerHTML+=datailTicket; 


        if(idProduct==idProduit && !newProduct){
        document.getElementById('trDetailTicket'+idLigneTicket).classList.add('table-danger');
        }   
        
        });//forEach

        if(newProduct){

        const last = data[data.length - 1];
        lastLigneTicket = last['id_ligne_ticket'];
        document.getElementById('trDetailTicket'+lastLigneTicket).classList.add('table-success');
      
        console.log(last['id_ligne_ticket']);

        }
    
      }//if(data.length > 0)

      

      } //status==200
      
   } //onload function

  xhr.send()

}//DisplayTickets for one seller


//AjouterTicker
$(document).ready(function(){
       
  //>>C:\htdocs\front\product\dropDownBtns.php  
    $(".dropDrownCategory").click(function(){

      const selectedVal = $(this).text();

      
      var $idCategory = $(this).siblings('.inputBtn');
      var idCategory=0
          idCategory = parseInt($($idCategory).val())

      $.post('productsData.php',{idCategory},

        function(data)
        { 

          $('#displayProducts').html(data);

        });
                            //alert(idCategory);
                          // $('.codeCategory').hide()
                          //  alert(selectedVal);
    });
  
    //>>C:\htdocs\front\product\dropDownBtns.php
    // $('.codeEmployee').hide()  
    $(".dropDownVendeur").click(function(){

      const nameVendeur = $(this).text();
      
      var $idEmployee = $(this).siblings('.inputBtn');
      var idEmployee = $($idEmployee).val()

      var vendeur = {
                      idEmployee  : idEmployee,
                      nameVendeur : nameVendeur
                    }
      
     //>>C:\htdocs\front\product\dropDownVendeur.php
      $('.btnVendeur').text(nameVendeur)
         
     $.post('numData.php',{vendeur},

      function(data)
      { 
        //>>numTable.php
        $('#displayNum').html(data);       
      });

      $.post('numSum.php',{idEmployee:idEmployee},

      function(data)
      { 
        $('#totalTickets').html(data);       
      });

      //display id vendeur under table tickets
      $('#idSelectedVendeur').text(idEmployee)

    });//dropDownVendeur

    //>> C:\htdocs\front\product\index.php    
    $('.imgProduct').click(function(){

    var cartData = [];
  
     var $idProduct = $(this).siblings('.idProduct');
     var idProduct=$($idProduct).text()
    
    //  alert(idProduct)
    //=========================
     var $price = $(this).siblings('.price');
     var price=$($price).text()      
     
     var idUser=parseInt($('.codeEmployee').val())

    currentQuantity = 1;        
    
    
    cartData.push({        
        idProduct: idProduct,                 
        quantity : currentQuantity, 
        price    : price
     });

     console.log(cartData);
     
     $.post('updatePanier.php',{cartData},

        function(data)
        { 

          $('#myTicket').html(data);

        });

    //=========================
        window.location.href = "index.php";

     });


    
    //>> C:\htdocs\front\product\index.php
    $('.btnEmployee').click(function(){
  
      var $idEmployee = $(this).siblings('.idEmployee');
      var idEmployee=$($idEmployee).val()
  
     $.post('tableProducts.php',{idEmployee:idEmployee},
      function(data)
      {  
        $('#productsTable').html(data);
      });
  
     });

    //>> C:\htdocs\front\category\index.php
    $('.btnCategory').click(function(){
  
    var $idCategory = $(this).siblings('.idCategory');
    var idCategory=$($idCategory).val()

   $.post('cardsProducts.php',{idCategory:idCategory},
    function(data)
    {  
       // $('#productsCards').html(data);
    });

   });
  
    //>> C:\htdocs\front\category\categorie.php
    $('.increment').click(function(){
      
        var cartData = [];

        var $idProduct = $(this).siblings('.idProduct');
        var idProduct=$($idProduct).val()

        var $price = $(this).siblings('.price');
        var price=$($price).val()        

        var $quantity = $(this).siblings('.quantity');       
        currentQuantity = parseInt($quantity.text())+1;        
        $quantity.text(currentQuantity);
        
        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });
    })

   
    //>> C:\htdocs\front\category\categorie.php
    $('.decrement').click(function(){

        var cartData = [];

        var $idProduct = $(this).siblings('.idProduct');
        var idProduct=$($idProduct).val()

        var $price = $(this).siblings('.price');
        var price=$($price).val()        

       
        var $quantity = $(this).siblings('.quantity');       
        currentQuantity = parseInt($quantity.text());        
        if(currentQuantity>0){
            currentQuantity = currentQuantity-1;           
            $quantity.text(currentQuantity);
        }
        
        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });

    })

    

    //=================================
    function somPanier() {
        //........................
        var somCart=0;
        var totalHtml = document.body.childNodes[1].childNodes[1].children[0].children[0].childNodes[3].children
        
        $(totalHtml).each(function(){
            var totalItem=$(this).children('.col8').text();
            somCart+=parseInt(totalItem);
        })
        
        //........................       
        return somCart;
      };    
    //=================================
    
    //>> C:\htdocs\front\category\panier.php
    $('.incrementPanier').click(function() {

        var cartData = [];

        var $quantity = $(this).siblings('span');
        var currentQuantity = parseInt($quantity.text())+1;
            $quantity.text(currentQuantity);

        var $idProduct = $(this).parent().siblings('.col2').text();
        var  idProduct = parseInt($idProduct)

        var $price = $(this).parent().siblings('.col7').text();           
        var price = parseInt($price);

        var totalItem = currentQuantity*price;
   
        $(this).parent().siblings(".col8").text(totalItem); 
    
        $('.tdtotalPanier').text(somPanier().toFixed(2));


        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });

    });//increment
   
    //>> C:\htdocs\front\category\panier.php
    $('.decrementPanier').click(function() {
        var cartData = [];

        var $quantity = $(this).siblings('span');
        var currentQuantity = parseInt($quantity.text());
        if(currentQuantity>0){
            currentQuantity = currentQuantity-1;
            $quantity.text(currentQuantity);
        }

        var $idProduct = $(this).parent().siblings('.col2').text();
        var  idProduct = parseInt($idProduct)

        var $price = $(this).parent().siblings('.col7').text();           
        var price = parseInt($price);

        var totalItem = currentQuantity*price;
   
        $(this).parent().siblings(".col8").text(totalItem); 
    
        $('.tdtotalPanier').text(somPanier().toFixed(2));


        cartData.push({            
            idProduct: idProduct,                 
            quantity : currentQuantity, 
            price    : price
         });

         console.log(cartData);
         
         $.post('updatePanier.php',{cartData},
            function(data)
            {  
              $('#result').html(data);
            });        
        
    });//decrement

//>> C:\htdocs\front\category\panier.php 
$('.vider').click(function() {

  
  window.location.href = "truncatePanier.php";
 // window.location.replace("http://www.w3schools.com");

 
});


//>> C:\htdocs\front\category\panier.php ==============================
$('.valider').click(function() {

    //le contenu du panier est deplace vers les tables tickets, lignes_tickets

    var cartData = [];

    var rowsPanier = document.body.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].children
    $(rowsPanier).each(function() {

    var idPanier   = $(this).find('.col1').text();

    var idProduct  = $(this).find('.col2').text();

    var quantity    = $(this).find('.col6').find('span').text();

    var price       = $(this).find('.col7').text();

    
        cartData.push({ 
                        idPanier : idPanier,
                        idProduct: idProduct,                 
                        quantity : quantity, 
                        price    : price
                    });
    });

    console.log(cartData); 

    $.post('savePanier.php',{cartData},
        function(data)
        {  
        $('#result').html(data);
        });

//=======================< C:\htdocs\front\category\panier.php >=============
});//valider

});//ready

//Functions for handling tickets:
//ajouterTicket()
//deleteTicket()
//pickProduct()
//getQuantity()
//supItemTicket()
//displayTicket()