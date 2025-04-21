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

      var  data = this.response;

      const numTicket=document.createElement('td');      
      numTicket.innerHTML=data;

      const totalTicket=document.createElement('td');
      totalTicket.innerText="0.00";

      const btnsTicket=document.createElement('td');
      const divFlex = document.createElement('div');
 
      btnsTicket.appendChild(divFlex);
      
      const trowElement=document.createElement('tr');
      trowElement.appendChild(numTicket);      
      trowElement.appendChild(totalTicket);
      trowElement.classList.add('border');
      trowElement.classList.add('border-dark');//border-dark fw-bold
      trowElement.classList.add('fw-bold');

      trowElement.appendChild(btnsTicket);
      divFlex.classList.add('d-flex');

      const trashBtn=document.createElement('button');
      divFlex.appendChild(trashBtn);

      //class="supItemCart<?=$row['id_ticket']?> btn btn-danger btn-sm">
      trashBtn.classList.add('supItemCart');
      trashBtn.classList.add('btn');
      trashBtn.classList.add('btn-danger');
      trashBtn.classList.add('btn-sm');

      //class="fa-solid fa-trash-can"
      const iTrash=document.createElement('i');
      trashBtn.appendChild(iTrash);
      iTrash.classList.add('fa-solid');
      iTrash.classList.add('fa-trash-can');

      const pencilBtn=document.createElement('button');
      divFlex.appendChild(pencilBtn);
 
      //class="editTicket<?=$row['id_ticket']?> btn btn-success btn-sm"
      pencilBtn.classList.add('btn');
      pencilBtn.classList.add('btn-success');
      pencilBtn.classList.add('btn-sm');

      //class="fa-solid fa-pencil"
      const ipencil=document.createElement('i');
      pencilBtn.appendChild(ipencil);
      pencilBtn.classList.add('fa-solid');
      pencilBtn.classList.add('fa-pencil');
      
      document.getElementById('displayNum').appendChild(trowElement)
       
      console.log(data);

    }
  }

  xhr.send()
  
}

function pickProduct(idProduct){
 
  var price= document.getElementById('price'+idProduct).innerText;
      price= parseInt(price);
  
  var cartData = {
                  "idProduct" : idProduct,                 
                  "price"     : price
                 };

  

//=========================
  
}//choisirProduit


function deleteTicket(idTicket){
//  alert(idTicket);

  var xhr = new XMLHttpRequest();

  xhr.open('GET','deleteTicket.php?idTicket='+idTicket,true);

  xhr.onload = function() {

    if(xhr.status==200){

     var  data =  JSON.parse(this.response);
     
     console.log(data)

     document.getElementById('displayNum').innerText="";

     data.forEach(element => {

      const numTicket=document.createElement('td');      
      numTicket.innerHTML=element.nr_ticket;

      const totalTicket=document.createElement('td');
      totalTicket.innerText=element.total_ticket;

      const btnsTicket=document.createElement('td');
      const divFlex = document.createElement('div');
 
      btnsTicket.appendChild(divFlex);
      
      const trowElement=document.createElement('tr');
      trowElement.appendChild(numTicket);      
      trowElement.appendChild(totalTicket);
      trowElement.classList.add('border');
      trowElement.classList.add('border-dark');//border-dark fw-bold
      trowElement.classList.add('fw-bold');

      trowElement.appendChild(btnsTicket);
      divFlex.classList.add('d-flex');

      const trashBtn=document.createElement('button');
      divFlex.appendChild(trashBtn);

      //class="supItemCart<?=$row['id_ticket']?> btn btn-danger btn-sm">
      trashBtn.classList.add('supItemCart');
      trashBtn.classList.add('btn');
      trashBtn.classList.add('btn-danger');
      trashBtn.classList.add('btn-sm');

      //class="fa-solid fa-trash-can"
      const iTrash=document.createElement('i');
      trashBtn.appendChild(iTrash);
      iTrash.classList.add('fa-solid');
      iTrash.classList.add('fa-trash-can');

      const pencilBtn=document.createElement('button');
      divFlex.appendChild(pencilBtn);
 
      //class="editTicket<?=$row['id_ticket']?> btn btn-success btn-sm"
      pencilBtn.classList.add('btn');
      pencilBtn.classList.add('btn-success');
      pencilBtn.classList.add('btn-sm');

      //class="fa-solid fa-pencil"
      const ipencil=document.createElement('i');
      pencilBtn.appendChild(ipencil);
      pencilBtn.classList.add('fa-solid');
      pencilBtn.classList.add('fa-pencil');
      
      document.getElementById('displayNum').appendChild(trowElement);
        

     });//forEach


      
    }//status==200

  }

  xhr.send()
 
}//deleteTicket


function displayTicket(idTicket){
  
  var numTicketEdited = document.getElementById('numTicketEdited'+idTicket).value

  document.getElementById("displayNrTicket").innerHTML = numTicketEdited ;

  var xhr = new XMLHttpRequest();

  //xhr.open("GET","deleteUser.php?idUser="+idUser,true);
  xhr.open('GET','ticketData.php?idTicket='+idTicket,true);

  //displayTicket
  xhr.onload = function() {

      if(xhr.status==200){

      var  data =  JSON.parse(this.response);

      var totalTicket = data.pop();

      //console.log("Total:"+totalTicket);
      //console.log();
      //console.log(data);

      document.getElementById('displayTicket').innerHTML="";

      data.forEach(element => {
        
     //   console.log(element)

        const rowTable=document.createElement('tr'); 
        document.getElementById('displayTicket').appendChild(rowTable);

          //id_ticket
          var  dataTable=document.createElement('td');
          dataTable.innerText=element.id_ticket;        
          rowTable.appendChild(dataTable)

          //id_product
          var dataTable=document.createElement('td');
          dataTable.innerText=element.id_product;        
          rowTable.appendChild(dataTable)

          //id_category
          var dataTable=document.createElement('td');
          dataTable.innerText=element.id_category;        
          rowTable.appendChild(dataTable)

          //imgSrc
          var dataTableImage=document.createElement('img');
          dataTableImage.src="/uploads/products/"+element.imgSrc;        
          dataTableImage.style.width="50px";
          rowTable.appendChild(dataTableImage)          

          //name_product
          var dataTable=document.createElement('td');
          dataTable.innerText=element.name_product;        
          rowTable.appendChild(dataTable)          

          //quantity
          var dataTable=document.createElement('td');
          dataTable.innerText=element.quantity;        
          rowTable.appendChild(dataTable)                    

          //price
          var dataTable=document.createElement('td');
          dataTable.innerText=element.price;        
          rowTable.appendChild(dataTable)          

          //totalItem
          var dataTable=document.createElement('td');
          dataTable.innerText=element.totalItem;        
          rowTable.appendChild(dataTable) 
               
      }//element   
    );//foreach  

      } //status==200

      document.getElementById('tdtotalPanier').innerText=totalTicket;

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
      $('#productsCards').html(data);
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







``````````