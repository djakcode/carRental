import { useEffect, useState } from "react";
import { assets, dummyDashboardData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const DashboardCards = [
    {
      title: "Total Véhicules",
      value: data.totalCars,
      icon: assets.carIconColored,
    },
    {
      title: "Total Réservations",
      value: data.totalBookings,
      icon: assets.listIconColored,
    },
    {
      title: "En Attente",
      value: data.pendingBookings,
      icon: assets.cautionIconColored,
    },
    {
      title: "Confirmée",
      value: data.completedBookings,
      icon: assets.listIconColored,
    },
  ];

  useEffect(() => {
    setData(dummyDashboardData);
  }, []);
  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Tableau de bord d'administration"
        subTitle="Surveillez les performances globales de la plateforme, y compris le nombre total de voitures, les réservations, les revenus et les activités récentes"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {DashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title} </h1>
              <p className="text-lg font-semibold">{card.value} </p>
            </div>

            <div className="flex items-center justify-center w-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        {/* Recent bookings */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Récentes Réservations</h1>
          <p className="text-gray-500">Dernières réservations clients</p>

          {data.recentBookings.map((booking, index) => (
            <div key={index} className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <img
                    src={assets.listIconColored}
                    alt=""
                    className="h-5 w-5"
                  />
                </div>

                <div>
                  <p>
                    {booking.car.brand} {booking.car.model}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.createdAt.split("T")[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-medium">
                <p className="text-sm text-gray-500">
                  {booking.price} {currency}
                </p>
                <p className="px-3 py-0.5 border border-borderColor rounded-full text-sm">
                  {booking.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* monthly revenue */}
        <div className="p-4 md:p-6 border border-borderColor rounded-md w-full md:max-w-xs">
          <h1 className="text-lg font-medium">Revenu Mentuel</h1>
          <p className="text-gray-500">Revenus du mois en cours.</p>
          <p className="text-3xl mt-6 font-semibold text-primary">
            {data.monthlyRevenue} {currency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
