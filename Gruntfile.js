module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! aktjs <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'akt.js',
        dest: 'akt.min.js'
      }
    },
    copy: {
      main: {
        src: 'akt.min.js',
        dest: 'example/akt.min.js'
      } 
    },
    jsdoc: {
      dist: {
        src: ['akt.js']
      } 
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jsdoc');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy', 'jsdoc']);

};
