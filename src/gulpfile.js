var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// 编译sass
gulp.task('sass',function() {
    return gulp.src('./SRC/scss/**/*.scss')
    .pipe(sass())
    .pipe(minCss())
    .pipe(gulp.dest('./SRC/css/'))
})

// 编辑js
gulp.task('minjs',function() {
    return gulp.src('./SRC/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('aa.js'))
    .pipe(gulp.dest('./SRC/minJs/'))
})

// 监听sass js
gulp.task('watch',function() {
    gulp.watch('./SRC/scss/**/*.scss',gulp.series('sass'));
    gulp.watch('./SRC/js/**/*.js',gulp.series('minjs'));
})

// 起服务
gulp.task('server',function() {
    return gulp.src('./SRC/')
    .pipe(server({
        port : 8585,
        open : true,
        livereload : true
    }))
})

// 创建默认任务
gulp.task('default',gulp.series('server','minjs','watch'))


// 2.	以自己的名字做为本地的开发分支，在开发分支进行开发，开发完成合并到master分支提交到线上的master分支 10分
// 4.	src目录中实现上图功能开发，使用scss开发样式，js实现切换功能10分
