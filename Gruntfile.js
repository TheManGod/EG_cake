module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
     eslint: {
        target: ['src/**/*.js']
    },
    watch: {
      files: ['<%= eslint.target %>'],
      tasks: ['eslint']
    }
  });

  grunt.registerTask('default', ['watch']);

};