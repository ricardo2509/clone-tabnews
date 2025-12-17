import s from "/pages/styles.module.css";

function Navigation(){

    return <div className={s.pageheader1}>
        <div className={s.pageheader2}>
            <img src={`/images/logo_small.png`} width="60" alt="image not found" />
            <a href="/" style={{margin: "10px"}}>Home</a>
        </div>
        <div className={s.fontFormatMenu}>
            <a href="/partners" style={{margin: "10px"}}>Partners</a>
            <a href="/login/register" style={{margin: "10px"}}>Register</a>
            <a href="/login" style={{margin: "10px"}}>Login</a>
        </div>
    </div>;
}

export default Navigation;
