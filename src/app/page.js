'use client';
import { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Flex, Image } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import BaseCameraModal from '@/components/base-camera-modal';
import BaseOrderModal from '@/components/base-order-modal';
import { Select, Space } from 'antd';
import { axiosLine } from '@/config/axios';

const initInformation = {
  machine: "NotFound",
  orderNo: "NotFound",
  partNo: "NotFound",
}

export default function Home() {
  const inputRef = useRef();
  const [visible, setVisible] = useState(false);
  const [information, setInformation] = useState(initInformation)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [intialValues, setInitialValues] = useState({
    lineDescription: "",
    machineId: ""
  })


  const fetchLineLastState = (name) => {
    axiosLine.get(`/api/LineEvents/GetLastStateOfLine/${name}`).then(response => {
      setInformation({
        ...information,
        orderNo: response?.data?.orderNo,
        partNo: response?.data?.partNo
      })
    }).catch(e => { console.log(e) })
  }

  useEffect(() => {
    fetchLineLastState(intialValues?.lineDescription)
  }, [intialValues])

  return (
    <>
      <div className='d-flex justify-content-between align-items-center p-3  shadow-lg' style={{ backgroundColor: '#ffffff' }}>
        <div>
          <h5 className='mb-0 '>
            <strong>FRIWO </strong>
          </h5>
          <small className='text-secondary'>Visual Inspection Helper</small>
        </div>
        <div className='d-flex gap-4'>
          <span style={{ width: 110 }} className='d-flex align-items-center gap-1'> <svg width={18} viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M511.3 676.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#1f3db2"></path><path d="M960 756V138.5H64V756h320.1v85.5H256.2v44h511.9v-44h-128V756H960zM108 182.5h808v427.1H108V182.5z m488.1 659h-168V756h168v85.5zM108 712v-82.5h808V712H108z" fill="#1313d8"></path><path d="M167.536 327.703l90.72-90.721 14.143 14.142-90.721 90.72zM172.959 423.469l181.159-181.16 14.142 14.143L187.1 437.61z" fill="#1f3db2"></path></g></svg>: {information?.machine}</span>
          <span style={{ width: 110 }} className='d-flex align-items-center gap-1'> <svg width={18} viewBox="0 0 1024 1024" fill="#002db3" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#002db3"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z" fill=""></path><path d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z" fill=""></path><path d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z" fill=""></path></g></svg> : {information?.orderNo}</span>
          <span style={{ width: 110 }} className='d-flex align-items-center gap-1'> <svg width={18} fill="#0d14ce" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" stroke="#0d14ce"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>barcode</title><path d="M8,7h7V42H8ZM18.5,7H22V42H18.5Zm7,0H29V42H25.5ZM36,7h3.5V42H36ZM50,7h3.5V42H50ZM60.5,7H64V42H60.5ZM43,7h1.75V42H43ZM32.5,7h1.75V42H32.5ZM55.25,7H57V42H55.25ZM8,45.5h3.5V49H8Zm10.5,0H22V49H18.5Zm7,0H29V49H25.5Zm17.5,0h3.5V49H43Zm17.5,0H64V49H60.5ZM50,45.5h7V49H50Zm-17.5,0h7V49h-7V45.5Z"></path></g></svg> : {information?.partNo}</span>
        </div>

        <div className='d-flex gap-3'>
          {/* <BaseOrderModal /> */}
          <Select
            onChange={(e) => { setInitialValues({ ...intialValues, lineDescription: e }) }}
            placeholder='Select Line'
            style={{
              width: 120,
            }}
            options={[
              {
                value: 'Assembly 1',
                label: 'Assembly 1',
              },
              {
                value: 'Assembly 2',
                label: 'Assembly 2',
              },
              {
                value: 'Assembly 3',
                label: 'Assembly 3',
              },
              {
                value: 'Assembly 4',
                label: 'Assembly 4',
              },
              {
                value: 'Assembly 5',
                label: 'Assembly 5',
              },
              {
                value: 'Assembly 6',
                label: 'Assembly 6',
              },
              {
                value: 'Assembly 7',
                label: 'Assembly 7',
              },
              {
                value: 'Assembly 8',
                label: 'Assembly 8',
              },
            ]}
          />
          <BaseCameraModal />

          <Button type='primary' className='   d-flex justify-content-center align-items-center gap-2 '>
            Compare
            <svg width={20} viewBox='0 0 24 24' fill='red' xmlns='http://www.w3.org/2000/svg' stroke='#ffffff'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier'></g>
              <g id='SVGRepo_iconCarrier'>
                <g clipPath='url(#clip0_105_1836)' strokeLinecap='round'>
                  <path
                    d='M13 3.99976H6C4.89543 3.99976 4 4.89519 4 5.99976V17.9998C4 19.1043 4.89543 19.9998 6 19.9998H13M17 3.99976H18C19.1046 3.99976 20 4.89519 20 5.99976V6.99976M20 16.9998V17.9998C20 19.1043 19.1046 19.9998 18 19.9998H17M20 10.9998V12.9998M12 1.99976V21.9998'
                    stroke='#ffffff'

                    strokeLinecap='round'
                    strokeWidth='2'
                  ></path>
                </g>
                <defs>
                  <clipPath id='clip0_105_1836'>
                    <rect fill='white' height='24' transform='translate(0 -0.000244141)' width='24'></rect>
                  </clipPath>
                </defs>
              </g>
            </svg>
          </Button>
        </div>
      </div>

      <div>
        <div className='mt-5'>

          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 mb-2"
          >
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain  m-auto' src="https://picsum.photos/1200/540?random=1" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain ' src="https://picsum.photos/1200/540?random=2" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain ' src="https://picsum.photos/1200/540?random=3" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain ' src="https://picsum.photos/1200/540?random=4" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain ' src="https://picsum.photos/1200/540?random=5" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain ' src="https://picsum.photos/1200/540?random=6" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain ' src="https://picsum.photos/1200/540?random=7" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <div className='  ' style={{ height: 540 }}>
                <Image className='object-fit-contain ' src="https://picsum.photos/1200/540?random=8" />
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </>
  );
}
