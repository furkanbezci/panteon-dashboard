import React, { Component } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { ListView, ListViewHeader } from "@progress/kendo-react-listview";
import { Window } from "@progress/kendo-react-dialogs";
import { CardItemRender } from "../card";
import { CardFooter } from "@progress/kendo-react-layout";

const CardContainer = ({
  initialTop,
  initialLeft,
  initialWidth,
  data,
  header,
  onScroll,
}) => {
  const cardHeader = (title) => {
    return (
      <ListViewHeader className="listheader pl-4 pb-2 pt-2">
        {title}
      </ListViewHeader>
    );
  };
  return (
    <Window
      initialTop={initialTop}
      initialLeft={initialLeft}
      initialWidth={initialWidth}
      modal={false}
      resizable={true}
      closeButton={() => <div></div>}
      minimizeButton={() => <div></div>}
      maximizeButton={() => <div></div>}
    >
      <ListView
        data={data}
        item={CardItemRender}
        header={() => cardHeader(header)}
        onScroll={onScroll}
        footer={CardFooter}
      />
    </Window>
  );
};
export { CardContainer };
