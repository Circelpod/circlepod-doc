import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Next Podcast',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Next Generation Podcast with NFT and Solana, create more interactivity and entertainment.
      </>
    ),
  },
  {
    title: 'Focus on Creative',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Connect fans and value through blockchain technology, and create a good copyright and subscription ecosystem through data and AI.
      </>
    ),
  },
  {
    title: 'Solana Ecosystem',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Solana is a fast, secure, and censorship resistant blockchain providing the open infrastructure required for global adoption.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
