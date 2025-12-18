import Footer from '/pages/commom/footer';
import Navigation from '/pages/commom/Navigation';
import Progress from '/components/inProgress';
import s from "/pages/styles.module.css";

function InProgress() {
    return <div className={s.pageContainer}>
        <Navigation />
        <div className={s.mainContent}>
            <Progress />
        </div>
        <Footer />
       </div>
}

export default InProgress;