import { assets } from "../assets/assets";
import Title from "./Title";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emma Touré",
      location: "Bamako, Mali",
      image: assets.testimonial_image_1,
      testimonial:
        "J'ai loué plusieurs véhicules dans différentes compagnies, mais l'expérience avec CarRental est exceptionnelle",
    },
    {
      name: "Ali Bamba",
      location: "Paris, France",
      image: assets.testimonial_image_2,
      testimonial:
        "CarRental m'a rendu mes déplacments faciles lors de mes vaccances à Bamako. Je les recommande fortement.",
    },
    {
      name: "Mariam Sow",
      location: "Londre, Angleterre",
      image: assets.testimonial_image_1,
      testimonial:
        "J'ai adoré le véhucile que j'ai loué chez CarRental. Je me sentais comme dans ma propre voiture.",
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="Que disent nos clients"
        subTitle="Découvrez pourquoi les voyageurs exigeants choisissent CarRental pour leurs hébergements de luxe à travers le monde."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:translate-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="icone étoile" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
