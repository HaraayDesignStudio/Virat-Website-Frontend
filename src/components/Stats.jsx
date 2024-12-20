import React from 'react'


export default function Stats() { 
    const stats = [
      { value: "150+", label: "Clients" },
      { value: "450+", label: "MN sq ft area serving" },
      { value: "50", label: "Employees" },
      { value: "10+", label: "Headquarters" },
  
      { value: "10+", label: "Segments" },
      { value: "80+", label: "Client Satisfaction Index" },
    ];
  return (
    <div className="stats-section">
    {stats.map((stat, index) => (
      <div className="stat-item" key={index}>
        <h3>{stat.value}</h3>
        <p>{stat.label}</p>
      </div>
    ))}
  </div>
  )
}
