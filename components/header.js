import utilStyles from '../styles/utils.module.css'
import AddEntry from '../components/addentry';

const name = 'Welcome to My Sample Blog!!!'

export default function Header() {
  const styles = {
    display: "flex",
    flexDirection: "row",
    textAlign: "center"
  };
  return (
    <header>
      <div style={styles}>
        <h1 className={utilStyles.heading2Xl} style={{ width: "90%", float: "left", padding: "20px"}}>{name}</h1>
        
          <AddEntry/>
        
      </div>
    </header>
  );
}
