import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function getNoteText(event) {
    const { name, value } = event.target;

    setNotes((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function expandNote() {
    setIsExpanded((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={getNoteText}
            name="title"
            placeholder="Title"
            value={notes.title}
          />
        )}

        <textarea
          onChange={getNoteText}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={notes.content}
          onClick={expandNote}
        />

        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.onAdd(event, notes);
              setNotes({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
