// Arrays of messages for different time groups
const messages = {
    FridayAfternoon: [
        "Dnes je krásný den.",
        "Vypni mobil, běž něco zažít 😉",
        "S tancem je všechno lepší.",
        "DIGITÁLNÍ DETOX!",
        "Maňana es un nuevo dia.",
        "Krása tkví v rozmanitosti a nesouměrnosti.",
        "😊",
        "Začínáme zlehka.",
        "Tanec pozitivně ovlivňuje mozek.",
        "Mám svou písničku, která mi vždy zlepší náladu.",
        "Když musíš, tak musíš.",
        "Dýchání ústy je nejlepší předpoklad pro špatné zdraví.",
        "Jibun o semenaide.",
        "Rytmus je součástí každodenního života.",
        "Spokojený život ctí zásadu vyváženosti.",
        "Každá žena si zaslouží krásné šaty.",
        "Nezapomeň, že …",
        "Vyhoď (Věnuj) to, co ti neslouží.",
        "Důvěřuj svým instinktům.",
        "I pád na obličej je pohyb kupředu."
    ],
    SaturdayMorning: [
        "Po ránu se stačí jen párkrát zhluboka nadechnout.",
        "Dávej pravou nohu před levou a dojdeš, kam potřebuješ.",
        "Za oknem máš celý svět.",
        "Dance, dance, dance, dance.",
        "Itadakimas.",
        "Nic tě nemůže zastavit.",
        "Kulaté jídlo chutná sladce.",
        "Hlídej si hladinu svého CO2.",
        "Chodit bosky je nejlepší masáž.",
        "Po každé hodině vyměň ponožky, ať se plíseň nedostane na nožky.",
        "😉",
        "Šinrin-joku",
        "Sobotní energické dopoledne.",
        "Užívej každou chvilku. Nebude se opakovat.",
        "Pestrá strava – základ jídelníčku.",
        "#zapomennavykladniskrin",
        "Těstovinový salát nebo salát s těstovinami?",
        "Pozor na upřednostňování „selského rozumu“ před fakty.",
        "Ostatní ti často radí to, co by nejraději slyšeli sami.",
        "Tekutá strava vede k ucpání uší."
    ],
 SaturdayMidday: [
        "Nejkrásnější make-up je úsměv.",
        "Capuccino? Filtrovaná? Bez kofeinu?",
        "Mozuk si dopltí strávná písmena.",
        "Hula je hawaiský tanec vyprávějící historii.",
         "Hledej krásu v maličkostech.",
        "Věci, co tě děsí, dělej denně… a přestanou být děsivé.",
        "Všechno, co potřebuješ, už máš.",
        "Čas pro Vás a Vaše preference.",
        "Nejlepším muzikálem všech dob je …",
        "Genetika se dá ovlivnit, nejedná se o zákon tesaný do kamene.",
        "Pestré, sezónní, lokální.",
        "Koupit hambureger v nemocničním bufetu je jako dát si zákusek před zubním hygienistou.",
        "Když nevíš kudy kam, vylez na strom.",
        "Vyhýbej se argumentačním faulům.",
        "Tanec je přirozenější než řeč, člověka provází odjakživa.",
        "Propojování hemisfér podporuje psychickou pohodu.",
        "Drobné podnikání je budoucností prosperující společnosti.",
        "Dancing In The Street.",
        "Danza intuitiva.",
        "Lidské tělo s doteky prospívá."

    ],
    SaturdayAfternoon: [
        "Good afternoon! Enjoy your Saturday!",
        "Hope you're having a great Saturday afternoon!",
        "Make the most of your Saturday afternoon!",
        "Největší génius byl vynálezce postele.",
        "Mysli na své nohy. Vždy tě donesly, kam bylo třeba.",
        "Supérate, amiga!",
        "Zpívej si každý den.",
        "Sometimes All It Takes Is One Beat.",
        "Společné zážitky zachyť na fotografiích.",
        "Vyber píseň, na kterou budeme tančit.",
        "KAJAK EJ UKTÁPZOP KAJAK.",
        "Mai dire mai.",
        "Flamenco není jen tanec, je to celá kultura",
        "Nejlepší taneční film všech dob je…",
        "UMAMI",
        "Ve společnosti druhých sní člověk víc.",
        "Chipsy, které nekřupou, jsou …",
        "Zvol si knihu, kterou si v létě přečteš.",
        "V pracovní oblasti nezapomínej na Ikigai.",
        "Být líný je normální.",
        "Deprese nesnáší pohyb.",
        "Smích je fyziologie, radost psychologie.",
        "Jako malá jsem milovala…"
    ],
    SundayMorning: [
        "?",
        "Dnes ti to moc sluší.",
        "Dýchej nosem a zhluboka.",
        "Dnes bych si přála …",
        "Danza, nutrisao, estyllo de vida.",
        "Nádech, výdech. Nádech, výdech.",
        "Začni den s vděčností.",
        "Tanec není výsada. Je to právo každého člověka.",
        "Co znamená Brujita?",
        "„Nemáte vůbec zač“ není pravda.",
        "To nejlepší nakonec.",
        "Tanči, jako když se nikdo nedívá.",
        "Tente novamente.",
        "Country tanec – Line Dancing.",
        "Co můžeš udělat dnes, odlož na pozítří – a zítřek máš volný.",
        "Společně strávené chvíle.",
        "Jsi dost dobrá. Nemusíš nikomu nic dokazovat.",
        "La Bailarina znamená tanečnice",
        "Zrovna mi v hlavě zní tahle píseň…",
        "Začínej den časem pro sebe.",
        "Ticho je léčivé."
    ],
};

// Function to get the current day and time
function getCurrentDayAndTime() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hourOfDay = now.getHours(); // 0-23
    return { dayOfWeek, hourOfDay };
}

// Function to generate and display a random message based on current time
function generateMessage() {
    const { dayOfWeek, hourOfDay } = getCurrentDayAndTime();

    let messageGroup;

    // Determine the appropriate message group based on the current day and time
    switch (dayOfWeek) {
        case 5: // Friday
            if (hourOfDay >= 15 && hourOfDay < 20) {
                messageGroup = messages.FridayAfternoon;
            }
            break;
        case 6: // Saturday
            if (hourOfDay >= 0 && hourOfDay < 12) {
                messageGroup = messages.SaturdayMorning;
            } else if (hourOfDay >= 12 && hourOfDay < 16.50) {
                messageGroup = messages.SaturdayMidday;
            }
            } else if (hourOfDay >= 16.50 && hourOfDay < 0) {
                messageGroup = messages.SaturdayAfternoon;
            }
            break;
        case 0: // Sunday
            if (hourOfDay >= 0 && hourOfDay < 14) {
                messageGroup = messages.SundayMorning;
            }
            break;
    }

    if (messageGroup) {
        // Get a random message from the selected group
        const randomIndex = Math.floor(Math.random() * messageGroup.length);
        // Display the selected message
        document.getElementById('message').textContent = messageGroup[randomIndex];
    } else {
        document.getElementById('message').textContent = "Sorry, no messages available for this time.";
    }
}
