import { LineChart, Line } from "recharts";

function LineChart1() {
  const data = [
    { name: "Student 1", math: 78 },
    { name: "Student 2", math: 85 },
    { name: "Student 3", math: 62 },
    { name: "Student 4", math: 90 },
    { name: "Student 5", math: 73 },
    { name: "Student 6", math: 88 },
    { name: "Student 7", math: 95 },
    { name: "Student 8", math: 67 },
    { name: "Student 9", math: 80 },
    { name: "Student 10", math: 76 },
  ];

  return (
    <div className="m-10 border-2 w-fit">
      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="math" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default LineChart1;
