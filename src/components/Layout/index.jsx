import React, {useState} from 'react'
import {Header} from '../Header';
import {Footer} from '../Footer';
import {Search} from '../Search';
import {useInitialState} from '../../hooks/useInitialState';

export const Layout = ({children}) => {
  const {state, setState} = useInitialState();
  const {products} = state;


  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)


  const filter = products.filter(item=> item.nombre == search)

  // const filter = products.filter(item=>{
  //   const list = item.toLowerCase();
  //   const set = search.toLowerCase();

  //   return list.includes(set)
  // })


  // console.log('produc',products.filter(item => item._id < 2));
  // console.log('filter',products);

  const fil = (array, value)=>{
    // console.log(array, value, array[0].nombre);
    return array.filter((e)=>{return e.nombre === value})
  }
  // console.log('fil',fil(products, search));




  return (
    <div className={search? `overflow:hidden` : ``}>
      { open ?
        <div className="absolute search-header">
          <Search 
            open={open}
            setOpen={setOpen}
            search={search}
            setSearch={setSearch}
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
