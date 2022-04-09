import * as React from "react";
import Container from "./Container";
import Icon from "./ui/Icon";
import styles from "../styles/SiteFooter.module.scss";

export const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main}>
          <aside className={styles.aside}>
            <div className="flex aic">
              <span className="text-xxl flex aic">
                <Icon name={"collection"} className="mr-4" />
                <span className="font-normal">Dash</span>
                <b>Board</b>
              </span>
            </div>
            <p className="mb-0">
              Registered in England & Wales <br />
              Company Number 000000
            </p>
          </aside>

          <ul>
            <li>
              <h6>Contact</h6>
            </li>
            <li>
              <address>
                123 Fake Street <br />
                Fake Business Park <br />
                Manchester <br />
                M00 000
              </address>
            </li>
          </ul>

          <ul>
            <li>
              <h6>Follow Us</h6>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>

          <ul>
            <li>
              <h6>Useful Links</h6>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">My Content</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.bar}>
          <ul>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};
