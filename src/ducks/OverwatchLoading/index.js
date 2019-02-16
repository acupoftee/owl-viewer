import React from "react";
import './styles.scss'

const OverwatchLoading = () => {
  return (
    <svg
      className="hex-loader"
      viewBox="0 0 62 57"
      version="1.1"
      x="0px"
      y="0px"
      width="62px"
      height="57px"
    >
      <path
        className="hex-loader__tl"
        d="M 19.6592 1.2136 C 20.1596 0.9288 20.9708 0.9288 21.4712 1.2136 L 28.7897 5.3789 C 29.29 5.6637 29.6956 6.3599 29.6956 6.9339 L 29.6956 15.2486 C 29.6956 15.8226 29.29 16.5187 28.7897 16.8035 L 21.4712 20.9689 C 20.9708 21.2537 20.1596 21.2537 19.6592 20.9689 L 12.3408 16.8035 C 11.8404 16.5187 11.4348 15.8226 11.4348 15.2486 L 11.4348 6.9339 C 11.4348 6.3599 11.8404 5.6637 12.3408 5.3789 L 19.6592 1.2136 Z"
      />
      <path
        className="hex-loader__tr"
        d="M 40.5288 1.2136 C 41.0292 0.9288 41.8404 0.9288 42.3408 1.2136 L 49.6592 5.3789 C 50.1596 5.6637 50.5652 6.3599 50.5652 6.9339 L 50.5652 15.2486 C 50.5652 15.8226 50.1596 16.5187 49.6592 16.8035 L 42.3408 20.9689 C 41.8404 21.2537 41.0292 21.2537 40.5288 20.9689 L 33.2103 16.8035 C 32.71 16.5187 32.3044 15.8226 32.3044 15.2486 L 32.3044 6.9339 C 32.3044 6.3599 32.71 5.6637 33.2103 5.3789 L 40.5288 1.2136 Z"
      />
      <path
        className="hex-loader__l"
        d="M 9.2244 18.6224 C 9.7248 18.3376 10.5361 18.3376 11.0364 18.6224 L 18.3549 22.7877 C 18.8553 23.0725 19.2609 23.7687 19.2609 24.3427 L 19.2609 32.6573 C 19.2609 33.2313 18.8553 33.9275 18.3549 34.2123 L 11.0364 38.3776 C 10.5361 38.6624 9.7248 38.6624 9.2244 38.3776 L 1.906 34.2123 C 1.4056 33.9275 1 33.2313 1 32.6573 L 1 24.3427 C 1 23.7687 1.4056 23.0725 1.906 22.7877 L 9.2244 18.6224 Z"
      />
      <path
        className="hex-loader__c"
        d="M 30.094 18.6224 C 30.5944 18.3376 31.4056 18.3376 31.906 18.6224 L 39.2244 22.7877 C 39.7248 23.0725 40.1304 23.7687 40.1304 24.3427 L 40.1304 32.6573 C 40.1304 33.2313 39.7248 33.9275 39.2244 34.2123 L 31.906 38.3776 C 31.4056 38.6624 30.5944 38.6624 30.094 38.3776 L 22.7756 34.2123 C 22.2752 33.9275 21.8696 33.2313 21.8696 32.6573 L 21.8696 24.3427 C 21.8696 23.7687 22.2752 23.0725 22.7756 22.7877 L 30.094 18.6224 Z"
      />
      <path
        className="hex-loader__r"
        d="M 50.9636 18.6224 C 51.4639 18.3376 52.2752 18.3376 52.7756 18.6224 L 60.094 22.7877 C 60.5944 23.0725 61 23.7687 61 24.3427 L 61 32.6573 C 61 33.2313 60.5944 33.9275 60.094 34.2123 L 52.7756 38.3776 C 52.2752 38.6624 51.4639 38.6624 50.9636 38.3776 L 43.6451 34.2123 C 43.1447 33.9275 42.7391 33.2313 42.7391 32.6573 L 42.7391 24.3427 C 42.7391 23.7687 43.1447 23.0725 43.6451 22.7877 L 50.9636 18.6224 Z"
      />
      <path
        className="hex-loader__bl"
        d="M 19.6592 36.0311 C 20.1596 35.7463 20.9708 35.7463 21.4712 36.0311 L 28.7897 40.1965 C 29.29 40.4813 29.6956 41.1774 29.6956 41.7514 L 29.6956 50.0661 C 29.6956 50.6401 29.29 51.3362 28.7897 51.6211 L 21.4712 55.7864 C 20.9708 56.0712 20.1596 56.0712 19.6592 55.7864 L 12.3408 51.6211 C 11.8404 51.3362 11.4348 50.6401 11.4348 50.0661 L 11.4348 41.7514 C 11.4348 41.1774 11.8404 40.4813 12.3408 40.1965 L 19.6592 36.0311 Z"
      />
      <path
        className="hex-loader__br"
        d="M 40.5288 36.0311 C 41.0292 35.7463 41.8404 35.7463 42.3408 36.0311 L 49.6592 40.1965 C 50.1596 40.4813 50.5652 41.1774 50.5652 41.7514 L 50.5652 50.0661 C 50.5652 50.6401 50.1596 51.3362 49.6592 51.6211 L 42.3408 55.7864 C 41.8404 56.0712 41.0292 56.0712 40.5288 55.7864 L 33.2103 51.6211 C 32.71 51.3362 32.3044 50.6401 32.3044 50.0661 L 32.3044 41.7514 C 32.3044 41.1774 32.71 40.4813 33.2103 40.1965 L 40.5288 36.0311 Z"
      />
    </svg>
  );
};

export default OverwatchLoading;
