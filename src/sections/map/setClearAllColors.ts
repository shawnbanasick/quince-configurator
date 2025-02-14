import { useStore } from "../../globalState/useStore";

const setClearAllColors = () => {
  localStorage.setItem("colColN6", "whitesmoke");
  localStorage.setItem("colColN5", "whitesmoke");
  localStorage.setItem("colColN4", "whitesmoke");
  localStorage.setItem("colColN3", "whitesmoke");
  localStorage.setItem("colColN2", "whitesmoke");
  localStorage.setItem("colColN1", "whitesmoke");
  localStorage.setItem("colCol0", "whitesmoke");
  localStorage.setItem("colCol1", "whitesmoke");
  localStorage.setItem("colCol2", "whitesmoke");
  localStorage.setItem("colCol3", "whitesmoke");
  localStorage.setItem("colCol4", "whitesmoke");
  localStorage.setItem("colCol5", "whitesmoke");
  localStorage.setItem("colCol6", "whitesmoke");
  localStorage.setItem("colCol7", "whitesmoke");
  localStorage.setItem("colCol8", "whitesmoke");
  localStorage.setItem("colCol9", "whitesmoke");
  localStorage.setItem("colCol10", "whitesmoke");
  localStorage.setItem("colCol11", "whitesmoke");
  localStorage.setItem("colCol12", "whitesmoke");
  localStorage.setItem("colCol13", "whitesmoke");

  useStore.setState({ colColN6: "whitesmoke" });
  useStore.setState({ colColN5: "whitesmoke" });
  useStore.setState({ colColN4: "whitesmoke" });
  useStore.setState({ colColN3: "whitesmoke" });
  useStore.setState({ colColN2: "whitesmoke" });
  useStore.setState({ colColN1: "whitesmoke" });
  useStore.setState({ colCol0: "whitesmoke" });
  useStore.setState({ colCol1: "whitesmoke" });
  useStore.setState({ colCol2: "whitesmoke" });
  useStore.setState({ colCol3: "whitesmoke" });
  useStore.setState({ colCol4: "whitesmoke" });
  useStore.setState({ colCol5: "whitesmoke" });
  useStore.setState({ colCol6: "whitesmoke" });
  useStore.setState({ colCol7: "whitesmoke" });
  useStore.setState({ colCol8: "whitesmoke" });
  useStore.setState({ colCol9: "whitesmoke" });
  useStore.setState({ colCol10: "whitesmoke" });
  useStore.setState({ colCol11: "whitesmoke" });
  useStore.setState({ colCol12: "whitesmoke" });
  useStore.setState({ colCol13: "whitesmoke" });
};

export { setClearAllColors };
