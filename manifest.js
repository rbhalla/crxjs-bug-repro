export default {
  manifest_version: 3,
  name: "CRXJS React Vite Example",
  version: "1.0.0",
  action: {
    default_popup: "index.html",
  },
  web_accessible_resources: [
    {
      resources: ["src/pages/options/index.html", "src/pages/options/index.js"],
      matches: ["*://*/*"],
    },
  ],
  options_page: "src/pages/options/index.html",
};
