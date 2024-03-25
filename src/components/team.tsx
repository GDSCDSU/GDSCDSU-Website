import styles from "../styles/teamsnav.module.css"

export default function Team(){
    return(
        <>
            <section className="TeamsHeader">
                
            </section>

            <div className={styles.TeamNavigation}>
            <div className={styles.Rectangle196} />
            <div className={styles.Rectangle197} />
                <button className={`${styles.NavButton} ${styles.Founder}`}>Founder</button>
                <button className={`${styles.NavButton} ${styles.Leads}`}>Leads</button>
                <button className={`${styles.NavButton} ${styles.MarketingTeam}`}>Marketing Team</button>
                <button className={`${styles.NavButton} ${styles.OperationsTeam}`}>Operations Team</button>
                <button className={`${styles.NavButton} ${styles.DevelopmentTeam}`}>Development Team</button>
                <button className={`${styles.NavButton} ${styles.ExecutiveCoreTeam}`}>Executive Core Team</button>
            </div>
                       
    </>
    );
}