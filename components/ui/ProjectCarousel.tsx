'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { projects } from '@/data';
import { PinContainer } from './Pin';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectCarouselProps {
    onSlideChange: (index: number) => void;
    onCardClick: (project: any) => void;
}

const ProjectCarousel = ({ onSlideChange, onCardClick }: ProjectCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
    );

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        onSlideChange(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi, onSlideChange]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="embla mt-5">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {projects.map((item) => (
                        <div
                            className="embla__slide flex items-center justify-center"
                            key={item.id}
                            onClick={() => onCardClick(item)}
                        >
                            <div className="w-[90vw] sm:w-[570px] cursor-pointer">
                                <PinContainer title={item.link} href="#">
                                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[50vh]">
                                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                            <img src="/bg.png" alt="bgimg" />
                                        </div>
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-contain z-10"
                                        />
                                    </div>
                                </PinContainer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="embla__prev" onClick={scrollPrev} disabled={!prevBtnEnabled}>
                <FaChevronLeft size={30} />
            </button>
            <button className="embla__next" onClick={scrollNext} disabled={!nextBtnEnabled}>
                <FaChevronRight size={30} />
            </button>
        </div>
    );
};

export default ProjectCarousel;