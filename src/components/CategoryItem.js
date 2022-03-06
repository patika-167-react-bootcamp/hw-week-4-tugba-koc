import React from "react";

function CategoryItem(props) {
  return (
    <div>
      {props.categoryList.map((category) => (
        <div key={category.id}>
          <span>{category.title}</span>
          <button>Status Düzenle</button>
        </div>
      ))}
    </div>
  );
}

export default CategoryItem;
