import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Avatar, Card, CardFooter, CardHeader, Chip, Image} from "@nextui-org/react";
import { Pagination } from 'swiper/modules';

const Slider = ({ projectsObject }) => {
    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {projectsObject.map((project, index) => (
                <SwiperSlide key={index}>
                    <Card key={index} className={`shadow-md shadow-fuchsia-500/20 col-span-12 sm:col-span-4 h-[300px]`}  onPressEnd={() => window.open(project.href, '_blank')}>
                        <CardHeader className="absolute z-10 top-1 flex-col items-start gap-2">
                            <Chip
                                key={index}
                                variant="bordered"
                                classNames={{
                                    base: "border-none bg-slate-700/90",
                                    content: "drop-shadow shadow-black text-white",
                                }}
                            >
                                {project.title}
                            </Chip>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt={project.alt}
                            className={`z-0 w-full h-full ${project.className}`}
                            src={project.src}
                        />
                        <CardFooter className="absolute bottom-0 z-10 gap-4 flex justify-end">
                            {project.tags.map((tag) => (

                                <Avatar
                                    isBordered color="secondary"
                                    size="sm"
                                    tabIndex={undefined}
                                    name={tag.name}
                                    src={tag.src}
                                    alt={tag.alt}
                                />
                            ))}
                        </CardFooter>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
