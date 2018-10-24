import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/Router';
@Component({
  selector: 'app-employee-detail',
  template: "akshay",
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public departmentId;
  public departmentName;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
  
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    if(previousId>0)
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextID = this.departmentId + 1;
    if(nextID<5)
    this.router.navigate(['/departments', nextID]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId? this.departmentId: null;
    this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}]);
    //this.router.navigate(['../',{id:selectedId}],{relativeTo: this.route})
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo: this.route})
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo: this.route})
  }
}




