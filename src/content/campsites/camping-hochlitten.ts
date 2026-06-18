import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-hochlitten";

const campingHochlitten: CampsiteConfig = {
  name: "Camping Hochlitten",
  shortName: "Hochlitten",
  slug: "camping-hochlitten",
  ort: "Riefensberg",
  region: "Bregenzerwald",
  brandKind: "Camping & Ferienhaus",
  regionLong: "Bregenzerwald · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Sommer wie Winter auf 1.000 Metern",
  claimEmphasis: "1.000 Metern",
  emailDetail: "die Lage auf 1.000 Metern direkt am Skigebiet Hochlitten",
  intro:
    "Ein kleiner, terrassierter Panoramaplatz auf 1.000 Metern Seehöhe: Hier campst du mitten im Wander- und Skigebiet Hochlitten — ganzjährig geöffnet, mit Hund und Kindern herzlich willkommen.",

  statement: {
    text: "Hier steigst du im Winter direkt vor dem Vorzelt in die Skipiste ein.",
    emphasis: "direkt vor dem Vorzelt",
  },

  pillars: [
    {
      title: "Sommer am Berg",
      text: "Frische Bergluft, weite Wiesen und Abende, an denen die Sonne hinter den Hügeln versinkt.",
      image: { src: `${IMG}/gallery-29fd679296.webp`, alt: "Sonnenuntergang über dem Campingplatz Hochlitten im Sommer" },
    },
    {
      title: "Winterzauber",
      text: "Wenn Schnee den Platz überzuckert, beginnt Skifahren und Langlaufen gleich vor deinem Wohnwagen.",
      image: { src: `${IMG}/gallery-33cd24d026.webp`, alt: "Sonnenaufgang über dem winterlichen Campingplatz Hochlitten" },
    },
    {
      title: "Aussicht inklusive",
      text: "Von der Terrasse blickst du über das terrassierte Gelände weit in die Berge des Bregenzerwaldes.",
      image: { src: `${IMG}/amenity-017ec93e67.webp`, alt: "Terrasse mit Blick ins Grüne am Camping Hochlitten" },
    },
  ],

  usps: [
    "Auf 1.000 m Seehöhe",
    "Ganzjährig geöffnet",
    "Ski in – Ski out",
    "Nur 90 Stellplätze",
    "Hunde willkommen",
    "Bregenzerwald Card gratis",
  ],

  trust: {
    heading: "Klein, hoch gelegen, das ganze Jahr offen",
    headingEmphasis: "das ganze Jahr offen",
    intro:
      "Nur 90 Plätze auf einem terrassierten Hang, 1.000 Meter hoch im Bregenzerwald: Hier kennst du deine Nachbarn, der Räumdienst kommt mit dem Traktor und Kinder bis 20 Jahre sind beim Dauercamping inklusive.",
  },

  awards: [],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-2a01fc4a14.webp`, alt: "Camping Hochlitten im Sommer — Wohnwagen auf der Bergwiese mit Blick in den Bregenzerwald" },
  },

  breather: {
    image: { src: `${IMG}/gallery-1ee19db7d1.webp`, alt: "Tief verschneiter Campingplatz Hochlitten mit Panorama über den Bregenzerwald" },
    line: "Tief verschneit auf 1.000 Metern — Winter, wie er sein soll.",
  },

  camping: {
    heading: "Camping zwischen Pisten und Wanderwegen",
    intro:
      "Terrassierte Stellplätze, exklusive Sanitäranlagen und im Winter Ski in–Ski out: Am Hochlitten hast du alles, was einen entspannten Campingtag ausmacht — Sommer wie Winter.",
    features: [
      {
        title: "Ski in – Ski out",
        text: "Das Skigebiet Hochlitten beginnt direkt am Platz — morgens vom Wohnwagen auf die präparierte Piste.",
        image: { src: `${IMG}/gallery-43ef398334.webp`, alt: "Geräumte Zufahrt zum Skigebiet am Campingplatz Hochlitten im Winter" },
      },
      {
        title: "Wintercamping",
        text: "Auch tief verschneit bleibt dein Platz erreichbar — auf der Fahrstraße kommst du das ganze Jahr herauf.",
        image: { src: `${IMG}/gallery-f73cbf2e7b.webp`, alt: "Eingeschneite Wohnwagen am Campingplatz Hochlitten bei blauem Himmel" },
      },
      {
        title: "Sonnenterrasse",
        text: "Geschützte Sitzplätze unter Sonnenschirmen — der ideale Ort für Kaffee, Jause und den Blick ins Tal.",
        image: { src: `${IMG}/amenity-3e90bc26a0.webp`, alt: "Bestuhlte Terrasse mit Sonnenschirmen am Camping Hochlitten" },
      },
      {
        title: "Gemütliche Rückzugsorte",
        text: "Lauschige Ecken zum Ausruhen laden zwischen Bergpanorama und Kaminholz zum Verweilen ein.",
        image: { src: `${IMG}/amenity-7f4b0d8434.webp`, alt: "Gemütliche Sitzgelegenheit mit Kissen am Camping Hochlitten" },
      },
      {
        title: "Traktor-Schleppdienst",
        text: "Bist du im Winter vor dem Räumdienst da, zieht dich der hauseigene Traktor nach Voranmeldung herauf.",
        image: { src: `${IMG}/gallery-b88522e652.webp`, alt: "Wintercamper beim Schneeräumen am Campingplatz Hochlitten" },
      },
      {
        title: "Frühstück auf Wunsch",
        text: "Im Ferienhaus Berghof gibt es ein reichhaltiges Frühstücksbuffet — buchbar auch mit Verpflegung.",
        image: { src: `${IMG}/amenity-b158dc56c8.webp`, alt: "Reichhaltiges Frühstücksbuffet im Ferienhaus Berghof" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg auf den Hochlitten",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Bregenz über Langen–Doren–Krumbach Richtung Oberstaufen nach Riefensberg, im Dorf Richtung Skilifte — Camping Hochlitten 2 km.",
      },
      {
        title: "Von Oberstaufen",
        text: "Aus dem Allgäu Richtung Aach, in Riefensberg kurz vor der Tankstelle links Richtung Skilifte — nur 7 Minuten bis zum Platz.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Bregenz, von dort mit Bus oder Taxi in den Bregenzerwald nach Riefensberg.",
      },
    ],
  },

  galerie: {
    heading: "Vom Eulenweg bis zum Bogenparcours",
    headingEmphasis: "Eulenweg",
    intro:
      "Wandern mit Kindern, Bogenschießen im Wald und Gipfeltouren vor der Haustür — ein paar Eindrücke aus der Region rund um Hochlitten.",
    tag: "Rund ums Jahr",
    images: [
      { src: `${IMG}/activity-bac10fe6d8.webp`, alt: "Familie beim Bergwandern an einem Bergsee im Bregenzerwald" },
      { src: `${IMG}/kids-3f76f546b8.webp`, alt: "Kinder entdecken die Natur am Eulen-Weg in Riefensberg" },
      { src: `${IMG}/gallery-f4c4be8887.webp`, alt: "Bogenschießen mit der Familie im 3D-Parcours bei Hochlitten" },
      { src: `${IMG}/kids-b7c6e823fb.webp`, alt: "Kinder beim Bogenschießen im Wald nahe dem Campingplatz" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Hochlitten",
    headingEmphasis: "am Hochlitten",
    intro: "Wähle Zeitraum und Personen — wir bestätigen deine Anfrage persönlich per E-Mail.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatzpreise pro Nacht (Nebensaison). Zzgl. pro Person/Nacht: Erwachsener € 10, Kind 2–12 J. € 8,30 und Kurtaxe € 2,10 (ab 14 J.). Umweltabgabe € 5,40 pro Stellplatz/Nacht. Strom € 1/kWh.",
    highlight: {
      title: "Bregenzerwald Card inklusive",
      text: "Ab 3 Nächten fährst du mit Bergbahnen, Bussen und in Schwimmbäder gratis.",
    },
    categories: [
      { id: "wohnmobil", label: "Wohnmobil / VW-Bus", perNight: 14.2 },
      { id: "caravan", label: "Caravan", perNight: 12.5 },
      { id: "zelt", label: "Zelt", perNight: 12.5 },
      { id: "igluzelt", label: "Igluzelt", perNight: 11.7 },
    ],
  },

  kontakt: {
    tel: "+43 5513 8291",
    telHref: "tel:+4355138291",
    mail: "info@berghof-camping.at",
    adresse: "Riefensberg 238 · 6943 Riefensberg · Vorarlberg",
    coords: { lat: 47.509299, lng: 9.978719 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Ski in–Ski out", href: "#camping" },
      ],
    },
    { label: "Eindrücke", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingHochlitten;
