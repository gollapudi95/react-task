import React from 'react'
import './ProductsList.css';

const ProductsList = ({ item, handleCompare, handleRemove }) => {

    return (
        <>
            <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                        <div className="card_image"><img src={item.thumbnailUrl} alt={item.thumbnailUrl} /></div>
                        <div className="card_content">
                            <h2 className="card_title">{item.title}</h2>
                            <p className="card_text">{item.id}</p>
                            
                           <button
                                className="btn card_btn"
                                onClick={() => handleCompare(item.id, item.thumbnailUrl, item.title, item.url)}
                            >
                                Compare
                            </button>

                           : <button
                                className="btn card_btn"
                                onClick={() => handleRemove(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default ProductsList