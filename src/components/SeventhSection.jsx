const SeventhSection = ({ progress9, progress10, progress11}) => {
    const translateY = progress11 <= 0 ? 100 - progress9 * 100 : -progress11 * 100;
  return (
    <section
      className="absolute inset-0 z-[80] flex h-screen items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${translateY}%)`,
      }}
    >

    </section>
  )
}

export default SeventhSection