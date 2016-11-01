<?php
/**
 * @file
 * AmazeeIO Drupal 8 all environment configuration file.
 *
 * This file should contain all settings.php configurations that are needed by all environments.
 */

if (getenv('AMAZEEIO_BASE_URL')) {
  $settings['hash_salt'] = getenv('AMAZEEIO_HASH_SALT');
}

$config_directories['sync'] = 'sites/default/config/sync';
