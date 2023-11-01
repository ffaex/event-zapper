import { useRouter } from "next/navigation";
import useStore from "./store";

function ActionBtn({ speakers }: { speakers: number }) {
  const router = useRouter();
  const setSessionStart = useStore((state) => state.setSessionStart);

  return (
    // <button
    //   type="button"
    //   onClick={() => {
    //     setSessionStart(new Date(Date.now()));
    //     router.push("/present");
    //   }}
    //   disabled={speakers < 1}
    //   className="text-white mt-3 transition-all ease-in  bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    // >
    // <span className="relative px-5 py-2.5 transition-all ease-in duration-200  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

    // </span>
    // </button>
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => {
          setSessionStart(new Date(Date.now()));
          router.push("/present");
        }}
        disabled={speakers < 1}
        className="text-white mt-3 transition-all ease-in  bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-200  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 min-w-full">
          📽️ Present
        </span>
      </button>
    </div>
  );
}

export default ActionBtn;
