import React from "react";
import Layout from '../components/layout';
import me from '../../static/img/me.jpg';
import styles from "./index.module.css";

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <h2>Lena Eivy</h2>
      <p>I like to do lots of things, but mostly build websites.</p>
      <p>this is me</p>
      <img className={styles.img} src={me} alt="" />
    </div>
  </Layout>
)