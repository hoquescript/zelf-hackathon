/* eslint-disable @next/next/no-img-element */
import { IColumn } from "@/components/organisms/Table/Table.component";
import styles from "./Analytics.module.scss";
import Icon from "@/components/atoms/Icon/Icon.component";
import Clamp from "@/components/atoms/Clamp/Clamp.component";
import { Fragment } from "react";
import Avatar from "@/components/atoms/Avatar/Avatar.component";
import Link from "next/link";

const ANALYTICS_COLUMN: IColumn[] = [
  {
    label: "Date",
    accessor: "date",
    width: 100,
    cell(value) {
      return <span className={styles.date}>{value}</span>;
    },
  },
  {
    label: "Video",
    accessor: "content",
    width: 100,
    cell: (value) => {
      return (
        <span className={styles.content}>
          <Icon>play</Icon>
          <p>{value}</p>
        </span>
      );
    },
  },
  {
    label: "Creator",
    accessor: "user",
    width: 130,
    cell(value) {
      return (
        <span className={styles.user}>
          <Avatar src={value?.image} className="mr-10" size={20} />
          <p>@{value.id}</p>
        </span>
      );
    },
  },
  {
    label: "Platform",
    accessor: "platform",
    align: "center",
    cell(value) {
      return <img src={value ? "/tiktok.svg" : "/instagram.svg"} alt="Platform" className={styles.platform} />;
    },
  },
  {
    label: "Total Views",
    accessor: "views",
    hasSort: true,
    align: "center",
  },
  {
    label: "Total Engagement",
    accessor: "engagement",
    hasSort: true,
    align: "center",
  },
  {
    label: "Engagement Rate",
    accessor: "engagementRate",
    hasSort: true,
    align: "center",
  },
  {
    label: "Actions",
    accessor: "id",
    align: "right",
    cell(value, _, index) {
      return (
        <Link className={styles.viewPost} href={`/?post=${value}`}>
          View Post
        </Link>
      );
    },
  },
];

export default ANALYTICS_COLUMN;
