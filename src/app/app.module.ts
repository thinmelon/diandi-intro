import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRouterModule} from './app.router.module';
import {AppComponent} from './app.component';
import {IntroComponent} from './intro/intro.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
