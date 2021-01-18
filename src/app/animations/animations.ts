import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';

  export const overviewAnimation = trigger('overviewAnimation', [
    // ...
    state('true', style({
      height: '400px',
      backgroundColor: 'white',
      position: 'absolute',
      zIndex: '100',
      bottom: '0',
      transform: 'translateY(0)',
      visibility: 'visible'

    })),
    state('false', style({
      height: '0',
      visibility: 'hidden',
      overflow: 'hidden'
    })),
    transition('false => true', [
      animate('0.5s ease-in-out')
    ]),
    transition('true => false', [
      animate('0.2s ease-in')
    ]),
  ]);
