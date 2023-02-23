import { useEffect } from "react";
import Editor from "./Editor";

export default function Obra() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="obra">
      <Editor />
    </div>
  );
}
