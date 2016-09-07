<?php

/**
 * @file
 * AmazeeIO Drupal 8 configuration file.
 *
 * You should not edit this file, please use environment specific files!
 * They are loaded in this order:
 * - settings.all.php
 *   For settings that should be applied to all environments (dev, prod, staging, vagrant, etc).
 * - services.all.yml
 *   For services that should be applied to all environments (dev, prod, staging, vagrant, etc).
 * - settings.production.php
 *   For settings only for the production environment.
 * - services.production.yml
 *   For services only for the production environment.
 * - settings.development.php
 *   For settings only for the development environment (dev servers, vagrant).
 * - services.development.yml
 *   For services only for the development environment (dev servers, vagrant).
 * - settings.local.php
 *   For settings only for the local environment, this file will not be commited in GIT!
 * - services.local.yml
 *   For services only for the local environment, this file will not be commited in GIT!
 *
 */

### AMAZEE.IO Varnish & Reverse proxy settings
if (getenv('AMAZEEIO_VARNISH_HOSTS') && getenv('AMAZEEIO_VARNISH_SECRET')) {
  $varnish_hosts = explode(getenv('AMAZEEIO_VARNISH_HOSTS'), ',');
  array_walk($varnish_hosts, function(&$value, $key) { $value .= ':6082'; });

  $settings['reverse_proxy'] = TRUE;
  $settings['reverse_proxy_addresses'] = array_merge(explode(',', getenv('AMAZEEIO_VARNISH_HOSTS')), array('127.0.0.1'));
  $settings['varnish_control_terminal'] = implode($varnish_hosts, " ");
  $settings['varnish_control_key'] = getenv('AMAZEEIO_VARNISH_SECRET');
  $settings['varnish_version'] = 4;
}

### AMAZEE.IO Database connection
if(getenv('AMAZEEIO_SITENAME')){
  $databases['default']['default'] = array(
    'driver' => 'mysql',
    'database' => getenv('AMAZEEIO_SITENAME'),
    'username' => getenv('AMAZEEIO_DB_USERNAME'),
    'password' => getenv('AMAZEEIO_DB_PASSWORD'),
    'host' => getenv('AMAZEEIO_DB_HOST'),
    'port' => getenv('AMAZEEIO_DB_PORT'),
    'prefix' => '',
  );
}

### Base URL
if (getenv('AMAZEEIO_BASE_URL')) {
  $base_url = getenv('AMAZEEIO_BASE_URL');
}

// Settings for all environments
if (file_exists(__DIR__ . '/settings.all.php')) {
  include __DIR__ . '/settings.all.php';
}

// Services for all environments
if (file_exists(__DIR__ . '/services.all.yml')) {
  $settings['container_yamls'][] = __DIR__ . '/services.all.yml';
}

if(getenv('AMAZEEIO_SITE_ENVIRONMENT')){
  // Environment specific settings files.
  if (file_exists(__DIR__ . '/settings.' . getenv('AMAZEEIO_SITE_ENVIRONMENT') . '.php')) {
    include __DIR__ . '/settings.' . getenv('AMAZEEIO_SITE_ENVIRONMENT') . '.php';
  }

  // Environment specific services files.
  if (file_exists(__DIR__ . '/services.' . getenv('AMAZEEIO_SITE_ENVIRONMENT') . '.yml')) {
    $settings['container_yamls'][] = __DIR__ . '/services.' . getenv('AMAZEEIO_SITE_ENVIRONMENT') . '.yml';
  }
}

// Last: this servers specific settings files.
if (file_exists(__DIR__ . '/settings.local.php')) {
  include __DIR__ . '/settings.local.php';
}
// Last: This server specific services file.
if (file_exists(__DIR__ . '/services.local.yml')) {
  $settings['container_yamls'][] = __DIR__ . '/services.local.yml';
}

// Keep "install_profile" here so it's not added by "drush site-install" again
// and again.
$settings['install_profile'] = 'minimal';
