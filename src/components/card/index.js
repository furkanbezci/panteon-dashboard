import { IoMdArrowDropup } from "react-icons/io";
import { RiArrowDownSFill } from "react-icons/ri";
import { ListViewHeader } from "@progress/kendo-react-listview";
import StarRatings from "react-star-ratings";
import {
  Card,
  CardTitle,
  CardImage,
  CardSubtitle,
} from "@progress/kendo-react-layout";
const CardHeader = ({ title }) => {
  return (
    <ListViewHeader
      style={{
        fontSize: 17,
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        marginLeft: 10,
        padding: 10,
      }}
      className="pl-4 pb-2 pt-2"
    >
      Top Charts
    </ListViewHeader>
  );
};

const CardItemRender = (props) => {
  let item = props.dataItem;
  return (
  
        <div style={{ width: "100%", float: "left", overflow: "auto" }}>
          <div
            style={{
              width: "10%",
              float: "left",
              paddingTop: 15,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <label>{item.id}</label>
          </div>

          <div
            style={{
              width: "10%",
              float: "left",
              display: "flex",
              justifyContent: "center",
              paddingTop: 5,
            }}
          >
            <img
              src={"/images/appIcons/" + item.iconName}
              style={{ width: "65%", borderRadius: 12, marginTop: 6 }}
            />
          </div>

          <div style={{ width: "70%", float: "left", paddingTop: 5 }}>
            <label>{item.name}</label>
            <br />
            <img
              src={"/images/flags/" + item.country + ".png"}
              style={{ width: "5%" }}
            />
            <label
              style={{
                fontSize: "10px",
                color: "grey",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              {" "}
              {item.publisher}{" "}
            </label>
            <StarRatings
              rating={item.rating}
              starRatedColor="#FFCA00"
              numberOfStars={5}
              starWidthAndHeight={10}
              starDimension="15px"
              starSpacing="3px"
            />
            <label
              style={{ fontSize: "10px", color: "grey", paddingLeft: "5px" }}
            >
              {" "}
              (1.234){" "}
            </label>
          </div>
          <div
            style={{
              width: "10%",
              float: "left",
              borderLeft: "1px solid #eee",
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 60,
            }}
          >
            {item.rank > 0 && item.rank != 0 ? (
              <>
                <label style={{ color: "green", fontSize: 12 }}>
                  {" "}
                  + {item.rank}
                </label>
                <IoMdArrowDropup style={{ color: "green", marginLeft: 5 }} />
              </>
            ) : (
              (item.rank = 0 ? (
                <>
                  <label style={{ color: "yellow", fontSize: 12 }}>
                    {" "}
                    {item.rank}
                  </label>
                  <IoMdArrowDropup style={{ color: "yellow", marginLeft: 5 }} />
                </>
              ) : (
                <>
                  <label style={{ color: "red", fontSize: 12 }}>
                    {" "}
                    - {item.rank}
                  </label>
                  <RiArrowDownSFill style={{ color: "red", marginLeft: 5 }} />
                </>
              ))
            )}
          </div>
          <div style={{ border: "1px solid #eee" }}></div>
        </div>
  );
};
const CardFooter = () => {
  return <div style={{ height: 50 }}></div>;
};

export { CardHeader, CardItemRender, CardFooter };
