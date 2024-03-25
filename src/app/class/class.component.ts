import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { magazine } from './Class/magazine';
import { newspaper } from './Class/newspaper';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css',
})
export class ClassComponent {
  data: any = [];
  magazineList: magazine[] = [];
  newspaperList: newspaper[] = [];
  dataURL = 'https://api.jsonbin.io/v3/b/65df7b7a266cfc3fde90b17d';
  visibility: boolean = false;

  async load() {
    this.magazineList = [];
    this.newspaperList = [];
    fetch(this.dataURL)
      .then((response) => response.json())
      .then((data) => {
        data = data.record;
        for (let i = 0; i < data.products.length; i++) {
          if(i < 5)
          {
            let mag: magazine = new magazine(
              data.products[i].Title,
              data.products[i].value,
              data.products[i].circulation
              )
            this.magazineList.push(mag)
          }else{
            let news: newspaper = new newspaper(
              data.products[i].Title,
              data.products[i].amountOfPages,
              data.products[i].valueOfpage,
              data.products[i].circulation
              )
            this.newspaperList.push(news)
          }
        }
        
        this.visibility = true;
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error fetching data');
      });
  }
}
