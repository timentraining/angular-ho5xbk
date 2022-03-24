import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'course',
  template: `
 

  <h2> {{ name }} </h2>
  <button #f1 (click)="onBtnClicked(f1)">{{fee1}}</button>
  <button #f2 (click)="onBtnClicked(f2)">{{fee2}}</button>


  `,
  styles: [''],
})
export class CourseComponent {
  @Input('courseTitle') name = 'All can be tech';
  @Input('courseFee1') fee1 = 99.0;
  @Input('courseFee2') fee2 = 99.0;

  @Output('courseFeeSelected') feeSelected = new EventEmitter<String>();

  onBtnClicked(fee: any) {
    this.feeSelected.emit(fee.innerHTML);
    //console.log('Inside from Course component', fee.innerHTML);
  }
}
