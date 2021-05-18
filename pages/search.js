import Head from "next/head"
import { useRouter } from "next/router"
import Header from "../components/Header"
import SearchResults from "../components/SearchResults";
import Response from "../Response"

function Search({results}){
    
    const router=useRouter();
    
    
   
    return(
        <div>
        <Head>
        <title>{router.query.term} - Google Search</title>
        </Head>

            <Header/>

            <SearchResults response={results}/>
        </div>
    )
}
export default Search;
export async function getServerSideProps(context){
    const useDummyData=false;
    
    const startIndex=context.query.start || "0"
    const data=useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
    const val=await data.json();
    console.log(val)
    return{
        
        props:{
            results:val,
        },
    }
} 
