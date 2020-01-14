import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { ListviewComponent } from './listview/listview.component';
import { NoteviewComponent } from './noteview/noteview.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ActivateDashboardGuard } from './activate-dashboard.guard';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'view/login', component: LoginComponent},
  {path: 'view/dashboard', component: DashboardComponent,canActivate:[ActivateDashboardGuard],children:[
    {path:'listview',component:ListviewComponent},
    {path:'noteview',component:NoteviewComponent},
    {path:'editnote/:noteId',component:EditNoteComponent, outlet: 'editNoteOutlet'},
    {path: '', redirectTo:'listview', pathMatch:'full'}
  ]},
  {path: '', redirectTo:'view/login', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    NoteTakerComponent,
    ListviewComponent,
    NoteviewComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
