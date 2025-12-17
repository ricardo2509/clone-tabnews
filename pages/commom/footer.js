import s from "/pages/styles.module.css";

function Footer(){

    return <div className={s.pagefooter1}>
        <div className={s.pagefooter2}>
            <a className={s.aCustom} href="/faq">FAQ</a>
            <a className={s.aCustom} href="/MissionVisionValues">About Us</a>
        </div>
        <div>
            <label style={{fontFamily: "Arial", color: "darkblue", fontSize: "14px"}}>© 2025 RMS Monitoring. All rights reserved.</label>
        </div>
    </div>;
}

export default Footer;