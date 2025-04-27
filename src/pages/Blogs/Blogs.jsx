import React from "react";
import { BsFillCalendar2HeartFill } from "react-icons/bs";

const Blogs = () => {
  return (
    <div>
      <div className="text-center m-10">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <p>
          lets explore some basic concept that will make you a good developer
        </p>
      </div>
      <div>
        <div className="w-full h-64 rounded-2xl shadow-2xl p-7 m-10">
          <p className="font-bold">
            What is useState and how does it work in React?
          </p>
          <div className="divider"></div>
          <p>
            {" "}
            <strong className="text-blue-400">Answer: </strong> <br />
            useState is a React Hook that allows functional components to manage
            local state. It returns an array with the current state value and a
            function to update it, enabling reactivity within the component.
            When the state changes, React re-renders the component to reflect
            the updated value.
          </p>
          <div className="divider"></div>
          <div className="flex gap-2 items-center">
            <BsFillCalendar2HeartFill />
            <p className="text-[#6c6868] ">added at 4/28/2025</p>
          </div>
        </div>
        <div className="w-full h-64 rounded-2xl shadow-2xl p-7 m-10">
          <p className="font-bold">
            What is a custom hook in React and when should you use one?
          </p>
          <div className="divider"></div>
          <p>
            {" "}
            <strong className="text-blue-400">Answer: </strong> <br />A custom
            hook in React is a reusable function that encapsulates logic using
            built-in hooks like useState and useEffect, making code more modular
            and efficient. You should use one when you need to share stateful
            logic across multiple components without duplication.
          </p>
          <div className="divider"></div>
          <div className="flex gap-2 items-center">
            <BsFillCalendar2HeartFill />
            <p className="text-[#6c6868] ">added at 4/28/2025</p>
          </div>
        </div>
        <div className="w-full h-64 rounded-2xl shadow-2xl p-7 m-10">
          <p className="font-bold">
            What is a custom hook in React and when should you use one?
          </p>
          <div className="divider"></div>
          <p>
            {" "}
            <strong className="text-blue-400">Answer: </strong> <br />A custom
            hook in React is a function that allows you to reuse stateful logic
            across multiple components, making code more modular. You should use
            one when you need to share complex logic, such as data fetching or
            state management, without duplicating code.
          </p>
          <div className="divider"></div>
          <div className="flex gap-2 items-center">
            <BsFillCalendar2HeartFill />
            <p className="text-[#6c6868] ">added at 4/28/2025</p>
          </div>
        </div>
        <div className="w-full h-64 rounded-2xl shadow-2xl p-7 m-10">
          <p className="font-bold">
            Difference between controlled and uncontrolled components? Which one
            is better?
          </p>
          <div className="divider"></div>
          <p>
            {" "}
            <strong className="text-blue-400">Answer: </strong> <br />
            Controlled components manage their state through React and update
            based on user input, while uncontrolled components rely on the DOM
            to store their state. Controlled components are preferred for better
            control, validation, and consistency in React applications.
          </p>
          <div className="divider"></div>
          <div className="flex gap-2 items-center">
            <BsFillCalendar2HeartFill />
            <p className="text-[#6c6868] ">added at 4/28/2025</p>
          </div>
        </div>
        <div className="w-full h-64 rounded-2xl shadow-2xl p-7 m-10">
          <p className="font-bold">
            Tell us something about useFormStatus() (explore and explain) ?
          </p>
          <div className="divider"></div>
          <p>
            {" "}
            <strong className="text-blue-400">Answer: </strong> <br />
            useFormStatus() is a React Hook introduced in React 19 that helps
            track the status of form submissions, such as whether a form is
            currently pending. It is useful for improving user experience by
            disabling buttons or showing loading indicators while a form is
            being processed
          </p>
          <div className="divider"></div>
          <div className="flex gap-2 items-center">
            <BsFillCalendar2HeartFill />
            <p className="text-[#6c6868] ">added at 4/28/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
