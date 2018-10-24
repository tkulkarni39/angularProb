import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
 
  ,
  styles: []
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
      alert(this.selectedId)
    });
  }
  employees = [
    {"id": 1, "name": "Modi"},
    {"id": 2, "name": "Trump"},
    {"id": 3, "name": "Putin"},
    {"id": 4, "name": "Theresa"},
    {"id": 5, "name": "Justin"}
 ]

 onSelect(employeeId){
   //this.router.navigate(['/departments', department.id]);
  this.router.navigate(['/employees', employeeId]);
  //this.router.navigate([employee.Id], {relativeTo: this.route})
}

isSelected(employee){
  return employee.Id === this.selectedId;

}

ngOnDestroy(){

  // this.route.paramMap.subscribe((params: ParamMap)=> {
  //   let id = parseInt(params.get('id'));
  //   this.selectedId = id;
  //   alert(this.selectedId)
  // }).unsubscribe();
  // alert("destroyed")
}

}
