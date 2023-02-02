import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  // public loginForm: FormGroup;


  // constructor(private loginService: LoginService, private router:Router){ 

  //   this.loginForm= new FormGroup({

  //     email: new FormControl(" "),
  //     password: new FormControl(" ")


  //   })

  // }

  // login(){
  //   this.loginService.postlogin(this.loginForm.value).subscribe(
  //     (value: any)=>{
  //       this.loginForm= value;
  //       localStorage.setItem("token", value.token);
  //       alert("login successfully")
      
  //     },
  //     (error: any)=> {
  //       alert("invalid credentials")
  //     }

  //   )
  // }

  // get Email(): FormControl{
  //   return this.loginForm.get("email")as FormControl;
  // }
  // get Password(): FormControl{
  //   return this.loginForm.get("password")as FormControl;
  // }

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  ///////////
  login(){
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        alert('Login Succesful');
        this.loginForm.reset()
      this.router.navigate(["home"])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }


}
