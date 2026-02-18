import { useNavigate } from "react-router";

import "../styles/navigation.css";
import { type ComponentRef, useEffect, useRef, useState, type MouseEvent } from "react";

function Navigation({ next, prev }: { next: string; prev: string }) {
  const navigate = useNavigate();
  const [command, setComand] = useState("none");

  document.addEventListener("keydown", async (e) => {
    try {
      switch (e.key) {
        case "ArrowRight":
          setComand("next");
          break;
        case "ArrowLeft":
          setComand("prev");
          break;
        default:
          break;
      }
    } catch {
      return;
    }
  });

  useEffect(() => {
    try {
      switch (command) {
        case "next":
          navigate(next);
          break;
        case "prev":
          navigate(prev);
          break;
        default:
          break;
      }
    } catch (e) {
      console.error(e);
    }
  }, [command, navigate, next, prev]);

  const navDestContainer = useRef<ComponentRef<"div">>(null);

  const onEnter = (e: MouseEvent<unknown, MouseEventInit>) => {
    if (navDestContainer.current == null) return;
    const hint = navDestContainer.current;
    if (hint != undefined) hint.innerText = (e.target as HTMLElement).dataset["url"] ?? "";
  };

  
  const onLeave = () => {
    if (navDestContainer.current == null) return;
    const hint = navDestContainer.current;
    if (hint != undefined) hint.innerText = "";
  };


  return (
    <>
      
      <div className="nav">
        <div ref={navDestContainer}></div>
        <svg className="back" viewBox="0 0 24 24" onClick={() => navigate(prev)}
          data-url={prev}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          >
          <path d="M5 12H19M19 12L13 6M19 12L13 18" />
        </svg>

        <svg className="next" viewBox="0 0 24 24" 
          data-url={next}
          onClick={() => navigate(next)}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          >
          <path d="M5 12H19M19 12L13 6M19 12L13 18" />
        </svg>
      </div>
      </>
  );
}

export default Navigation;
