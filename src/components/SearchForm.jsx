import React from 'react'
import { useGlobalContext } from './context';
 
const SearchForm = () => {
  const {setSearchTerm} =useGlobalContext();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const searchValue=e.target.elements.search.value ;
    if(!searchValue){
      e.target.elements.search.focus()
    }
    setSearchTerm(searchValue)
    e.target.elements.search.value ='';
  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input type="text" name='search' placeholder='Cat' className="form-input search-input"/>
        <button type='submit' className='btn'> Search</button>
      </form>
    </section>
  )
}

export default SearchForm
