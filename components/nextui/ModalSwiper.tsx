"use client";
import * as React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from '@nextui-org/react';
import { HiOutlineXMark } from 'react-icons/hi2';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { MouseEventHandler } from 'react';
import Image from 'next/image';

// Custom styles for NextUI Modal
const modalStyles = {
  container: 'relative w-full h-full',
  closeButton: 'absolute top-3 right-3 text-3xl text-white cursor-pointer',
  swiper: 'w-full h-full bg-gray-400',
  slide: 'h-full w-full',
  zoomContainer: 'swiper-zoom-container h-full w-full',
};

type Props = {
  open: boolean;
  urls: string[];
  initialSlideIndex: number;
  close: () => void;
};

export default function ModalSwiper({ open, urls, initialSlideIndex, close }: Props) {
  return (
    <Modal
      isOpen={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="w-full h-full"
    >
      <div className={modalStyles.container}>
        <HiOutlineXMark
          className={modalStyles.closeButton}
          onClick={close}
        />
        <Swiper
          className={modalStyles.swiper}
          // install Swiper modules
          modules={[Navigation, Pagination, Zoom]}
          speed={800}
          slidesPerView={1}
          loop={true}
          navigation
          initialSlide={initialSlideIndex}
          pagination={{ clickable: true }}
          zoom={true}
        >
          {urls.map((url, index) => (
            <SwiperSlide
              key={index}
              className={modalStyles.slide}
              zoom={true}
            >
              <div className={modalStyles.zoomContainer}>
                <Image
                  src={url}
                  sizes="100vw"
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
}
