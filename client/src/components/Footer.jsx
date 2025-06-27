import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b">
        <div>
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />
          <p className="max-w-80 mt-3">
            Service de location de voitures haut de gamme avec un large choix de
            véhicules de luxe et de tous les jours pour tous les besoins de
            conduite.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <img src={assets.facebook_logo} className="w-5 h-5" alt="" />
            </a>
            <a href="#">
              <img src={assets.instagram_logo} className="w-5 h-5" alt="" />
            </a>
            <a href="#">
              <img src={assets.twitter_logo} className="w-5 h-5" alt="" />
            </a>
            <a href="#">
              <img src={assets.gmail_logo} className="w-5 h-5" alt="" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase ">
            Liens Rapides
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Acceuil</a>
            </li>
            <li>
              <a href="#">Voir les voitures</a>
            </li>
            <li>
              <a href="#">Lister votre voiture</a>
            </li>
            <li>
              <a href="#">A Propos de Nous</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase ">
            Ressources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Centre d'Aide</a>
            </li>
            <li>
              <a href="#">Termes de nos Services</a>
            </li>
            <li>
              <a href="#">Politique de Confidentialité</a>
            </li>
            <li>
              <a href="#">Assurance</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase ">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li> Faladié Sokoro Rue 123 Porte 123</li>
            <li>Bamako, Mali</li>
            <li>+223 89763822</li>
            <li>djakcode@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} . Tous droits réservés.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Confidentialité</a>
          </li>
          <li> | </li>
          <li>
            <a href="#">Termes</a>
          </li>
          <li> | </li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
