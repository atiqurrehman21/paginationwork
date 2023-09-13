import React, { useEffect, useMemo, useState } from "react";
import MultiRangeSlider from "./MultiRangeSlider";

const ESidebarFilter = ({ productList, setFilterProducts,filterproducts }) => {
  const [filterlist, setFilterList] = useState([
    { id: 1, name: "men's clothing", checked: false },
    { id: 2, name: "jewelery", checked: false },
    { id: 3, name: "electronics", checked: false },
    { id: 4, name: "women's clothing", checked: false },
    { id: 5, name: "Asending", checked: false },
    { id: 6, name: "Desending", checked: false },
  ]);

  const HandleChange = (item) => {
    let temp = [...filterlist];

    temp[item - 1].checked = temp[item - 1].checked === true ? false : true;
    let temp2 = [...productList];
    if (item == 5 || item === 6) {
      if (item === 5) {
        temp2 = temp2.sort((a, b) => a.price - b.price);
        temp[5].checked = false;
      } else {
        temp2 = temp2.sort((a, b) => b.price - a.price);
        temp[4].checked = false;
      }
    }

    let trueproducts = temp
      .filter(
        (it) => it.checked && it.name !== "Asending" && it.name !== "Desending"
      )
      .map((it) => it.name);
    if (trueproducts.length !== 0) {

      temp2 = temp2.filter((it) => trueproducts.includes(it.category));
    }

    setFilterList(temp);
    setFilterProducts(temp2);
  };
  const HandleCancel = () => {
    let temp = [...filterlist];
    temp = temp.map((it) =>
      it.checked ? { ...it, checked: false } : { ...it }
    );
    setFilterList(temp);
    setFilterProducts(productList);
  };
  const [value, setValue] = useState({ min: 0, max: 0 });
  const [minmax, setMinmax] = useState({ min: 0, max: 0 });
  const { min, max } = value;
  const handleChange = (name, e) => {
    setValue((state) => ({ ...state, [name]: e }));
  };
  const handleFilter = (e) => {
    e.preventDefault();
    let temp = productList.filter((it) => it.price >= min && it.price <= max);
    temp.sort((a, b) => a.price - b.price);
    setFilterProducts(temp);
  };
  const getMin = () => {
    let maxvalue = productList.reduce((acc, value) => {
      return (acc = acc > value.price ? acc : value.price);
    }, 0);
    return maxvalue;
  };
  useEffect(() => {
    setMinmax({
      min: Number(Math.round(Math.min(...productList.map((it) => it.price)))),
      max: Number(Math.round(Math.max(...productList.map((it) => it.price)))),
    });
  }, [productList]);

  const getProductsList=(min,max)=>{
    let temp = productList.filter((it) => it.price >= min && it.price <= max);
    temp=temp.sort((a, b) => a.price - b.price);
    setFilterProducts(temp);
  }

  const HandleSearch=(e)=>{
      let temp = productList.filter((it) => it.title.toLowerCase().indexOf(e.target.value.toLowerCase())!== -1);
      setFilterProducts(temp)
  }
  

  return (
    <div className="w-48 fixed">
      <div>
        <input className=" rounded-lg border-[2px] border-solid  mr-3" type="search" placeholder="Enter Product Name" onChange={HandleSearch}/>
      </div>
      <h1>
        Filter By:
        {filterlist.map((item) => (
          <div
            className="flex  gap-3 cursor-pointer"
            onClick={() => {
              HandleChange(item.id);
            }}
          >
            {item.id === 5 || item.id === 6 ? (
              <input type="radio" name={item.name} checked={item.checked} />
            ) : (
              <input type="checkbox" name={item.name} checked={item.checked} />
            )}{" "}
            <p>{item.name}</p>
          </div>
        ))}
        {/* <form
          onSubmit={(e) => {
            handleFilter(e);
          }}
          className="flex flex-wrap gap-2"
        >
          <>min</>
          <input
            required
            type={"range"}
            value={min}
            min={0}
            onChange={(e) => handleChange("min", e.target.value)}
          />
          <>max</>
          <input
            required
            value={max}
            type={"range"}
            min={min}
            onChange={(e) => handleChange("max", e.target.value)}
          />
          <input type="submit" value="submit" />
        </form> */}
        <div>
        
        <MultiRangeSlider
      min={minmax.min}
      max={minmax.max}
      onChange={({ min, max }) =>  {getProductsList(min,max)}}
    />
        </div>
        {/* <button onClick={() => HandleCancel()}>Cancel All Filter</button> */}
      </h1>
    </div>
  );
};

export default ESidebarFilter;
