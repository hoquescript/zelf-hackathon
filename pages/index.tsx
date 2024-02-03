import Table from "@/components/organisms/Table/Table.component";
import React, { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
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
