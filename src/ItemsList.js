import React from 'react'

const ItemsList=({ list, deleteHandler, handleComplete, handleAll, handleActive, isChecked, handleCheck })=> {

    return (
        <>
            {list.map((item, index) =>
                <div key={index} className='list-items'>
                    <input type="checkbox" className='checkbox' value={item} onChange={handleCheck} />&nbsp;<h4 className={isChecked(item)}>{item} &nbsp;
                <button className='delete-btn' onClick={() => deleteHandler(index)}>Delete</button></h4>
                </div>
            )
            }
            <br />
            {list.length > 0 &&
                <div className='button'>Show: <button onClick={handleAll}>All</button><button onClick={handleActive}>Active</button><button onClick={handleComplete}>Completed</button></div>}
        </>
    )
}

export default ItemsList