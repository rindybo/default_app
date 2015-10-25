var gulp = require("gulp");
var util = require('gulp-util');
var rename = require('gulp-rename');
var postcss = require("gulp-postcss");
var sourcemaps = require("gulp-sourcemaps");
var notify = require("gulp-notify");
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var webpack = require('webpack');
var webpack_cfg = require('./webpack.config');

var passError = function () {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'compile error',
        message: '<%=error.message %>'
    }).apply(this, args);//替换为当前对象

    this.emit();//提交
};

var usefile_cfg = (function () {
    var root = './asisst/';
    return {
        js: './js/**/*.js',
        dist: './dist/',
        scss: [root + 'scss/**/*.scss', '!' + root + 'scss/**/_*.scss'],
        scss_watch: root + 'scss/**/*.scss',
        fonts: root + 'fonts/*.*',
        images: './dist/images/'
    }
} ());

//入侵方式
gulp.task('browser-sync', function() { 
     browserSync({ 
         server: "./" 
     }); 
 }); 

gulp.task('fonts', function () {
    return gulp.src(usefile_cfg.fonts).pipe(gulp.dest(usefile_cfg.dist + 'fonts'));
});

gulp.task('scss:dev', function () {

    return gulp.src(usefile_cfg.scss)
        .pipe(rename(function (path) {
            path.extname = ".css";
            return path
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss([
            //sass语法
            require('precss'),
            //自动前缀
            require('autoprefixer'),
            //图片合并
            require('postcss-sprites')({
                outputDimensions: true,
                stylesheetPath: usefile_cfg.dist + 'css',
                spritePath: usefile_cfg.images + 'icon.png',
                //禁用输出消息
                verbose: true,
                retina: true,
                padding: 5
            }),
            //计算图片hash
            require('postcss-urlrev')({
                relativePath: usefile_cfg.dist + 'css',
            })
        ]))
        .on('error', passError)
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(usefile_cfg.dist + 'css'))
        .pipe(reload({stream:true})); // inject into 

});

gulp.task('webpack:dev', function (cb) {

    webpack(webpack_cfg, function (err, stats) {
        if (err) {
            throw new util.PluginError('webpack', err);
        }
        util.log("[webpack]", stats.toString({ colors: true, chunks: false }));
        cb();
    });
});

gulp.task('watch:scss', function () {
    return gulp.watch(usefile_cfg.scss_watch, ['scss:dev']);
});

gulp.task('watch:js', function () {
    return gulp.watch(usefile_cfg.js, ['webpack:dev']);
});

gulp.task('default', ['fonts', 'scss:dev', 'webpack:dev', 'watch:scss', 'watch:js']);
