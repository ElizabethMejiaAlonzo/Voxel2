import {  Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[fileSelect]'
})
export class FileSelectDirective {

  @Output() selectedFiles =  new EventEmitter<FileList>();

  constructor() { }

  @HostListener('change', ['$event'])
  public onChange($event): void {
    console.log($event)
    this.selectedFiles.emit($event.target.files);
  }

}