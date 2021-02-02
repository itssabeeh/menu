import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import menu from './data'


const Menu = () => {
   
    const [items, setItems] = useState([]);
    // const [category,setCategory] = useState("all")
    useEffect(()=>{
        setItems(menu);
    },[])
    // const SetBreakfast = ()=>{
    //     console.log("hello")
    //     setItems(items.filter((item)=>item.category==="breakfast"))
    //     console.log(items);
    // }
    const setCategory=(catgry)=>{
        if(catgry==="all"){
            setItems(menu);
        }
        else{
        setItems(menu.filter((item)=>item.category===catgry))
        }
    }

    return<>
    {/* <Mainbody  /> */}
    <div className="container">
            <h1>Our Menu</h1>
            <div className="underline"></div>
            <section className="btn-group">
                <button className="btn" type="button" onClick={()=>setCategory("all")}>All</button>
                <button className="btn" type="button" onClick={()=>setCategory("breakfast")}>Breakfast</button>
                <button className="btn" type="button" onClick={()=>setCategory("lunch")} >Lunch</button>
                <button className="btn" type="button" onClick={()=>setCategory("shakes")}>Shakes</button>
            </section>
            <section style={{ display : "flex", flexFlow: "row wrap",justifyContent:"space-between"}}>
                {items.map((item)=>{
                    return <MenuCard key={item.id} {...item} />
                })}
            </section>
        </div>
    
    </>
   
}

export default Menu
