import { COMPANY_INFO } from '@/config/constants';
import { LocationIcon, PhoneIcon, EmailIcon } from '@/shared/components/icons/icons';

export const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold text-white mb-2">{COMPANY_INFO.name}</h4>
            <p className="text-white/70 text-sm">
              {COMPANY_INFO.tagline} Encontramos tu hogar, gestionamos tu inversión.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-white mb-3">Contacto</h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <LocationIcon />
                {COMPANY_INFO.address}
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon />
                {COMPANY_INFO.phone}
              </li>
              <li className="flex items-center gap-2">
                <EmailIcon />
                {COMPANY_INFO.email}
              </li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-white mb-3">Enlaces</h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a className="hover:text-[#009B77] transition-colors" href="#">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a className="hover:text-[#009B77] transition-colors" href="#">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a className="hover:text-[#009B77] transition-colors" href="#">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-white/50">
          <p>© 2024 {COMPANY_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
