import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
    });

  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe( data => {
        if(data.status === 200) {
          alert('Student added successfully !!');
          this.router.navigate(['list-user']);
        }else {
          alert("Unsuccessful");
        }
      },
      error => {
        alert("Error!!");
      });
  }

}
