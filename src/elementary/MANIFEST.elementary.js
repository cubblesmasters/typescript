const assert = require('assert');

module.exports = (webpackageName) => {
  assert.ok(webpackageName, 'Expected "webpackageName" to be defined.')
  return {
    description: "A simple elementary component.",
    runnables: [
      {
        "name": "SHOWROOM",
        "path": "/SHOWROOM.html"
      }
    ],    
    slots: [
      { slotId: "inputText", type: "string", direction: ["input"], value: "this is a sample text" },
      { slotId: "outputText", type: "string", direction: ["output"] }
    ],
    resources: [
      "element.html"
    ],
    dependencies: [
      { webpackageId: "cubx.core.rte@3.0.0", artifactId: "cubxcomponent" }
    ]
  };
};
