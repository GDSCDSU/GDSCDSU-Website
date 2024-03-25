// Founder.js

import styles from './Founder.module.css'; // Import the CSS module

export default function Founder() {
  return (
    <>
      <div className={styles.container}>
        <p>Founder</p>
      </div>

      <div className={styles.card}>
        <img />
        <h2>Syed Ateeq</h2>
        <p>GDSC@DSU Lead 2020-2021 & Founder</p>
        <p>As a founder, he led over 100 students in coding bootcamps, tech conferences, and workshops. He also conducted more than 200 interviews each year to build a top-notch team of 10, whose talents have flourished at DSU. Moreover, he successfully secured sponsorship from the NYC-based startup Datacamp. His collaboration with Google injected a profound sense of excellence into these initiatives, paving the way for exponential career growth for those under his mentorship.</p>
      </div>

      <div className={styles.group}>
        <div className={styles.icon}>
          <div className={styles.Rectangle} />
          <div className={styles.Vector} />
        </div>
        <div className={styles.icon}>
          <div className={styles.Rectangle} />
          <div className={styles.Vector} />
        </div>
        <div className={styles.icon}>
          <div className={styles.Email}>
            <div className={styles.Vector} />
            <div className={styles.Vector} />
          </div>
        </div>
        <div className={styles.icon}>
          <div className={styles.Rectangle} />
          <div className={styles.Vector} />
        </div>
      </div>


      <div className={styles.container}>
        <p>Faculty Advisor</p>
      </div>

      <div className={styles.card}>
        <img />
        <h2>Dr. Ahmed Saeed Minhas</h2>
        <p>Brigadier, Professor and Pro Vice Chancellor @ DSU</p>
        <p>Our club owes much of its success to the steadfast support of our faculty advisor, Pro-Vice-Chancellor Dr. Ahmad Saeed Minhas. His unwavering dedication and guidance have been pivotal in shaping our initiatives. Dr. Minhas's commitment to our club's mission has played a crucial role in our growth and influence within the university community. We are immensely grateful for his leadership and mentorship, which have been invaluable assets on our journey towards excellence.</p>
      </div>

      <div className={styles.group}>
        <div className={styles.icon}>
          <div className={styles.Rectangle} />
          <div className={styles.Vector} />
        </div>
        <div className={styles.icon}>
          <div className={styles.Rectangle} />
          <div className={styles.Vector} />
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.MaskGroup}>
          <div className={styles.Ellipse44} />
          <img className="1" />
          <img className="Img92921" />
        </div>
      </div>
    </>
    </>
  );
}
