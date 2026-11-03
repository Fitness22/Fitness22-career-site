import useTilt from '../hooks/useTilt.js';

// Team member card that tilts in 3D toward the mouse.
// On hover the photo also turns from black & white to color and the name slides up (CSS).
export default function TeamCard({ name, role, photo }) {
  const tilt = useTilt();

  return (
    <li className="team-card" {...tilt}>
      <img src={photo} alt={name} loading="lazy" />
      <div className="team-card-info">
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </li>
  );
}
