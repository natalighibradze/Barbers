import React, { useState, useEffect } from "react";
import { Link, Route, Navigate, useNavigate } from "react-router-dom";
const Dashboard = ({ setBarber }) => {
  const navigate = useNavigate();
  const [data, setData] = useState<BarberItem[]>([
    {
      id: "",
      firstName: "",
      lastName: "",
      rating: 0,
      review: [{ author: "", score: 0, comment: "" }],
      description: "",
      price: 0,
    },
  ]);
  const [barberData, setBarberData] = useState<BarberItem | null>(null);
  // const [barber, setBarber] = useState()
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);
  const handleViewMore = (barber: BarberItem): void => {
    setBarber(barber)
    navigate('/profile')
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {/* {barberData && <Navigate to={`/barber/${barberData.id}`} />} */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "20px",
        }}
      >
        {data.map((barber) => (
          <div
            key={barber.id}
            style={{
              backgroundColor: "rgb(202, 201, 201)",
              padding: "15px",
              width: "170px",
              color: "black",
              borderRadius: "12px",
            }}
          >
            <h3>
              {barber.firstName} {barber.lastName}
            </h3>
            <p>Rating: {barber.rating}</p>
            <p>Description: {barber.description}</p>
            <p>Price: {barber.price}</p>
            <h3 onClick={() => handleViewMore(barber)}> view more</h3>
          </div>
          // <Link to={`/BarberPage/${barber.id}`}
        ))}
      </div>
    </div>
  );
};
export default Dashboard;