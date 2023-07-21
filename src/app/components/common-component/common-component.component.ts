import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.scss']
})
export class CommonComponentComponent {
  //Input comp attr
  @Input() comp!: any;
  @Input() outputData!: any;
  //Input metaData attr
  @Input() metaData!: any;
  // //Output handleChangeEvent with params
  @Output() handleChangeEvent = new EventEmitter<any>();

  radioValue: string = '';


  // generate constructor and ngOnInit
  constructor() { }

  ngOnInit(): void {
  }

  //generate a function handleChange with params
  handleChange(type: string, key: string, value: any): void {
    //type==='radio
    if (type === 'radio') {
      this.radioValue = value;
    }

    console.log('handleChange()', type, key, value);
    this.outputData = { ...this.outputData, [key]: value }
    // call this.validate() to check validate
    // const valid = this.validate();
    //emit valid and oututData
    this.handleChangeEvent.emit(this.outputData );
  }

  // add validate for this Component
  // validate(): boolean {
  //   if (this.comp.rule.required) {
  //     if (this.comp.type === 'radio') {
  //       return this.radioValue !== '';
  //     }
  //     if (this.comp.rule.maxLength) {
  //       return this.outputData[this.comp.key] !== '' && this.outputData[this.comp.key] !== undefined && this.outputData[this.comp.key].length <= this.comp.rule.maxLength;
  //     }
  //     return this.outputData[this.comp.key] !== '' && this.outputData[this.comp.key] !== undefined;
  //   }
  //   return true;
  // }


}


