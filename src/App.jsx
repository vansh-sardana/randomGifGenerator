import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="min-h-screen background flex flex-col items-center">
      <h1 className="w-11/12 bg-white text-black rounded-xl mt-10 p-4 text-3xl font-bold text-center uppercase">Random GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 my-10">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
