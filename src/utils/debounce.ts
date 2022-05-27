let timer;

export const debounce = (func: Function, timeout = 500) => {
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
};
