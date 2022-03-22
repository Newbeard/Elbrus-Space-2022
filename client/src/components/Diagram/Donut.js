import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { COLORS } from "./constants";

const renderTooltip = context => {
  const { category, value } = context.point || context;
  return (
    <div>
      {category}: {value}%
    </div>
  );
};

<Chart>
 	<ChartTitle text="Статистика студентов по кампусам" />
  <ChartLegend visible={true} />
  <ChartTooltip render={renderTooltip} />
  {/* ChartSeries components */}
</Chart>

// Graph data
const studentsNumber = [
  {
    status: "Мск",
    value: 50,
    color: COLORS.moscow,
  },
  {
    status: "Онлайн",
    value: 19,
    color: COLORS.online,
  },
  {
    status: "СПб",
    value: 31,
    color: COLORS.spb,
  },
];

// Show category label for each item in the donut graph
const labelContent = e => e.category;

const Charts = props => {
  return (
    <Chart>
      <ChartTooltip render={renderTooltip} />
      <ChartTitle text="Статистика студентов по кампусам" />
      <ChartLegend visible={true} />
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={studentsNumber}
          categoryField="status"
          field="value"
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  );
};

export default Charts;
