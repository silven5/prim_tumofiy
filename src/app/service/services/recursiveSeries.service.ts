import { Injectable } from '@angular/core';
import { LogService } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class RecursiveService {
    private logService = new LogService();

    getSeries(x: number, iterations: number): number {
        let result = this.calculateSeriesRec(x, iterations, 1, 1, 1, 1);
        this.logService.log(String(result));
        return result;
    }

    private calculateSeriesRec(x: number, iterations: number, result: number, numerator: number, denominator: number, i: number): number {
        if (i > iterations) {
            return result;
        }

        numerator *= -x * x;
        denominator *= (2 * i - 1) * (2 * i);
        result += numerator / denominator;

        return this.calculateSeriesRec(x, iterations, result, numerator, denominator, i + 1);
    }
}