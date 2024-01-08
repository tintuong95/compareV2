"use client"

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { QrScanner } from '@yudiel/react-qr-scanner';

export default function BaseCameraModal() {
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
            <Button
                type='primary'
                onClick={showModal}
                className='btn-sm d-flex justify-content-center align-items-center gap-2 '
            >
                Machine
                <svg width={18} fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" ></g><g id="SVGRepo_iconCarrier"><path d="M8,2A1,1,0,0,1,8,4H4V8A1,1,0,0,1,2,8V3A1,1,0,0,1,3,2ZM8,20H4V16a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1H8a1,1,0,0,0,0-2Zm13-5a1,1,0,0,0-1,1v4H16a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V16A1,1,0,0,0,21,15Zm0-6a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H16a1,1,0,0,0,0,2h4V8A1,1,0,0,0,21,9Zm1,2H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z"></path></g></svg>
            </Button>

            <Modal footer={false} width={300} destroyOnClose={true} title="QRcode Machine" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <QrScanner onDecode={(result) => {
                    console.log(result)

                }} onError={(error) => console.log(error?.message)} />
            </Modal>
        </>
    );
}