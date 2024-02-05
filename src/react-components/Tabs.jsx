import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const App = ({ picturesObject }) => {
  return (
    <div className="flex w-full md:w-7/8 flex-col">
      <Tabs
        color="secondary"
        variant="solid"
        aria-label="Options"
        classNames={{
          tabList:
            "border-b border-divider flex-wrap mx-auto gap-0 bg-slate-500/10 w-full lg:w-fit lg:flex-nowrap",
          cursor: "bg-fuchsia-500 ",
          tab: "w-1/2 h-10",
        }}
        sNames={{ tabList: "text-black" }}
      >
        {Object.entries(picturesObject).map(([tabKey, pictures], index) => (
          <Tab className="text-lg" key={index} title={tabKey}>
            <Card className="bg-slate-500/20 lg:w-4/6 mx-auto">
              <CardBody className="flex-row flex-wrap justify-evenly gap-5">
                {pictures.map((picture, pictureIndex) => (
                  <div
                    className="flex flex-col items-center w-24"
                    key={pictureIndex}
                  >
                    <img src={picture.src} alt={picture.alt} />
                    <p className="text-lg">{picture.label}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default App;
