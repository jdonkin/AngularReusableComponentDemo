import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private _returnValue:any;
  
  get returnValue():any {
    return this._returnValue;
  }

  @Input() set returnValue(value: any){
    this._returnValue = value;
    console.log(this._returnValue)
  }

  cboxValue:any = {
    name: "Test",
    id: 1,
    type: "thing"
  };
  cboxName:any = this.cboxValue.type;

  



}
