import React from 'react'
import SearchForm from '../components/search-form';
import CocktailsList from '../components/cocktails-list'

const Home = () => {
  return (
    <div>
      <SearchForm/>
      <CocktailsList/>
    </div>
  )
}

export default Home;