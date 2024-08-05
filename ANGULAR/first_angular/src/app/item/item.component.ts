import { Component } from '@angular/core';

@Component({
  selector:'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
    username = "Peter Pan"

    itemname = "Pencils"

    setStatus:string = "Yes"

    getStockStatus(){
      return this.setStatus
    }
    isSoldOut = false

    //set button to be disabled in 5secs
    constructor(){
      setTimeout(()=>{
        this.isSoldOut = true
      }, 5000)
    }

    //Event binding
    onSave(){
      alert('Information Saved!')
    }

    productmsg:string = ""
    total_in_stock = 20
    total_added = 0
    outStock = ""
    btn_out_stock= false
    
    addProduct(){
      if(this.total_in_stock>0){
        this.total_added ++
        this.total_in_stock --

      }
      else{
        this.outStock = "Item is out of stock"
        this.btn_out_stock = true
      }
     
    }
    

}
