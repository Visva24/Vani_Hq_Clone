
const Card = () => {
  return (
    <>

        <div className="w-[285px] h-[390px]  rounded-lg hover:border border-red-400 ">
            <img src="./Images/white.webp" alt="" />
            <div className="flex flex-col p-4 relative h-[170px]">
            <h1 className="font-medium text-transparent bg-clip-text bg-instagram-gradient">Marketting</h1>
            <p className="text-xs mt-5  text-zinc-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, cum?</p>
            <img className="h-10 absolute bottom-3 right-3 " src="./Images/market_i.svg" alt="" />
            </div>
            
        </div>
        <div className="w-[285px] h-[390px]  rounded-lg hover:border border-red-400 ">
            <img src="./Images/product.webp" alt="" />
            <div className="flex flex-col p-4 relative h-[170px]">
            <h1 className="font-medium text-transparent bg-clip-text bg-instagram-gradient">Product Management</h1>
            <p className="text-xs mt-5 text-zinc-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, cum?</p>
            <img className="h-10 absolute bottom-3 right-3 " src="./Images/product_i.svg" alt="" />
            </div>
            
        </div>
        <div className="w-[285px] h-[390px]  rounded-lg hover:border border-red-400">
            <img src="./Images/marketting.webp" alt="" />
            <div className="flex flex-col p-4 relative h-[170px]">
            <h1 className="font-medium text-transparent bg-clip-text bg-instagram-gradient"> Whiteboarding</h1>
            <p className="text-xs mt-5  text-zinc-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, cum?</p>
            <img className="h-10 absolute bottom-3 right-3 " src="./Images/white_i.svg" alt="" />
            </div>
            
        </div>
    </>
  )
}

export default Card