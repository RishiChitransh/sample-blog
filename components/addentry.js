import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import strapi from "../lib/strapi";

let fileContent = {};
async function handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData(e.target);

    formData.append("files.image", fileContent, fileContent.name);
    let form_values = Object.fromEntries(formData);

    console.log('form values ===>  ', form_values)

    await strapi.create('articles', form_values);
}

const handleInputChange = (event) => {
    
    fileContent = event.target.files[0];
    console.log('file data ===>  ', fileContent)
  };

const AddEntry = () => {

   return (
  <Popup trigger={<button style={{ width: "10%", height: "50px", float: "left", margin: "30px", borderRadius: "10px" }}> Add Entry </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Add Blog Entry </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
          <br /><br />
          <label htmlFor="#title"> <h2>Title:</h2></label>
          <br />
          <input
            placeholder="Enter Blog Post Title"
            type={"text"}
            id="title"
            name="title"
            required
          />
          <br /><br />
         <label htmlFor="#preview"> <h2>Preview:</h2></label>
         <br />
          <input
            placeholder="Enter Blog Post Preview"
            type={"text"}
            id="preview"
            name="preview"
          />
          <br /><br />
          <label htmlFor="#content"> <h2>Content:</h2></label>
          <br />
          <textarea
                placeholder="Enter Blog Post Content"
                id="content"
               name="content" 
               style={{width: "500px", height: "200px"}}
               required
            />
          <br /><br />
          <label htmlFor="#tags"> <h2>Tags:</h2></label>
          <br />
          <input
            placeholder="Enter Blog Post Tags"
            type={"text"}
            id="tags"
            name="tags"
          />
          <br /><br />
          <label htmlFor="#image"> <h2>Upload Image:</h2></label>
          <br />
          <input type={"file"}
            id="image"
            name="image"
            onChange={handleInputChange}
            />
          <br /><br />

          <div style={{ display: "flex", justifyContent: "center" }}>
          <br />
            <button type="submit">Add</button>
          </div>
         </form>
        </div>
        </div>
    )}
  </Popup>
);
   }

export default AddEntry