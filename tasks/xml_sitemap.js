module.exports = function () {
    'use strict';
    return {
        "files": {
            "expand": true,
            "cwd": "./",
            "src": "*.html"
        },
        "options": {
            changefreq: "weekly",
            dest: "dist/<%= data.pkg.version %>/",
            fileName: "sitemap",
            siteRoot: "<%= data.pkg.site_url %>",
            priority: 0.5
        }
    };
};
