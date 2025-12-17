import Home from './home';
import Navigation from './commom/Navigation';
import Footer from './commom/footer';
import s from "/pages/styles.module.css";

function Index() {

    return <div className={s.pageContainer}>            
                <Navigation />
                <div>
                    <Home />
                </div>
                <Footer />
            </div>;
}
export default Index;
