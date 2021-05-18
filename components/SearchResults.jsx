import PaginationButtons from "./PaginationButtons";

function SearchResults({response}){
    
    return(
            <div className="mx-auto w-full pl-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
                <p className="text-gray-600 mb-5  text-sm">
                About {response.searchInformation?.formattedTotalResults} results
                ({response.searchInformation?.formattedSearchTime} seconds)
                </p>
                {
                    (response.items).map((result)=>(
                        <div key={result.link} className="max-w-xl mb-8">
                            <div className="group">
                                <a href={result.link} className="text-sm ">
                                    {result.formattedUrl}
                                </a>

                                <a href={result.link}>
                                    <h2 className="truncate text-xl text-blue-700 font-medium group-hover:underline">
                                        {result.title}
                                    </h2>
                                </a>
                            </div>
                            <p className="line-clamp-2" >{result.snippet}</p>
                        </div>
                    ))
                }
                <PaginationButtons/>
                
            </div>
    )
}
export default SearchResults;