import { useStore } from "../../globalState/useStore";

const setClearAllColNumbers = () => {
  localStorage.setItem("activeValueM6", "0");
  localStorage.setItem("activeValueM5", "0");
  localStorage.setItem("activeValueM4", "0");
  localStorage.setItem("activeValueM3", "0");
  localStorage.setItem("activeValueM2", "0");
  localStorage.setItem("activeValueM1", "0");
  localStorage.setItem("activeValue0", "0");
  localStorage.setItem("activeValue1", "0");
  localStorage.setItem("activeValue2", "0");
  localStorage.setItem("activeValue3", "0");
  localStorage.setItem("activeValue4", "0");
  localStorage.setItem("activeValue5", "0");
  localStorage.setItem("activeValue6", "0");
  localStorage.setItem("activeValue7", "0");
  localStorage.setItem("activeValue8", "0");
  localStorage.setItem("activeValue9", "0");
  localStorage.setItem("activeValue10", "0");
  localStorage.setItem("activeValue11", "0");
  localStorage.setItem("activeValue12", "0");
  localStorage.setItem("activeValue13", "0");

  useStore.setState({ activeValueM6: "0" });
  useStore.setState({ activeValueM5: "0" });
  useStore.setState({ activeValueM4: "0" });
  useStore.setState({ activeValueM3: "0" });
  useStore.setState({ activeValueM2: "0" });
  useStore.setState({ activeValueM1: "0" });
  useStore.setState({ activeValue0: "0" });
  useStore.setState({ activeValue1: "0" });
  useStore.setState({ activeValue2: "0" });
  useStore.setState({ activeValue3: "0" });
  useStore.setState({ activeValue4: "0" });
  useStore.setState({ activeValue5: "0" });
  useStore.setState({ activeValue6: "0" });
  useStore.setState({ activeValue7: "0" });
  useStore.setState({ activeValue8: "0" });
  useStore.setState({ activeValue9: "0" });
  useStore.setState({ activeValue10: "0" });
  useStore.setState({ activeValue11: "0" });
  useStore.setState({ activeValue12: "0" });
  useStore.setState({ activeValue13: "0" });
};

export { setClearAllColNumbers };
