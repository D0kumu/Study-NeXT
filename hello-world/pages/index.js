import Link from "next/link"                  //Link component navigation
import { useRouter } from "next/router"

function Home(){
    const router = useRouter()
    const handleClick =()=>{
        console.log('place your order')
        router.push('/product')
    }
    return(
      <div>                         
   <h1>Home Page</h1>
      <button onClick={handleClick}>
        Place order
      </button>
       </div> 
    ) 
}
export default  Home