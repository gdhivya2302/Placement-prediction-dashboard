import React,{ useRef ,useEffect } from "react";
const { tableau } = window;
function Tableau(){
 
  const url = "https://public.tableau.com/views/PlacementPrediction/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
  const ref = useRef(null)
  console.log(ref);
  function initViz(){
    new tableau.Viz(ref.current, url);
  }
useEffect(() => {
    initViz();
  },[])
  return () => {
    <div ref={ref} > </div>
  }
}
export default Tableau;