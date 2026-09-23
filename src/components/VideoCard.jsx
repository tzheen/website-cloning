import { useRef, useState, useEffect } from "react";

const VideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const EDGE_GAP = 60;

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
    // END DRAG
    // =====================================

    const handleMouseUp = () => {
      if (!dragging.current) return;

      dragging.current = false;

      const card = cardRef.current;

      if (!card) return;

      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const currentX = positionRef.current.x;
      const currentY = positionRef.current.y;

      // =====================================
      // FIND CURRENT SCREEN POSITION
      // =====================================

      const currentLeft =
        screenWidth -
        40 -
        cardWidth +
        currentX;

      const currentTop =
        screenHeight -
        40 -
        cardHeight +
        currentY;

      const currentRight =
        currentLeft + cardWidth;

      const currentBottom =
        currentTop + cardHeight;

      // =====================================
      // DISTANCE TO EACH SIDE
      // =====================================

      const distanceLeft = currentLeft;
      const distanceRight =
        screenWidth - currentRight;

      const distanceTop = currentTop;
      const distanceBottom =
        screenHeight - currentBottom;

      const snapX =
        distanceLeft < distanceRight
          ? -(screenWidth - EDGE_GAP * 2 - cardWidth)
          : 0;

      const snapY =
        distanceTop < distanceBottom
          ? -(screenHeight - EDGE_GAP * 2 - cardHeight)
          : 0;

      // =====================================
      // APPLY SNAP
      // =====================================

      updatePosition({
        x: snapX,
        y: snapY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // =====================================
  // PLAY VIDEO
  // =====================================

  const playVideo = (e) => {
    e.stopPropagation();

    videoRef.current?.play();
    setIsPlaying(true);
  };

  // =====================================
  // PAUSE VIDEO
  // =====================================

  const pauseVideo = (e) => {
    e.stopPropagation();

    videoRef.current?.pause();
    setIsPlaying(false);
  };

  // =====================================
  // CLOSE VIDEO
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
        bottom-[60px]
        right-[60px]
        z-[9999]
        w-[15.78vw]
        max-w-[350px]
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
            ${position.x + (isPlaying ? -50 : 0)}px,
            ${position.y + (isPlaying ? -30 : 0)}px
          )
          scale(${isPlaying ? 1.5 : 1})
        `,
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