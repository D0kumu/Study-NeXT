import { useRouter } from "next/router";
 function review(){
    const router = useRouter()
    const {productid, reviewid} = router.query
    return(
        <h1>Review{reviewid} for product{productid}</h1>
    )
 }
 export default review