import { createContext,useEffect,useState } from "react";
const ScrollPositionContext = createContext()


export const ScrollPositionProvider=({children})=>{
    const [position,setPosition] = useState(0)
    useEffect(()=>{
    const handleScroll=()=>{
      const y = window.scrollY
      // console.log(y) 
      setPosition((prev)=>prev = y)
    }
    window.addEventListener('scroll', handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
    return (
       <ScrollPositionContext.Provider value={{position}}>{children}
       </ScrollPositionContext.Provider> 
    )
}
export default ScrollPositionContext
