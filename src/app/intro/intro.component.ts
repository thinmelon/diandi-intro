import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {
    entry = [
        {
            url: 'https://official.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B%22templateId%22:5,%22userDesc%22:%22%E7%BE%8E%E9%A3%9F%E5%9C%B0%E5%9B%BE%22,%22userVersion%22:%220.0.1%22,%22price%22:%221.00%22,%22shouldHavaBusiness%22:0%7D;channel=miniprogram',
            src: 'https://warehouse.pusudo.cn/introduction/map.jpg',
            name: '美食地图',
            digest: '为美食自媒体提供管理历史文章的新方式。'
        },
        {
            url: 'https://official.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B%22templateId%22:12,%22userDesc%22:%22%E7%BE%8E%E9%A3%9F%E5%9C%B0%E5%9B%BE%22,%22userVersion%22:%220.0.1%22,%22price%22:%221.00%22,%22shouldHavaBusiness%22:0%7D;channel=miniprogram',
            src: 'https://warehouse.pusudo.cn/introduction/chart.jpg',
            name: '数据图表',
            digest: '企业办公管理新工具。'
        },
        {
            url: 'https://official.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B%22templateId%22:14,%22userDesc%22:%22%E7%BE%8E%E9%A3%9F%E5%9C%B0%E5%9B%BE%22,%22userVersion%22:%220.0.1%22,%22price%22:%221.00%22,%22shouldHavaBusiness%22:0%7D;channel=miniprogram',
            src: 'https://warehouse.pusudo.cn/introduction/shop.jpg',
            name: '线上渠道',
            digest: '微信公众号、小程序、支付宝生活号多渠道建设。'
        },
        {
            url: 'https://official.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B%22templateId%22:13,%22userDesc%22:%22%E7%BE%8E%E9%A3%9F%E5%9C%B0%E5%9B%BE%22,%22userVersion%22:%220.0.1%22,%22price%22:%221.00%22,%22shouldHavaBusiness%22:0%7D;channel=miniprogram',
            src: 'https://warehouse.pusudo.cn/introduction/development.jpg',
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

    details(url) {
        window.location.href = url;
    }
}
