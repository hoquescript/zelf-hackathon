import Modal from "@/components/molecules/Modal/Modal.component";
import Table from "@/components/organisms/Table/Table.component";
import ANALYTICS_COLUMN from "@/components/templates/analytics/Analytics.component";
import ModalDetail from "@/components/templates/details/Detail.component";
import ANALYTIC_DATA from "@/data/Analytics";
import React, { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
      <ModalDetail />
      <Table className="mt-30 mb-50" data={ANALYTIC_DATA} columns={ANALYTICS_COLUMN} />
    </Fragment>
  );
};

export default Homepage;
