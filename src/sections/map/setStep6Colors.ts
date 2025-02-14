import { useStore } from "../../globalState/useStore";

const setStep6Colors = () => {
  localStorage.setItem("colColN6", "#E02424");
  localStorage.setItem("colColN5", "#F05252");
  localStorage.setItem("colColN4", "#F98080");
  localStorage.setItem("colColN3", "#F8B4B4");
  localStorage.setItem("colColN2", "#FBD5D5");
  localStorage.setItem("colColN1", "#FDE8E8");
  localStorage.setItem("colCol0", "#F3F4F6");
  localStorage.setItem("colCol1", "#DEF7EC");
  localStorage.setItem("colCol2", "#BCF0DA");
  localStorage.setItem("colCol3", "#84E1BC");
  localStorage.setItem("colCol4", "#31C48D");
  localStorage.setItem("colCol5", "#0E9F6E");
  localStorage.setItem("colCol6", "#057A55");
  localStorage.setItem("colCol7", "#e0e0e0");
  localStorage.setItem("colCol8", "#e0e0e0");
  localStorage.setItem("colCol9", "#e0e0e0");
  localStorage.setItem("colCol10", "#e0e0e0");
  localStorage.setItem("colCol11", "#e0e0e0");
  localStorage.setItem("colCol12", "#e0e0e0");
  localStorage.setItem("colCol13", "#e0e0e0");

  useStore.setState({ colColN6: "#E02424" });
  useStore.setState({ colColN5: "#F05252" });
  useStore.setState({ colColN4: "#F98080" });
  useStore.setState({ colColN3: "#F8B4B4" });
  useStore.setState({ colColN2: "#FBD5D5" });
  useStore.setState({ colColN1: "#FDE8E8" });
  useStore.setState({ colCol0: "#F3F4F6" });
  useStore.setState({ colCol1: "#DEF7EC" });
  useStore.setState({ colCol2: "#BCF0DA" });
  useStore.setState({ colCol3: "#84E1BC" });
  useStore.setState({ colCol4: "#31C48D" });
  useStore.setState({ colCol5: "#0E9F6E" });
  useStore.setState({ colCol6: "#057A55" });
  useStore.setState({ colCol6: "#e0e0e0" });
  useStore.setState({ colCol7: "#e0e0e0" });
  useStore.setState({ colCol8: "#e0e0e0" });
  useStore.setState({ colCol9: "#e0e0e0" });
  useStore.setState({ colCol10: "#e0e0e0" });
  useStore.setState({ colCol11: "#e0e0e0" });
  useStore.setState({ colCol12: "#e0e0e0" });
  useStore.setState({ colCol13: "#e0e0e0" });
};

export { setStep6Colors };
