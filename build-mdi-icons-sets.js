const util = require('@mdi/util');
const icons = util.getMeta(true);

let sets = {
  full: []
};

for (let icon of icons) {
  const path = "<svg viewBox=\"0 0 24 24\"><path d=\"" + icon.path + "\"></path></svg>";
  const i = {name: icon.name, material: path};
  sets.full.push(i);
  for (let tag of icon.tags || []) {
    const name = tag
                  .toLowerCase()
                  .replace(/\s\/\s/g, "_")
                  .replace(/\s\+\s/g, "_")
                  .replace(/\s/g, "-")
                  .replace(/\//g, "_");
    if (!sets[name]) {
      sets[name] = [];
    }
    sets[name].push(i);
  }
}

for (let setName in sets) {
  util.write("sets/mdi/" + setName + ".json", JSON.stringify(sets[setName], null, 2));
}
