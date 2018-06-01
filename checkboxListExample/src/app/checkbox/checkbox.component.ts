import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent {
private _checked: boolean = false;
private _value:any;
private _name:string;

get value():any{
  return this._value;
}

get name():string{
  return this._name;
}
@Input() set value(input: any){
  this._value = input;
}
@Input() set name(input:string){
  this._name = input;
}

@Output() checkedChanged = new EventEmitter();

checked(){
  this._checked = !this._checked;
  
    let tempObject = {
      checked: this._checked,
      value: this._value
    };
    this.checkedChanged.emit(tempObject);
}

}
