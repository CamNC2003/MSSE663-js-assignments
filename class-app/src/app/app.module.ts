// app.module.ts
import {PizzaAppComponent} from "./pizza-app/pizza-app.component";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {SizePipe} from "./shared/pipes/size.pipe";
import {NavBarComponent} from "./shared/nav-bar.component";


@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent, PizzaAppComponent, SizePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
