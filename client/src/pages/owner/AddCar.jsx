import { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Ajouter une nouvelle voiture "
        subTitle="Remplissez les détails pour lister une nouvelle voiture à réserver, y compris le prix, la disponibilité et les spécifications de la voiture"
      />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* Car image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-sm text-gray-500">
            Téléchargez une photo de votre voiture
          </p>
        </div>

        {/* Car brand & model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label>Marque</label>
            <input
              type="text"
              placeholder="e.g. BMW, Mercedes, Audi..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Modèle</label>
            <input
              type="text"
              placeholder="e.g. X5, E-class, GLE..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Car year, Price, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Année</label>
            <input
              type="number"
              placeholder="2025"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Prix ​Journalier ({currency}) </label>
            <input
              type="number"
              placeholder="100"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Catégorie </label>
            <select
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              value={car.category}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Sélectionnez une Catégorie</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">VAN</option>
            </select>
          </div>
        </div>

        {/* Car transmission, Fuel type, seating Capacity  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission </label>
            <select
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              value={car.transmission}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Sélectionnez une Transmission</option>
              <option value="Automatique">Automatique</option>
              <option value="Manuelle">Manuelle</option>
              <option value="Semi-Automatique">Semi-Automatique</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label>Type Carburant </label>
            <select
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              value={car.fuel_type}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Sélectionnez un Type de Carburant</option>
              <option value="Gaz">Gaz</option>
              <option value="Diésel">Diésel</option>
              <option value="Pétrol">Pétrol</option>
              <option value="Electrique">Electrique</option>
              <option value="Hybride">Hybride</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label>Nombre de Places Assises</label>
            <input
              type="number"
              placeholder="4"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
            />
          </div>
        </div>

        {/* Car location */}
        <div className="flex flex-col w-full">
          <label>Emplacement</label>
          <select
            onChange={(e) => setCar({ ...car, location: e.target.value })}
            value={car.location}
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
          >
            <option value="">Sélectionnez un Emplacement</option>
            <option value="Bamako Faladié">Bamako Faladié</option>
            <option value="Sikasso">Sikasso</option>
            <option value="Kayes">Kayes</option>
            <option value="Bougouni">Bougouni</option>
          </select>
        </div>

        {/* Car Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            rows={5}
            placeholder="e.g. SUV luxueux avec un intérieur spacieux et un moteur puissant"
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            value={car.description}
            onChange={(e) => setCar({ ...car, description: e.target.value })}
          ></textarea>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
          <img src={assets.tick_icon} alt="" />
          Inscrivez Votre Voiture
        </button>
      </form>
    </div>
  );
};

export default AddCar;
