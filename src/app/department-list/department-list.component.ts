import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-department-list',
  template: `
<div class = "container">


<h3>
  Departments 
</h3>
<ul class="items">
  <li (click)="onSelect(department)" [class.selected]="isSelected(department)"  *ngFor="let department of departments">
    <span class="badge">{{department.id}}</span>{{department.name}}
  </li>
</ul>

</div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
      alert(id)
    });
  }

  departments = [
    // {"id": 1, "name": "Technology"},
    {"id": 1, "name": "Consulting"},
    {"id": 2, "name": "Support"},
    {"id": 3, "name": "Sales"},
    {"id": 4, "name": "Marketing"}
 ]

 onSelect(department){
    this.router.navigate(['/departments', department.id]);
    //this.router.navigate([department.Id], {relativeTo: this.route})
  }

  isSelected(department){
    return department.Id === this.selectedId;

  }

}
