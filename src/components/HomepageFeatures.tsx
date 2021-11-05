import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({
      id: "homepage.ietm.title.1",
      message: "Next Media",
    }),
    Svg: require("../../static/img/img-next-podacst.svg").default,
    description: (
      <>
        <Translate id="homepage.item.1">
        Next Generation media protocol #solana, #nft, #Metaverse ecosystem, special media protocol guide players to experience the new world.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: "homepage.ietm.title.2",
      message: "Focus on Creative",
    }),
    Svg: require("../../static/img/img-focus-on-creative.svg").default,
    description: (
      <>
        <Translate id="homepage.item.2">
          Connect fans and value through blockchain technology, and create a
          good copyright and subscription ecosystem through data and AI.
        </Translate>
      </>
    ),
  },
  {
    title: translate({
      id: "homepage.ietm.title.3",
      message: "Solana Ecosystem",
    }),
    Svg: require("../../static/img/img-solana-ecosystem@3x.svg").default,
    description: (
      <>
        <Translate id="homepage.item.3">
          Solana is a fast, secure, and censorship resistant blockchain
          providing the open infrastructure required for global adoption.
        </Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
