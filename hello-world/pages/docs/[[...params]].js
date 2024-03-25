import { useRouter } from "next/router"

function Doc(){
    const router = useRouter()
    const {params=[]}= router.query
    console.log(params)

    if (params.length === 2) {
        return (
            <h1>Viewing the docs for feature {params[0]} and {params[1]}</h1>     //catch all routes
        );
    } else if (params.length === 1) {
        return (
            <h1>Viewing the docs for feature {params[0]}</h1>
        );
    }
    return<h1>Doc of a home page</h1>
}

export default Doc