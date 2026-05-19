import { useState } from "react"
import { sampleProducts } from "../../assets/sampleData"

export default function AdminProductsPage(){

    const [products, setProducts] = useState(sampleProducts)

    return(

        <div className="w-full h-full bg-red-400 max-h-full overflow-y-scroll">
            
        </div>
    )
}