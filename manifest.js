export default {
  manifest_version: 3,
  name: "CRXJS React Vite Example",
  version: "1.0.0",
  action: {
    default_popup: "index.html",
  },
  content_scripts: [
    {
      matches: ["*://*/*"],
      js: ["src/main.tsx"],
    },
  ],
};
