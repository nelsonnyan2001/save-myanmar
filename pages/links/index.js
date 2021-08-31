import React from "react";
import styles from "./Timeline.module.scss";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import LinkItem from "../../components/LinkItem/LinkItem";

const linkItems = [
  {
    title: "AAPP Myanmar",
    link: "https://aappb.org/?lang=en",
  },
  {
    title: "Whats Happening In Myanmar (Twitter Link)",
    link: "https://twitter.com/search?q=%23WhatsHappeningInMyammar",
  },
  {
    title: "LinkTree link of consolidated coup-related resources",
    link: "https://linktr.ee/whatshappeninginmyanmar",
  },
  {
    title: "Frontier Myanmar",
    link: "https://www.frontiermyanmar.net/en/",
  },
  {
    title: "A 'coup diary' of sorts maintained by Mohinga Matters",
    link: "https://mohingamatters.com/freedom-memoirs/",
  },
  {
    title: "I support Myanmar (Additional links provided within)",
    link: "https://www.isupportmyanmar.com/",
  },
];

export default function Index() {
  const router = useRouter();
  return (
    <>
      <div className={styles.backButton} onClick={() => router.push("/")}>
        ←
      </div>
      <h1 className={styles.pageHeader}>
        Useful links for our fight against tyranny.
      </h1>
      <div className="mw-1440">
        <div className="mw-880">
          <div className={styles.linksGrid}>
            {linkItems.map((each) => (
              <Fade>
                <LinkItem title={each.title} link={each.link} />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
