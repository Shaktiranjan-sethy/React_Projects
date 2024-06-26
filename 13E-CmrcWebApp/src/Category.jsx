import React from "react";
 
function Category({finalCategory,setCatName}){
let cat=finalCategory.map((v,i)=>{
  return(
    <li onClick={()=>{setCatName(v)}} key={i} className="bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2">{v}</li>
  )
})

    return(
      <div>
      <h1 className="text-[25px] font-[500] p-[10px]">Product Category</h1>

      <ul>
        {cat}
      </ul>
      
      </div>
      );
}

export default Category