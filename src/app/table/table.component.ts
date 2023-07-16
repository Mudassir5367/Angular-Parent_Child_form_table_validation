import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { IForm } from '../model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Output() parentComponent:EventEmitter<any> =new EventEmitter;
  @Input()  data:any

  formArr: any[] = [];
  fNameValid:boolean = false;
  lNameValid:boolean = false;
  selectValid:boolean = false;
  religionValid:boolean = false;
  dateValid:boolean = false;
  boxValid:boolean = false;
  showTable:boolean = false;
  form:any;
  
  
  formData:IForm = {
    fname:'',
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false,

  }

  
  ngOnChanges(){
    console.log("The property is changed",this.data);
    console.log("OOOO:",this.formArr);
    
    
  }

  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit(this.formData)

    //this.formArr = JSON.parse(localStorage.getItem('formArr') as any);
    console.log("this.formArr", this.formArr);
  }

  
  

}
