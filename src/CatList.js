// write your CatList component here
import React from "react";

const CatList = props => {
  const catlist = props.catPics.map((cat, index) => <img key={index} src={cat.url} alt={cat.source_url}/>)
  return(
    <div>
      {catlist}
    </div>
  )
}
export default CatList;