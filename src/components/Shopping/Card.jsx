


const Card = (props) => {
  const{data}=props
  const{img,prevPrice,newPrice,reviews,star:StarIcon,title,category}=data
  return (
    <li>
   <img src={img} alt={title} />
   <h1>{title}</h1>
   <p>{category}</p>
   <span>{prevPrice}</span>
   <span>{newPrice}</span>
   <StarIcon/>
   <p>{reviews}</p>
    </li>
  )
}

export default Card