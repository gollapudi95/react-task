import React from 'react';
import './DataTable.css';

const DataTable = ({ products }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Title</th>
            <th>URL</th>
          </tr>
        </thead>
        {/** Looping the list of products */}
        {products && products.length > 0 && products.map((e, i) => {
          return <tbody key={i}>
            <tr>
              <td>{e.id}</td>
              <td><img src={e.thumbnailUrl} alt={e.thumbnailUrl} /></td>
              <td>{e.title}</td>
              <td>{e.url}</td>
            </tr>
          </tbody>
        })}
      </table>
    </>
  )
}
export default DataTable;