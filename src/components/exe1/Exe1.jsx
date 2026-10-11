import StudentCard from "./StudentCard";

function Exe1() {
  const students = [
    { id: "s1", name: "Arun", track: "React", score: 85 },
    { id: "s2", name: "Priya", track: "React", score: 92 },
    { id: "s3", name: "Kumar", track: "React", score: 76 },
  ];

  const sortedStudents = [...students].sort(
    (a, b) => b.score - a.score
  );

  return (
    <div className="container mt-4 ">
      <h3 className="text-center mb-4 ">Student Directory</h3>

      {sortedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          track={student.track}
          score={student.score}
        />
      ))}
    </div>
  );
}

export default Exe1;