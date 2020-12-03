import React, { useState, useRef } from "react";

function DragnDrop({ data }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    console.log("Drag starting..", params);
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("Entering Drag", params);
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      console.log("TARGET IS NOT THE SAME");
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.groupIndex].items.splice(
          params.itemsIndex,
          0,
          newList[currentItem.groupIndex].items.splice(
            currentItem.itemsIndex,
            1
          )[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    console.log("Drag Ending..");

    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };
  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.groupIndex === params.groupIndex &&
      currentItem.itemsIndex === params.itemsIndex
    ) {
      return "current dnd-item";
    }
    return "dnd-item";
  };
  return (
    <div className="drag-n-drop">
      {list.map((group, groupIndex) => (
        <div
          key={group.title}
          className="dnd-group"
          onDragEnter={
            dragging && !group.items.length
              ? (e) => handleDragEnter(e, { groupIndex, itemsIndex: 0 })
              : null
          }
        >
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemsIndex) => (
            <div
              draggable
              onDragStart={(e) => {
                handleDragStart(e, { groupIndex, itemsIndex });
              }}
              onDragEnter={
                dragging
                  ? (e) => {
                      handleDragEnter(e, { groupIndex, itemsIndex });
                    }
                  : null
              }
              key={item}
              className={
                dragging ? getStyles(groupIndex, itemsIndex) : "dnd-item"
              }
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DragnDrop;
