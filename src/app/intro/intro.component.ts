import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {
    // images = ['https://warehouse.pusudo.cn/introduction/background-business-clean-811101.jpg'];
    images = ['../../assets/map_1.jpg'];

    constructor() {
    }

    ngOnInit() {
        // for (let index = 0; index < 7; index++) {
        //     this.images.push(`https://warehouse.pusudo.cn/introduction/WechatIMG${618 + index}.jpeg`);
        // }
    }
}
