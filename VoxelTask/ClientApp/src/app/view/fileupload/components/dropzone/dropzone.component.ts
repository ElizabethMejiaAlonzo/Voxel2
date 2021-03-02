import { Component, OnInit } from '@angular/core';
import { file } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent implements OnInit {

  public isHovering: boolean;
  public files: file[] = [];

  constructor() { }

  ngOnInit(): void { }

  /**
   * @param {boolean} event receive a boolean param
   * @memberof DropzoneComponent
   */
  public toggleHover(event: boolean): void {
    this.isHovering = event;
  }

  /**
   * @description this method create and insert 'file' objects
   * @param {FileList} files receive a list of files
   * @memberof DropzoneComponent
   */
  public onDrop(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      const fileTemp: file = {
        file: files.item(i),
        cancel: false
      }
      this.files.push(fileTemp);
    }
  }

  /**
   * @description Remove an item from the list
   * @param {number} index receive a index number
   * @memberof DropzoneComponent
   */
  public deleteFromArray(index: number) {
    this.files.splice(index, 1);
  }
}
