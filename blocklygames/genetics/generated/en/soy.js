// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Genetics.soy.
 */

goog.provide('Genetics.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Genetics.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Genetics_tutorEnemy">Enemy</span><span id="Genetics_simpleName">Simple</span><span id="Genetics_aggressiveName">Aggressive</span><span id="Genetics_highBreedingName">High Breeding</span><span id="Genetics_variantName">Variant</span><span id="Genetics_myName">Player</span><span id="Genetics_getMiceTooltip">Returns all other alive mice in the game.</span><span id="Genetics_getSelfTooltip">Returns the mouse making the decision.</span><span id="Genetics_pickFightTooltip">Defines the function for picking a mouse to fight against.</span><span id="Genetics_proposeMateTooltip">Defines the function for choosing a mouse to mate with.</span><span id="Genetics_acceptMateTooltip">Defines the function for the answer to a mate request.</span><span id="Genetics_sizeTooltip">Reports the size of the specified mouse.</span><span id="Genetics_aggressivenessTooltip">Reports the aggressiveness of the specified mouse.</span><span id="Genetics_fertilityTooltip">Reports the fertility of the specified mouse.</span><span id="Genetics_startFertilityTooltip">Reports the starting fertility of the specified mouse.</span><span id="Genetics_sexTooltip">Reports the sex of the specified mouse.</span><span id="Genetics_ageTooltip">Reports the age of the specified mouse.</span><span id="Genetics_idTooltip">Reports the id of the specified mouse.</span><span id="Genetics_pickFightOwnerTooltip">Reports the owner of the pickFight function of the specified mouse.</span><span id="Genetics_proposeMateOwnerTooltip">Reports the owner of the proposeMate function of the specified mouse.</span><span id="Genetics_acceptMateOwnerTooltip">Reports the owner of the acceptMate function of the specified mouse.</span></div>';
};
if (goog.DEBUG) {
  Genetics.soy.messages.soyTemplateName = 'Genetics.soy.messages';
}


Genetics.soy.gameElementTemplates = function(opt_data, opt_ignored, opt_ijData) {
  return '</style><div id="gameElements" style="display:none;"><div id="dust" class="dust"><div class="cloud cloud1"></div><div class="cloud cloud2"></div><p class="star1">&#9734;</p><p class="star2">&#9734;</p><p class="star3">&#9734;</p><p class="star4">&#9734;</p></div></div>';
};
if (goog.DEBUG) {
  Genetics.soy.gameElementTemplates.soyTemplateName = 'Genetics.soy.gameElementTemplates';
}


Genetics.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="visualization">' + ((opt_ijData.level >= 9) ? '<div id="vizTabbar" class="goog-tab-bar goog-tab-bar-top"><div class="goog-tab goog-tab-selected">Visualization</div><div class="goog-tab">Charts</div></div><div class="goog-tab-bar-clear"></div>' : '') + Genetics.soy.gameElementTemplates(null, null, opt_ijData) + '<div class="vizTabContent"><div id="displayContent"><div id="display"></div></div>' + ((opt_ijData.level >= 9) ? '<div id="charts"><div id="populationChart"></div><div id="pickFightChart"></div><div id="proposeMateChart"></div><div id="acceptMateChart"></div></div>' : '') + '</div></div><table class="playerStatTable"><tbody><tr id="playerNameRow">';
  for (var i102 = 0; i102 < 4; i102++) {
    output += '<td class="playerStatName"></td>';
  }
  output += '<tr id="playerStatRow">';
  for (var i105 = 0; i105 < 4; i105++) {
    output += '<td><div class="mouseFunctionIcons"></div><div class="pickFightStat" ></div>' + ((opt_ijData.level >= 5) ? '<div class="proposeMateStat"></div>' + ((opt_ijData.level >= 7) ? '<div class="acceptMateStat"></div>' : '') : '') + '</td>';
  }
  output += '</tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs" style="display: none"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
  return output;
};
if (goog.DEBUG) {
  Genetics.soy.visualization.soyTemplateName = 'Genetics.soy.visualization';
}


