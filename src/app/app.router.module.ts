import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IntroComponent} from './intro/intro.component';

const __ROUTES__: Routes = [{path: '**', component: IntroComponent}];

@NgModule({
    // The forRoot() method is called because a configured router is provided at the app's root.
    // The forRoot() method supplies the Router service providers and directives needed for routing.
    // And performs the initial navigation based on the current browser URL.
    imports: [RouterModule.forRoot(
        __ROUTES__,
        {enableTracing: false}   // <-- debugging purposes only
    )],
    exports: [RouterModule],
    providers: []
})
export class AppRouterModule {
}
