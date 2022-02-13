import React from 'react';
import axios from 'axios';

const baseURL = "https://aws.random.cat/meow";


export default function ImageAdd() {

  const [imageUrl, setImageUrl] = React.useState(null);

  const catstyle = {
    maxWidth: "400px",
  };

  let className = 'menu';

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
       console.log(response);
      setImageUrl(response.data.file);
    });
  }, []);

  if (!imageUrl) return null;

  return (
      <div>
          <div className={className}><label>Random Cat API:</label></div>
          <br/>
          <div><img style={catstyle} src={imageUrl} /></div>
      </div>
  );

}

