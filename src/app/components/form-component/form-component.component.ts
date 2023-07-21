import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {

  //import metaData
  metaDataJson = require('../../assets/metadata.json');
  metaData = this.metaDataJson.modal;
  outputData: any;
  validButton: boolean = false;

  constructor() { }

  //generate ngOnInit
  ngOnInit(): void {
    this.metaData = this.sortDataByAsc(this.metaData);
  }

  //generate a function sortDataByAsc by order and components of data also sort asc by order
  sortDataByAsc(data: any): any {
    return data.sort((a: any, b: any) => a.order - b.order).map((item: any) => {
      if (item.components) {
        item.components = this.sortDataByAsc(item.components);
      }
      return item;
    });
  }

  handleSubmit() {

  }

  handleChangeEvent(params: any) {
    const outputData = params;
    this.outputData = outputData;
    this.validateForm();
  }

  validateForm() {
    let isValid = true;
    let formFields = this.metaData.map((item: any) => [...item.components]);
    formFields.forEach((item: any) => {
      item.forEach((field: any) => {
        if (field?.rule?.required && !this.outputData[field.key]) {
          isValid = false;
        }

        if (field?.rule?.maxLength && this.outputData[field.key] && this.outputData[field.key]?.length > field?.rule?.maxLength) {
          isValid = false;
        }
      })
    })
    this.validButton = isValid;
    console.log(this.validButton);

  }

}
