function Partners() {

    return Page();
}


function Page() {
    return <div>
         <img src={`/images/logo_small.png`} width="60" alt="image not found" />
        <br />
        <h1 style={{fontFamily: "Arial", color: "darkblue"}}>Our Partners</h1>
        <br />
        <Cards />
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

function Card(nome){

    return <div style={{ margin: "10px", color: "darkblue", 
            width: "400px", textAlign: "left",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            backgroundColor: "#f0f8ff",
            padding: "2px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
            <h2>{(nome.nome)}</h2>
        </div>
}

export default Partners;