import config from "./config"
const   urls={
    addProduct:`${config.port}/products/productsave`,
    getProducts:`${config.port}/products/getAllProducts`,
    login:`${config.port}/login`,
    register:`${config.port}/register`
}

export default urls