import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
//import {startWith} from 'rxjs/operators/startWith';
//import {map} from 'rxjs/operators/map';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
		styles:[
`
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}

.example-half-width {
  width: 50%;
}

.flex{
display: flex;
  flex-direction: column;
}
`
]
})
export class HomeComponent {

public myControl: FormControl = new FormControl();
public many:string='';

selectedValue:any;

 public  options :Array<string>= [
    'One',
    'Two',
    'Three',
		'Three',
   ];
	 public dataSource:Array<string>;
	 focus() { 
	 this.dataSource=this.options;
}

	filter(e:any) { 
	console.log(e);

	this.dataSource =this.options.filter(x=>x.startsWith(e));
}


foods = [
    {value: 'Series 001', viewValue: 'Series 001'},
    {value: 'Series 002', viewValue: 'Series 002'},
    {value: 'Series 003', viewValue: 'Series 003'}
  ];

}
