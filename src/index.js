// ====== Private ====== //
const TypeStash = (() => {
  const stash = {};
  return {
    use: (type) => {
      if (stash[type]) {
        return stash[type];
      } else {
        this.stash[type] = type;
        return stash[type];
      }
    },
    get: () => stash
  }
})();

// ====== Public ====== //
export default {
  use: (type) => TypeStash.use(type),
  getStash: () => TypeStash.get()
};
