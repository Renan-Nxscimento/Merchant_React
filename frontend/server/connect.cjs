const { MongoClient } = require("mongodb")
require("dotenv").config({path: "./config.env"})

async function main() {

    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)

    try {
        await client.connect()
        const collections = await client.db("merc-api").collections()
        collections.forEach((collection) => console.log(collection.dropSearchIndex.namespace.collection))
    } catch (error) {
        console.error(error)
    } finally {
        await client.close()
    }

}

main()

//cASjDYf7cOu9ZtM