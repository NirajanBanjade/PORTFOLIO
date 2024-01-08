import React from 'react'
import bgimage from '../pic.png'

const ImageName=function(){
    const styleImg={
            backgroundImage: `url(${bgimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width:'30%',
            zIndex:'-1',
            margin:'0 0 0 60%'
            
          };
    
    return  <div style={styleImg} alt="Description of the image" >
      </div>;
}
export default ImageName;