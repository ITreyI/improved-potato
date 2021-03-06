const express = require('express')
const { guardarScore, atualizarScore } = require('./db')
const app = express()
const port = process.env.PORT ?? 3001

app.use(express.json())


app.post('/main.js', (req, res) => {
  if (typeof req.body.user_input === 'undefined') {
    // The parameter is missing, example response...
    res.status(400).json({ error: 'missing parameter bar', data: null }); // Only an  example
    return;
  }

  let user = req.body.user_input;

  res.status(200).json({ error: null, data: user }); // We received the value and only to show the example, returns it in a json within the key 'data'

});

/* app.post("/user", async (req, res) => { //interface2
    const sessions = await readAllSessions()
    const token = req.header("authorization");

    if (token === undefined) {
        res.status(401).json({ message: userError.tokenNaoRecebido })
    }

    const session = sessions.find(s => s.token.toString() === token);

    if (!session) {
        res.status(403).json({ message: userError.tokenError })
    }

    else {
        const user = sessions.find(s => s.token.toString() === token).user
        res.status(200).json({
            _id: token
        })
    }
})
//gamereder.js
//score
app.get("/user/:score", async (req, res) => {
 const score = await AssociaUserAoScore() // este await é q faz a asociação do fetch através da função noutros ficheiros?

 const { user, score } = req.params

    //const token = req.header("authorization");

    //if (token === undefined) {
      //  res.status(401).json({ message: userError.tokenNaoRecebido })
    //}

    //const score = score.find(s => s.token.toString() === token);

    //if (!session) {
      //  res.status(403).json({ message: userError.tokenError })
    //}

    //else {
      //  const user = score.find(s => s.token.toString() === token).user
        //res.status(200).json({
          //  sameUser: token === id
        //})
    //}

//}) */
//atualizar o score
app.patch("/user/:score", (req, res) => {
  const { user } = req.body;
  const { score } = req.params;
  res.atualizarScore(user, score)

})

//para obter todos os scores - falta o score ou leaderboard no gamerender
//app.get("/score/:score",(req,res) => {
//  const {score} = req.params;
// if(score[0] > 500){ //500 é o numero maximo de pontos no nivel
//    res.status(200).json({Highscore})
//

app.post("/score", (req, res) => {
  const { user, score } = req.body;
  res.guardarScore(user, score)
})

app.listen(port, () => console.log(`À escuta em http://localhost:${port}`))


//state
//fetch
//ligar a um endpoint
//endpoint guarda na base de dados
