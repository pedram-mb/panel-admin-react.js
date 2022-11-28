import React from "react";
import AddProduct from "./addProduct";
import ProductTable from "./productTable";

const Product = ()=>{
    return(
        <>
        
        <div className="container-fluid mt-3">

            <div>
                <h5 className="text-center mt-5">
                    مدیریت محصول
                </h5>   
            </div>

            <div className="d-flex justify-content-between align-items-center mt-5">

                <div className="search-in-product d-flex">
                    <span className="input-group-text " id="basic-addon1">
                    <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید" aria-label="Username" aria-describedby="basic-addon1" />ّ
                </div>

                <div className="add-product">

                    <AddProduct />

                </div>
                
            </div>

            <ProductTable />

        </div>

        </>
    )
}

export default Product;