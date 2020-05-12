!(function (url) {
    // 放置被删除的页面映射
    var urlMap = {
        // 例 '/docs/design/principle/':'/docs/design/overview/introduction/'
    };
    if (!window._swanIde) {
        urlMap[url] && location.replace(urlMap[url]);

        // 给路由后缀加上  /
        !url.match('\/$') && !url.match('\.html$') && location.replace(url + '/');
    }
})(location.pathname);