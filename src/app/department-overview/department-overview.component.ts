import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-overview',
  template: `
  <div class = "container">
  <div class = "row">
    <div class = "col-sm-2">
    </div>
    
    <p style = "margin:20px">

      Department overview information
    </p>
  
  </div>
</div>
  `,
  styles: []
})
export class DepartmentOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
