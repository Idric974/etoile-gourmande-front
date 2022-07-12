import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <div className={styles.box}>
      <form className={styles.myForm}>
        <div className={styles.inputBox}>
          <label className={styles.formLabel}>Prénom</label>
          <input
            className={styles.formInput}
            type="text"
            id="fistNameId"
            name="fistName"
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>Nom</label>
          <input
            className={styles.formInput}
            type="text"
            id="lastNameId"
            name="lastName"
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>Téléphone</label>
          <input
            className={styles.formInput}
            type="text"
            id="phoneId"
            name="phone"
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>Email</label>
          <input
            className={styles.formInput}
            type="text"
            id="emailId"
            name="email"
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>Adresse</label>
          <input
            className={styles.formInput}
            type="text"
            id="adresseId"
            name="adresse"
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>Ville et code postal</label>
          <select
            className={styles.formInput}
            type="select"
            id="adresseId"
            name="adresse"
          >
            <optgroup>
              <option>{'Sélectionnez votre ville'}</option>
              <option value="Bras-Panon (97412)">{'Bras-Panon (97412)'}</option>
              <option value="Cilaos (97413)">{'Cilaos (97413)'}</option>
              <option value="Entre-Deux (97414)">{'Entre-Deux (97414)'}</option>
              <option value="La Plaine-des-Palmistes  (97431)">
                {'La Plaine-des-Palmistes (97431)'}
              </option>
              <option value="La Possession (97419)">
                {'La Possession (97419)'}
              </option>
              <option value="Le Port (97420)">{'Le Port (97420)'}</option>
              <option value="Le Tampon (97418)">{'Le Tampon (97418)'}</option>
              <option value="Les Avirons (97425)">
                {'Les Avirons (97425)'}
              </option>
              <option value="Les Trois-Bassins (97426)">
                {'Les Trois-Bassins (97426)'}
              </option>
              <option value="Petite-Île (97429)">{'Petite-Île (97429)'}</option>
              <option value="Saint-André (97440)">
                {'Saint-André (97440)'}
              </option>
              <option value="Saint-Benoîtt (97437)">
                {'Saint-Benoît (97437)'}
              </option>
              <option value="Saint-Denis (97400)">
                {'Saint-Denis (97400)'}
              </option>
              <option value="Saint-Joseph (97480)">
                {'Saint-Joseph (97480)'}
              </option>
              <option value="Saint-Leu (97416)">{'Saint-Leu (97416)'}</option>
              <option value="Saint-Louis (97421)">
                {'Saint-Louis (97421)'}
              </option>
              <option value="Saint-Paul (97411)">{'Saint-Paul (97411)'}</option>
              <option value="Saint-Philippe (97442)">
                {'Saint-Philippe (97442)'}
              </option>
              <option value="Saint-Pierre (97410)">
                {'Saint-Pierre (97410)'}
              </option>
              <option value="Sainte-Marie (97438)">
                {'Sainte-Marie (97438)'}
              </option>
              <option value="Sainte-Rose (97439)">
                {'Sainte-Rose (97439)'}
              </option>
              <option value="Sainte-Suzanne (97441)">
                {'Sainte-Suzanne (97441)'}
              </option>
              <option value="Salazie (97433)">{'Salazie (97433)'}</option>
            </optgroup>
          </select>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>
            {'Date de livraison souhaitée'}
          </label>
          <input
            type="date"
            id="livraisonId"
            name="livraison"
            className={styles.formInput}
          ></input>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>{'Embalage'} </label>
          <select
            className={styles.formInput}
            type="select"
            id="emballageId"
            name="emballage"
          >
            <optgroup>
              <option>{'Sélectionnez votre emballage'}</option>
              <option value="0.00">{'Box à partager (OFFERTE)'}</option>
              <option value="1.50">{'Option Sachet à offrir 1,50€'}</option>
              <option value="2.50">
                {'Option Box à offrir à partir de 2,50€'}
              </option>
            </optgroup>
          </select>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>{'Type de livraison'}</label>
          <select
            className={styles.formInput}
            type="select"
            id="livraisonId"
            name="livraison"
          >
            <optgroup>
              <option>{'Sélectionnez votre type de livraison '}</option>
              <option value="0.00">
                {"RETRAIT à l'atelier sur RDV (GRATUIT)"}
              </option>
              <option value="12.00">
                {
                  'Livraison à domicile NORD-EST dès  12€ (varie selon le poids)'
                }
              </option>
              <option value="18.00">
                {
                  'Livraison à domicile SUD-OUEST dès 18€ (varie selon le poids)'
                }
              </option>
            </optgroup>
          </select>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>
            {'Couleurs du glaçage (Si thème à respecter)'}
          </label>
          <textarea
            id="CouleursId"
            name="Couleurs"
            rows="4"
            cols="50"
          ></textarea>
        </div>

        <div className={styles.inputBox}>
          <label className={styles.formLabel}>
            {'Demandes particulières..'}
          </label>
          <textarea
            id="DemandesId"
            name="Demandes"
            rows="4"
            cols="50"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
