import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.less']
})
export class IntroComponent implements OnInit {
    entry = [
        {
            name: '美食地图',
            digest: '为美食自媒体提供管理历史文章的新方式。',
            url: 'https://backbone.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B"templateId":14,"userDesc":"美食地图","userVersion":"0.0.1","price":"1.00","shouldHavaBusiness":0%7D;channel=miniprogram',
            src_1920: 'https://warehouse.pusudo.cn/introduction/map-1920.jpg',
            src_768: 'https://warehouse.pusudo.cn/introduction/map-768.jpg',
            src_375: 'https://warehouse.pusudo.cn/introduction/map-375.jpg'
        },
        {
            name: '数据图表',
            digest: '企业办公管理新工具。',
            url: 'https://backbone.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B"templateId":5,"userDesc":"数据统计","userVersion":"0.0.1","price":"1.00","shouldHavaBusiness":0%7D;channel=miniprogram',
            src_1920: 'https://warehouse.pusudo.cn/introduction/chart-1920.jpg',
            src_768: 'https://warehouse.pusudo.cn/introduction/chart-768.jpg',
            src_375: 'https://warehouse.pusudo.cn/introduction/chart-375.jpg'
        },
        {
            name: '线上渠道',
            digest: '微信公众号、小程序、支付宝生活号多渠道建设。',
            url: 'https://backbone.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B"templateId":12,"userDesc":"电子商城","userVersion":"0.0.1","price":"1.00","shouldHavaBusiness":1%7D;channel=miniprogram',
            src_1920: 'https://warehouse.pusudo.cn/introduction/shop-1920.jpg',
            src_768: 'https://warehouse.pusudo.cn/introduction/shop-768 .jpg',
            src_375: 'https://warehouse.pusudo.cn/introduction/shop-375.jpg'
        },
        {
            name: '定制开发',
            digest: '需求您来定，剩下就交给我们吧。',
            url: 'https://backbone.pusudo.cn/entry/wechat/miniprogram/scenario/intro;template=%7B"templateId":5,"userDesc":"定制开发","userVersion":"0.0.1","price":"1.00","shouldHavaBusiness":0%7D;channel=miniprogram',
            src_1920: 'https://warehouse.pusudo.cn/introduction/development-1920.jpg',
            src_768: 'https://warehouse.pusudo.cn/introduction/development-768.jpg',
            src_375: 'https://warehouse.pusudo.cn/introduction/development-375.jpg'
        }
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
        // for (let index = 0; index < 7; index++) {
        //     this.images.push(`https://warehouse.pusudo.cn/introduction/WechatIMG${618 + index}.jpeg`);
        // }
    }

    details() {
        this.router.navigate(['/detail']);                      //  默认入口
        // window.location.href = url;
    }
}
