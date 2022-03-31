import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
const CardComponent = (props) => {
    console.log({ props })
    return (
        <>
            {props?.data &&

                props.data.map((item, key) => {
                    const name=item.first_name +" "+item.last_name
                    return (

                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={item?.avatar ? item.avatar : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}
                        >
                            <Meta title={name} description="www.instagram.com" />
                        </Card>
                    )
                })

            }
        </>

    )
}
export default CardComponent
