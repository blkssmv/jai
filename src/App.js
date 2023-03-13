import { useState } from "react";
import search_icon from "./icons/search.svg";
import sort_icon from "./icons/sort.svg";
import styles from "./styles/app.module.css";

function App() {
  const data = [
    {
      id: 1,
      brand: "Tefal",
      article: "012589632",
      name: "Tefal KI700830 серебристый",
      price: 6490,
      available: true,
    },

    {
      id: 2,
      brand: "Xiaomi",
      article: "300562314",
      name: "Xiaomi Mi Electric Kettle 2 белый",
      price: 8812,
      available: true,
    },
    {
      id: 3,
      brand: "Tefal",
      article: "685321498",
      name: "Электрочайник Tefal Silver Ion BF925231 белый",
      price: 7490,
      available: false,
    },
  ];

  const [brandQuery, setBrandQuery] = useState("");
  const [articleQuery, setArticleQuery] = useState("")
  const [nameQuery, setNameQuery] = useState("")
  const [price, setPrice] = useState("")

  const [onSearchBrand, setOnSearchBrand] = useState(false);

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    item.brand.toLowerCase().includes(brandQuery.toLowerCase())
  );

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.header}>Товары на складе</div>

        <table className={styles.fixed_header}>
          <thead>
            <tr>
              <th className="">
                <div className={styles.header_item}>
                  {onSearchBrand ? (
                    <input
                      type="text"
                      placeholder="Search"
                      value={brandQuery}
                      onChange={(event) => setBrandQuery(event.target.value)}
                    />
                  ) : (
                    <div>Бренд</div>
                  )}
                  <div>
                    <img onClick={() => setOnSearchBrand(!onSearchBrand)} src={search_icon} alt="search" />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  <div>Артикул</div>
                  <div>
                    <img src={search_icon} alt="search" />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  <div>Наименование товара</div>
                  <div>
                    <img src={search_icon} alt="search" />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  <div>Цена</div>
                  <div>
                    <img src={search_icon} alt="search" />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  <div>Наличие</div>
                  <div>
                    <img src={sort_icon} alt="search" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.brand}</td>
                <td>{item.article}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.available ? "В наличии" : "Нет в наличии"}</td>
              </tr>
            ))}
            {/* {data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.brand}</td>
                <td>{item.article}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.available ? "В наличии" : "Нет в наличии"}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
