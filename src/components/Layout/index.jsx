import React, {useState} from 'react'
import {Header} from '../Header';
import {Footer} from '../Footer';
import {Search} from '../Search';
import {useInitialState} from '../../hooks/useInitialState';

export const Layout = ({children}) => {
  const {state, setState, searchProducts} = useInitialState();
  const {products} = state;


  const [searchValue, setSearchValue] = useState()
  const [open, setOpen] = useState(false)


  const filte = products.filter(item => item.nombre == searchValue)

const handleSearch = () =>{
  let listProducts = filte
  searchProducts(listProducts)
  console.log('layout',listProducts);
}



  return (
    <div className={searchValue? `overflow:hidden` : ``}>
      { open ?
        <div className="absolute search-header">
          <Search 
            open={open}
            setOpen={setOpen}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
          />
        </div>
      :
        <></>
      }
    <Header 
      setOpen={setOpen}
      open={open}
    />
        {children}
    <Footer />
    </div>
  )
}
