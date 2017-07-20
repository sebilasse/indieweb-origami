import { _ } from '../../../../util/string/main';
const messages = {
  faq: 'Oft gestellte Fragen',
  q1: 'Wie unterscheidet sich das von OpenID?',
  a1: _`Die Ziele von OpenID und IndieAuth sind ähnlich. Beide ermutigen dich, beim Anmelden bei
    einer Webseite deinen eigenen Domainnamen zu verwenden. Wie auch immer, OpenID verfehlte
    eine breite Unterstützung, zumindest in Hinsicht auf die Komplexität des Protokolls.
    IndieAuth ist eine einfachere Implementation des gleichen Ziels, indem es andere
    OAuth Provider zulässt und Verhalten adoptiert, an das Menschen bereits gewöhnt sind`,
  q2: 'Können die rel="me" Links auf meiner Homepage versteckt sein?',
  a2: _`Ja, deine rel="me" links müssen nicht sichtbar sein, aber das html Fragment muss sich
    auf deiner Homepage befinden. Du kannst die links mit CSS verstecken, oder erfasse sie
    als &lt;link&gt; tags in deinem html head.`,
  q3: 'Und wenn ein rel="me" Link privat ist?',
  a3: `Wir arbeiten an einer Lösung mit JWT. Infos folgen.`,
  q4: 'Müssen Benutzer einen Domainnamen besitzen?',
  a4: _`Ja &mdash; die Annahme ist, daß die Leute bereit sind, ihre
    <a href="http://indiewebcamp.com/why">eigenen Online Identitäten</a>
    in der Form eines Domainnamens zu besitzen. Es wird einfacher und einfacher, Inhalte auf deiner
    eigenen Domain bereitzustellen. Siehe
    "<a href="http://indiewebcamp.com/Getting_Started">Getting Started on the Indie Web</a>"
    für einige Vorschläge, inkl. "Mapping your domain to a Tumblr blog", oder melde Dich bei
    einem Webhoster an, z. B. <a href="https://www.uberspace.de">Uberspace</a>
    oder <a href="http://www.dreamhost.com/r.cgi?426455">Dreamhost</a>.`,
  q5: 'Aber macht mich das nicht abhängig von Eurer Seite, indieauth.com?',
  a5: _`Dieser Service existiert für Webseitenbetreiber, die nicht eigenen OAuth code
    für jeden Provider bereitstellen wollen. Als anmeldende BenutzerIn brauchst Du dir keine Sorgen zu machen,
    ob die Seite indieauth.com oder einen anderen RelMeAuth Service benutzt.`,
  q6: 'Was ist, wenn IndieAuth.com nicht erreichbar ist?',
  a6: _`Wenn eine Anwendung IndieAuth.com als Auth Service benutzt und IndieAuth.com ist nicht erreichbar,
    dann werden LogIns zu dieser Webseite nicht funktionieren, aber das ist dasselbe als wenn der eigene
    interne Auth Service down ist. Wegen dieses potentiellen Risikos ist es möglich, das Anwendungen eine
    eigene Instanz von IndieAuth (Ruby, node.js) betreiben oder einen anderen
    <a href="http://indiewebcamp.com/RelMeAuth">RelMeAuth</a> Service direkt nutzten um nicht von
    Dritten abhängig zu sein.`,
  q7: 'Ich betreibe einen Authentifikationsanbieter, wie kommt der in die "supported providers" Liste?',
  a7: _`Neue Provider sind sehr willkommen! Das Ziel ist es, soviele Benutzer wie möglich zu unterstützen.
    Das musst Du tun um von IndieAuth unterstützt zu werden:`,
  a7_1: _`Stelle sicher, daß deine Benutzer eine Möglichkeit haben, ihre Webseiten-Adresse in der "Profil"
    Sektion Deiner Anbieterseite zu veröffentlichen`,
  a7_2: _`Wo das HTML der Benutzer-Seite gerendert wird, stelle sicher, das ein
    <a href="http://microformats.org/wiki/rel-me">rel="me"</a> Attribut im Linktag ist.`,
  a7_3: 'Schreibe einen client um die Authentifizierung mit deiner API zu erledigen und übermittle es.',
  a7_4: _`Integriere den neuen Provider in die IndieAuth source codes, oder öffne einfach
    <a href="https://github.com/aaronpk/IndieAuth/issues/new">ein issue</a> mit deiner Anfrage.`,
  q8: 'Warum wird Google+ momentan nicht unterstützt?',
  a8: _`Google+ Profile haben alle rel="me" Attribute bei Links verloren.
    Dies war das Resultat, als google das "klassische google plus" in 2017 eingestellt hat ...<br>
    YouTube wird unterstützt.`,
  q9: 'Warum muß IndieAuth.com meine tweets und wem ich folge sehen?',
  a9: _`IndieAuth.com fragt jeden OAuth Provider nach minimalen Erlaubnissen.
    In manchen Fällen haben Anbieter keinen "scope", das nur die Identität verifiziert
    ohne gleichzeitig Daten auszuliefern, wie z. B. öffentliche tweets.`
};

export default messages;
