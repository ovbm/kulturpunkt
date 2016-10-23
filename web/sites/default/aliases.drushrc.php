<?php
// Don't change anything here, it's magic!
global $aliases_stub;
if (empty($aliases_stub)) {
  $aliases_stub = file_get_contents('https://raw.githubusercontent.com/amazeeio/drush-aliases/master/aliases.drushrc.php.stub?' . rand(0, 99999999999));
}
eval($aliases_stub);

/**
 * Production alias
 * Set each option to match your configuration
 */
$aliases['prod'] = array (
  // This is the full site alias name from which we inherit its config.
  'uri' => 'sl85.web.hostpoint.ch',
  'root' => '/www/kulturpunkt-flawil.ch',
  'remote-user' => 'olivie62',
  'remote-host' => 'p1.server.hostpoint.ch',
);
