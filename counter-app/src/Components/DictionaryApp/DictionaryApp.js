import React, { useState } from 'react'
import './DictionaryApp.css'

const DictionaryApp = () => {

    const [search, setSearch] = useState();
    const [data, setData] = useState();

    let styleSheet = {
        'fontSize': '20px',
        'textAlign': "center",
        'margin': '20px 0',
    }

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleClick = async() => {
        const getApi = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        const jsonApi = await getApi.json();
        setData(jsonApi[0])
        console.log(jsonApi);
    }
    
  return (
    <div>
        <div className="container">
            <div className="card-box">
                <h2>Dictionary App</h2>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder='Search Image' onChange={handleSearch}/>
                        <button onClick={handleClick}>Search</button>
                    </div>
                </div>
                <div className="search-data">
                    {
                        data ? 
                        <div className="search-content">
                            <h2 style={styleSheet}>Word : {data.word}</h2>
                            <ul>
                                <li>Part Of Speech : {data.meanings[0].partOfSpeech}</li>
                                <li>Definitions : {data.meanings[0].definitions[0].definition}</li>
                                <li>Synonyms : {data.meanings[0].synonyms[0]}</li>
                                <li>Antonyms : {data.meanings[2].antonyms[0]}</li>
                                <li>Example : {data.meanings[0].definitions[0].example}</li> 
                            </ul>
                        </div>
                        : <p style={styleSheet}>No Data Found</p>
                    }
                    {
                        data ? <a href={data.sourceUrls[0]} target='_blank' className='readmore-btn'>Read More</a>
                        : ""
                    }
                    {/* <a href={data > 0 ? data.sourceUrls[0] : "#"} target='_blank' className='readmore-btn'>Read More</a> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DictionaryApp
