import {Component, OnInit} from '@angular/core';
import {Utils} from './services/utils';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    errorMessage = '';

    ngOnInit() {
    }

    login() {
        if (Utils.IsWxChat()) {
            this.errorMessage = Utils.FetchUserAgent();
        } else {
            window.location.href = 'https://backbone.pusudo.cn';
        }
    }
}
