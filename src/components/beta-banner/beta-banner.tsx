import React, { useMemo } from "react";

import { config, locale } from "../../services";
import "./beta-banner.styles.scss";

const { appEnv } = config;
const { manageMyHomeUnderDev, reportIssue, or, suggestFeature } = locale.betaBanner;

export const BetaBanner = (): JSX.Element => {
  const bannerTag = useMemo(() => {
    switch (appEnv) {
      case "dev":
        return { environmentName: "DEVELOPMENT", tagStyle: "phase-tag-development" };
      case "staging":
        return { environmentName: "STAGING", tagStyle: "phase-tag-staging" };
      case "production":
        return { environmentName: "BETA", tagStyle: "phase-tag-prod" };
      default:
        return { environmentName: "DEVELOPMENT", tagStyle: "phase-tag-development" };
    }
  }, []);

  const { environmentName, tagStyle } = bannerTag;

  return (
    <div className="container-max-width lbh-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong
          className={`${tagStyle} govuk-tag govuk-phase-banner__content__tag lbh-tag phase-tag`}
        >
          {environmentName}
        </strong>
        <span className="govuk-phase-banner__text">
          {manageMyHomeUnderDev}{" "}
          <a target="_blank" href="https://forms.gle/5kUGcRYFwwaZWrGs8" rel="noreferrer">
            {reportIssue}
          </a>{" "}
          {or}{" "}
          <a target="_blank" href="https://forms.gle/yM7zCKYZcuVzSXkC6" rel="noreferrer">
            {suggestFeature}
          </a>
        </span>
      </p>
    </div>
  );
};
