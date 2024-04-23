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
    sizes: "192x192",
    url: `${iconsPath}/android-chrome-192x192.png`
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "256x256",
    url: `${iconsPath}/android-chrome-256x256.png`
  },
  // Apple
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    url: `${iconsPath}/apple-touch-icon-57x57.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    url: `${iconsPath}/apple-touch-icon-60x60.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    url: `${iconsPath}/apple-touch-icon-72x72.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    url: `${iconsPath}/apple-touch-icon-76x76.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    url: `${iconsPath}/apple-touch-icon-114x114.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    url: `${iconsPath}/apple-touch-icon-120x120.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    url: `${iconsPath}/apple-touch-icon-144x144.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    url: `${iconsPath}/apple-touch-icon-152x152.png`
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    url: `${iconsPath}/apple-touch-icon-180x180.png`
  },
  {
    rel: "apple-touch-icon",
    url: `${iconsPath}/apple-touch-icon.png`
  }
];

export default icons;
