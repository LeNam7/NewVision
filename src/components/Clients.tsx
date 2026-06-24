
import { useLanguage } from '../contexts/LanguageContext';

export default function Clients() {
  const { t } = useLanguage();
  return (
    <section className="clients">
        <div className="container">
            <p className="clients-title">{t('clients.title')}</p>
            <div className="clients-slider">
                <div className="clients-logos">
                    <img src={`${import.meta.env.BASE_URL}viettel.png`} alt="Viettel" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}techx.png`} alt="TechX" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}elise.png`} alt="Elise" className="client-logo" style={{ background: 'rgba(255,255,255,0.85)', padding: '0.4rem 1rem', borderRadius: '8px', height: '55px', objectFit: 'contain' }} />
                    <img src={`${import.meta.env.BASE_URL}fpt.png`} alt="FPT Software" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}microsoft.png`} alt="Microsoft" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}dell.png`} alt="Dell Technologies" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}ehc.png`} alt="EHC Group" className="client-logo" style={{ height: '45px', objectFit: 'contain' }} />
                    <img src={`${import.meta.env.BASE_URL}mhsolution.svg`} alt="MH Solution" className="client-logo" style={{ height: '45px', objectFit: 'contain' }} />
                    <img src={`${import.meta.env.BASE_URL}pitagon.png`} alt="Pitagon" className="client-logo" style={{ height: '45px', objectFit: 'contain' }} />
                    
                    <img src={`${import.meta.env.BASE_URL}viettel.png`} alt="Viettel" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}techx.png`} alt="TechX" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}elise.png`} alt="Elise" className="client-logo" style={{ background: 'rgba(255,255,255,0.85)', padding: '0.4rem 1rem', borderRadius: '8px', height: '55px', objectFit: 'contain' }} />
                    <img src={`${import.meta.env.BASE_URL}fpt.png`} alt="FPT Software" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}microsoft.png`} alt="Microsoft" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}dell.png`} alt="Dell Technologies" className="client-logo" />
                    <img src={`${import.meta.env.BASE_URL}ehc.png`} alt="EHC Group" className="client-logo" style={{ height: '45px', objectFit: 'contain' }} />
                    <img src={`${import.meta.env.BASE_URL}mhsolution.svg`} alt="MH Solution" className="client-logo" style={{ height: '45px', objectFit: 'contain' }} />
                    <img src={`${import.meta.env.BASE_URL}pitagon.png`} alt="Pitagon" className="client-logo" style={{ height: '45px', objectFit: 'contain' }} />
                </div>
            </div>
        </div>
    </section>
  );
}
