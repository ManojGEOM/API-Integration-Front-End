import React from 'react';
// import Frontend from "./pages/Frontend";
import { useEffect, useState } from 'react';
const Websearch = (props) => {
  // const search = (s) => {
  //     props.setfilters({
  //       s
  //     })
  // }
  const [search , setSearch  ] = useState("");

    return (
      <>
      <div className="col-md-12 mb-4 input-group">
        <input type="text" value={search} className = "form-control" placeholder="search"
           onChange={e => setSearch(e.target.value)}
        />
        
      </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {props.wsearch.map(wwserach => {
            return(
              wwserach.name.toLowerCase().includes(search.toLowerCase())?
              <div className="col">
              <div className="card shadow-sm">
               <img src={wwserach.cover_image} height={200}/>
                <div className="card-body">
                  <p className="card-text">{wwserach.name}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{wwserach.description}</small>
                  </div>
                </div>
              </div>
            </div>: null 
            )
          })}
        
    </div>
    </>
    );
};
export default Websearch;