import BouncingButton from "./animations/BouncingButton";
import DarkModeComponent from "./DarkModeComponent";
import Form from "./Form";
import LoadingButton from "./animations/LoadingButton";
import NewProject from "./NewProject";
import PingButton from "./animations/PingButton";
import Table from "./Table";
import PulseSkeleton from "./animations/PulseSkeleton";
import CardMessage from "./CardMessage";
import InfoMessge from "./InfoMessge";
import Header from "./Header";

import data from "./dataEmployees";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className=" mx-5 flex flex-wrap gap-2 py-5 justify-evenly">
        <CardMessage />

        {data.map((employee) => (
          <InfoMessge
            role={employee.role}
            nameUser={employee.nameUser}
            srcImg={employee.srcImg}
            altImg={employee.altImg}
          />
        ))}
      </div>

      {/* table */}

      <div className=" mx-5 flex flex-wrap gap-2 py-5 justify-evenly">
        <Table />
        <Form />
      </div>

      <div className=" mx-5 flex flex-wrap gap-2 py-5 justify-evenly">
        <NewProject />
        <DarkModeComponent />
      </div>

      <div className="py-5 flex gap-10 justify-evenly place-items-center flex-wrap">
        <LoadingButton />
        <PingButton />
        <BouncingButton />
        <div className="flex gap-10 w-full px-10 flex-wrap">
          <PulseSkeleton />
          <PulseSkeleton />
          <PulseSkeleton />
        </div>
      </div>
    </div>
  );
}

export default App;
