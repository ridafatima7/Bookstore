import React from 'react'

const Cards = ({ item }) => {
    return (
        <>
        <div className=' mb-2 p-3'>
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer px-2 py-1 rounded-full border border-[2px] hover:text-white hover:bg-pink-500 duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
