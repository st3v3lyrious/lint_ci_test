module.exports = {
  extends: ["peopledoc"],
  env: {
    node: true
  },
  globals: {
    /* Nightwatch */
    settings: "readonly",
    state: "readonly",
    /* jQuery */
    $: true,
    jQuery: true
  },
  rules: {}
};
