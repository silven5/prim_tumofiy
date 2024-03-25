import { Injectable } from '@angular/core';
import { LogService } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class TabService{
    private tab: Map<any, any> = new Map();
    private logService = new LogService();
    getTab(step: number) {
        this.tab.clear();
        for(let x = -3 * Math.PI; x <= 3 * Math.PI; x += step){
            this.tab.set(x.toFixed(2), Math.cos(x).toFixed(2))
            this.logService.log('x = ' + x.toFixed(2) + 'y = ' + Math.cos(x).toFixed(2))
        }

        return this.tab;
    }
}