<?php
    session_start();

    if(isset($_GET['idLigneTicket'])){

        $idLigneTicket = $_GET['idLigneTicket'];     
    }

    if(isset($_GET['plusMinus'])){

        $plusMinus = $_GET['plusMinus'];     
    }

    if(isset($_SESSION['idTicket'])){
        $idTicket=$_SESSION['idTicket'];
    }

  require_once "\htdocs\include\database.php";

  $sql="SELECT quantity
          FROM lignes_ticket 
         WHERE id_ligne_ticket = $idLigneTicket;";
           
           
  $result = mysqli_query($conn, $sql);

  $Quantity = mysqli_fetch_assoc($result);

  $currentQuantity = (int) $Quantity['quantity']; 

  if( $plusMinus == 1){

    if($currentQuantity<100){
        $currentQuantity= $currentQuantity + 1;
    }

  }  elseif ($plusMinus == 0) {

    if($currentQuantity>0){
        $currentQuantity= $currentQuantity - 1;
    }

  }
  
  $sql=" UPDATE  `lignes_ticket`

  SET                       
      quantity = $currentQuantity                
  WHERE
      id_ligne_ticket  = $idLigneTicket ;";

  $result = mysqli_query($conn, $sql);          
  
  print_r(json_encode($idTicket));