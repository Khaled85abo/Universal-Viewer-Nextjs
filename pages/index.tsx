import React from "react";
import "universalviewer/dist/esm/index.css";
import { UniversalViewer } from "../components/UniversalViewerLazy";

const IndexPage = () => {
  return (
    <UniversalViewer
      manifestId={"https://wellcomelibrary.org/iiif/b18035723/manifest"}
      canvasIndex={0}
      onChangeCanvas={(canvasIndex) => {
        console.log("canvas index changed", canvasIndex);
      }}
      onChangeManifest={(manifest) => {
        console.log("manfest changed", manifest);
      }}
      config={{}}
    />
  );
};

export default IndexPage;
