import {BarChart} from "../../../components";
import jsonData from '../dummy.json';

const kafkaTopicsData = jsonData["Kafka Topics"];

const data = {
    labels: Object.keys(kafkaTopicsData),
    datasets: [
      {
        label: "Kafka Topics",
        data: Object.values(kafkaTopicsData).map(Number),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
};

const Kafka = () => {
  return <BarChart data={data} />;
};

export default Kafka;