import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // slider'ı react-slick sitesinden al
    // slider'ın kendi css'leri tailwind ile verdiğimiz css'leri ezdiği için verdiğimiz css'ler uygulansın diye başlarına ! koyduk
    <div>
      <Slider {...settings}>
      <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div>
            <div className="text-6xl font-bold">
              KİŞİYE ÖZEL TASARIMLAR
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, consectetur. Soluta nesciunt voluptatem a repellendus
              blanditiis adipisci nisi sit facere ad et incidunt, recusandae
              velit tempore illo? Optio, rem possimus!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
              İncele
            </div>
          </div>
          <img className="w-[550px] h-[550px]"
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/faeb2231-b187-42ef-b46b-ef33fe3ec7c9/custom-nike-air-force-1-high-by-you-shoes.png"
            alt=""
          />
        </div>

        <div className="!flex items-center bg-[#F6F6F6] px-6">
          <div>
            <div className="text-6xl font-bold">
              ESKİMEYEN SADELİK
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, consectetur. Soluta nesciunt voluptatem a repellendus
              blanditiis adipisci nisi sit facere ad et incidunt, recusandae
              velit tempore illo? Optio, rem possimus!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
              İncele
            </div>
          </div>
          <img className="w-[550px] h-[550px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-next-nature-ayakkab%C4%B1s%C4%B1-lkVhs6.png"
            alt=""
          />
        </div>

        <div className="!flex items-center bg-[#F6F6F6] px-6">
        <div>
            <div className="text-6xl font-bold">
              KONFOR VE ŞIKLIK SENİNLE
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, consectetur. Soluta nesciunt voluptatem a repellendus
              blanditiis adipisci nisi sit facere ad et incidunt, recusandae
              velit tempore illo? Optio, rem possimus!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
              İncele
            </div>
          </div>
          <img className="w-[550px] h-[550px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
