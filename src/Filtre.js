import React, { useRef } from 'react'



const Filtre = ({ searchTerm, handleChange }) => {
    const inputEl = useRef("");
    const getSearchTerm = () => { handleChange(inputEl.current.value) }

    return (
        <div >
            <input
                ref={inputEl}
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={getSearchTerm}
                className="mr-sm-2"
            />
            
               
          
        </div>
    );
}


export default Filtre
