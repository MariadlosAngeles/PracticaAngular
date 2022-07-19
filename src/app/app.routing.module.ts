import { NgModule } from "@angular/core";
import { Routes,RouterModule  } from "@angular/router";
import { ContactReativeComponent } from "./contact-reative/contact-reative.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'contact-reative',component:ContactReativeComponent},
    {path:'contact-template',component:ContactComponent},
    {path:'home',component:HomeComponent}
];

@NgModule({
    imports: [RouterModule,forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}