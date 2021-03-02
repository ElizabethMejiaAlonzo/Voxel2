import { AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from "rxjs/internal/Observable";

export interface file {
    downloadURL?: string;
    file: File;
    percent$?: Observable<number>;
    snapshot$?: Observable<any>;
    task?: AngularFireUploadTask;
    cancel: boolean;
}