const {
  addRemoteFilePolyfillInterface,
} = require("gatsby-plugin-utils/polyfill-remote-file");

exports.sourceNodes = ({ actions }) => {
  actions.createNode({
    id: "photo-1",
    name: "photoA.jpg",
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    placeholderUrl:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=%width%&h=%height%",
    mimeType: "image/jpg",
    filename: "photo-1517849845537.jpg",
    width: 2000,
    height: 2667,
    internal: {
      type: "MyRemoteImage",
      contentDigest: "1234",
    },
  });
};

exports.createSchemaCustomization = ({ actions, schema, store }) => {
  actions.createTypes(
    addRemoteFilePolyfillInterface(
      schema.buildObjectType({
        name: "MyRemoteImage",
        fields: {},
        interfaces: ["Node", "RemoteFile"],
      }),
      {
        schema,
        actions,
        store,
      }
    )
  );

  if (typeof actions.addRemoteFileAllowedUrl === `function`) {
    actions.addRemoteFileAllowedUrl([`https://images.unsplash.com/*`]);
  }
};
