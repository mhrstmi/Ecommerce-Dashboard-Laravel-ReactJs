import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'

const ProductList = () => {

    const [data, setData] = useState([]);
    

    async function fetchData() {
        let result = await fetch("http://localhost:8000/api/productlist/");
        result = await result.json();
        setData(result)
        console.log(result);
    }

    useEffect( ()=> {


        fetchData();
            
        

    },[])

    async function changeImage(e, id) {


        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        formData.append('id', id);

        let result = await fetch("http://localhost:8000/api/productimage/", {
            method: "POST",
            body: formData
            })

        fetchData();
    }

    async function updateProduct(id) {

        const name = document.getElementById("name-" + id).value;  
        const price = document.getElementById("price-" + id).value;  
        const description = document.getElementById("description-" + id).value;  

        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);

        console.log(name)

        let result = await fetch("http://localhost:8000/api/updateproduct/", {
            method: "POST",
            body: formData
            })

        fetchData();
    }

    async function deleteProduct(id) {


        const formData = new FormData();
        formData.append('id', id);


        let result = await fetch("http://localhost:8000/api/deleteproduct/", {
            method: "POST",
            body: formData
            })

        fetchData();
    }



  return (
    <>

        <div style={{"padding":"0px 100px"}} dir="rtl">
            <h1>لیست کالا ها</h1>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>اسم</th>
                    <th>قیمت</th>
                    <th>توضیحات</th>
                    <th>عکس کالا</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((item, index) => 
                            
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td><input type="text" id={"name-" + item.id} defaultValue={item.name} className="form-control" /></td>
                            <td><input type="text" id={"price-" + item.id} defaultValue={item.price} className="form-control" /></td>
                            <td><input  type="text" id={"description-" + item.id} defaultValue={item.description} className="form-control" /></td>
                            <td style={{"display":"flex", "alignItems":"center", "justifyContent":"center"}}><img style={{"height": "100px", "width":"100px", "objectFit":"contain"}} src={"http://localhost:8000/" + item.file_path} alt='' />
                                <input style={{"height":"38px", "width":"250px", "marginRight":"10px"}} onChange={(e) => changeImage(e, item.id)} type="file" className="form-control" />
                            </td>
                            <td><button onClick={() => deleteProduct(item.id)} className="btn btn-danger">حذف</button></td>
                            <td><button onClick={() => updateProduct(item.id)} className="btn btn-primary">ذخیره</button></td>
                            </tr>
                        )
                    }
                    
                    
                </tbody>
            </Table>
        </div>
    </>
  )
}

export default ProductList