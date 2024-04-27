import { useEffect, useState } from 'react';
import Category from './Category';
import axios from 'axios'

function App() {
  const[finalCategory,setFinalCategory]=useState([])
  const[finalPro,setFinalPro]=useState([])
  const[catName,setCatName]=useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
     setFinalCategory(finalRes);
    })
  }
  let getProducts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
     setFinalPro(finalRes.products);
    })
  }

  useEffect(()=>{
    getCategory();
    getProducts();
  },[])

  useEffect(()=>{
    if(catName!==''){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes)=>proRes.data)
      .then((finalRes)=>{
       setFinalPro(finalRes.products);
      })
    }
  },[catName])

  let Pitems=finalPro.map((products,index)=>{
    return(
      <ProductItem key={index} pData={products}/>
    )
  })

  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName}/>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-5'>
                {finalPro.length>=1 ? Pitems : 'No Product Found'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

function ProductItem({pData}){
  //console.log(pData);
  return(
    <div className='shadow-lg text-center pb-4'>
                  <img src={pData.thumbnail} alt="" className='w-[100%] h-[220px]'/>
                  <h4>{pData.title}</h4>
                  <b>{pData.price}</b>
                </div>
  )
}