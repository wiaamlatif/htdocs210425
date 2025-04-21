<?php
     
   if(isset($_POST['idCategory'])){
   $idCategory = $_POST['idCategory'];
   } 
   
   //echo $idCategory;

   //var_dump($_POST);
     
    require_once "\htdocs\include\database.php";

    //>> Get produits       
    $sql ="SELECT * FROM products
           INNER JOIN categories 
           ON products.id_category = categories.id_category
           WHERE products.id_category = $idCategory or $idCategory=1;";
          
            
    $result = mysqli_query($conn, $sql);
                    
    $produits = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
     //>> Close Database
    //mysqli_close($conn);     
    
foreach ($produits as $row) {  
?>  

<tr>            
<td class="idProduct"><?=$row['id_product']?></td>
<td class="idCategory"><?=$row['id_category']?></td>

<td id="imgProduct">            
<img class="img img-fluid imgProduct" src="/uploads/products/<?=$row['imgSrc']?>" width="70px" onclick="pickProduct(<?=$row['id_product']?>)">
</td>

<td><?=$row['name_product']?></td>
<td class="price" id="price<?=$row['id_product']?>"><?=$row['price']?></td>            
</tr> 

<?php     
}                             
?>          