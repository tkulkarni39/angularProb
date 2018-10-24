import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap }  from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <div class = "container">
    <div class = "row">
      <div class = "col-sm-2">
        <button (click)="showOverview()" style = "margin:15px">Overview</button>

        <button (click)="showContact()" style = "margin:15px">Contact</button>
      </div>
      <div class = "col-sm-10">
    <h3>
      You have selected ID  {{departmentId}}.
     
    </h3>
    </div> 
    
    
    <div>
      
    </div>
    
    </div>
    <div class = "row">
    <div class = "col-sm-2">
    </div>
    
    <button (click)= "goPrevious()" style = "margin:15px">Previous</button>
    <button (click)= "goNext()" style = "margin:15px">Next</button>
    <button (click)="gotoDepartments()" style = "margin:15px">Back</button>
    </div>
    <div class = "row">
    <div class = "col-sm-2">
    </div>
    

    </div>
   </div>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

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
