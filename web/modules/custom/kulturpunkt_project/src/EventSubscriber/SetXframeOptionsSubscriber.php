<?php
namespace Drupal\kulturpunkt_project\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;

/**
 * Subscriber for changing header.
 */
class SetXframeOptionsSubscriber implements EventSubscriberInterface {

  /**
   * Remove X-Frame-Options, adding Content-Security-Policy.
   */
  public function setHeaderContentSecurityPolicy(FilterResponseEvent $event) {
    $response = $event->getResponse();
    $response->headers->remove('X-Frame-Options');
    // Set the header, use FALSE to not replace it if it's set already.
    $response->headers->set('Content-Security-Policy', "frame-ancestors 'self' iovi.io *.iovi.io", FALSE);
  }

  /**
   * {@inheritdoc}
   */
  static public function getSubscribedEvents() {
    // Response: set header content for security policy.
    $events[KernelEvents::RESPONSE][] = ['setHeaderContentSecurityPolicy', -10];
    return $events;
  }

}