Genetics.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Genetics.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Genetics'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table>' + Genetics.soy.visualization(null, null, opt_ijData) + ((opt_ijData.level > 8) ? '<div id="tabarea"><div id="tabbar" class="goog-tab-bar goog-tab-bar-top"><div class="goog-tab goog-tab-selected">Blocks</div><div class="goog-tab">JavaScript</div></div><div class="goog-tab-bar-clear"></div>' : '') + ((opt_ijData.level > 8 || opt_ijData.level % 2 == 1) ? '<div id="blockly"></div>' : '') + ((opt_ijData.level > 8 || opt_ijData.level % 2 == 0) ? '<div id="editor"></div>' : '') + ((opt_ijData.level > 8) ? '</div>' : '') + Genetics.soy.toolbox(null, null, opt_ijData) + Genetics.soy.playerTutor(null, null, opt_ijData) + Genetics.soy.playerSimple(null, null, opt_ijData) + Genetics.soy.playerAggressive(null, null, opt_ijData) + Genetics.soy.playerHighBreeding(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1) ? 'Use getMice() to get the list of other mice in the game.<BR>Use the []\'s on the list of mice to get the FIRST element in the list and return it in pickFight.' : (opt_ijData.level == 2) ? 'Use getMice() to get the list of other mice in the game.<BR>Use the []\'s on the list of mice to get the LAST element in the list and return it in pickFight.<BR>You can get the length of the list with .length.' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? 'Bigger mice are more likely to win in a fight. Return a mouse that is smaller than 2 in pickFight.<BR>' : (opt_ijData.level == 4) ? 'Bigger mice are more likely to win in a fight. Return a mouse that is smaller than yourself in pickFight.<BR>' : '') + 'Use .size to get the size of a mouse.' + ((opt_ijData.level == 3) ? '<br><br><img src="genetics/docs/sizeProperty.png" height=40 width=162>' : (opt_ijData.level == 4) ? '<pre>mouse.size</pre><pre>getSelf()</pre>' : '') : (opt_ijData.level == 5 || opt_ijData.level == 6) ? 'Mice mate to pass on their functions to their children. If the other mate accepts a mate request and the mate is valid, a child is born.\n' + ((opt_ijData.level == 5) ? 'Return a mouse that is fertile (fertility greater than 0) and of the opposite sex.<br><br><img src="genetics/docs/fertilityProperty.png" height=43 width=180><br><br><img src="genetics/docs/sexProperty.png" height=55 width=178><br><br>' : (opt_ijData.level == 6) ? 'Return a mouse that is fertile (fertility greater than 0), of the opposite sex, and is bigger than yourself.<pre>mouse.fertility</pre><pre>mouse.sex</pre>' : '') : (opt_ijData.level == 7 || opt_ijData.level == 8) ? 'Mice answer mating requests with acceptMate. Accepting will use up some fertility but will make a child.<BR>' + ((opt_ijData.level == 7) ? 'Return true in acceptMate if the suitor is of the opposite sex.' : (opt_ijData.level == 8) ? 'Return true in acceptMate if the suitor is of the opposite sex and bigger than yourself.' : '') : (opt_ijData.level == 9) ? 'Write your own implementations for the mouse functions and compete to try to get majority of each function in the cage.<BR>WARNING: This level does not save.' : (opt_ijData.level == 10) ? 'Write your own implementations for the mouse functions and compete to try to get majority of each function in the cage. Watch out, these mice are much smarter than before.<BR>WARNING: This level does not save.' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Genetics.soy.start.soyTemplateName = 'Genetics.soy.start';
}


