import type { Component } from "solid-js";
import Calender from "./screens/calender";

const App: Component = () => {
  return (
    <div class="flex h-screen w-screen flex-row">
      <Calender />
      <div class="bg-mainBar h-full w-16"></div>
    </div>
  );
};

export default App;
