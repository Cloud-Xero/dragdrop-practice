import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

function App() {
  const items = ["item-0", "item-1", "item-2"];

  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1); // 選択したアイテムを削除する
    items.splice(result.destination.index, 0, remove); // Dropした場所に削除したアイテムを挿入する
  };
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef}>
              <Draggable draggableId="{items[0]}" index={0}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    {items[0]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="{items[1]}" index={1}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    {items[1]}
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="{items[2]}" index={2}>
                {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    {items[2]}
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