Genetics.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><category name="Genetics"><block type="genetics_getMice"></block>' + ((opt_ijData.level >= 4) ? '<block type="genetics_getSelf"></block>' : '') + ((opt_ijData.level >= 3) ? '<block type="genetics_getProperties"></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="genetics_sex"></block>' : '') + '</category><category name="Lists">' + ((opt_ijData.level >= 9) ? '<block type="lists_create_with"><mutation items="0"></mutation></block>' : '') + ((opt_ijData.level >= 2) ? '<block type="lists_length"></block>' : '') + '<block type="lists_getIndex"><value name="VALUE"><shadow type="genetics_getMice"></shadow></value><value name="AT"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>' + ((opt_ijData.level >= 9) ? '<block type="lists_setIndex"><value name="AT"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>' : '') + '</category>' + ((opt_ijData.level >= 3) ? '<category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block>' + ((opt_ijData.level >= 7) ? '<block type="logic_boolean"></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="logic_negate"></block>' : '') + '<block type="logic_null"></block></category><category name="Loops"><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="lists_length"><value name="VALUE"><shadow type="genetics_getMice"></shadow></value></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_flow_statements"></block></category>' : '') + '<category name="Math"><block type="math_number"></block>' + ((opt_ijData.level >= 2) ? '<block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="genetics_math_randomInt"><value name="MIN_VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="MAX_VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_random_float"></block>' : '') + '</category>' + ((opt_ijData.level >= 3) ? '<sep></sep><category name="Variables" custom="VARIABLE"></category>' : '') + ((opt_ijData.level >= 9) ? '<category name="Functions" custom="PROCEDURE"></category>' : '') + '</xml>';
};
if (goog.DEBUG) {
  Genetics.soy.toolbox.soyTemplateName = 'Genetics.soy.toolbox';
}


Genetics.soy.playerTutor = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerTutor" style="display: none">\n/* Tutor player */\nvar suitor;\nfunction pickFight() {\n  return null;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  for (var i = 0, mouse; mouse = mice[i]; i++) {\n    if (mouse.id == 0) {\n      return mouse;\n    }\n  }\n  // Should not get here.\n  return null;\n}\nfunction acceptMate(suitor) {\n  return true;\n}\n</div>\n';
};
if (goog.DEBUG) {
  Genetics.soy.playerTutor.soyTemplateName = 'Genetics.soy.playerTutor';
}


Genetics.soy.playerSimple = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerSimple" style="display: none">\n/* Simple player */\nvar suitor;\nfunction pickFight() {\n  var mice = getMice();\n  var opponent = mice[Math.randomInt(0,mice.length-1)];\n  return opponent;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  var mate = mice[Math.randomInt(0,mice.length-1)];\n  return mate;\n}\nfunction acceptMate(suitor) {\n  return true;\n}\n</div>\n';
};
if (goog.DEBUG) {
  Genetics.soy.playerSimple.soyTemplateName = 'Genetics.soy.playerSimple';
}


Genetics.soy.playerAggressive = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerAggressive" style="display: none">\n/* Aggressive player */\nvar suitor;\nfunction pickFight() {\n  var targetOwner = getSelf().pickFightOwner;\n  var mice = getMice();\n  // Choose the biggest opponent, smaller than itself.\n  var opponent = null;\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    // Check that mouse is smaller than self and doesn\'t share function owner.\n    if (mouse.size < getSelf().size && mouse.pickFightOwner != targetOwner &&\n        mouse.proposeMateOwner != targetOwner && mouse.acceptMateOwner != targetOwner) {\n      // Set opponent choice if opponent is biggest we have seen.\n      if (!opponent || mouse.size > opponent.size) {\n        opponent = mouse;\n      }\n    }\n  }\n  return opponent;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  // Choose the biggest valid mate.\n  var mate = null;\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    // Check that potential mate is valid.\n    if (mouse != getSelf() && mouse.sex != getSelf().sex && mouse.fertility > 0) {\n      // Set mate choice if new mate is biggest we have seen.\n      if (!mate || mouse.size > mate.size) {\n        mate = mouse;\n      }\n    }\n  }\n  return mate;\n}\nfunction acceptMate(suitor) {\n  return suitor.proposeMateOwner == getSelf().acceptMateOwner ||\n      suitor.sex != getSelf().sex && suitor.size > getSelf().size;\n}\n</div>\n';
};
if (goog.DEBUG) {
  Genetics.soy.playerAggressive.soyTemplateName = 'Genetics.soy.playerAggressive';
}


