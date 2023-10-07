import React from 'react'
interface Props{
    params: {id:number,productId:string[]};
 
}

const ProductsPage = ({params:{id,productId}}:Props) => {
  return (
    <div>
      Products Page  {id} {productId} 

    </div>
  )
}

export default ProductsPage