import {
  trigger,
  query,
  style,
  animate,
  group,
  transition,
  animateChild
} from '@angular/animations';
export var slideInAnimation =
  trigger('routeAnimations', [
    transition('*<=>*', [
      style({ opacity: 0 }),
      animate('0.5s', style({ opacity: 1 }))
    ]),
  ]);
