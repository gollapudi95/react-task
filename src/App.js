import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';

const App = () => {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');


  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/mralexgray/repos`)
      setAPIData(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(APIData)
    }
  }

  return (
    <center>
      <div style={{position: 'fixed', overflow: 'hidden', top: '10px', width: '100%'}}>
      <input type="search"
        placeholder='Search...'
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      </div>
      <div style={{ marginTop: '3rem' }}>
        {searchInput.length > 1 ? (
          filteredResults.map((item, index) => {
            return (
              <div key={index} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <UsersList
                  name={item.name}
                  image={item.owner.avatar_url}
                  description={item.description}
                  language={item.language}
                  id={item.id}
                />
              </div>
            )
          })
        ) : (
          APIData.map((item, index) => {
            return (
              <div key={index} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <UsersList
                  name={item.name}
                  image={item.owner.avatar_url}
                  description={item.description}
                  language={item.language}
                  id={item.id}
                />
              </div>
            )
          })
        )}
      </div>
    </center>
  )
}
export default App;