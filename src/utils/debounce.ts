let timer;

export const debounce = (func: Function, timeout = 1000) => {
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};
