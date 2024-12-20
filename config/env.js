import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5000
const jwtsecret = process.env.JSONWEB_SECRET || "mysecret"

export {
    port,
    jwtsecret
}



