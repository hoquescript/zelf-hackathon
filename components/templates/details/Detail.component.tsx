/* eslint-disable @next/next/no-img-element */
import Modal from "@/components/molecules/Modal/Modal.component";
import { useRouter } from "next/router";
import React from "react";

import styles from "./Detail.module.scss";
import Avatar from "@/components/atoms/Avatar/Avatar.component";
import Button from "@/components/atoms/Button/Button.component";
import Icon from "@/components/atoms/Icon/Icon.component";
import Clamp from "@/components/atoms/Clamp/Clamp.component";
import Link from "next/link";
import Summary from "./partials/Summary.component";

const ModalDetail = () => {
  const router = useRouter();
  const post = router.query.post;

  return (
    <Modal show={post ? true : false} width="70%" overlay>
      <div className={styles.detail}>
        <aside className={styles.detail__image}>
          <img src="/post.png" alt="Post Details" />
        </aside>
        <div className={styles.content}>
          <header className={styles.content__header}>
            <div className={styles.content__info}>
              <Avatar src="/avatar_sm.svg" size={30} />
              <h3>Wahid Hoque</h3>
              <p>5 Days ago</p>
            </div>
            <Link href="/">
              <Icon>times</Icon>
            </Link>
          </header>
          <div className={styles.content__body}>
            <Clamp noOfLines={3} className={styles.content__details}>
              Mozzarella platter personal Bianca style tossed. Hawaiian red meat thin buffalo sautéed banana Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Eum cupiditate soluta exercitationem explicabo culpa totam
              quos aut modi quaerat. Nemo eum, corporis asperiores laborum laboriosam quasi voluptas fugiat quis numquam
              ad accusamus odio nam aperiam deserunt iusto possimus veritatis. Distinctio cum at fugit amet est,
              officiis doloribus odio nostrum pariatur.
            </Clamp>
            <Link href="#" className={styles.content__seeMore}>
              <Icon className="mr-20">readMore</Icon> See original post
            </Link>
          </div>
          <Summary />
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetail;
