import { useStore } from "../../globalState/useStore";

const setTintColors = () => {
  localStorage.setItem("colColN6", "#ff7676");
  localStorage.setItem("colColN5", "#ff8989");
  localStorage.setItem("colColN4", "#ff9d9d");
  localStorage.setItem("colColN3", "#ffb1b1");
  localStorage.setItem("colColN2", "#ffc4c4");
  localStorage.setItem("colColN1", "#ffd8d8");
  localStorage.setItem("colCol0", "#F3F4F6");
  localStorage.setItem("colCol1", "#d8ffd8");
  localStorage.setItem("colCol2", "#c4ffc4");
  localStorage.setItem("colCol3", "#b1ffb1");
  localStorage.setItem("colCol4", "#9dff9d");
  localStorage.setItem("colCol5", "#89ff89");
  localStorage.setItem("colCol6", "#3bff3b");

  useStore.setState({ colColN6: "#ff7676" });
  useStore.setState({ colColN5: "#ff8989" });
  useStore.setState({ colColN4: "#ff9d9d" });
  useStore.setState({ colColN3: "#ffb1b1" });
  useStore.setState({ colColN2: "#ffc4c4" });
  useStore.setState({ colColN1: "#ffd8d8" });
  useStore.setState({ colCol0: "#F3F4F6" });
  useStore.setState({ colCol1: "#d8ffd8" });
  useStore.setState({ colCol2: "#c4ffc4" });
  useStore.setState({ colCol3: "#b1ffb1" });
  useStore.setState({ colCol4: "#9dff9d" });
  useStore.setState({ colCol5: "#89ff89" });
  useStore.setState({ colCol6: "#3bff3b" });
};

export default setTintColors;
