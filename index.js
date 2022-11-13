console.log("Attempting to clone");

try {
  const clone = document.cloneNode(true);
} catch (e) {
  console.log("failed to clone document");
  console.error(e);
}
