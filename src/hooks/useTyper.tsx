const useTyper = (typerTexts: string[], p: HTMLSpanElement, bar: HTMLSpanElement): void => {
  //array length minus one
  const arrayLength = typerTexts.length - 1;
  // index of the array to start with
  let arrayIndex = 0;

  //variable that keeps track
  let count = 0;
  //actual text length minus one
  let textLength = typerTexts[arrayIndex].length - 1;

  const typer = () => {
    //clear the text
    p.innerText = '';

    //set interval
    const interval = setInterval(() => {
      //add letter
      p.innerText = typerTexts[arrayIndex].slice(0, count + 1);

      //if the word is finished printing
      if (count === textLength) {
        //clear the interval
        clearInterval(interval);
        //set the next word
        arrayIndex = arrayLength === arrayIndex ? 0 : arrayIndex + 1;
        //reset count
        count = 0;
        //reset text length
        textLength = typerTexts[arrayIndex].length - 1;
        //init interval after 3700ms
        setTimeout(() => typer(), 3700);
        return;
      }

      //if the word has not finished printing increase the count
      count++;
    }, 100);
  };

  //init typer
  typer();

  //init bar interval
  setInterval(() => bar.classList.toggle('ocult'), 300);
};

export default useTyper;
