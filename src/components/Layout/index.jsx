import React, {useState} from 'react'
import {Header} from '../Header';
import {Footer} from '../Footer';
import {Search} from '../Search';
import {useInitialState} from '../../hooks/useInitialState';

export const Layout = ({children}) => {
  const {state, setState, searchProducts} = useInitialState();
  const {products} = state;


  const [searchValue, setSearchValue] = useState('')
  const [open, setOpen] = useState(false)


 
//lista filtra los productos segun si incluyen la palabra ingresada en la busqueda
const handleSearch = (searchValue) =>{
  const busqueda =  searchValue.toLowerCase();
  
 //flata pasar item.name por toLowerCase() 
  const lista = products.filter(item => item.name.includes(busqueda))
 
  state.searchPro = [];
  searchProducts(lista)

  setOpen(false)
}

console.log(state);

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
