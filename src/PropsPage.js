import React from "react";

export default function PropsPage({
  name,
  academicBackground,
  activities,
  skills,
}) {
  return (
    <div className="container">
      <h1 className="text-center mt-4">{name}</h1>

      <h2>📚 Academic Background</h2>
      <p>
        <strong>Primary:</strong> {academicBackground.primary}
      </p>
      <p>
        <strong>Secondary:</strong>
      </p>
      <ul>
        {academicBackground.secondary.map((school, index) => (
          <li key={index}>{school}</li>
        ))}
      </ul>
      <p>
        <strong>Tertiary:</strong> {academicBackground.tertiary}
      </p>

      <h2>🏫 School Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>

      <h2>💡 Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
