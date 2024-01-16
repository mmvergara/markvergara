export const classNameJoin = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");

export const wait = async (seconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};
