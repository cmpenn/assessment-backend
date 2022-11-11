let baseURL = "http://localhost:4000/api/"

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () =>{
    axios.get(baseURL + "fortune")
    .then(res =>{
        const fortune = res.data
        alert(fortune)
    })
}

fortuneBtn.addEventListener('click', getFortune)

const wisdomAdder = document.getElementById('wisdom-section')
const nameInput = document.getElementById('name')
const wisdomInput = document.getElementById('wisdom')

const addWisdom = (event) =>{
    event.preventDefault()

    const myBod = {
        name: nameInput.value,
        wisdom: wisdomInput.value
    }

    axios.post(baseURL + "wisdom-adder", myBod)
    .then((response) => {
        let db = response.data
        // for(let i =0; i < db.length; i++){}
        console.log(db)
    })
    .catch((err) => {
        console.log("error")
    })
    nameInput.value = ''
    wisdomInput.value = ''
}

wisdomAdder.addEventListener('submit', addWisdom)

let gandhiBtn = document.getElementById('gandhiButton')

const gandhiQuotes = () =>{
    axios.get(baseURL + 'gandhi')
    .then(res =>{
        let data = res.data
        alert(data)
    })
}

gandhiBtn.addEventListener('click', gandhiQuotes)