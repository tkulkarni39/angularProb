import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  template: `
  <div class = "container">
  <div class = "row">
    <div class = "col-sm-2">
      <button (click)="showOverview()" style = "margin:15px">Overview</button>

      <button (click)="showContact()" style = "margin:15px">Contact</button>
    </div>
    <div class = "col-sm-10">
  <h3>
    You have selected ID  {{studentId}}.
   
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
export class StudentDetailComponent implements OnInit {

  public studentId;
  public studentName;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
        let id = parseInt(params.get('id'));
        this.studentId = id;
    })
  }

  goPrevious(){
    let previousId = this.studentId - 1;
    if(previousId>0)
      this.router.navigate(['/students', previousId]);
  }

  goNext(){
    let nextId = this.studentId + 1;
    if(nextId<6)
    this.router.navigate(['/students', nextId]);
  }

  gotoStudents(){
    let selectedId = this.studentId? this.studentId: null;
    this.router.navigate(['/students',{id: selectedId, test: 'testval'}]);
  }

}
