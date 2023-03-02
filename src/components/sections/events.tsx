import { useEffect, useRef, useState } from "react";
import TextHideEl from "../atoms/textHideEl";

const Events = () => {
  const [data, setData] = useState<
    Array<{
      name: string;
      desc: string;
      start_time: string;
      is_ready: boolean;
      duration: string;
    }>
  >([]);
  const [status, setStatus] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const ws: any = useRef(null);

  useEffect(() => {
    let tempArray: Array<{
      name: string;
      desc: string;
      start_time: string;
      is_ready: boolean;
      duration: string;
    }> = [];
    ws.current = new WebSocket("ws://188.235.122.22:2023/ws");
    ws.current.onopen = () => setStatus("Соединение открыто");
    ws.current.onclose = () => setStatus("Соединение закрыто");

    if (!ws.current) return;
    ws.current.onmessage = (e: any) => {
      if (tempArray.length >= 5) tempArray = [];
      const message = JSON.parse(e.data);
      //   console.log(message.events);
      if (message.events) tempArray.push(message.events);
      // console.log("array:::", tempArray);
      let tempData = tempArray.slice();
      if (tempData.length !== 0) {
        setData(tempData);
        setIsLoaded(true);
      }
    };

    return () => {
      if (ws.readyState === 1) ws.current.close();
    };
  }, [ws]);

  return (
    <div className="flex flex-col w-full h-fit">
      <div className="self-center flex items-center">
        <p className="text-white text-3xl">Events</p>
        {isLoaded && (
          <div className="ml-4 flex items-center justify-center px-1.5 rounded-full border-yellow-500 border text-yellow-500 text-sm">
            {data.length}
          </div>
        )}
      </div>
      {isLoaded ? (
        <div className={`flex flex-col mt-4 max-h-[73vh] overflow-y-auto hideScrollbar`}>
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <TextHideEl
                index={index}
                text={item.desc}
                duration={item.duration}
                timeStart={item.start_time}
              />
            </div>
          ))}
        </div>
      ) : (
        <img
          src="/images/loader.png"
          alt="loader"
          className="animate-spin w-16 my-4 self-center"
        />
      )}
    </div>
  );
};

export default Events;
