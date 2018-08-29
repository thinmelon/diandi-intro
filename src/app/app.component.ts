import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    images = [`http://warehouse.pusudo.cn/introduction/WechatIMG618.jpeg`];

    constructor() {

    }
}
