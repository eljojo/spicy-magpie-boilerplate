module.exports = function () {
    'use strict';
    return {
        "options": {
            "network": [
                "http://*",
                "https://*"
            ],
            preferOnline: true,
            timestamp: true
        },
        "dist/<%= data.pkg.version %>/manifest.appcache": [
            "*.html",
            "<%= data.pkg.assets_dir %>/*.css",
            "<%= data.pkg.assets_dir %>/*.js",
            "fonts/**/*.*",
            "images/**/*.*",
            "media/**/*.*",
            "apple-touch-icon*.png",
            "crossdomain.xml",
            "humans.txt",
            "robots.txt",
            "favicon.ico"
        ]
    };
};
