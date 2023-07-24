import styles from "../styles/Sidebar.module.css";
export default function Sidebar() {
  return (
    <aside className={styles.SidebarCard}>
      <h2> Sponsored Ads</h2>
      <div className={styles.sidebarTag}>
        <p> JavaScript </p>
      </div>
    </aside>
  );
}
