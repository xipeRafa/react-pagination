import React, { useEffect, useState } from "react";

import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

const App = () => {
    const [coinsData, setCoinsData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(async () => {
        const url =  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
       
        const result = await fetch(url);
        const json = await result.json();
      
        setCoinsData(json); 
        console.log(json)
    }, []);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='app'>
            <h1>CRYPTO GALLERY</h1>

            <CryptoList coinsData={currentPosts} />

            <Pagination
                totalPosts={coinsData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    );
};

export default App;
