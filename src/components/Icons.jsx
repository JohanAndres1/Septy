export function CartIcon() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path fill="#fff"
        d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"
      />
    </svg>
  );
}

export function DeletedCartIcon() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="m15.825 13l-2-2h1.725l2.75-5H8.825l-2-2H19.95q.575 0 .888.488t.012 1.062l-3.55 6.4q-.275.5-.713.775t-.762.275ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm13.5 1.3L14.15 17H7.6q-1.1 0-1.675-.938T5.85 14.1l1.05-2.15L5.1 7.9L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4ZM12.15 15l-2-2H8.6l-1 2h4.55Zm3.4-4h-1.725h1.725ZM17 22q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22Z"
      />
    </svg>
  );
}

export function CartRemoveIcon() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="M14.1 8.5L12 6.4L9.9 8.5L8.5 7.1L10.6 5L8.5 2.9l1.4-1.4L12 3.6l2.1-2.1l1.4 1.4L13.4 5l2.1 2.1l-1.4 1.4M7 18c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2c0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7l1.7 1l-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6v.2Z"
      />
    </svg>
  );
}

export function CartCheckIcon() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="M9 20c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m8-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2M18 2.8l-1.4-1.4l-4.8 4.8l-2.6-2.6L7.8 5l4 4L18 2.8Z"
      />
    </svg>
  );
}

export function AddCartIcon() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="M11 9V6H8V4h3V1h2v3h3v2h-3v3h-2ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.725-.988T5.25 14.05L6.6 11.6L3 4H1V2h3.275l4.25 9h7.025l3.875-7l1.75.95l-3.875 7q-.275.5-.725.775T15.55 13H8.1L7 15h12v2H7Z"
      />
    </svg>
  );
}

export function IconMenu() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M5 5L12 12L19 5">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 5L12 12L19 5;M5 5L12 5L19 5"
          />
        </path>
        <path d="M12 12H12">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M12 12H12;M5 12H19"
          />
        </path>
        <path d="M5 19L12 12L19 19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 19L12 12L19 19;M5 19L12 19L19 19"
          />
        </path>
      </g>
    </svg>
  );
}

export function IconCloseMenu() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M5 5L12 5L19 5">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 5L12 5L19 5;M5 5L12 12L19 5"
          />
        </path>
        <path d="M5 12H19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 12H19;M12 12H12"
          />
        </path>
        <path d="M5 19L12 19L19 19">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5 19L12 19L19 19;M5 19L12 12L19 19"
          />
        </path>
      </g>
    </svg>
  );
}

export function IconCloseMenuLateral() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <circle cx="8" cy="2.5" r=".75" />
        <circle cx="8" cy="8" r=".75" />
        <circle cx="8" cy="13.5" r=".75" />
      </g>
    </svg>
  );
}

export function IconMenuLateral() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <circle cx="2.5" cy="8" r=".75" />
        <circle cx="8" cy="8" r=".75" />
        <circle cx="13.5" cy="8" r=".75" />
      </g>
    </svg>
  );
}

export function IconMenuGridVertical() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16">
      <path
        fill="none"
        d="M7 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"
      />
    </svg>
  );
}

export function IconMenuGridHorizontal() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16">
      <path
        fill="none"
        d="M2 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
      />
    </svg>
  );
}

export function Cuenta() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="28"
        strokeDashoffset="28"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="28;0"
          />
        </path>
        <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.4s"
            values="28;0"
          />
        </path>
      </g>
    </svg>
  );
}

export function Usurarios() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 17c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472m-8 4.472a3 3 0 0 1 4-4.472M12 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
      />
    </svg>
  );
}

export function Configuracion() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M13.765 2.152C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.484-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.466.807-.7 1.21-.751 1.605a2 2 0 0 0 .396 1.479c.148.192.355.353.676.555c.473.297.777.803.777 1.361c0 .558-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.579.276.819.308a2 2 0 0 0 1.479-.396c.315-.242.548-.646 1.014-1.453c.466-.807.7-1.21.751-1.605a2 2 0 0 0-.396-1.479c-.148-.192-.355-.353-.676-.555A1.617 1.617 0 0 1 19.562 12c0-.558.304-1.064.777-1.36c.321-.203.529-.364.676-.556a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083Z" />
      </g>
    </svg>
  );
}

export function Historial() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9 22v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2m-5-7h-2v-2h2v2m6 0h-4v-2h4v2M8 11H6V9h2v2m10 0h-8V9h8v2m2 9H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 6v12h16V6H4Z"
      />
    </svg>
  );
}

export function Grafico() {
  return (
    <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M5 3v16h16v2H3V3h2Zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999l-4.293 4.292l-1.414-1.414L13 7.586l3 2.999l4.293-4.292Z"
      />
    </svg>
  );
}
