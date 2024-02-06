
import { create } from "zustand"
import {persist,createJSONStorage}from "zustand/middleware"
import {toast} from "react-hot-toast"
export  const useCart=create(
persist((set,get)=>({
    items:[],
  addItem:(data)=>{
const currentItems= get().items
const existingItem= currentItems.filter((item)=>item.id===data.id);
if (existingItem) {
    return toast.error("Item already in the cart")
}   
set({items:[...get().items,data]})
toast.success("item added to the cart")

  },
  removeItem:(id)=>{
    const currentItems= get().items;
    const removedItem=currentItems.filter((item)=>item.id!==id)
    toast.success("Item removed succesfully")
  },
  removeAll:()=>{
set({items:[]})
  }
}),{
    name:"takau-cart",
    storage:createJSONStorage(()=>localStorage)
})
)
