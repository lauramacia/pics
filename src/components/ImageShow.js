import "./ImageList.css";

function ImageShow({image}) {
// return <div>Image Show</div>;
   return <div className="img">
    <img src={image.urls.small} alt={image.alt_description}/>
    </div>;
}

export default ImageShow;