import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
    
   constructor (private http:Http ) {}

        getMessages() {
 	
	     this.http.get('http://localhost:4000/posts').subscribe(res =>{
	        console.log(res)
	       }) 
         }
 }