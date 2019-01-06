import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    buyTemplate() {
        window.location.href = 'https://backbone.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B"templateId":5,"userDesc":"美食地图","userVersion":"0.0.1","price":"1.00","shouldHavaBusiness":0%7D;channel=miniprogram';
    }
}
