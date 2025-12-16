
function MissionVisionValues() {
    return <div align="center">
         <img src={`/images/logo_small.png`} width="60" alt="image not found" />
        <br />
        <Cards />
        </div>
}
        

        function Cards() {
    return <div>
        <div style={{ height: "20px" }}>
        <Card title="Mission" width="150px" align="center" />
        <Card text="To promote the comprehensive rehabilitation of patients affected by COVID-19, offering compassionate, welcoming care based on evidence, with commitment, empathy, and positive attitudes that restore autonomy, health, and happiness to each patient’s life"  width="95%" />
        <br />
        <br />
        <Card title="Vision" width="130px" align="center" />
        <Card text="To be a reference in post-COVID-19 rehabilitation, recognized for clinical excellence human-centered care, and the positive impact on patients' physical, emotional, and social recovery, contributing to a healthier and more hopeful society."  width="95%" />
        <br />
        <br />
        <Card title="Values" width="170px" align="center" />
        <Card text="Humanized Care: Placing the patient at the center of all decisions, respecting their history, limitations, and dreams."  width="95%" />
        <Card text="Commitment to Life: Acting with responsibility, ethics, and dedication at every stage of the rehabilitation process."  width="95%" />
        <Card text="Empathy and Respect: Listening, understanding, and providing sensitive support, creating a safe and trustworthy environment."  width="95%" />
        <Card text="Positive Attitude: Encouraging hope, motivation, and well-being as essential components of the treatment."  width="95%" />
        </div>
   </div>
}

function Card(item){

    return <div style={{ margin: "10px", color: "darkblue", 
            width: item.width, 
            textAlign: "center" || "left",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            backgroundColor: "#f0f8ff",
            padding: "2px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
            <h1>{(item.title)}</h1>
            <h2>{(item.text)}</h2>
        </div>
}
export default MissionVisionValues;