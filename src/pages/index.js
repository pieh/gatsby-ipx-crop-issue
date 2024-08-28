import { graphql } from "gatsby";
import React from "react";

export default function Home({ data }) {
  return (
    <div>
      <img src={data.myRemoteImage.top.src} />
      <img src={data.myRemoteImage.bottom.src} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export const query = graphql`
  {
    myRemoteImage {
      top: resize(width: 100, height: 50, cropFocus: TOP) {
        src
      }
      bottom: resize(width: 101, height: 51, cropFocus: BOTTOM) {
        src
      }
    }
  }
`;
