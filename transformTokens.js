import StyleDictionary from "style-dictionary";

const config = {
  source: ["tokens/*.json"],
  platforms: {
    css: {
      transformGroup: "custom/css",
      buildPath: "build/css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          filter: "validToken",
          options: {
            showFileHeader: false,
          },
        },
      ],
    },
  },
};
const baseConfig = JSON.stringify(config);

StyleDictionary.registerTransform({
  name: "size/px",
  type: "value",
  matcher: (token) => {
    return (
      (token.unit === "pixel" || token.type === "dimension") &&
      token.value !== 0
    );
  },
  transformer: (token) => {
    return `${token.value}px`;
  },
});

StyleDictionary.registerTransform({
  name: "size/percent",
  type: "value",
  matcher: (token) => {
    return token.unit === "percent" && token.value !== 0;
  },
  transformer: (token) => {
    return `${token.value}%`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "custom/css",
  transforms: StyleDictionary.transformGroup["css"].concat([
    "size/px",
    "size/percent",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/less",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/px",
    "size/percent",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/scss",
  transforms: StyleDictionary.transformGroup["less"].concat([
    "size/px",
    "size/percent",
  ]),
});

StyleDictionary.registerFilter({
  name: "validToken",
  matcher: function (token) {
    return ["dimension", "string", "number", "color"].includes(token.type);
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig);

StyleDictionaryExtended.buildAllPlatforms();
