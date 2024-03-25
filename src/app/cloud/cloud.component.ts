import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentList } from './Class/studentsList';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cloud.component.html',
  styleUrl: './cloud.component.css'
})
export class CloudComponent {
  data: any = [];
  dataStudents: StudentList = new StudentList();
  dataURL = 'https://api.jsonbin.io/v3/b/65d640cadc74654018a7ee35';
  max: number = 0;
  min: number = 100;

  async load() {
    this.dataStudents._Student = [];
    fetch(this.dataURL)
      .then((response) => response.json())
      .then((data) => {
        data = data.record;
        let i = 0;
        while (i < data.students.length) {
          this.dataStudents.addStudent(
            data.students[i].full_name,
            data.students[i].date_of_birth,
            data.students[i].address,
            data.students[i].phone);
          i++;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error fetching data');
      });
  }

  getColor(date_of_birth: string) {
    const count = this.dataStudents._Student.filter(s => s.date_of_birth === date_of_birth).length;
    return count > 1 ? '#4b6ad1' : '';
  }
}