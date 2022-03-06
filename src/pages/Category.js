import axios from "axios";
import React, { useState } from "react";

const initialCategoryList = {
  title: "",
};

function Category() {
  const [category, setCategory] = useState(initialCategoryList);
  const [categoryList, setCategoryList] = useState([]);

  const addCategory = async () => {
    const token = document.cookie.split("token=")[1];

    const url = `${process.env.REACT_APP_API_BASE_POINT}/category`;

    const data = {
        title: "merhaba"
    };

    let sendCategory = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // clear the form
    let input = document.getElementById("category-input");
    input.value = "";
    renderCategoryList();
  };

  const renderCategoryList = async () => {
    const token = document.cookie.split("token=")[1];
    let getCategories = await axios.get("http://localhost:80/category", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCategoryList([...getCategories.data]);
  };

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setCategory({ [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        id="category-input"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={addCategory} className="login--button">
        Kategori Ekle
      </button>
      {/* <CategoryItem categoryList={categoryList} /> */}
    </div>
  );
}

export default Category;
