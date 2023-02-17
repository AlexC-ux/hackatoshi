import React from "react";

import { PageHintWidget } from "widgets/page-hint";

import styles from "./styles.module.scss";

export const PageHintPage: React.FC = () => {
  return (
    <main className={styles["page-hint-page"]}>
      <PageHintWidget />
    </main>
  );
};
