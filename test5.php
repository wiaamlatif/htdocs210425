<?php
    $idTicket=93;
    $idProduct=13;

    require_once "\htdocs\include\database.php";

    $sql="SELECT COUNT(`id_product`)
            FROM lignes_ticket 
           WHERE `id_ticket` =$idTicket
             AND `id_product`=$idProduct;";
             
    $result = mysqli_query($conn, $sql);

    $countId = mysqli_fetch_assoc($result);

    echo "<pre>";
    var_dump($countId);
    echo "</pre>";

    if($countId['COUNT(`id_product`)']>0){
       //
       echo 'The product alrady exist !';
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
//!!!!!! enlever idProduct de la session
}

//send the id Ticket where the product will be added 
print_r(json_encode($idTicket));        
        //==================================
        

    

    

    