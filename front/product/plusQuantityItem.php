<?php

session_start();
        
if(isset($_GET['idLigneTicket'])){

     $idLigneTicket = $_GET['idLigneTicket'];     
 }

 if(isset($_GET['quantity'])){

    $quantity = $_GET['quantity'];     
}

 if(isset($_SESSION['idTicket'])){
     $idTicket=$_SESSION['idTicket'];
 }


 require_once "\htdocs\include\database.php";

 $sql=" UPDATE  `lignes_ticket`
           SET                       
                quantity = '$quantity'                
         WHERE
                id_ligne_ticket  = $idLigneTicket ;";

 $result = mysqli_query($conn, $sql);

 print_r(json_encode($idTicket));
