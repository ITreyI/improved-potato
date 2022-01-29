const { MongoClient } = require("mongodb")
const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"

let client
async function connectToMongo() {
    try {
        if (!client) client = await MongoClient.connect(URL)
        return client
    } catch (err) {
        console.log("Erro na ligação ao MongoDB", err)
    }
}

async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}
async function guardarScore(user,score){
    const scores = await getMongoCollection("improved-potato","scores") //obter coleção dos scores
    return scores.insertOne({user,score})
}


async function atualizarScore(score){
    const scoreAtualizado = await getMongoCollection("improved-potato", "scores")
    return scoreAtualizado.save({score})
}   


/*async function savePalette(palette) {
    const collection = await getMongoCollection("Coolors", "palettes")
    const result = await collection.insertOne(palette)
    return result.insertedId
}

async function getPaletteByCode(code) {
    const collection = await getMongoCollection("Coolors", "palettes")
    const result = await collection.findOne({code: code})
    return result
}
*/
module.exports = {guardarScore, atualizarScore }