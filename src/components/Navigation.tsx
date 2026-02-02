import { useNavigate } from "react-router";

import "../styles/navigation.css"

function Navigation({ next, prev }: {
    next: string,
    prev: string,
}) {
    const navigate = useNavigate();

  return (
    <div className="nav">
      <svg viewBox="0 0 24 24" onClick={() => navigate(prev)}>
        <path d="M5 12H19M19 12L13 6M19 12L13 18" />
      </svg>

      <svg viewBox="0 0 24 24" onClick={() => navigate(next)}>
        <path d="M5 12H19M19 12L13 6M19 12L13 18" />
      </svg>
    </div>
  );
}

export default Navigation;