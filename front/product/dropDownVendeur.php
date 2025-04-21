<?php

    require_once "\htdocs\include\database.php";
    
   //>> feed new items of the new ticket=cart
   $sql = "SELECT * FROM items_panier
           INNER JOIN products ON items_panier.id_product = products.id_product
           INNER JOIN categories ON categories.id_category = products.id_category";    
            
    $result = mysqli_query($conn, $sql);
                   
    $prdPanier = mysqli_fetch_all($result, MYSQLI_ASSOC);

    //>> Get vendeurs
    $sql = "SELECT * FROM employees";
                  
    $result = mysqli_query($conn,$sql);
    
    $vendeurs = mysqli_fetch_all($result, MYSQLI_ASSOC);

?>    
    <!-------Vendeurs--------->
    <div class="dropdown">
        <button class="btnVendeur btn btn-dark rounded-pill dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vendeurs
        </button>
        <ul class="dropdown-menu">
            <?php
                foreach ($vendeurs as $vendeur) {                                          
            ?>
            <li>
                <button class="dropdown-item dropDownVendeur"><?=$vendeur['first_name']?></button>
                <input class="inputBtn" type="hidden" value="<?=$vendeur['id_employee']?>">
            </li>
            <?php
                }
            ?>               
        </ul>
    </div>
    <!------Vendeurs---------->               