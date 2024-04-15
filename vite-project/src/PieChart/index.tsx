// import "./styles.css";
import { PieChart, Pie, Sector, Cell, Tooltip, TooltipProps } from "recharts";

const data = [
  { name: "GroupA", value: 0.25 },
  { name: "GroupB", value: 0.25 },
  { name: "GroupC", value: 0.25 },
  { name: "GroupD", value: 0.50 },
];
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const COLORS: Record<string, string> = {
  GroupA: "#0088FE",
  GroupB: "#00C49F",
  GroupC: "#FFBB28",
  GroupD: "#FF8042",
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  console.log(active, payload, label);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{
        backgroundColor: "white",
        opacity: 0.5,
        // padding: "5px",
        // border: "1px solid black",
      }}>
        <p className="label" style={{
          color: "black",
          opacity: 1,
        }}>{`${payload[0].name} : ${payload[0].value}`}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }
};

export default function PieChartPie() {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        valueKey={"name"}
        name="name"
        // label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[entry.name]}></Cell>
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
        ))}
      </Pie>
    </PieChart>
  );
}
