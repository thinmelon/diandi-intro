export class Utils {
    /**
     * 产生随机字符串
     * @param length
     * @returns {string}
     */
    static GetNonceStr(length) {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const count = chars.length;
        let i, nonceStr = '';
        for (i = 0; i < length; i++) {
            nonceStr += chars.substr(Math.floor(Math.random() * (count - 1) + 1), 1);
        }
        return nonceStr;
    }

    static FetchUserAgent() {
        return navigator.userAgent;
    }

    /**
     * 判断是否在微信端打开链接
     * @returns {boolean}
     * @constructor
     */
    static IsWxChat() {
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
    }
}
