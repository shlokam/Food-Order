import React from "react";
import Data from "../data/data";
import MenuItemCard from "../components/MenuItemCard"
import '../styles/Menu.css'
function Menu(){
    return(
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {Data.map((MenuItem, key)=>{
                        return(
                                <MenuItemCard
                                key={key}
                                image={MenuItem.image}
                                name={MenuItem.name}
                                price={MenuItem.price}
                                
                                />
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Menu;