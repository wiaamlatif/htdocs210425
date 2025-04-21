<?php
    session_start();
    
   if(isset($_POST['vendeur']['idEmployee'])){
      $idEmployee =$_POST['vendeur']['idEmployee'] ;
      $_SESSION['idEmployee']=$idEmployee;
   }

   if(isset($_POST['vendeur']['nameVendeur'])){
    $nameVendeur =$_POST['vendeur']['nameVendeur'];
    $_SESSION['nameVendeur']=$nameVendeur;
   }
        
    require_once "\htdocs\include\database.php";

    //>> Get produits       
    $sql ="SELECT * FROM tickets
           WHERE tickets.id_user = $idEmployee;";
          
            
    $result = mysqli_query($conn, $sql);
                    
    $tickets = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
     //>> Close Database
    //mysqli_close($conn);     
       $somTickets=0;
       foreach ($tickets as $row) {  
       $somTickets+=$row['total_ticket'];
?>  
         <tr class="border border-dark fw-bold">
           <td><?=$row['nr_ticket']?></td>
           <td><?=$row['total_ticket']?></td>
           <td>
              <div class="d-flex">

                <button class="supItemCart<?=$row['id_ticket']?> btn btn-danger btn-sm"
                onclick="deleteTicket(<?=$row['id_ticket']?>)">
                <i class="fa-solid fa-trash-can"></i>
                </button>
                                                
                <button class="editTicket<?=$row['id_ticket']?> btn btn-success btn-sm"
                 onclick="displayTicket(<?=$row['id_ticket']?>,0,false)">
                <i class="fa-solid fa-pencil"></i>
                </button>

              </div>

            </td>
         </tr>
<?php     
  }                             
?> 

<input id="somTickets" type="text" value="<?=$somTickets?>">       