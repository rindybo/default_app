var gulp = require("gulp");
var util = require('gulp-util');
var postcss = require("gulp-postcss");
var autoprefixer = require('autoprefixer');
var postcssSimpleVars = require("postcss-simple-vars");
var postcssMixins = require("postcss-mixins");
var postcssNested = require("postcss-nested");
var sourcemaps = require("gulp-sourcemaps");

var webpack = require('webpack');
var webpack_cfg = require('./webpack.config');

var hash = function () {

};

gulp.task('assist', function () {
    gulp.src(['./fonts/*.*']).pipe(gulp.dest('./dist/fonts'));
});

// Css process.
gulp.task("postcss", function () {
    var processors = [
        postcssMixins,
        postcssSimpleVars,
        postcssNested,
        autoprefixer({
            browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 24", "ie >= 9"]
        })];

    return gulp.src(["./css/**/*.css"])
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist/css"));
});

gulp.task('webpack', function (cb) {

    webpack(webpack_cfg, function (err, stats) {
        if (err) {
            throw new util.PluginError('webpack', err);
        }
        util.log("[webpack]", stats.toString({ colors: true, chunks: false }));
        cb();
    });
});

gulp.task('watch:css', function () {
    return gulp.watch(["css/**/*.css"], ['postcss']);
});

gulp.task('watch:js', function () {
    return gulp.watch(["js/**/*.js"], ['webpack']);
});

gulp.task('default', ['assist', 'postcss', 'webpack', 'watch:css', 'watch:js']);
