export type Language = 'en';

export const content = {
  en: {
    nav: {
      landing: "Home",
      story: "Story",
      invitation: "Invitation",
      schedule: "Schedule",
      dressCode: "Details",
      accommodation: "Travel",
      thingsToDo: "Explore",
      faq: "FAQ",
      gallery: "Gallery"
    },
    hero: {
      names: "Olivia Chen & Marcus Dawn",
      date: "5 March 2027",
      venue: "The Silo Gallery · Cape Town",
      rsvpBtn: "RSVP"
    },
    story: {
      subtitle: "Where art met architecture",
      title: "Our Story",
      p1: "They met at an architectural exhibition in the V&A Waterfront — she was presenting her latest installation, he was sketching concepts for a new gallery space. A shared critique of brutalism turned into coffee, which turned into dinner, which turned into a collaboration that neither had planned.",
      p2: "Their love story was built like the structures they admired: slow, deliberate, and designed to last. Weekends were spent exploring galleries, debating design philosophies, and discovering that the most beautiful structures aren't made of glass and steel — they're built with trust, patience, and quiet understanding.",
      p3: "On a clear summer evening at the top of Table Mountain, with the city lights beginning to twinkle below, Marcus presented Olivia with a ring that echoed the clean lines of a Bauhaus masterpiece. Simple. Elegant. Perfect.",
      p4: "Today, they invite you to celebrate their union at The Silo — a space where art, design, and love converge. Join them as they begin their most important creation yet: a life together."
    },
    invitation: {
      title: "The Invitation",
      intro: "Together with their families, and with hearts full of gratitude,",
      names: "Olivia Chen & Marcus Dawn",
      action: "request the honour of your presence.",
      message: "We would be delighted to have you join us as we exchange vows and celebrate the beginning of our life together.",
      datetime: "Saturday, 5 March 2027 at 16:00",
      venue: "The Silo Gallery, V&A Waterfront, Cape Town",
      attire: "Attire: Cocktail Chic / Dark Neutrals",
      closing: "Join us for an evening of elegance, art, and celebration."
    },
    schedule: {
      subtitle: "The Evening",
      title: "Schedule",
      items: [
        { time: "15:30", event: "Guest Arrival & Champagne" },
        { time: "16:00", event: "Wedding Ceremony" },
        { time: "16:45", event: "Canapés & Gallery Viewing" },
        { time: "18:30", event: "Dinner in the Silo Hall" },
        { time: "20:00", event: "Speeches & Toast" },
        { time: "21:00", event: "Dancing & Celebration" }
      ]
    },
    details: {
      title: "Details & RSVP",
      attireSubtitle: "Dress Code",
      attireTitle: "Cocktail Chic",
      attireIntro: "We invite you to dress in dark neutrals and elegant cocktail attire.",
      attireList: [
        "For gentlemen: A dark suit, no tie required. Think charcoal, navy, or black.",
        "For ladies: A sleek cocktail dress or elegant jumpsuit in neutral tones.",
        "Minimalist jewellery and clean silhouettes that mirror the gallery aesthetic."
      ],
      rsvpSubtitle: "Join Us",
      rsvpTitle: "RSVP",
      rsvpText: "We kindly ask that you confirm your attendance before 15 February 2027. Your presence is the greatest gift.",
      dietarySubtitle: "Menu",
      dietaryTitle: "Dietary Requirements",
      dietaryText: "Our menu is a curated culinary experience. Please let us know of any dietary requirements so we can ensure everything is perfect.",
      thankYou: "Thank You",
      form: {
        name: "Full Name(s)",
        cellphone: "Cellphone Number",
        cellphonePlaceholder: "082 123 4567",
        attending: "Number Attending",
        dietary: "Dietary Requirements",
        message: "A Note for the Couple",
        submit: "Submit RSVP",
        duplicateError: "It looks like you've already RSVP'd with this number!",
        networkError: "Failed to connect to the server. Please check your connection.",
        genericError: "Something went wrong. Please try again later."
      }
    },
    accommodation: {
      subtitle: "Where to Stay",
      title: "Accommodation & Travel",
      intro: "Cape Town offers a wealth of exceptional accommodation. We've curated a selection of options to suit every preference.",
      onsiteTitle: "Curated Stays",
      onsiteList: [
        "Book early — March is a beautiful month in Cape Town and accommodation fills quickly.",
        "The V&A Waterfront area offers the most convenient access to the venue.",
        "Consider boutique hotels in the City Bowl for a true Cape Town experience."
      ],
      tableTitle: "Recommended Accommodation",
      tableHeaders: ["Accommodation", "Dist.", "Est. p/n", "Website"],
      tableData: [
        ["The Silo Hotel (Venue)", "0 km", "R 8,000+", "silo-hotel.com"],
        ["Cape Grace Hotel", "~1 km", "R 5,500+", "capegrace.com"],
        ["The Table Bay Hotel", "~1 km", "R 4,500+", "tablebayhotel.com"],
        ["V&A Waterfront Apts", "~1 km", "R 3,000+", "waterfrontapts.co.za"],
        ["Queen Victoria Hotel", "~2 km", "R 4,000+", "queenvictoriahotel.com"],
        ["The Andros Boutique", "~5 km", "R 3,500+", "andros.co.za"],
        ["Airbnbs in City Bowl", "~3-8 km", "R 1,500+", "airbnb.com"]
      ],
      transportTitle: "Getting Around",
      transportList: [
        "E-hailing: Uber and Bolt are readily available throughout Cape Town.",
        "Shuttles: We recommend pre-booking transfers from the airport.",
        "Parking: Secure parking is available at the V&A Waterfront."
      ],
      shuttleTitle: "Recommended Transfers",
      shuttleData: [
        ["Cape Town Transfers", "capetowntransfers.co.za"],
        ["Airport Shuttle Direct", "airportshuttle.co.za"],
        ["Winelands Shuttle Service", "winelandsshuttle.co.za"]
      ]
    },
    faq: {
      subtitle: "Questions",
      title: "FAQ",
      questions: [
        {
          q: "Where is the venue exactly?",
          a: "The Silo Gallery is located in the V&A Waterfront, Cape Town. It's the building with the iconic glass windows — you can't miss it!"
        },
        {
          q: "Is there parking?",
          a: "Yes, secure parking is available at the V&A Waterfront parking garages, a short walk from the venue."
        },
        {
          q: "Can I bring a plus-one?",
          a: "Due to the curated nature of our guest list, we kindly ask that only those named on the invitation attend."
        },
        {
          q: "What is the dress code?",
          a: "Cocktail chic in dark neutrals. Think elegant, sophisticated, and gallery-appropriate."
        },
        {
          q: "When should I RSVP by?",
          a: "Please RSVP by 15 February 2027."
        }
      ]
    },
    thingsToDo: {
      subtitle: "Discover Cape Town",
      title: "Things to Do",
      intro: "Make a weekend of it! Cape Town is one of the most beautiful cities in the world. Here are our recommendations:",
      list: [
        { name: "Table Mountain Aerial Cableway", desc: "The iconic experience — take the cable car up for panoramic views of the city." },
        { name: "V&A Waterfront", desc: "Shopping, dining, and entertainment right at your doorstep." },
        { name: "Zeitz MOCAA", desc: "Africa's largest contemporary art museum, housed in a historic grain silo." },
        { name: "Kirstenbosch Botanical Gardens", desc: "World-renowned gardens against the eastern slopes of Table Mountain." },
        { name: "Boulders Beach Penguins", desc: "Visit the famous African penguin colony in Simon's Town." },
        { name: "Cape Winelands Day Trip", desc: "Stellenbosch, Franschhoek, and Constantia are all within an hour's drive." }
      ]
    },
    gallery: {
      subtitle: "Moments",
      title: "Gallery"
    },
    footer: {
      text: "Olivia & Marcus · 5 March 2027"
    }
  }
};
