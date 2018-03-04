const gulp = require("gulp");
const gutil = require("gulp-util");
const markdownToJSON = require("gulp-markdown-to-json");
const marked = require("marked");

marked.setOptions({
  highlight: function(code) {
    return require("highlight.js").highlightAuto(code).value;
  }
});

gulp.task("markdown", () => {
  gulp
    .src("./src/data/**/*.md")
    .pipe(gutil.buffer())
    .pipe(markdownToJSON(marked, "./src/data/data.json"))
    .pipe(gulp.dest("."));
});

gulp.task("markdown:watch", () => {
  var watcher = gulp.watch("src/data/**/*.md", ["markdown"]);
  watcher.on("change", function(event) {
    console.log(
      "File " + event.path + " was " + event.type + ", running tasks..."
    );
  });
});
