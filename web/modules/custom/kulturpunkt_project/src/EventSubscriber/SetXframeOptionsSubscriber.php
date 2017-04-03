<?php

/**
 * @file
 * Contains Drupal\kulturpunkt_project\EventSubscriber\SetXframeOptionsSubscriber.
 */

namespace Drupal\kulturpunkt_project\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * Response subscriber to handle finished responses.
 */
class SetXframeOptionsSubscriber implements EventSubscriberInterface {

  /**
   * Sets extra headers on successful responses.
   *
   * @param \Symfony\Component\HttpKernel\Event\FilterResponseEvent $event
   *   The event to process.
   */
  public function setXframeOptions(FilterResponseEvent $event) {
    if (!$event->isMasterRequest()) {
      return;
    }
    $response = $event->getResponse();
    $response->headers->set('X-Frame-Options', 'ALLOW-FROM https://www.iovi.io/', TRUE);
  }

  /**
   * Registers the methods in this class that should be listeners.
   *
   * @return array
   *   An array of event listener definitions.
   */
  public static function getSubscribedEvents() {
    $events[KernelEvents::RESPONSE][] = array('setXframeOptions');
    return $events;
  }
}