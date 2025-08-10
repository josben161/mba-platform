import * as React from "react";

export default function AssessmentComplete({ 
  firstName, 
  assessmentUrl, 
  nextStepUrl 
}: { 
  firstName?: string; 
  assessmentUrl: string; 
  nextStepUrl: string 
}) {
  return (
    <div style={{ fontFamily: "Inter, Arial", padding: 24 }}>
      <h2>Your assessment is ready{firstName ? `, ${firstName}` : ""}</h2>
      <p>We analyzed your profile and targets. View the full strategy here:</p>
      <p><a href={assessmentUrl}>Open assessment</a></p>
      <hr />
      <p>Next: turn this into a tailored essay outline.</p>
      <p><a href={nextStepUrl}>Create my outline →</a></p>
      <p style={{ color: "#666", fontSize: 12 }}>We coach; you write.</p>
    </div>
  );
} 