"use client"

import React, { useState } from 'react';
import { Button, Modal } from 'antd';


export default function BaseOrderModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>

            <button onClick={showModal} className='btn  btn-friwo-handler btn-sm  d-flex justify-content-center align-items-center gap-2 '>
                OrderNo
                <svg width={19} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinecap="round"></g><g id="SVGRepo_iconCarrier"> <rect x="5" y="4" width="14" height="17" rx="2" stroke="#ffffff" strokeWidth="2"></rect> <path d="M9 9H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M9 13H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M9 17H13" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
            </button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
}