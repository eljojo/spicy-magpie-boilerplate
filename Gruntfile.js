module.exports = function (grunt) {
    'use strict';

    var underscore = require("underscore/underscore"),
        options = {
            data: {
                pkg: grunt.file.readJSON("package.json"),
                files: grunt.file.readJSON("filelist.json"),
                css: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").css;
                    return underscore.pluck(data, "name");
                }(grunt)),
                css_dev: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").css;
                    data = underscore.where(data, { "group" : "development" });
                    return underscore.pluck(data, "name");
                }(grunt)),
                js: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").js;
                    return underscore.pluck(data, "name");
                }(grunt)),
                js_dev: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").js;
                    data = underscore.where(data, { "group" : "development" });
                    return underscore.pluck(data, "name");
                }(grunt))
            },
            config: {
                src: "tasks/*.js"
            }
        },
        configs = require('load-grunt-configs')(grunt, options);

    grunt.initConfig(configs);

    require('load-grunt-tasks')(grunt);

    grunt.registerTask("build", ["clean", "csslint", "jshint", "concat"]);
    grunt.registerTask("dist", ["build", "copy", "uglify", "cssmin", "xml_sitemap", "manifest"]);
    grunt.registerTask("default", ["build", "browserSync", "watch"]);
};
