const wisdomOwned = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) =>{
        const fortunes = ["A passionate new romance will appear in your life when you least expect it.", "run", "Don't ever, for any reason, do anything for anyone, for any reason, ever, no matter what. No matter where. Or who, or who you are with, or where you are going or... or where you've been... ever. For any reason, whatsoever.", "Give 100%. 110% is impossible. Only idiots recommend that.", "If any of you need anything at all, too bad. Deal with your problems yourselves, like adults.","Give a man a fish and feed him for a day. Dont teach a man to fish…and feed yourself. Hes a grown man. And fishings not that hard."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    addWisdom: (req,res) =>{
        const {name,wisdom} = req.body
        

        let highestId = 0
        for(let i = 0; i < wisdomOwned.length; i++){
            if(wisdomOwned[i].id > highestId){
                highestId = wisdomOwned[i].id
            }
        }
        let newWisdom = {
            name,
            wisdom,
            id:highestId,
        }
        wisdomOwned.push(newWisdom)
        console.log(wisdomOwned)
        res.status(200).send(wisdomOwned)
    },
    gandhiQuotes: (req, res) =>{
        const gandhi = ['The future depends on what we do in the present', 'Its easy to stand in the crowd but it takes courage to stand alone.', 'Our greatest ability as humans is not to change the world, but to change ourselves.']

        let randomIndex = Math.floor(Math.random() * gandhi.length)
        let randomGandhi = gandhi[randomIndex]

        res.status(200).send(randomGandhi)
    }
    
}
