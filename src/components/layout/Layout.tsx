import React from "react";
import PropTypes from "prop-types";

import styles from "./layout.module.scss";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => (
  <section className={styles.layout}>
    <header>Marciano Schildmeijer</header>
    {children}
  </section>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
