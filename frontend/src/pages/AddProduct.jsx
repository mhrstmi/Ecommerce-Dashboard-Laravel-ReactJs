import React , {useState} from 'react'

const AddProduct = () => {

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addProduct () {
    

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);

    let result = await fetch("http://localhost:8000/api/addproduct/", {
      method: "POST",
      body: formData
    })

    const inputs = document.getElementsByTagName('input');
    for (let i=0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    window.alert("محصول افزوده شد")

    
  }

  return (
    <>
        <div className="col-sm-6 offset-sm-3"  dir="rtl">
          <h1>افزودن کالا</h1>
          <br />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" placeholder="عکس کالا" />
          <br />
          <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="اسم کالا"/>
          <br />
          <input onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" placeholder="قیمت کالا"/>
          <br />
          <input onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" placeholder="توضیحات کالا"/>
          <br />
          <button onClick={addProduct} className="btn btn-primary">افزودن کالا</button>
        </div>
    </>
  )
}

export default AddProduct