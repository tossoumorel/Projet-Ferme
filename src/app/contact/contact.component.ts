import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule,MatInputModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
constructor( ){}

applyForm = new FormGroup({
  firstName : new FormControl,
  lastName : new FormControl,
  contact : new FormControl,
  email : new FormControl,
})

 user : any = []
onSubmit(){
let infoUser = localStorage.getItem('contactUser')
if(infoUser !== null){
  this.user.push(this.applyForm.value)
  localStorage.setItem('contactUser' , JSON.stringify(infoUser))
}
}
// valide email


 
}

