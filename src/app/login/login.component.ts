import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
   formLogin! : FormGroup;

   constructor(private  fb: FormBuilder) {
   }

   ngOnInit() {
     this.formLogin=this.fb.group({
       username : this.fb.control(""),
       password : this.fb.control("")
     })
   }

  handleLogin() {
    console.log(this.formLogin.value);
  }
}
