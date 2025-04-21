<?php
           session_start();
        
           if(isset($_GET['idLigneTicket'])){

                $idLigneTicket = $_GET['idLigneTicket'];     
            }

            if(isset($_SESSION['idTicket'])){
                $idTicket=$_SESSION['idTicket'];
            }


            require_once "\htdocs\include\database.php";

            //>> Get produits       
            $sql ="DELETE FROM `lignes_ticket` 
                         WHERE `id_ligne_ticket`=$idLigneTicket;                                                    
                   ";

            $result = mysqli_query($conn, $sql);

            print_r(json_encode($idTicket));

    ?>                                        

