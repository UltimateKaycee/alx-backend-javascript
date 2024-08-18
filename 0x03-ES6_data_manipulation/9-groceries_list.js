const theList = () => {
  const out = new Map();
  const ob = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(ob)) {
    out.set(key, ob[key]);
  }
  return out;
};

export default theList;
