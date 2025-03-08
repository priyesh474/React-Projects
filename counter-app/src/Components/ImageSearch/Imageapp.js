import React, { useState } from 'react'
import './imageapp.css'

//API =  https://api.unsplash.com/photos/users/ashbot/likes?page=1&query=${searchValue}&client_id=${API_KEY}

const Imageapp = () => {
  const [search, setSearch] = useState( );
  const [data, setData] = useState([]);

  let API_KEY = "EVyRarXlZhZKqifEbpXeNRl8r5P8yiNzBrra6I5zO9M";
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  // const getData = () => {
  //   apiFunc();
  // }

  const apiFunc = async() => {
    const getApi = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`)
    const jsonData = await getApi.json()
    setData(jsonData.results)
    console.log(jsonData)
  }
  

  return (
    <div>
      <div className="container">
        <div className="card-box">
          <h2>Image Search App</h2>
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder='Search Image' onChange={handleSearch}/>
              <button onClick={apiFunc}>Search</button>
            </div>
          </div>
          <div className="images-wrapper">
            <div className="image-box">
              {
                data.length > 0 ? (
                  data.map((curVal, index) => (
                    // console.log(curVal.urls.full)
                      <img key={index} src={curVal.urls.full} alt={curVal.alt_description}/>
                  ))
                ) : (
                  <p>No data</p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Imageapp
