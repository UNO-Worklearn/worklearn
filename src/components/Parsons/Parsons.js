import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Box, Typography } from "@mui/material";
import "./Parsons.css"; // Custom styling for components

const ParsonsProblem = () => {
  const [codeBlocks, setCodeBlocks] = useState([
    { id: "block1", content: "IDENTIFICATION DIVISION." },
    { id: "block2", content: "PROGRAM-ID. HELLO." },
    { id: "block3", content: "ENVIRONMENT DIVISION." },
    { id: "block4", content: "DATA DIVISION." },
    { id: "block5", content: "WORKING-STORAGE SECTION." },
    { id: "block6", content: "01 X PIC 9(3)." },
    { id: "block7", content: "PROCEDURE DIVISION." },
    { id: "block8", content: "    MOVE 100 TO X." },
    { id: "block9", content: "    DISPLAY 'VALUE OF X IS ' X." },
    { id: "block10", content: "    STOP RUN." },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(codeBlocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCodeBlocks(items);
  };

  return (
    <Box className="parsons-container" sx={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Arrange the code blocks in the correct order:
      </Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="code-blocks">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="code-list"
            >
              {codeBlocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="code-block"
                    >
                      {block.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default ParsonsProblem;
