import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
// if component name become same as library names, we can rename them like this
// import { LineChart as LChart, Line } from "recharts";

function LineChart1() {
  const data = [
    { id: 1, name: "Ayaan Rahman", math: 78, physics: 72, chemistry: 81 },
    { id: 2, name: "Nusrat Jahan", math: 85, physics: 89, chemistry: 76 },
    { id: 3, name: "Tanvir Alam", math: 62, physics: 68, chemistry: 64 },
    { id: 4, name: "Maliha Noor", math: 90, physics: 92, chemistry: 88 },
    { id: 5, name: "Rayhan Kabir", math: 73, physics: 70, chemistry: 77 },
    { id: 6, name: "Sumaiya Hossain", math: 88, physics: 85, chemistry: 90 },
    { id: 7, name: "Rafiul Islam", math: 95, physics: 91, chemistry: 93 },
    { id: 8, name: "Mehjabin Anwar", math: 67, physics: 69, chemistry: 66 },
    { id: 9, name: "Zubair Ahmed", math: 80, physics: 78, chemistry: 74 },
    { id: 10, name: "Tania Akter", math: 76, physics: 73, chemistry: 79 },
  ];


  return (
    <div className="m-10 border-2 w-fit">
      <LineChart width={800} height={300} data={data}>
        <XAxis dataKey="id" stroke="#8884d8" />
        <YAxis stroke="#8884d8" />
        <Tooltip />
        <Line dataKey="math" stroke="#8884d8" strokeWidth={2} />
        <Line dataKey="physics" stroke="#82ca9d" strokeWidth={2} />
        <Line dataKey="chemistry" stroke="#ff7300" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default LineChart1;
