import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import "@progress/kendo-theme-material/dist/all.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { Card } from "@progress/kendo-react-layout";
import { ListView, ListViewHeader } from "@progress/kendo-react-listview";

import topChart from "../dataSet/topChart.json";
import trackedApps from "../dataSet/trackedApps.json";
import appSuggestions from "../dataSet/appSuggestions.json";
import {
  Chart,
  ChartTooltip,
  ChartTitle,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import { Window } from "@progress/kendo-react-dialogs";

import { CardItemRender, CardFooter } from "../components/card";
import { CardContainer } from "../components/window";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topChartData: topChart.find((x) => x.date == "2020-10-10").apps,
      trackedAppsData: trackedApps,
      appSuggestionsData: appSuggestions,
      categories: [],
      firstSeries: [],
      firstSeriesName: [],
      secondSeries: [],
      secondSeriesName: [],
      thirdSeries: [],
      thirdSeriesName: [],
    };
    this.scrollHandlerTopCharts = this.scrollHandlerTopCharts.bind(this);

    for (let index = 0; index < topChart.length; index++) {
      const element = topChart[index];
      this.state.firstSeries.push(element.apps[0].rank);
      this.state.firstSeriesName[element.apps[0].rank] = element.apps[0].name;
      this.state.secondSeries.push(element.apps[1].rank);
      this.state.secondSeriesName[element.apps[1].rank] = element.apps[1].name;
      this.state.thirdSeries.push(element.apps[2].rank);
      this.state.thirdSeriesName[element.apps[2].rank] = element.apps[2].name;
      this.state.categories.push(element.date);
    }
  }
  scrollHandlerTopCharts = (event) => {
    const e = event.nativeEvent;
    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const moreData = topChart.splice(0, 6);
      if (moreData.length > 0) {
        this.setState({
          topChartData: this.state.topChartData.concat(moreData),
        });
      }
    }
  };
  scrollHandlerTrackedApps = (event) => {
    const e = event.nativeEvent;
    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const moreData = topChart.splice(0, 6);
      if (moreData.length > 0) {
        this.setState({
          trackedAppsData: this.state.trackedAppsData.concat(moreData),
        });
      }
    }
  };
  scrollHandlerAppSuggestions = (event) => {
    const e = event.nativeEvent;
    if (
      e.target.scrollTop + 10 >=
      e.target.scrollHeight - e.target.clientHeight
    ) {
      const moreData = topChart.splice(0, 6);
      if (moreData.length > 0) {
        this.setState({
          appSuggestions: this.state.appSuggestions.concat(moreData),
        });
      }
    }
  };
  cardHeader = (title) => {
    return (
      <ListViewHeader className="listheader pl-4 pb-2 pt-2">
        {title}
      </ListViewHeader>
    );
  };
  render() {
    const {
      categories,
      firstSeries,
      secondSeries,
      thirdSeries,
      topChartData,
      trackedAppsData,
      appSuggestionsData,
    } = this.state;
    console.log(categories, firstSeries, secondSeries, thirdSeries);
    return (
      <div>
        <Navbar />
        <Header />
        <CardContainer
          initialTop={100}
          initialLeft={100}
          initialWidth={700}
          data={topChartData}
          header="Top Charts"
          onScroll={this.scrollHandlerTopCharts}
        />
        <CardContainer
          initialTop={100}
          initialLeft={810}
          initialWidth={600}
          data={trackedAppsData}
          header="Tracked Apps"
          onScroll={this.scrollHandlerTrackedApps}
        />
        <CardContainer
          initialTop={600}
          initialLeft={100}
          initialWidth={700}
          initialTop={450}
          data={appSuggestions}
          header="App Suggestions"
          onScroll={this.scrollHandlerAppSuggestions}
        />
  
        <Window
          initialTop={600}
          initialLeft={810}
          initialWidth={600}
          initialTop={450}
          modal={false}
          resizable={true}
          closeButton={() => <div></div>}
          minimizeButton={() => <div></div>}
          maximizeButton={() => <div></div>}
        >
          <Card>
            <Chart>
              <ChartTitle align="left" text="Rank History" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} />
              </ChartCategoryAxis>
              <ChartSeries>
                <ChartSeriesItem type="line" data={firstSeries}>
                  <ChartTooltip
                    render={({ point }) =>
                      this.state.firstSeriesName[point.value]
                    }
                  />
                </ChartSeriesItem>
                <ChartSeriesItem type="line" data={secondSeries}>
                  <ChartTooltip
                    render={({ point }) =>
                      this.state.secondSeriesName[point.value]
                    }
                  />
                </ChartSeriesItem>
                <ChartSeriesItem type="line" data={thirdSeries}>
                  <ChartTooltip
                    render={({ point }) =>
                      this.state.thirdSeriesName[point.value]
                    }
                  />
                </ChartSeriesItem>
              </ChartSeries>
            </Chart>
          </Card>
        </Window>
      </div>
    );
  }
}
