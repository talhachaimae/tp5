 import {Component, OnInit} from '@angular/core';
 import {ActivatedRoute} from "@angular/router";
 import {ProductService} from "../services/product.service";
 import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
 import {NgIf} from "@angular/common";
 import {Product} from "../model/product.model";


@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  productId!:number;
  productFormGroup! : FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private  productService: ProductService,
              private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.productId=this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next:(product)=>{
        this.productFormGroup=this.formBuilder.group({
          id: this.formBuilder.control(product.id),
          name: this.formBuilder.control(product.name, Validators.required),
          price: this.formBuilder.control(product.price,[Validators.min(100)]),
          checked: this.formBuilder.control(product.checked)

        })
      },
      error:error => {
        console.log(error);
      }
    })
  }



  updateProduct() {
    let product: Product =this.productFormGroup.value;

    this.productService.updateProduct(product).subscribe({
      next : data=>{
        alert(JSON.stringify(data));
      }
    })

  }
}
