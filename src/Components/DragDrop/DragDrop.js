import React from "react";
import { useState } from "react";

const DragDrop = () => {
  const items = [
    { number: "1", title: "🇦🇷 Argentina" },
    { number: "2", title: "🤩 YASS" },
    { number: "3", title: "👩🏼‍💻 Tech " },
    { number: "4", title: "🤩 Code" },
    { number: "5", title: "🤩 C++" },
    { number: "6", title: "🤩 Javascript" },
    { number: "7", title: "🤩 Reactjs" },
    { number: "8", title: "🤩 Nextjs" },
    { number: "9", title: "🤩 Mongodb" },

    
  ];
  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  };
  const [list, setList] = useState(items);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);

  const onDragStart = (event) => {
    console.log(event.currentTarget.dataset.position, "event");
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });
    event.dataTransfer.setData("text/html", "");
  };

  const onDragOver = (event) => {
    const lastposition = Number(event.currentTarget.dataset.position);

    const dragfrom = dragAndDrop.draggedFrom;

    const dragTo = lastposition;

    let newlist = dragAndDrop.originalOrder;

    const draggeditem = newlist[dragfrom];
    console.log(draggeditem,"draggeditem")

    const remainingItem = newlist.filter((it, ind) => ind !== dragfrom);

    newlist = [
      ...remainingItem.slice(0, dragTo),
      draggeditem,
      ...remainingItem.slice(dragTo),
    ];

    if(dragTo!==dragAndDrop.draggedTo){
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: dragTo,
      updatedOrder: newlist,
    });
    }
  };

  const onDrop = (e) => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };
  const onDragLeave = (e) => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };
  console.log(dragAndDrop.updatedOrder);
  return (
    <div className="bg-[#0E0E10] min-h-[100vh]   w-screen h-full bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex flex-col  items-center justify-center pt-6">
        <h1 className="text-white text-4xl font-bold ">Drag and Drop List</h1>
        <section
          className="  max-w-lg p-6 mt-12  rounded-md bg-white"
          style={{ boxShadow: "4px 4px 50px rgba( #687bf7, 0.6)" }}
        >
          <ul>
            {list.map((it, ind) => (
              <li
                key={ind}
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                data-position={ind}
                className="flex flex-row gap-12 w-full  cursor-move mb-6"
              >
                <span className="text-bold text-3xl">{it.number}</span>
                <p className="text-bold text-3xl">{it.title}</p>
                <i class="fas fa-arrows-alt-v"></i>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DragDrop;
