import Modal from "@/components/molecules/Modal/Modal.component";
import Table from "@/components/organisms/Table/Table.component";
import ModalDetail from "@/components/templates/details/Detail.component";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
      <ModalDetail />
      <Table
        className="mt-30"
        data={[
          {
            id: 1,
            value: "hello",
          },
        ]}
      />
    </Fragment>
  );
};

export default Homepage;
