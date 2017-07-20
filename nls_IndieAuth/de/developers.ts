import { _ } from '../../../../util/string/main';
const messages = {
  _okRes: 'Eine erfolgreiche Beispielantwort',
  _errRes: 'Eine fehlerhafte Beispielantwort',
  description: 'für Entwickler',
  introHead: 'Benutze IndieAuth.com, damit Benutzer sich bei deiner Webseite anmelden können',
  introLead: 'Erstelle eine Web Sign-in Form',
  intro: _`Wenn Du eine Webseite baust und Leute sollen sich einloggen,
    kannst Du IndieAuth.com benutzen um Web Sign-In zu ermöglichen. Du
    musst keinen OAuth code für jeden Anbieter verstehen.`,
  paramHead: 'Form Parameter',
  paramAction: _`<b>action</b>: Die action der Form bestimmt der IndieAuth Service
    (Du kannst <code>https://indieauth.com/auth</code> nutzen &mdash; oder
    <a href="https://github.com/redaktor/IndieAuth">den Quellcode herunterladen</a>
    und deinen eigenen Server nutzen).`,
  paramMe: '<b>me</b>: Der "me" Parameter ist die URL, welche die Benutzer eingeben können',
  paramClientId: _`<b>client_id</b>: Trage die client_id in ein "hidden field" ein: Laß uns wissen,
    bei welcher Seite der Anwendung die Benutzer sich anmelden`,
  paramRedirectUri: _`<b>redirect_uri</b>: Trage die client_id in ein "hidden field" ein: Laß uns wissen,
    wohin wir zurückleiten sollen, nachdem die Authentifizierung komplett ist`,
  lead1: 'Die Benutzer melden sich mit ihrer Domain an',
  text1: _`Nachdem die Benutzer ihre Domain in die Sign-In Form eingegeben und übermittelt haben,
    scannt IndieAuth die Domain auf der Suche nach rel="me" Links von Anbietern,
    die es kennt (siehe <a href="./index.html#providers">Supported Providers</a>).
    Außerdem verifiziert es, daß Webseiten Dritter zurückverlinken zur Domain der Benutzer
    (ebenfalls mit einem rel="me" Link).`,
  lead2: 'Die Benutzer werden zu deiner Seite zurückgebracht',
  text2: _`Wenn alles erfolgreich ist, wird der Benutzer zur redirect_uri (Form Parameter) geleitet.
    Ein Token findet sich in den Query String Parametern.`,
  lead3: 'Verifiziere den Authentifizierungs-Code mit indieauth.com',
  text3: _`An diesem Punkt angekommen musst du den Code verifizieren um die Domain des
    authentifizierten Benutzers zu bekommen. Stelle eine POST Anfrage an indieauth.com/auth
    mit dem Code und allen Originalparametern der Anfrage und Du bekommst den Domainnamen
    des authentifizierten Benutzers zurück.`,
  lead4: 'Fertig!',
  text4: _`Nun kennst Du die Domain, die der authentifizierten Person gehört.
    Du kannst die Domain in einer sicheren Session speichern und Benutzer
    sind mit ihrer Domain-Identität angemeldet. Kümmer dich nicht darum ob sie
    mit YouTube, Twitter oder Github eingeloggt sind, ihre Identität ist ihre
    Domain! Du brauchst Dich nicht um doppelte Accounts zu kümmern.`
};

export default messages;
