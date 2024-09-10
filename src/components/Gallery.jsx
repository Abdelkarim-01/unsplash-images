import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useGlobalContext } from './context';

const url='https://api.unsplash.com/search/photos?client_id=GTa6Vw3IGmDzZGbIXtOWQtXzAI1e9zDdl5l9t_KYuKc' ;
// const url='https://api.unsplash.com/photos?client_id=GTa6Vw3IGmDzZGbIXtOWQtXzAI1e9zDdl5l9t_KYuKc' ;
const Gallery = () => {
  const {searchTerm}=useGlobalContext();
  const {data,isError,error,isLoading}=useQuery({
    queryKey:['images',searchTerm],
    queryFn:async ()=>{
      const {data} = await axios.get(`${url}&query=${searchTerm}`);
      console.log(data.results) ;
      return data.results ;
    }
  })

  if(isLoading){
    return (
      <section className='image-container'>
        <h4>Loading... plz wait a second</h4>
      </section>
    )
  }
  if(isError){
    return (
      <section className='image-container'>
        <h4>There was an error ... </h4>
        <p>{error.message}</p>
      </section>
    )
  }
  if(data.length < 1 ){
    return (
      <section className='image-container'>
        <h4>No results found ... </h4>
      </section>
    )
  }

  return (
    <section className='image-container'>
      {
        isLoading?'is loading plz wait a second ' :
        data.map(
          (image)=>{
          return (
              <img src={image.urls.regular} alt={image.alt_description} key={image.id} className='img'/>
          )
          }
        )
      }
    </section>
  )
}

export default Gallery
