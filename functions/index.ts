import { MouseEvent } from 'react';

export default {
  createRipple: function (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLLabelElement>
  ) {
    const button: HTMLElement = e.currentTarget;

    const circle: HTMLSpanElement = document.createElement('span');
    const diameter: number = Math.max(
      button.clientWidth,
      button.clientHeight
    );
    const radius: number = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple: Element = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  },
};
