import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogService {
   log(logMessage: string){
    console.log(logMessage);
   }
}