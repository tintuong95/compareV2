"use client"
import React, { useState } from 'react';
import { Switch, Button, Modal, Space, Drawer } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


function BaseCard(props) {
    const [modal, contextHolder] = Modal.useModal();
    const confirm = () => {
        modal.confirm({
            title: 'Xác nhận',
            icon: <ExclamationCircleOutlined />,
            content: 'Bạn muốn thay đổi trạng thái.',
            okText: 'Xác nhận',
            cancelText: 'Hủy',
        });
    };
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                style={{ backgroundColor: '' }}

                placement={'top'}
                closable={false}
                onClose={onClose}
                open={open}
                height={"70%"}

            >

                <ReactCompareSlider
                    style={{ height: "520px" }}
                    itemOne={<ReactCompareSliderImage style={{ width: "100%" }} src="https://picsum.photos/id/1084/1980/1080?grayscale&blur=1" alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage style={{ width: "100%" }} src="https://picsum.photos/id/1084/1981/1080?redscale&blur=2" alt="Image two" />}
                />
            </Drawer>
            <div  //style={{ border: "4px solid green" }}
                className=" " >
                <div className="d-flex justify-content-between  align-items-end px-2 mb-2" >
                    <div className="" style={{ fontSize: 25, fontWeight: 800, color: "gray" }}>2</div>

                    <div className="d-flex justify-content-between  align-items-center gap-2" >
                        <small>Success</small> <Switch onChange={confirm} size="small" defaultChecked />
                    </div>
                </div>
                {contextHolder}
                <div onClick={showDrawer} className="d-flex gap-1 justify-content-center">
                    <img width={120} height={120} src="https://picsum.photos/200/200?random=2" />
                    <img
                        width={120}
                        height={120}
                        src={`https://picsum.photos/202/200?random=1`}
                    />
                </div>
            </div></>
    )
}

BaseCard.propTypes = {}

export default BaseCard
