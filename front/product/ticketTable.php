<table class="table table-striped table-sm border border-dark">    
    <thead>
        <tr>
            <th class="border border-dark"colspan="4" height="">              
             <span>Ticket Nr:<span id ="displayNrTicket" class="badge text-bg-dark"></span></span>
            </th>
            <th class="border border-dark" colspan="4" height=""> 
             <span id ="displayDate"class="badge text-bg-success rounded-pill fw-bold fs-5"></span>
            </th>

        </tr>
        <tr><!-- table row--->           
            <th>IL</th><!-- id Ligne Ticket--->       
            <th>IP</th><!-- id Produit--->       
            <th>IC</th><!-- id Category-->       
            <th>imgSrc</th>          
            <th>Product</th>          
            <th>Quantite</th> 
            <th>Prix</th> 
            <th>Total</th>                             
        </tr>
    </thead>

    <tbody id="displayTicket">

    </tbody>

    <tfoot>               
        <tr>  
            <td colspan="6"></td>              
            <td><strong>Total</strong></td>
            <td><strong id="totalTicket"></strong></td>
        </tr>    
        <tr>                     
            <td colspan="8">
                <div class="d-flex justify-content-center">                                               
                    <button class="vider btn btn-danger rounded-pill mx-1">Vider</button>                    
                    <button class="valider btn btn-success rounded-pill">Ticket</button>  
                </div>                       
            </td>                                 
        </tr>    
    </tfoot> 
</table>

<div id="idSelectedProduct"></div>
<div id="idSelectedVendeur"></div>
