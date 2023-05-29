import { useState,createContext } from 'react'

const data = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  }
]

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

  const [products, setProduct] = useState(data)

  //處理商品增減及更新數量至原始資料
  function handleQuantityClick (productId, action) {
    const nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: action === 'minus' ? product.quantity -1 : product.quantity + 1
        }
      } else {
        return product
      }
    })
    //過濾數量=0的商品
    const updateProducts = nextProducts.filter(product => product.quantity > 0)
    setProduct(updateProducts)
  }
  
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
  // console.log(totalPrice)
  const value = {
    products,
    setProduct,
    handleQuantityClick,
    totalPrice
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}