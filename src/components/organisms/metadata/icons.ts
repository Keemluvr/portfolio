const iconsPath = `${process.env.INITIAL_PATH_URL}/favicon`;

const icons = [
  {
    rel: "icon",
    url: `${iconsPath}/favicon.ico`
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    url: `${iconsPath}/favicon-16x16.png`
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    url: `${iconsPath}/favicon-32x32.png`
  },
  // Android / Chrome
  {
    rel: "icon",
    type: "image/png",
    sizes: "72x72",
    url: `${iconsPath}/android-chrome-72x72.png`
  },
  // Apple
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    url: `${iconsPath}/apple-touch-icon-76x76-precomposed.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    url: `${iconsPath}/apple-touch-icon-76x76.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    url: `${iconsPath}/apple-touch-icon-72x72-precomposed.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    url: `${iconsPath}/apple-touch-icon-72x72.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    url: `${iconsPath}/apple-touch-icon-60x60-precomposed.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    url: `${iconsPath}/apple-touch-icon-60x60.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    url: `${iconsPath}/apple-touch-icon-57x57-precomposed.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    url: `${iconsPath}/apple-touch-icon-57x57.png`
  },
  {
    rel: "apple-touch-icon",
    url: `${iconsPath}/apple-touch-icon-precomposed.png`
  },
  {
    rel: "apple-touch-icon",
    url: `${iconsPath}/apple-touch-icon.png`
  }
];

export default icons;
