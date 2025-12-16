
function Home() {
    return <div align="center">
        <img src={`/images/logo_small.png`} width="60" alt="image not found" />
        <br />
        <h1>RMS Monitoring</h1><h2>We at RMS Monitoring are looking for app developers</h2>
        <Navegacao />
        <br />
        <h2>Our focus is on monitoring post-COVID patients, with an emphasis on tracking</h2>
        <h2>clinical signs to help us direct physioterapy professionals for home care</h2>
    </div>;
}

function Navegacao() {
  return (<a style={{fontFamily: "Arial", color: "darkblue", fontSize: "18px"}}
    href="/partners" >Check our Partners</a>);
}

export default Home;
