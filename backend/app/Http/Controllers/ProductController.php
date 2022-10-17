<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;


class ProductController extends Controller
{
    //

    function addProduct(Request $req)
    {

        $product = new Product;
        $product -> name = $req -> input("name");
        $product -> description = $req -> input("description");
        $product -> price = $req -> input("price");
        $product -> file_path = $req -> file("image") -> store('products');
        $product -> save();

        return $product;
    }

    function productList()
    {
        return Product::all();
    }

    function productImage(Request $req)
    {
        $product = Product::where('id', $req->id)->first();
        $product -> file_path = $req -> file("image") -> store('products');
        $product -> save();

        return $product;
    }

    function updateProduct(Request $req)
    {
        $product = Product::where('id', $req->id)->first();
        $product -> name = $req -> input("name");
        $product -> description = $req -> input("description");
        $product -> price = $req -> input("price");
        $product -> save();

        return $product;
    }

    function deleteProduct(Request $req)
    {
        $product = Product::where('id', $req->id)->first();
        $product -> delete();

        return $product;
    }

    
}
