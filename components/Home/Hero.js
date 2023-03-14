import Slider from "react-slick";
import HeroSlider from "../Shared/HeroSlider";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <HeroSlider />
        <HeroSlider />
        <HeroSlider />
      </Slider>
    </div>
  );
};

export default Hero;
