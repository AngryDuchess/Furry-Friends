export const shuffleArray = (array) => {
    /*  implementing Fisher-Yates algorithm rather than
      using .sort() method */
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = array[i];
      array[j] = temp;
    }
    return array;
  };
  