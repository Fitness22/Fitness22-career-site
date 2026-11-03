// Header block of every page: a background video or image with content on top.
//   video / poster – looping background video (home)
//   videoMobile    – optional video used on phones (portrait screens up to 600px wide)
//   image          – background photo (Who We Are, Our Apps, Contact)
//   variant        – 'low': the video fades into a black band at the bottom, where the content sits;
//                    'banner' is a shorter block,
//                    'job' is a short plain dark block (job pages, page not found)
//   scrollTo       – id of the section the "scroll down" arrow jumps to
export default function Cover({ video, videoMobile, poster, image, variant, scrollTo, children }) {
  const className = ['cover', (video || image) && 'cover--media', variant && `cover--${variant}`]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={className} style={image ? { backgroundImage: `url(${image})` } : undefined}>
      {video && (
        <video className="cover-video" poster={poster} autoPlay muted loop playsInline>
          {videoMobile && <source src={videoMobile} type="video/mp4" media="(max-width: 600px)" />}
          <source src={video} type="video/mp4" />
        </video>
      )}

      <div className="cover-content">{children}</div>

      {scrollTo && (
        <a href={`#${scrollTo}`} className="cover-scroll" aria-label="Scroll to content">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>
      )}
    </section>
  );
}
