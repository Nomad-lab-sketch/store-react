import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/redux";
import { ProductCard } from "../../../redux/models/TProduct";
import { fetchProductCardData } from "../../../redux/reducers/actionCreators";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

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
    slidesToShow: 3,
    speed: 700,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={s.mainCarouselWrapper}>
      <Slider {...settings}>
        {product.map((i) => (
          <div key={i.id} className={s.container__productCard}>
            <div className={s.productCard__name}>Name: {i.name}</div>
            <div className={s.productCard__count}>Viewers: {i.count}</div>
            <div className={s.productCard__price}>Price: {i.price}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default React.memo(MainContent);
