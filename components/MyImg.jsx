import Image from "next/image"

const MyImg = ({containerStyles, imgSrc}) => {
  return (<div className= {`${containerStyles}`}>
    <Image src= {imgSrc}  fill priority alt="developer image"/>
  </div>)
}

export default MyImg