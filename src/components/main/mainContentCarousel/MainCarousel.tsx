import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/redux";
import { ProductCard } from "../../../redux/models/TProduct";
import { fetchProductCardData } from "../../../redux/reducers/actionCreators";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdFavoriteBorder, MdOutlineShoppingBasket } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";

import s from "./css/style.module.css";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return <GoArrowRight className={className} style={{ ...style, display: "block", color: "black" }} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <GoArrowLeft className={className} style={{ ...style, display: "block", color: "black" }} onClick={onClick} />;
}

const MainContent = () => {
  const product: Array<ProductCard> = useAppSelector((state) => state.productCard.productCard);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductCardData());
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    speed: 800,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const ratingMatch = () => {
    return (
      <>
        <IoStarSharp className={s.rating__star} style={{ color: "#e9a426" }} />
        <IoStarSharp className={s.rating__star} style={{ color: "#e9a426" }} />
        <IoStarSharp className={s.rating__star} style={{ color: "#e9a426" }} />
        <IoStarSharp className={s.rating__star} style={{ color: "#e9a426" }} />
        <IoStarSharp className={s.rating__star} style={{ color: "#e9a426" }} />
      </>
    );
  };

  return (
    <div className={s.mainCarouselWrapper}>
      <div className={s.mainCarouselWrapper__container}>
        <Slider {...settings}>
          {product.map((i) => (
            <div key={i.id} className={s.container__productCard}>
              <div className={s.container__productCard__wrapper}>
                <div className={s.container__productCard__title}>
                  <div className={s.container__productCard__title__name}>{i.name}</div>
                </div>
                <div className={s.container__productCard__reviews}>
                  <div className={s.container__productCard__reviews__count}>
                    {ratingMatch()} <span>{i.count}</span>
                  </div>
                </div>
                <div className={s.container__productCard__buy}>
                  <div className={s.container__productCard__buy__price}>{i.price} RUB</div>
                  <div className={s.container__productCard__buy__button}>
                    <div className={s.container__productCard__buy__button__buttonAddFavorite}>
                      <MdFavoriteBorder />
                    </div>
                    <div className={s.container__productCard__buy__button__buttonBasket}>
                      <MdOutlineShoppingBasket />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default React.memo(MainContent);
