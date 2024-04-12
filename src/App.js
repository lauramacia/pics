import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }
  // const term = 'cars'

   

  // return ImageList(images);

return (
<div>
  <div>
    <SearchBar onSubmit={handleSubmit} />  
    <ImageList images={images}/>
  </div>
  {/* <div>
    <ImageList images={searchImages(term)} />  
  </div> */}
</div>
);
}

export default App;