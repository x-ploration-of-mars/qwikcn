export const hooks = {
  readPackage(pkg) {
    if (pkg.name === "vfile" || pkg.name === "vfile-message") {
      pkg.version = "latest"; // Specify the version you want to use
    }
    return pkg;
  },
};
