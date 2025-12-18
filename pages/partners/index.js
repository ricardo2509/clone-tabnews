import Footer from '../commom/footer';
import Navigation from '../commom/Navigation';
import s from "/pages/styles.module.css";

function Partners() {
    return <div className={s.pageContainer}>
        <Navigation />
        <div className={s.mainContent}>
            <Cards />
        </div>
        <Footer />
    </div>
}

function Cards() {
    return <div>
        <div style={{ height: "20px" }}>
            <Card nome="Acme Corp" />
            <Card nome="Globex Inc" />
            <Card nome="Soylent Corp" />
            <Card nome="Initech" />
            <Card nome="Umbrella Corp" />
        </div>
    </div>
}

function Card(nome) {

    return <div className={`${s.cardPartner} ${s.card}`}>
        <h2>{(nome.nome)}</h2>
    </div>
}

export default Partners;