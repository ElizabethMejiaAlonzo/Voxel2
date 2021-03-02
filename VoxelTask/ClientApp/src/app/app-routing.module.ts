import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileuploadComponent } from './view/fileupload/fileupload.component';
import { MapComponent } from './view/map/map.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "exam1" },
  { path: "exam1", component: FileuploadComponent },
  { path: "exam2", component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
