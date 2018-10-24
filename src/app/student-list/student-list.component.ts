import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-list',
  template: `
  <div class = "container">


  <h3>
    Students 
  </h3>
  <ul class="items">
    <li (click)="onSelect(student)" [class.selected]="isSelected(student)"  *ngFor="let student of students">
      <span class="badge">{{student.id}}</span>{{student.name}}
    </li>
  </ul>
  
  </div>
  `,
  styles: []
})
export class StudentListComponent implements OnInit {

  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  students = [
    {"id": 1, "name": "Virat"},
    {"id": 2, "name": "Dhoni"},
    {"id": 3, "name": "Rohit"},
    {"id": 4, "name": "Bhuvi"},
    {"id": 5, "name": "Prithvi"}
 ]

 onSelect(student){
  this.router.navigate(['/employees', student.id]);
  //this.router.navigate([department.Id], {relativeTo: this.route})
}

isSelected(student){
  return student.Id === this.selectedId;

}


}
