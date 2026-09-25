import { useRef, useState, useEffect } from "react";

const VideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);
  const cardRef = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const positionRef = useRef(position);

  const dragging = useRef(false);

  const startPosition = useRef({
    mouseX: 0,
    mouseY: 0,
    x: 0,
    y: 0,
  });

  const EDGE_GAP = 40;

  // =====================================
  // UPDATE POSITION
  // =====================================

  const updatePosition = (newPosition) => {
    positionRef.current = newPosition;
    setPosition(newPosition);
  };

  // =====================================
  // START DRAG
  // =====================================

  const handleMouseDown = (e) => {
    if (e.target.closest("button")) return;

    dragging.current = true;

    startPosition.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      x: positionRef.current.x,
      y: positionRef.current.y,
    };
  };

  // =====================================
  // DRAG
  // =====================================

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging.current) return;

      const deltaX =
        e.clientX - startPosition.current.mouseX;

      const deltaY =
        e.clientY - startPosition.current.mouseY;

      updatePosition({
        x: startPosition.current.x + deltaX,
        y: startPosition.current.y + deltaY,
      });
    };

    // =====================================
    // RELEASE + SNAP
    // =====================================

    const handleMouseUp = () => {
      if (!dragging.current) return;

      dragging.current = false;

      const card = cardRef.current;

      if (!card) return;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const width = card.offsetWidth;
      const height = card.offsetHeight;

      // =====================================
      // SCALE
      // =====================================

      const scale = isPlaying ? 1.5 : 1;

      const visualWidth = width * scale;
      const visualHeight = height * scale;

      // Extra size caused by scale
      const extraWidth =
        (visualWidth - width) / 2;

      const extraHeight =
        (visualHeight - height) / 2;

      // =====================================
      // CURRENT CENTER
      // =====================================

      // Base position is bottom/right
      const baseLeft =
        screenWidth - 40 - width;

      const baseTop =
        screenHeight - 40 - height;

      const currentLeft =
        baseLeft + positionRef.current.x;

      const currentTop =
        baseTop + positionRef.current.y;

      const currentCenterX =
        currentLeft + width / 2;

      const currentCenterY =
        currentTop + height / 2;

      // =====================================
      // DETERMINE LEFT / RIGHT
      // =====================================

      const goLeft =
        currentCenterX < screenWidth / 2;

      const goTop =
        currentCenterY < screenHeight / 2;

      // =====================================
      // TARGET CENTER
      // =====================================

      let targetCenterX;
      let targetCenterY;

      // LEFT
      if (goLeft) {
        targetCenterX =
          EDGE_GAP +
          extraWidth +
          width / 2;
      }

      // RIGHT
      else {
        targetCenterX =
          screenWidth -
          EDGE_GAP -
          extraWidth -
          width / 2;
      }

      // TOP
      if (goTop) {
        targetCenterY =
          EDGE_GAP +
          extraHeight +
          height / 2;
      }

      // BOTTOM
      else {
        targetCenterY =
          screenHeight -
          EDGE_GAP -
          extraHeight -
          height / 2;
      }

      // =====================================
      // CONVERT CENTER BACK TO TRANSLATE
      // =====================================

      const targetLeft =
        targetCenterX - width / 2;

      const targetTop =
        targetCenterY - height / 2;

      const targetX =
        targetLeft - baseLeft;

      const targetY =
        targetTop - baseTop;

      updatePosition({
        x: targetX,
        y: targetY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );
    };
  }, [isPlaying]);

  // =====================================
  // PLAY
  // =====================================

  const playVideo = (e) => {
    e.stopPropagation();

    videoRef.current?.play();
    setIsPlaying(true);
  };

  // =====================================
  // PAUSE
  // =====================================

  const pauseVideo = (e) => {
    e.stopPropagation();

    videoRef.current?.pause();
    setIsPlaying(false);
  };

  // =====================================
  // CLOSE
  // =====================================

  const closeVideo = (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;

    setIsPlaying(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={handleMouseDown}
      className="
        group
        absolute
        bottom-10
        right-10
        z-[9999]
        w-[15.78vw]
        max-w-[350px]
        min-w-[165px]
        aspect-[5/3]
        rounded-3xl
        overflow-hidden
        select-none
        transition-transform
        duration-700
        ease-out
        pointer-events-auto
      "
      style={{
        transform: `
          translate(
            ${position.x}px,
            ${position.y}px
          )
          scale(${isPlaying ? 1.5 : 1})
        `,
        transformOrigin: "center center",
      }}
    >
      {/* IMAGE */}

      <img
        src="/images/video-preview.avif"
        alt=""
        draggable={false}
        className={`
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          transition-opacity
          duration-700
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* VIDEO */}

      <video
        ref={videoRef}
        src="/images/short-video.mp4"
        loop
        muted
        playsInline
        draggable={false}
        className={`
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none
          transition-opacity
          duration-700
          ${isPlaying ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* PLAY / PAUSE */}

      <button
        onMouseDown={(e) => e.stopPropagation()}
        onClick={isPlaying ? pauseVideo : playVideo}
        className="
          absolute
          z-10
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          cursor-pointer
        "
      >
        {isPlaying ? (
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-10 h-10"
          >
            <rect
              x="6"
              y="4"
              width="4"
              height="16"
              rx="1"
            />

            <rect
              x="14"
              y="4"
              width="4"
              height="16"
              rx="1"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10"
          >
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
          </svg>
        )}
      </button>

      {/* CLOSE */}

      {isPlaying && (
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onClick={closeVideo}
          className="
            absolute
            top-3
            right-3
            z-20
            w-7
            h-7
            rounded-full
            bg-black/40
            flex
            items-center
            justify-center
            cursor-pointer
          "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoCard;