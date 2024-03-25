import { Injectable } from '@angular/core';
import { LogService } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class SeriesService{
    private logService = new LogService();
    getSeries(x: number, iterations: number){
        let result = 1;
        let numerator = 1;
        let denominator = 1;
    
        for (let i = 1; i <= iterations; i++) {
          numerator *= -x * x;
          denominator *= (2 * i - 1) * (2 * i);
          result += numerator / denominator;
        }
        
        this.logService.log(String(result))

        return result;
    }
}