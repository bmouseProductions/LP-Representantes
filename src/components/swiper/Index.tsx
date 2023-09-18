
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules
// @ts-ignore
import { Autoplay, Pagination, Navigation } from "swiper";


interface SliderProps{
    slideContent: Array<string | JSX.Element>;
    slideCount: number;
}

export default function Slider({ slideContent, slideCount }:SliderProps) {
    return(
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-[90%] lg:w-1/2 h-[300px] rounded"
        >
            {slideContent.map((content, index:number) => (
                <SwiperSlide key={index} className='w-full h-full flex justify-center items-center bg-green-500'>
                    {content}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}


/* arrays que precisma estar na pagina onde o swiper vai ser chamado contendo o conteudo dos sliders

const slideContent = [
    'Texto do Slide 1', 
    'Texto do Slide 2', 
    'Texto do Slide 3', 
    <Image key={1} src={import da imagem} alt="imagem tiago tessmann" className="w-auto h-[300px]"/>
];
        
const slideCount = slideContent.length;

o coponente será chamado assim:
<Slider
    slideContent= {slideContent}
    slideCount= {slideCount}
/>
*/