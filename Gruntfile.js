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
                less: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").css;
                    data = underscore.where(data, { "group" : "development", "type" : "less" });
                    return underscore.pluck(data, "source");
                }(grunt)),
                less_object: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").css, css = [], less = [];
                    data = underscore.where(data, { "group" : "development", "type" : "less" });
                    css = underscore.pluck(data, "name");
                    less = underscore.pluck(data, "source");
                    return underscore.object(css, less);
                }(grunt)),
                sass: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").css;
                    data = underscore.where(data, { "group" : "development", "type" : "sass" });
                    return underscore.pluck(data, "source");
                }(grunt)),
                sass_object: (function (grunt) {
                    var data = grunt.file.readJSON("filelist.json").css, css = [], sass = [];
                    data = underscore.where(data, { "group" : "development", "type" : "sass" });
                    css = underscore.pluck(data, "name");
                    sass = underscore.pluck(data, "source");
                    return underscore.object(css, sass);
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

    grunt.registerTask("precompile", ["less"]);
    grunt.registerTask("build", ["clean", "precompile", "csslint", "jshint", "concat"]);
    grunt.registerTask("dist", ["build", "copy", "uglify", "cssmin", "xml_sitemap", "manifest"]);
    grunt.registerTask("default", ["build", "browserSync", "watch"]);
};
