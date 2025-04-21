<?php
    session_start();

    if(isset($_SESSION['idTicket'])){

        $idTicket=$_SESSION['idTicket'];

    }

    if(isset($_GET['idProduct'])){

        $idProduct= $_GET['idProduct'];      
    }

    
    require_once "\htdocs\include\database.php";

    $sql="SELECT COUNT(`id_product`)
            FROM lignes_ticket 
           WHERE `id_ticket` =$idTicket
             AND `id_product`=$idProduct;";
             
    $result = mysqli_query($conn, $sql);

    $countId = mysqli_fetch_assoc($result);

  //  echo "<pre>";
  //  var_dump($countId);
  //  echo "</pre>";
    
    $newProduct=true;
    if($countId['COUNT(`id_product`)']>0){
       
        $newProduct=false;

    //   echo 'The product alrady exist !';
    } else {

        $sql="SELECT price
        FROM products 
       WHERE `id_product`=$idProduct;";
           
        $result = mysqli_query($conn, $sql);
        $product =  mysqli_fetch_assoc($result);
        $price= $product['price'];
        //==================================
        
        $sql="  INSERT INTO `lignes_ticket`
                            ( id_ticket,
                            id_product,
                            price,
                            quantity,
                            total_ligne
                            )
                    VALUES('$idTicket',
                           '$idProduct',                      
                           '$price',
                           '1',
                           '$price');";

        $result = mysqli_query($conn, $sql);       
    }       

    // > send the id Ticket where the product will be added 
    // > send the id Ticket where the product will be added 

    $data = [
              'idTicket'   => $idTicket, 
              'newProduct' => $newProduct
            ];


    print_r(json_encode($data));        
        //==================================    

/*
`lignes_ticket`
id_ligne_ticket
id_ticket
id_product
price
quantity
total_ligne	
*/
?>