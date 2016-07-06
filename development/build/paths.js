var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'www/';
var exportExclude = "www/assets{,/**}";

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.scss',
  style: 'styles/**/*.css',
  output: outputRoot,
  outputCss: exportSrvRoot+"styles",
  exportSrv: exportSrvRoot,
  exportExclude : exportExclude,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
