let baseURL = "http://localhost:4000/api/"

const wisdomCallback = ({body: wisdomOwned}) => displayWisdom(wisdomOwned)

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
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener('click', getFortune)

let wisdomAdder = document.getElementById('wisdom-section')

const addWisdom = (body) =>{
    axios.post(baseURL + '/wisdom-adder', body)
    .then(wisdomCallback)
}

wisdomAdder.addEventListener('click', addWisdom)

let gandhiBtn = document.getElementById('gandhiButton')

const gandhiQuotes = () =>{
    axios.get(baseURL + 'gandhi')
    .then(res =>{
        let data = res.data
        alert(data)
    })
}

gandhiBtn.addEventListener('click', gandhiQuotes)