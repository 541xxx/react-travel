import React from "react";
import { Divider, Row, Col } from "antd";
import styles from "./CooperativeEnterprise.module.css";

interface PropsType {
  title: JSX.Element | string;
  images: any[]
}
export const CooperativeEnterprise: React.FC<PropsType> = ({title, images}) => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">{title}</Divider>
      <Row gutter={20}>
        {images.map(v => (
          <Col span={6} key={v}>
            <img className={styles.image} src={v} alt="Cooperative Enterprise"/>
          </Col>
        ))}
      </Row>
    </div>
  )
}