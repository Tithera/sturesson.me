const posthtml = require("gulp-posthtml");
const gulp = require("gulp");
const watch = require("gulp-watch");

const runHtml = () => {
  const plugins = [require("posthtml-include")({ root: `src/` })];
  const options = {};

  gulp
    .src("src/*.html")
    .pipe(posthtml(plugins, options))
    .pipe(gulp.dest("build/"));

  gulp.src("src/**/*.css").pipe(gulp.dest("build/"));
};

gulp.task("html", runHtml);

gulp.task("watch", () => {
  watch(["src/**/*.html", "src/*.css"], runHtml);
});
