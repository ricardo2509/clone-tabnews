import s from "/pages/styles.module.css";
import useDeviceDetect from '/components/useDeviceDetect';

function Home() {
    const isMobile = useDeviceDetect();

    return <div className={s.mainContent}>
        <br />

{/*}        <div>{isMobile ? <p>Versão Mobile</p> : <p>Versão Desktop</p>}</div> */}

        <label className={s.fontTitleDefault}>RMS Monitoring</label>
        <label className={s.fontTextDefault}>We at RMS Monitoring are looking for app developers</label>
        <LinkPartners />
        <br />
        <br />
        <br />

        <label className={s.fontTextDefault}>
            Our focus is on monitoring post-COVID patients, with an emphasis 
            on tracking clinical signs to help us direct physioterapy professionals for home care</label>
        <br />
        <br />
        <br />
        <div>
            <label className={s.fontTextDefault}>Also check our</label>
        </div>
        <div>
            <LinkMissionVisionValues />
         </div>

    </div>;
}

function LinkPartners() {
  return (<a style={{fontFamily: "Arial", color: "darkblue", fontSize: "18px"}}
    href="/partners" >Check our Partners</a>);
}

function LinkMissionVisionValues() {
  return (<a style={{fontFamily: "Arial", color: "darkblue", fontSize: "18px"}}
    href="/MissionVisionValues" >Mission, Vision and Values</a>);
}

export default Home;