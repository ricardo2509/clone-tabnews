import s from "/pages/styles.module.css";

function Navigation(){

    return <div className={s.pageheader1}>
        <div className={s.pageheader2}>
            <div className={s.roundedBox}>
                <img style={{float: "right", position: "relative"}} src={`/images/logo_small.png`} width="60" alt="image not found" />
            </div>
            <a href="/" style={{margin: "10px"}}>Home</a>
        </div>
        <div className={s.fontFormatMenu}>
            <a href="/partners" style={{margin: "10px"}}>Partners</a>
            <a href="/commom/inProgress" style={{margin: "10px"}}>Register</a>
            <a href="/commom/inProgress" style={{margin: "10px"}}>Login</a>
        </div>
    </div>;
}

export default Navigation;
