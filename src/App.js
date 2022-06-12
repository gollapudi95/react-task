import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DataTable from './components/DataTable';
import ProductsList from './components/ProductsList';

const App = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([{ id: '', thumbnailUrl: '', title: '',url: '' }]);
  const [isLoading, setIsLoading] = useState(false);

  //Fetch the list of photos
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const photos = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10`)
      setData(photos.data);
      setIsLoading(false);
    }
    catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCompare = (id, thumbnailUrl, title, url) => {
    setProducts([...products, { id, thumbnailUrl, title, url }])
  }

  const handleRemove = (id) => {
    const filteredItems = products.filter(item => item.id !== id)
    setProducts(filteredItems)
  }


  return (
    <>
      {isLoading ?
        <center>Loading...</center> :
        <>
          <div className="main">
            {data.map((item, index) => {
              return <div key={index}><ProductsList item={item} handleCompare={handleCompare} handleRemove={handleRemove} /></div>;
            })}
          </div>
          <DataTable products={products} />
        </>
      }
    </>
  )
}

export default App;