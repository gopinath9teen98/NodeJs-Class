const users=[
    {
        name:'savanth',
        id:101
    },
    {
        name:'LaliPrasad',
        id:102
    },
    {
        name:'prathik',
        id:103
    }

]
const products=[
    {
        name:'mobile',
        price:1000
    },
    {
        name:'laptop',
        price:2500
    }
]
const handleRequest=(request,response)=>{
 if(request.url=='/'){
     response.end('Home Page')
 }else if(request.url=='/login'){
     response.end('Login Page')
 }else if(request.url=='/users'){
     const userData=JSON.stringify(users)
     response.end(userData)
 }else if( request.url=='/products'){
    const productData=JSON.stringify(products)
    response.end(productData)

 }

}
module.exports={handleRequest}