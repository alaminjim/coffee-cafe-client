import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/img/coffee-shop-fresh-drink-special-new-menu-promo-cafe-restaurant-facebook-cover-banner-template_485905-685.jpg";
import banner2 from "../assets/img/delicious-coffee-social-media-facebook-cover-post-template_264308-126.jpg";
import banner3 from "../assets/img/coffee-shop-drink-menu-promotion-social-media-facebook-cover-banner-template_159024-244.jpg";
import banner4 from "../assets/img/flat-design-coffee-shop-banner-set_23-2149238778.jpg";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
