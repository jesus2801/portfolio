import { MouseEvent } from 'react';
import Swal from 'sweetalert2';

export default {
  createRipple: function (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLLabelElement>
  ): void {
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

  downloadFile: async (
    fileUrl: string,
    fileName: string
  ): Promise<void> => {
    const response: Response = await fetch(fileUrl);
    const file: Blob = await response.blob();
    const ref = window.URL || window.webkitURL;
    const url = ref.createObjectURL(file);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    ref.revokeObjectURL(url);
  },

  handleLoading: (state: boolean) => {
    if (state) {
      Swal.fire({
        title: 'Loading',
        didOpen: () => {
          Swal.showLoading();
        },
      });
      return;
    }

    Swal.close();
  },
};
