<?php
     
   if(isset($_POST['idEmployee'])){
   $idEmployee = $_POST['idEmployee'];
   } 
     
    require_once "\htdocs\include\database.php";

    //>> Get produits       
    $sql ="SELECT * FROM tickets
           WHERE tickets.id_user = $idEmployee;";
          
            
    $result = mysqli_query($conn, $sql);
                    
    $tickets = mysqli_fetch_all($result, MYSQLI_ASSOC);
      
       $somTickets=0;
       foreach ($tickets as $row) {  
       $somTickets+=$row['total_ticket'];
       }

       print_r($somTickets);
?>  




