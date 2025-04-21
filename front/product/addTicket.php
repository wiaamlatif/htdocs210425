<?php

    $idUser   =  0;
    $idZ      =  0;
    $nrTicket = 0000;
    $totalTicket= 0;
    $validated =false ;

  require_once "\htdocs\include\database.php";

  $sql="INSERT INTO `tickets` 
                     (`id_user`, 
                      `id_z`, 
                      `nr_ticket`,
                      `total_ticket`,
                      `validated`)
            VALUES 
                   (                  
                    $idUser,
                    $idZ,
                    $nrTicket,
                    $totalTicket,
                    $validated );";
                    

  $result = mysqli_query($conn,$sql);

  ?>