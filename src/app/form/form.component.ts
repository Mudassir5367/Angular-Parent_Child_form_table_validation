import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IForm } from '../model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() formSubmit:EventEmitter<any> = new EventEmitter();
 


  
  formArr: any[] = [];
  fNameValid:boolean = false;
  lNameValid:boolean = false;
  selectValid:boolean = false;
  religionValid:boolean = false;
  dateValid:boolean = false;
  boxValid:boolean = false;
  showTable:boolean = false;
  
  
  formData:IForm = {
    fname:'',
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false,

  }

  

  forms:IForm [] = [
    {
    fname:"",
    lname:'',
    dropdown:'',
    religion:'',
    date:'',
    box:false
  },
  ];


  constructor() { }

  ngOnInit(): void {

    //this.formArr = JSON.parse(localStorage.getItem('formArr') as any);

    console.log("this.formArr", this.formArr);
  }






  

  
  test(form: any){

    console.log("The value is:",form);

    

    // console.log("The value is :" this.formData);    
    if(this.formData && this.formData.fname === '' ){
      this.fNameValid = true;
    } else if(this.formData && this.formData.fname && this.formData.fname?.length > 0){
      this.fNameValid = false;
    }

  
    if(this.formData && this.formData.lname === '')
    {
      this.lNameValid = true; 
    }
    else if(this.formData && this.formData.lname && this.formData.lname?.length > 0)
    {
      this.lNameValid = false;
    }

    
    if(this.formData && this.formData.dropdown === '')
    {
      this.selectValid = true;
    }
    else if(this.formData && this.formData.dropdown)
    {
      this.selectValid = false
    }
    
  
    if(this.formData && this.formData.religion === '')
    {
      this.religionValid = true;
    }
    else if(this.formData && this.formData.religion && this.formData.religion?.length > 0)
    {
      this.religionValid = false
    }
    


  
    if(this.formData && this.formData.date === '')
    {
      this.dateValid = true;
    }
    else if(this.formData && this.formData.date && this.formData.date?.length > 0)
    {
      this.dateValid = false;
    }

  
    if(this.formData && this.formData.box === false)
    {
      this.boxValid = true;
    }
    else if(this.formData && this.formData.box && this.formData.box)
    {
      this.dateValid = true;
    }


    this.showTable = true;

    this.formArr.push(form)
    console.log('ARRAY: ', this.formArr);
    //localStorage.setItem('formArr',JSON.stringify(this.formArr))
    this.formSubmit.emit(this.formArr);
   
}


}
