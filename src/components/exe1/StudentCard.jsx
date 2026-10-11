function StudentCard({ name, track, score }) {
  return (
    <div className="card p-3 mb-3">
      <h5>{name}</h5>
      <p className="mb-1">Track: {track}</p>
      <p className="mb-0">Score: {score}</p>
    </div>
  );
}

export default StudentCard;