import"./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  
  return <div className="image-list">{renderedImages}</div>;
  // var response = <div>Found: {images.length} images</div>
  // images.forEach(element => {
  //   response += <div><ImageShow image={element} /></div>;
//  });

//  console.log(response);
//   return response;
}

export default ImageList;