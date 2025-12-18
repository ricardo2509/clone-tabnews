import s from "/pages/styles.module.css";

function InProgress() {
    return <div className={s.pageContainer}>
        <div className={s.mainContent}>
            <img className={s.centerDiv} src={`/images/Wip00.png`} width="300px" alt="image not found" />
            <h2 className={`${s.hMessage} ${s.hWarningMessage} ${s.centerDiv}`}>This page is under construction!</h2>
        </div>
    </div>
}

export default InProgress;