export const debounce = (fn: () => void, delay: number) => {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
};
