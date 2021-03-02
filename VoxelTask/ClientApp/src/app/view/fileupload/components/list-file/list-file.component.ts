import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { catchError, finalize, tap } from 'rxjs/operators';
import { file } from 'src/app/shared/models/file.model';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.css']
})
export class ListFileComponent {

  @Input() files: file[];
  @Output() deleteFile: EventEmitter<number> = new EventEmitter<number>();

  public downloadURL: string;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) { }

  /**
   * @param {file} item receive a 'file' param
   * @memberof ListFileComponent
   */
  public uploadFile(item: file): void {
    const path = `test/${Date.now()}_${item.file.name}`;
    const ref = this.storage.ref(path);

    item.task = this.storage.upload(path, item.file);

    item.percent$ = item.task.percentageChanges();

    item.snapshot$ = item.task.snapshotChanges().pipe(
      tap((res) => console.log),
      finalize(async () => {
        try {
          item.downloadURL = await ref.getDownloadURL().toPromise();
          this.db.collection('files').add({ downloadURL: item.downloadURL, path });
        } catch (error) {
          item.cancel = true;
        }
      }),
    )
  }

  /**
   * @param {any} snapshot
   * @returns {boolean} return a boolean
   * @memberof ListFileComponent
   */
  public isActive(snapshot: any): boolean {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  /**
   * @param {number} index receive a number param
   * @memberof ListFileComponent
   */
  public trashFile(index: number): void {
    this.deleteFile.emit(index);
  }

}
