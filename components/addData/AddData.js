import { useRef } from "react";
import styles from "./addData.module.css";

const AddData = function (props) {
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const lastSaleRef = useRef();
  const isFeaturedRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const image = imageRef.current.value;
    const lastsale = lastSaleRef.current.value;
    const isFeatured = isFeaturedRef.current.value;

    const test = false;
    const convertedPrice = price * 1;
    const convertedLastSale = lastsale * 1;
    const convertedFeatured =
      isFeatured === "false" ? test : Boolean(isFeatured);

    const reqBody = {
      title,
      price: convertedPrice,
      image,
      lastsale: convertedLastSale,
      isFeatured: convertedFeatured,
    };
    console.log(reqBody);

    const res = await fetch(`http://localhost:3000/api/admin/addData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <div className={styles.nft__container}>
      <div>
        <h1>Add New Nft</h1>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.form__control}>
          <label htmlFor="title">Title</label>
          <input type={"text"} id="title" ref={titleRef} />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="price">Price</label>
          <input type={"text"} id="price" ref={priceRef} />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="image">Image-As-String</label>
          <input type={"text"} id="image" ref={imageRef} />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="lastsale">Last Sale</label>
          <input type={"text"} id="lastsale" ref={lastSaleRef} />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="isFeatured">isFeatured</label>
          <select id="isFeatured" ref={isFeaturedRef}>
            <option value={"true"}>True</option>
            <option value={"false"}>False</option>
          </select>
        </div>
        <button>ADD-NFT</button>
      </form>
    </div>
  );
};

export default AddData;
