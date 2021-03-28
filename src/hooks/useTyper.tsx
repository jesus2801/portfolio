const useTyper = (typerTexts: string[], p: HTMLParagraphElement) => {
  const arrayLength = typerTexts.length - 1;
  let arrayIndex = 0;

  let i = 0;
  let textLength = typerTexts[arrayIndex].length - 1;

  const typer = () => {
    p.innerText = '';

    const interval = setInterval(() => {
      p.innerText += typerTexts[arrayIndex][i];
      if (i === textLength) {
        clearInterval(interval);
        arrayIndex = arrayLength === arrayIndex ? 0 : arrayIndex + 1;
        i = 0;
        textLength = typerTexts[arrayIndex].length - 1;
        setTimeout(() => typer(), 3700);
        return;
      }
      i++;
    }, 100);
  };

  return typer;
};

export default useTyper;
