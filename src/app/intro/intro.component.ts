import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {
    entry = [
        {
            url: 'https://warehouse.pusudo.cn/introduction/map.jpg',
            name: '美食地图',
            digest: '为美食自媒体提供管理历史文章的新方式。'
        },
        {
            url: 'https://warehouse.pusudo.cn/introduction/chart.jpg',
            name: '数据图表',
            digest: '企业办公管理新工具。'
        },
        {
            url: 'https://warehouse.pusudo.cn/introduction/shop.jpg',
            name: '线上渠道',
            digest: '微信公众号、小程序、支付宝生活号多渠道建设。'
        },
        {
            url: 'https://warehouse.pusudo.cn/introduction/development.jpg',
            name: '定制开发',
            digest: '需求您来定，剩下就交给我们吧。'
        }
    ];

    constructor() {
    }

    ngOnInit() {
        // for (let index = 0; index < 7; index++) {
        //     this.images.push(`https://warehouse.pusudo.cn/introduction/WechatIMG${618 + index}.jpeg`);
        // }
    }
}
