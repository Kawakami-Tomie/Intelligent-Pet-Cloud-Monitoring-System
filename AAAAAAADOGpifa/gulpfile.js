// 获取 gulp
var gulp = require('gulp');
// 获取babel模块
var babel = require('gulp-babel');
 
/*这里的babal是任务名,可以修改为其他turn ,change 都行,执行的时候在命令行输入 gulp turn 或者 gulp change就行了*/
gulp.task("babel", function () {
  return gulp.src("./static/three/build/three.module.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("unpackage/dist")); //转换成 ES5 存放的路径
});
