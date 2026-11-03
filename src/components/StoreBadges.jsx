export default function StoreBadges({ appStore, googlePlay }) {
  return (
    <div className="store-badges">
      <a href={appStore} target="_blank" rel="noreferrer">
        <img src="/images/apps/app-store.svg" alt="Download on the App Store" />
      </a>
      <a href={googlePlay} target="_blank" rel="noreferrer">
        <img src="/images/apps/google-play.svg" alt="Get it on Google Play" />
      </a>
    </div>
  );
}
