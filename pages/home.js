import s from "/pages/styles.module.css";

function Home() {

    return <div className={s.mainContent}>
        <br />
        <h1>RMS Monitoring</h1>
        <h2>We at RMS Monitoring are looking for app developers</h2>
        <LinkPartners />
        <br />
        <h2 style={{margin: "auto", width:"75%"}}>
            Our focus is on monitoring post-COVID patients, with an emphasis 
            on tracking clinical signs to help us direct physioterapy professionals for home care</h2>
        <br />
        <br />
        <div>
            <h2>Also check our</h2><LinkMissionVisionValues />
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