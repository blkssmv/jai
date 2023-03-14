import { useEffect, useState } from "react";
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
      price: "6490",
      available: true,
    },

    {
      id: 2,
      brand: "Xiaomi",
      article: "300562314",
      name: "Xiaomi Mi Electric Kettle 2 белый",
      price: "8812",
      available: true,
    },
    {
      id: 3,
      brand: "Tefal",
      article: "685321498",
      name: "Электрочайник Tefal Silver Ion BF925231 белый",
      price: "7490",
      available: false,
    },
    {
      id: 4,
      brand: "Xiaomi",
      article: "300562311",
      name: "Xiaomi Kettle 2 белый",
      price: "3912",
      available: true,
    },
  ];

  const [brandQuery, setBrandQuery] = useState("");
  const [articleQuery, setArticleQuery] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [priceQuery, setPriceQuery] = useState(0)

  const [onSearchBrand, setOnSearchBrand] = useState(false);
  const [onSearchArticle, setOnSearchArticle] = useState(false);
  const [onSearchName, setOnSearchName] = useState(false);
  const [onSearchPrice, setOnSearchPrice] = useState(false)
  const [sortedData, setSortedData] = useState([...data]);

  

  const filteredData = data.filter((item) => {
    return (
      item.brand.toLowerCase().includes(brandQuery.toLowerCase()) &&
      item.article.toLowerCase().includes(articleQuery.toLowerCase()) &&
      item.name.toLowerCase().includes(nameQuery.toLowerCase()) && 
      parseInt(item.price) > parseInt(priceQuery)
    );
  });

  useEffect(() => {
      setSortedData([...filteredData])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandQuery, articleQuery, nameQuery, priceQuery])

  const sortDataByAvailability = () => setSortedData([...filteredData].sort((a,b) => b.available - a.available))



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
                      placeholder="Поиск по брендам"
                      value={brandQuery}
                      onChange={(event) => setBrandQuery(event.target.value)}
                    />
                  ) : (
                    <div>Бренд</div>
                  )}
                  <div>
                    <img
                      onClick={() => setOnSearchBrand(!onSearchBrand)}
                      src={search_icon}
                      alt="search"
                    />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  {onSearchArticle ? (
                    <input
                      type="text"
                      placeholder="Поиск по артикулу"
                      value={articleQuery}
                      onChange={(event) => setArticleQuery(event.target.value)}
                    />
                  ) : (
                    <div>Артикул</div>
                  )}
                  <div onClick={() => setOnSearchArticle(!onSearchArticle)}>
                    <img src={search_icon} alt="search" />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  {onSearchName ? (
                    <input
                      type="text"
                      placeholder="Поиск по наименованию"
                      value={nameQuery}
                      onChange={(event) => setNameQuery(event.target.value)}
                    />
                  ) : (
                    <div>Наименование товара</div>
                  )}

                  <div onClick={() => setOnSearchName(!onSearchName)}>
                    <img src={search_icon} alt="search" />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  {onSearchPrice ? (
                    <input
                      type="text"
                      placeholder="Укажите минимуальную цену"
                      value={priceQuery}
                      onChange={(event) => setPriceQuery(event.target.value)}
                    />
                  ) : (
                    <div>Цена</div>
                  )}
                  
                  <div>
                    <img
                      onClick={() => setOnSearchPrice(!onSearchPrice)}
                      src={search_icon}
                      alt="search"
                    />
                  </div>
                </div>
              </th>
              <th className="">
                <div className={styles.header_item}>
                  <div>Наличие</div>
                  <div onClick={sortDataByAvailability}>
                    <img src={sort_icon} alt="sort" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.brand}</td>
                <td>{item.article}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.available ? "В наличии" : "Нет в наличии"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
