import _ from "lodash";

export interface Browser {
  image: string;
  name: string;
}

const imageAssets = //import.meta.glob<{
//   default: string;
// }>("/src/assets/images/browsers/*.{jpg,jpeg,png,svg}", { eager: true });

const fakers = {
  fakeBrowser() {
    const browsers: Array<Browser> = [
      {
        image: imageAssets["/src/assets/images/browsers/chrome.png"],
        name: "Chrome",
      },
      {
        image: imageAssets["/src/assets/images/browsers/edge.png"],
        name: "Edge",
      },
      {
        image: imageAssets["/src/assets/images/browsers/firefox.png"],
        name: "Firefox",
      },
      {
        image: imageAssets["/src/assets/images/browsers/opera.png"],
        name: "Opera",
      },
      {
        image: imageAssets["/src/assets/images/browsers/safari.png"],
        name: "Safari",
      },
    ];

    return _.shuffle(browsers);
  },
};

export default fakers;
