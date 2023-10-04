import '../../styles/super-market.css'

// Components & Data
import { products } from '../../data/market-data'

const SuperMarket = () => {
  console.log('Imported product data:::', products)
  return (
    <div className="super-market">
      <section>
        MarketNav component here
        DisplayProducts component here
      </section>

      Cart component here

    </div>
  )
}

export default SuperMarket