import Fuse from "fuse.js";

export default function fuzzySearch(list) {
  const fuse = new Fuse(list, {
    keys: ["name", "description"],
    threshold: 0.3,
    includeScore: true,
  });

  function search(value) {
    console.log(value);
    if (!value.length) {
      return list;
    }
    return fuse.search(value);
  }
  return search;
}
