import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import Help from "../components/Help/Help";

export default function Index() {
  let [initial, setInitial] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInitial(true);
    }, 2000);
  });
  return (
    <>
      <Main />
      {initial && <Help />}
    </>
  );
}
