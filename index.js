async function getCep(){
    const cep = document.getElementById("cep").value;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        // console.log(data);
        document.getElementById("log").textContent = data.logradouro
        document.getElementById("bairro").textContent = data.bairro
        document.getElementById("loc").textContent = data.localidade

    } catch (error) {
        alert(error.message)
    }
}

async function getWeather(){
    const lat = document.getElementById("latitude").value;
    const long = document.getElementById("longitude").value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`);
        const data = await response.json();
        // console.log(data);
        const temp = data.hourly.temperature_2m[0]
        document.getElementById("weather").textContent = `${temp}°C`

    } catch (error) {
        alert(error.message)
    }
}