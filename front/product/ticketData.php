<?php 
  session_start();

        if(isset($_GET['idTicket'])){

         $idTicket = $_GET['idTicket'];
         $_SESSION['idTicket']=$idTicket;
       
        } 

        require_once "\htdocs\include\database.php";
    
        //>> feed new items of the new ticket=cart
        $sql = "SELECT * FROM tickets
                INNER JOIN lignes_ticket ON tickets.id_ticket  = lignes_ticket.id_ticket
                INNER JOIN products      ON products.id_product = lignes_ticket.id_product
                INNER JOIN categories    ON categories.id_category = products.id_category
                WHERE tickets.id_ticket  = $idTicket";    
                 
         $result = mysqli_query($conn, $sql);
                        
         $detailTiket = mysqli_fetch_all($result, MYSQLI_ASSOC);        

        $totalTicket=0;
        $arrayTicket=[];       
        foreach ($detailTiket as $produit){ 

        $idTicket=$produit['id_ticket'];
        $idLigneTicket=$produit['id_ligne_ticket'];
        //nr_ticket
        $nrTicket=$produit['nr_ticket'];        
        $idProduct=$produit['id_product'];
        $nameProduct=$produit['name_product'];
        $idCategory=$produit['id_category'];                        
        $quantity=$produit['quantity'];
        $price=$produit['price'];
        $totalItem=$quantity * $price;                        
        $totalTicket+=$totalItem;               
        $imgSrc=$produit['imgSrc'];
        
        $elementTicket = [
                          "id_ticket"  => $idTicket,
                    "id_ligne_ticket"  => $idLigneTicket,
                          "id_product" => $idProduct,
                         "id_category" => $idCategory,
                        "name_product" => $nameProduct,
                          "quantity"   => $quantity,
                          "price"      => $price,
                          "totalItem"  => $totalItem,
                          "imgSrc"     => $imgSrc
                         ]; 

        array_push($arrayTicket,$elementTicket);  

        } 
        
        array_push($arrayTicket,$totalTicket); 

        array_push($arrayTicket,$nrTicket); 

        print_r(json_encode($arrayTicket));
              
        ?>          