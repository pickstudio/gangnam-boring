interface IDebounce {
  callback: () => void;
  timeout?: number;
}

export const debounce = (callback: () => void, timeout = 500) => {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this);
    }, timeout);
  };
};
