// ==UserScript==
// @name        QuizWiz : Rubrics
// @namespace   https://github.com/ronbowman/canvancement
// @description Regrading and speed enhancements for Canvas quizzes
// @include     https://*.instructure.com/courses/*/gradebook/speed_grader?*
// @include     https://*.instructure.com/courses/*/quizzes/*/history?*
// @noframes
// @version     5
// @grant       none
// ==/UserScript==
(function() {
  'use strict';

  var config = {
    // Regrading methods may be 'disabled', 'enabled', or 'autorun'
    'methods' : {
      'unanswered' : 'autorun',
      'full_points' : 'disabled',
      'ma_allnone' : 'disabled',
      'ma_correct' : 'disabled',
      'ma_difference' : 'disabled',
      'fill_in_blanks' : 'disabled',
      'dropdowns' : 'disabled'
    },
    // Speed enhancements may be true or false
    'autoExpandComments' : true,
    'duplicateQuestionHeader' : true,
    'showButtonCounts' : true,
    'nextAfterUpdate' : true,
    'nextAfterComment' : true,
    'nextAfterRubric' : true,
    'nextRubricExpanded' : true
  };

  if (typeof QuizWiz !== 'function') {
    const script = document.createElement('script');
    //script.src = 'https://gitcdn.link/repo/jamesjonesmath/canvancement/master/quizzes/quizwiz/src/qw-engine.js';
    script.src = 'https://github.com/ronbowman/canvancement/blob/master/quizzes/quizwiz/src/qw-engine.js';
    script.onload = function() {
      QuizWiz(config);
    };
    document.head.appendChild(script);
  }
  else {
    QuizWiz(config);
  }

})();
