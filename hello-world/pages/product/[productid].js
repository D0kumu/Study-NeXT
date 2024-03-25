
import { useRouter } from "next/router"


// function productDetails(){
//     const router =useRouter()
//     const prodectid=router.query.productid
//     return(
//         <h1>Details about the product{prodectid}</h1>
//     )
// }
// export default productDetails
function product({product}){
    const router = useRouter()
    if(router.isFallback){
        return<div>Loading...</div>
    }
    return(
        <div>
            <h2>
                {product.id}{product.title}{product.price}
            </h2>
            <p>{product.description}</p>
            <hr/>
        </div>
    )

}
export default product

export async function getStaticProps(context){
    const {params} = context;
    console.log('Generating/ Regenerating productList')
    const response = await fetch(`http://localhost:4000/products/${params.productid}`);
    const data = await response.json();
    return{
        props:{
            product:data
        },
        revalidate:30,
    }
}
export async function getStaticPaths(){
    return{
        paths:[{params:{productid:'1'}}],
        fallback:true
    }
}