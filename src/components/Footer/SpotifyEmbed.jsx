export default function SpotifyEmbed() {
  return (
    <div className="w-full max-w-md">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/2bOCG7PB6a9sjpp7wMmKhm?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
        title="Spotify Playlist"
      ></iframe>

      <p className="text-gray-200 mt-3 text-sm italic text-center">
        Music that transforms coffee-fueled nights into breakthroughs.
      </p>
    </div>
  );
}