Genetics.soy.playerHighBreeding = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerHighBreeding" style="display: none">\n/* High Breeding player */\nvar suitor;\nfunction pickFight() {\n  // Always choose not to fight.\n  return null;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  // Choose the mate with the highest fertility gene.\n  var mate = null;\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    // Check that potential mate is valid.\n    if (mouse != getSelf() && mouse.sex != getSelf().sex && mouse.fertility > 0) {\n      // Change mate choice if new mate would pass on higher fertility.\n      if (!mate || mouse.startingFertility > mate.startingFertility) {\n        mate = mouse;\n      }\n    }\n  }\n  return mate;\n}\nfunction acceptMate(suitor) {\n    return suitor.proposeMateOwner == getSelf().acceptMateOwner ||\n        suitor.sex != getSelf().sex && suitor.startingFertility > getSelf().startingFertility;\n}\n</div>\n';
};
if (goog.DEBUG) {
  Genetics.soy.playerHighBreeding.soyTemplateName = 'Genetics.soy.playerHighBreeding';
}


Genetics.soy.playerVariant = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerVariant" style="display: none">\n/* Variant player */\nvar suitor;\nfunction pickFight() {\n  // Always choose not to fight.\n  return null;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  // Choose the mate with the highest fertility gene.\n  var mate;\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    // Check that potential mate is valid.\n    if (mouse != getSelf() && mouse.sex != getSelf().sex && mouse.fertility > 0) {\n      // Change mate choice if new mate would pass on higher fertility.\n      if (!mate || mouse.startingFertility > mate.startingFertility) {\n        mate = mouse;\n      }\n    }\n  }\n  return mate;\n}\nfunction acceptMate(suitor) {\n  // Survey for how many mice own target gene.\n  var bestGeneOwner = getSelf().acceptMateOwner;\n  // Check how many of suitor\'s genes are the same as the best gene.\n  var suitorGeneCount = 0;\n  if (suitor.pickFightOwner == bestGeneOwner) {\n    suitorGeneCount++;\n  }\n  if (suitor.mateQuestionOwner == bestGeneOwner) {\n    suitorGeneCount++;\n  }\n  if (suitor.acceptMateOwner == bestGeneOwner) {\n    suitorGeneCount++;\n  }\n  // If suitor owns all the right genes, they are perfect.\n  if (suitorGeneCount == 3) {\n    return true;\n  }\n  // Otherwise, survey the population to see what other potential mates have.\n  var okayMice = 0; // Count of how many mice own 1 if the \'best\' gene.\n  var greatMice = 0; // Count of how many mice have 2 of the \'best\' genes.\n  var bestMice = 0; // Count of how many mice have all the \'best\' genes.\n  var totalValidMates = 0; // Count of total valid mates.\n  var mice = getMice();\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    if (mouse == getSelf()) {\n      continue;\n    }\n    if (mouse.fertility && mouse.sex != getSelf().sex) {\n      totalValidMates++;\n      // Count how many of the \'right\' genes the mouse has.\n      var rightGeneCount = 0;\n      if (mouse.mateQuestionOwner == bestGeneOwner) {\n        rightGeneCount++;\n      }\n      if (mouse.acceptMateOwner == bestGeneOwner) {\n        rightGeneCount++;\n       }\n      if (mouse.pickFightOwner == bestGeneOwner) {\n        rightGeneCount++;\n      }\n      if (rightGeneCount == 1) {\n        okayMice++;\n      } else if (rightGeneCount == 2) {\n        greatMice++;\n      } else if (rightGeneCount == 3) {\n        bestMice++;\n      }\n    }\n  }\n  // Be very selective if there are a lot of best choices.\n  if (totalValidMates > 4 && bestMice/totalValidMates > 0.5) {\n    return false;\n  }\n  // Otherwise be less selective if there are still a lot of great choices\n  if (totalValidMates > 4 && (greatMice + bestMice)/totalValidMates > 0.5) {\n    return suitorGeneCount > 1;\n  }\n  // Otherwise be somewhat selective if there are some okay choices\n  if (totalValidMates > 4 && (okayMice + greatMice + bestMice)/totalValidMates > 0.5) {\n    return suitorGeneCount > 2;\n  }\n  // Otherwise take what you can get\n  return true;\n}\n</div>\n';
};
if (goog.DEBUG) {
  Genetics.soy.playerVariant.soyTemplateName = 'Genetics.soy.playerVariant';
}
