import styles from './Ticket.module.scss';

export default function Ticket({ type = 'plein', filmTitre }) {
   
  return (
    <div className={`${styles.ticket} ${styles[`ticket--${type}`]}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm uppercase tracking-wider font-bold mb-1 opacity-80">
            Billet d'entrée
          </p>
          <h4 className="text-lg font-bold">
            {filmTitre || 'Film sélectionné'}
          </h4>
        </div>
        <div className={styles['ticket__price']}>
          {type === 'plein' && '9€'}
          {type === 'etudiant' && '6€'}
          {type === 'pass' && 'Pass 5'}
        </div>
      </div>
    </div>
  );
}