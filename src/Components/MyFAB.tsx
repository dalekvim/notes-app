import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

const fabs = {
  add: {
    color: "primary" as "primary",
    icon: <AddIcon />,
    label: "Add",
  },
  edit: {
    color: "secondary" as "secondary",
    icon: <EditIcon />,
    label: "Edit",
  },
};

export type fabType = "add" | "edit";

interface Props {
  fabId: fabType;
  setFabId: React.Dispatch<React.SetStateAction<fabType>>;
  addNote: () => void;
  setNote: () => void;
}

export const MyFAB: React.FC<Props> = ({
  fabId,
  setFabId,
  addNote,
  setNote,
}) => (
  <Fab
    sx={{ position: "absolute", right: 20, bottom: 20 }}
    aria-label={fabs[fabId].label}
    color={fabs[fabId].color}
    onClick={() => {
      if (fabId === "add") {
        addNote();
        setFabId("edit");
      } else if (fabId === "edit") {
        setNote();
        setFabId("add");
      }
    }}
  >
    {fabs[fabId].icon}
  </Fab>
);
