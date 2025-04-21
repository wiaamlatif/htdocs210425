<?php
           session_start();
        
           if(isset($_GET['idTicket'])){

                $idTicket = $_GET['idTicket'];     
            }
            
            if(isset($_SESSION['idEmployee'])){
                $idEmployee=$_SESSION['idEmployee'];
            }

            require_once "\htdocs\include\database.php";

            //>> Get produits       
            $sql =" DELETE FROM `tickets`
                          WHERE tickets.id_ticket  = $idTicket;";

            $result = mysqli_query($conn, $sql);

            if($result){

                $sql ="SELECT * FROM  tickets
                                WHERE tickets.id_user = $idEmployee;";
               
                 
                $result = mysqli_query($conn, $sql);
                         
                $tickets = mysqli_fetch_all($result, MYSQLI_ASSOC);
           
                print_r(json_encode($tickets));

            }//$result
    ?>                                        

