import styles from './Navigation.module.css';
const Navigation = () =>{


  return (
    <nav className={`${styles.navigation} container`}>
<div className="logo">
    <img src="/images/logo.avif" alt="logo" width="110px"/>

</div>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>

</ul>
    </nav>
  );
};

export default Navigation;