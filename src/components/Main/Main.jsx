import Register from 'components/Main/Register.jsx'
import Cart from 'components/Cart/Cart.jsx'
import mainCss from 'components/Main/Main.module.scss'

export function Main () {
  return (
    <main class="site-main">
      <div class={mainCss.mainContainer}>
        <Register />
        <Cart />
      </div> 
    </main>
  )
}

