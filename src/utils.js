export function convertHMS(pSec) {
  let nbSec = pSec;
  let sortie = {};
  sortie.heure = Math.trunc(nbSec / 3600);
  if (sortie.heure < 10) {
    sortie.heure = "0" + sortie.heure;
  }
  if (sortie.heure < 1) {
    sortie.heure = null;
  }

  nbSec = nbSec % 3600;
  sortie.minute = Math.trunc(nbSec / 60);
  if (sortie.minute < 10) {
    sortie.minute = "0" + sortie.minute;
  }

  nbSec = nbSec % 60;
  sortie.seconde = Math.trunc(nbSec);
  if (sortie.seconde < 10) {
    sortie.seconde = "0" + sortie.seconde;
  }

  return (
    (sortie.heure ? `${sortie.heure}:` : "") +
    sortie.minute +
    ":" +
    sortie.seconde
  );
}
