// El JSON con los datos de las pruebas y los atletas
const config = `[
    {
        "prueba": "60m (m)",
        "atletas": [
            "Seleccionar",
            "AFRIFA Elvis",
            "AKINOLA Toluwabori",
            "ANSAH-PEPRAH Lucas",
            "AWUAH BAFFOUR Stephen",
            "AY Mustafa",
            "AZU Jeremiah",
            "BURNET Taymir",
            "CECCARELLI Samuele",
            "CRESPI Guillem",
            "DAMBRAUSKAS Adas",
            "EKPO Nsikak",
            "GANTER Robin",
            "GKARAGKANIS Sotirios",
            "GLAVE Romell",
            "GRILLO Beppe",
            "HANSEN Simon",
            "ILIEV Hristo",
            "ILLOVSZKY Dominik",
            "JORDAN Abel",
            "KARAMANOLOV Nikola",
            "KIJANOVIĆ Aleksa",
            "KRANZ Kevin",
            "LAGUI Allan",
            "LARSSON Henrik",
            "MYRIANTHOPOULOS Vasileios",
            "NASCIMENTO Carlos",
            "NAZAROV Karl",
            "OTUGADE John",
            "PANAGIOTOPOULOS Nikolaos",
            "PENALVER Sean",
            "REAIS William",
            "ROBERTSON Andrew",
            "SANSOVINI Francesco",
            "SANTOS Delvis",
            "SPIERING Timo",
            "VOLKO Ján",
            "VUORI Eino",
            "WDOWIK Oliwer",
            "WOLF Yannick",
            "ZIRIGNON Jean-Christian",
            "ÖRN Santeri",
            "ÖZKAN Ertan",
            "ČURIN PRAPOTNIK Anej"
        ]
    },
    {
        "prueba": "400m (m)",
        "atletas": [
            "Seleccionar",
            "ANDANT Téo",
            "BONEVACIA Liemarvin",
            "BUJNA Šimon",
            "BURRAJ Franko",
            "CAÑAL Iñaki",
            "COELHO João",
            "DESENSKÝ Michal",
            "ELKHATIB Omar",
            "ENYINGI Patrik",
            "FERLAN Rok",
            "FERNANDEZ Markel",
            "HAYDOCK-WILSON Alex",
            "HUSILLOS Óscar",
            "INGVALDSEN Håvard",
            "KIJANOVIĆ Boško",
            "KLEIN IKKINK Isaya",
            "KRSEK Matěj",
            "MOLNÁR Attila",
            "OKORO Efekemo",
            "OMALLA Eugene",
            "PETRUCCIANI Ricky",
            "PHIJFFERS Jonas",
            "POHORILKO Oleksandr",
            "SACOOR Jonathan",
            "SEGERS Daniel",
            "SITO Luca",
            "SOUDRIL Jimy",
            "SPILLMANN Yann",
            "SPITZ Lionel",
            "SZWED Maksymilian",
            "TAVARES Ericsson"
        ]
    },
    {
        "prueba": "800m (m)",
        "atletas": [
            "Seleccionar",
            "BARONTINI Simone",
            "BLOUDEK Marino",
            "CANALES Elvin",
            "CHAPPLE Samuel",
            "CLARKE Ryan",
            "CRESTAN Eliott",
            "DAVIES Justin",
            "DE ARRIBA Álvaro",
            "DE SMET Tibo",
            "DODDS Callum",
            "DUDYCHA Jakub",
            "ENGLISH Mark",
            "GARCÍA Mariano",
            "GRØNSTAD Tobias",
            "HIGGINS Jack",
            "KITLIŃSKI Bartosz",
            "KOTYZA Daniel",
            "KRAMER Andreas",
            "KRONBERGS Uku",
            "LAZZARO Giovanni",
            "LE CLEZIO Corentin",
            "MCPHILLIPS Cian",
            "MEZIANE Yanis",
            "OUERRAT Louey",
            "PELIZZA Ivan",
            "PERNICI Francesco",
            "RANDOLPH Thomas",
            "SIERADZKI Patryk",
            "SISK Pieter",
            "TECUCEANU Catalin",
            "WIPFLI Ramon",
            "WYDERKA Maciej"
        ]
    },
    {
        "prueba": "1500m (m)",
        "atletas": [
            "Seleccionar",
            "ABDI ALI Mahadi",
            "ANSELMINI Paul",
            "ATTAOUI Mohamed",
            "BALTUS Noah",
            "DOYLE Cathal",
            "FARKEN Robert",
            "FONTES Ignacio",
            "GILAVERT Louis",
            "GILES Elliot",
            "GOURLEY Neil",
            "HABZ Azeddine",
            "INGEBRIGTSEN Jakob",
            "KEEN Thomas",
            "MKRTCHYAN Yervand",
            "MOYA Pol",
            "NADER Isaac",
            "PALLITSCH Raphael",
            "PEREIRA Nuno",
            "PIHLSTRÖM Samuel",
            "PROBST Marius",
            "RAK Filip",
            "RINNE Joonas",
            "RIVA Federico",
            "SISK Pieter",
            "VAN RIEL Robin",
            "VERHEYDEN Ruben",
            "VERMEULEN Jochem"
        ]
    },
    {
        "prueba": "3000m (m)",
        "atletas": [
            "Seleccionar",
            "ABDI ALI Mahadi",
            "ALMGREN Andreas",
            "AUGUSTO Bastien",
            "BIBIĆ Elzan",
            "BREMM Florian",
            "COSCORAN Andrew",
            "FOGG Adam",
            "FOPPEN Mike",
            "GOMES Duarte",
            "GORMLEY James",
            "HABZ Azeddine",
            "HEYMANS John",
            "INGEBRIGTSEN Filip",
            "INGEBRIGTSEN Jakob",
            "LAROS Niels",
            "MAGNUSSON Baldvin",
            "MCLUCKIE Henry",
            "MILLS George",
            "MOREIRA Miguel",
            "MORNET Romain",
            "NILLESSEN Stefan",
            "NORDÅS Narve",
            "PARSONS Sam",
            "THORWIRTH Maximilian",
            "VERHEYDEN Ruben",
            "WEST James"
        ]
    },
    {
        "prueba": "60m vallas (m)",
        "atletas": [
            "Seleccionar",
            "ANTON Alin",
            "BACARI Elie",
            "BELOCIAN Wilhem",
            "CZYKIER Damian",
            "DEMŠAR Filip",
            "DIESSL Enzo",
            "ESZES Dániel",
            "FOFANA Hassane",
            "GEERDS Job",
            "GIACALONE Nicolo'",
            "GORIOLA Daniel",
            "JAQUET Mathieu",
            "JORDAN Abel",
            "JOSEPH Jason",
            "KILJAN Krzysztof",
            "KOSTER Timme",
            "KUUSINIEMI Santeri",
            "KWAOU-MATHEY Just",
            "LAKKA Elmo",
            "LARRINAGA Abdel",
            "LLOPIS Enrique",
            "MARTINOT-LAGARDE Pascal",
            "MARTÍNEZ Asier",
            "MINOUE Gregory",
            "MORDI Manuel",
            "OBASUYI Michael",
            "PEDRE Theo",
            "ROUMTSIOS Christos-Panagiotis",
            "SEVLER Mikdat",
            "SIMONELLI Lorenzo",
            "SMET Koen",
            "SZELES Bálint",
            "SZYMAŃSKI Jakub",
            "VAN HELLEMONDT Joas"
        ]
    },
    {
        "prueba": "Altura (m)",
        "atletas": [
            "Seleccionar",
            "ACET Alperen",
            "AMELS Douwe",
            "CARMOY Thomas",
            "DELRYD Fabian",
            "DOROSHCHUK Oleh",
            "FASSINOTTI Marco",
            "IVANOV Tihomir",
            "JANKOVICS Dániel",
            "KAPITOLNIK Jonathan",
            "KOSONEN Daniel",
            "KRAVCHUK Vadym",
            "LANDO Manuel",
            "LYCKE HOLM Melwin",
            "MELONI Eugenio",
            "MERLOS Antonios",
            "NIKITIN Dmytro",
            "POTYE Tobias",
            "SIOLI Matteo",
            "ŠTEFELA Jan"
        ]
    },
    {
        "prueba": "Pértiga (m)",
        "atletas": [
            "Seleccionar",
            "BLECH Torben",
            "BROEDERS Ben",
            "COLLET Thibaut",
            "GUTTORMSEN Sondre",
            "HOLÝ David",
            "KARALIS Emmanouil",
            "KREIŠS Valters",
            "KUJANPÄÄ Urho",
            "LAVILLENIE Renaud",
            "LISEK Piotr",
            "LITA BAEHRE Bo Kanda",
            "RIZOS Ioannis",
            "SOBERA Robert",
            "THIERY Baptiste",
            "VLOON Menno",
            "ZERNIKEL Oleg",
            "ŞAŞMA Ersu",
            "ŠČERBA Matěj"
        ]
    },
    {
        "prueba": "Longitud (m)",
        "atletas": [
            "Seleccionar",
            "BALDÉ Gerson",
            "BOŠKOVIĆ Luka",
            "DUBYNA Danylo",
            "EGILSSON Daníel",
            "FARKAŠ Roko",
            "FURLANI Mattia",
            "GUERRA Jaime",
            "JUŠKA Radek",
            "LESCAY Lester",
            "MONTLER Thobias",
            "PRAVDICA Filip",
            "PULLI Kristian",
            "SALMINEN Kalle",
            "SARÂBOYUKOV Bozhidar",
            "TARKOWSKI Piotr",
            "TENTOGLOU Miltiadis",
            "TRAJKOVSKI Andreas",
            "ČEKO Marko"
        ]
    },
    {
        "prueba": "Triple (m)",
        "atletas": [
            "Seleccionar",
            "BIASUTTI Simone",
            "DALLAVALLE Andrea",
            "DÍAZ HERNÁNDEZ",
            "GOGOIS Thomas",
            "GRECU Răzvan",
            "HEß Max",
            "IHEMEJE Emmanuel",
            "KAUKOLAHTI Tuomas",
            "KINGLEY Endiorass",
            "MAMMADOV Rustam",
            "PEREIRA Tiago",
            "RAFFIN Melvin",
            "SHEPELIEV Vladyslav",
            "TSIAMIS Dimitrios",
            "UWAIFO Efe",
            "VESZELKA Tomáš",
            "VÂLCHEV Lâchezar",
            "WALLMARK Gabriel",
            "ÖZÜPEK Can"
        ]
    },
    {
        "prueba": "60m (f)",
        "atletas": [
            "Seleccionar",
            "AKANDE Mabel",
            "BAZOLO Lorène",
            "BESTUÉ Jaël",
            "BISSCHOPS Minke",
            "BURGHARDT Alexandra",
            "DE MASI Arianna",
            "DOSSO Zaynab",
            "EMMANOUILIDOU Polyniki",
            "EZE Joy",
            "FORSTER Viktória",
            "FOTOPOULOU Olivia",
            "FREY Géraldine",
            "HENRIKSSON Julia",
            "HONCHARENKO Diana",
            "HOOPER Gloria",
            "HUNT Amy",
            "JUNK Sophia",
            "KAMBUNDJI Mujinga",
            "KHARCHILAVA Lika",
            "KIVIKAS Ann",
            "LINDNER Magdalena",
            "MAYER Lisa",
            "MAŇASOVÁ Karolína",
            "MIHALACHE Maria",
            "MIHALINEC ZIDAR",
            "NKANSA Delphine",
            "PARNIS COLEIRO Thea",
            "PIOTROWSKA Aleksandra",
            "PÉREZ Maria Isabel",
            "ROSIUS Rani",
            "SIRAGUSA Irene",
            "SPANOUDAKI-CHATZIRIGA Rafailia",
            "SWOBODA Ewa",
            "TAKÁCS Boglárka",
            "TIRNANIĆ Milana",
            "TSOUKALA Dimitra",
            "VAN CAMP Emma",
            "VAN DEN BERG Isabel",
            "VAN DER WEKEN Patricia",
            "VAN HUNENSTIJN Marije",
            "WILLIAMS Bianca",
            "ZAHI Carolle"
        ]
    },
    {
        "prueba": "400m (f)",
        "atletas": [
            "Seleccionar",
            "ANNING Amber",
            "BAAS Mette",
            "BONORA Alessandra",
            "BROSSIER Amandine",
            "CADDEN Lauren",
            "DRLJAČIĆ Veronika",
            "ERTZGAARD Astri",
            "FRA Daniela",
            "GUBELMANN Catia",
            "HERVAS Blanca",
            "JÆGER Henriette",
            "JÍCHOVÁ Nikoleta",
            "KELLY Hannah",
            "KLAVER Lieke",
            "KUŚ Anastazja",
            "MALIK Poppy",
            "MANGIONE Alice",
            "MANUEL Lurdes",
            "MAWDSLEY Sharlene",
            "MCCANN Rachel",
            "MELNYK Tetiana",
            "PEETERS Cathelijn",
            "PETRŽILKOVÁ Tereza",
            "PIPI Ama",
            "PONETTE Helena",
            "SAALBERG Eveline",
            "SANTIDRIÁN Eva",
            "SEVILLA Paula",
            "THURESON Milja",
            "VAN DER SCHOOT Myrte",
            "VANESSA Carina",
            "VERVAET Imke",
            "VONDROVÁ Lada",
            "ŚWIĘTY-ERSETIC Justyna"
        ]
    },
    {
        "prueba": "800m (f)",
        "atletas": [
            "Seleccionar",
            "BELLÒ Elena",
            "BOFFEY Isabelle",
            "BREDLINGER Caroline",
            "COIRO Eloisa",
            "DESPOLLARI Georgia-Maria",
            "DUMAS Charlotte",
            "FORMELLA Aleksandra",
            "GAJANOVÁ Gabriela",
            "GALVYDYTĖ Gabija",
            "GARCÍA Daniela",
            "HOFFMANN Lore",
            "HORVAT Anita",
            "IBARZABAL Lorea",
            "KANDISSOUNON Léna",
            "KOLBERG Majtie",
            "KÉRI Bianka",
            "LIBERMAN Clara",
            "MITJANS Marta",
            "MÄÄTTÄNEN Eveliina",
            "NIELSEN Wilma",
            "NISSEN Annemarie",
            "NYFORS Malin",
            "PELLAUD Rachel",
            "SARNA Angelika",
            "VAN OORSCHOT Priscilla",
            "VANCARDO Veronica",
            "VANS AGNEW Grace",
            "VUKOVIĆ Nina",
            "WALLACE Erin",
            "WERRO Audrey",
            "WIELGOSZ Anna"
        ]
    },
    {
        "prueba": "1500m (f)",
        "atletas": [
            "Seleccionar",
            "AFONSO Salomé",
            "ALTORF Suus",
            "ANDERSON Hannah",
            "BERTEMES-HOFFMANN Vera",
            "CLEYET-MERLE Berenice",
            "DAMINK Marissa",
            "GUERRERO Esther",
            "GUILLEMOT Agathe",
            "HUNTER BELL Georgia",
            "KYRIAKOPOULOU Koraini",
            "LEATHER Ellie",
            "LIZAKOWSKA Weronika",
            "LLOYD Ava",
            "LØVNES Anne",
            "MARTÍNEZ Marina",
            "MEZULIÁNÍKOVÁ Diana",
            "NGARAMBE Yolanda",
            "SASÍNEK MÄKI Kristiina",
            "SILVA Patricia",
            "THØGERSEN Sofia",
            "VANDERELST Elise",
            "WALCOTT-NOLAN Revee",
            "WIND Joceline",
            "ZENONI Marta",
            "ØSTGÅRD Ingeborg"
        ]
    },
    {
        "prueba": "3000m (f)",
        "atletas": [
            "Seleccionar",
            "AFONSO Salomé",
            "BAKKER Veerle",
            "BAKRAÇI Gresa",
            "BREZA Olimpia",
            "CAUNE Agate",
            "CAVALLI Ludovica",
            "COURTNEY-BRYANT Melissa",
            "DEL BUONO Federica",
            "FITZGERALD Innes",
            "GARCÍA Marta",
            "GULIKERS Jennifer",
            "HEALY Sarah",
            "KOSTER Maureen",
            "LIZAKOWSKA Weronika",
            "MADELEINE Sarah",
            "MAJORI Micol",
            "MARQUÉS Águeda",
            "MCCANN Jodie",
            "MEYER Lea",
            "NUTTALL Hannah",
            "PRIETO Idaira",
            "ROOMS Lisa",
            "SÖDERHOLM Linn",
            "THORNER Elise",
            "VINDICS-TÓTH Lili"
        ]
    },
    {
        "prueba": "60m vallas (f)",
        "atletas": [
            "Seleccionar",
            "ALESSANDRINI Sacha",
            "ANDRESEN Lovise Skarbøvik",
            "BAPTÉ Laeticia",
            "BEITER BOMME",
            "CARMASSI Giada",
            "DI LAZZARO Elisa Maria",
            "FORSTER Viktória",
            "GLOJNARIČ Nika",
            "HARALA Lotta",
            "HURSKE Reetta",
            "JIRANOVÁ Helena",
            "JUŠKEVIČIŪTĖ Beatričė",
            "KAMBUNDJI Ditaji",
            "KESKITALO Saara",
            "KOZÁK Luca",
            "LAVIN Sarah",
            "LUKIĆ Anja",
            "MAJEWSKA Marika",
            "MEIER Marlene",
            "NEZIRI Nooralotta",
            "PESIRIDOU Elisavet",
            "PLOTITSYNA Anna",
            "SCHNEIDER Rosina",
            "SIELSKA Alicja",
            "SKRZYSZOWSKA Pia",
            "STRAMETZ Karin",
            "SUUMANN Diana",
            "TJIN-A-LIM Maayke",
            "TÓTH Anna",
            "VERLIN Kreete",
            "VISSER Nadine",
            "VON JACKOWSKI Selina",
            "WILD Mia"
        ]
    },
    {
        "prueba": "Altura (f)",
        "atletas": [
            "Seleccionar",
            "BÁTORI Lilianna",
            "CHUMACHENKO Yuliia",
            "GKOUSIN Tatiana",
            "HONSEL Christina",
            "HRUBÁ Michaela",
            "JANSONE Patrīcija",
            "JUNNILA Ella",
            "LAKE Morgan",
            "MAHUCHIKH Yaroslava",
            "NILSSON Engla",
            "ONNEN Imke",
            "PIERONI Idea",
            "PIHELA Elisabeth",
            "SAVAŞKAN Buse",
            "TABASHNYK Kateryna",
            "TOPIĆ Angelina",
            "TUURI Heta",
            "VUKOVIĆ Marija",
            "WEERMAN Britt"
        ]
    },
    {
        "prueba": "Pértiga (f)",
        "atletas": [
            "Seleccionar",
            "ADAMOPOULOU Ariadni",
            "ANDERSSON Saga",
            "BONNIN Marie-Julie",
            "BRUNI Roberta",
            "CAUDERY Molly",
            "DEHAYNAIN Alix",
            "FAYE Kitty",
            "GLADIICHUK Iana",
            "KLEKNER Hanga",
            "KNÄSCHE Anjuli",
            "LAMPELA Elina",
            "MOLINAROLO Elisa",
            "MOSER Angelica",
            "RETZIUS Lene",
            "SCARDANZAN Virginia",
            "VEKEMANS Elien",
            "ŠUTEJ Tina",
            "ŠVÁBÍKOVÁ Amálie"
        ]
    },
    {
        "prueba": "Longitud (f)",
        "atletas": [
            "Seleccionar",
            "ASSANI Mikaelle",
            "BÁNHIDI-FARKAS Petra",
            "DIAME Fátima",
            "FOTOPOULOU Filippa",
            "GARDAŠEVIĆ Milica",
            "GKOGKA Antriana",
            "HONDEMA Pauline",
            "HOPKINS Alice",
            "HOROWSKA Nikola",
            "IAPICHINO Larissa",
            "KÄLIN Annik",
            "MATUSZEWICZ Anna",
            "MIHAMBO Malaika",
            "MITKOVA Plamena",
            "MITXELENA Irati",
            "PETROKAITĖ Jogailė",
            "ROTARU-KOTTMANN Alina",
            "SARGSYAN Yana"
        ]
    },
    {
        "prueba": "Triple (f)",
        "atletas": [
            "Seleccionar",
            "DANIŞMAZ Tuğba",
            "FILIPIČ Neja",
            "GRIKŠAITĖ Aina",
            "GUILLAUME Ilionis",
            "ION Diana",
            "KILTY Dovilė",
            "KORSUN Olha",
            "KRASUTSKA Anna",
            "MADUKA Jessie",
            "PELETEIRO-COMPAORÉ Ana",
            "PETROVA Gabriela",
            "SALMINEN Senni",
            "SINEY Mariia",
            "SUCHÁ Linda",
            "TALOȘ Elena",
            "WITTMANN Kira",
            "ZAGAINOVA Diana",
            "ÅSKAG Maja"
        ]
    }
]`;

const goldenRace = "3000m (f)";
const dorsales = ['Seleccionar', ...Array.from({ length: 20 }, (_, i) => 1000 - i * 50)];
var jsonData = JSON.parse(config);
var ultimaBlobURL = null; // Variable global para almacenar el Blob URL generado previamente

/**
 * Crea un contenedor con un desplegable (<select>) relleno con las opciones proporcionadas.
 * @param {Array} opciones - Array de opciones para el desplegable.
 * @param {string} [extraClass] - (Opcional) Clase extra a aplicar al contenedor.
 * @returns {HTMLDivElement} - Contenedor con el desplegable creado.
 */
function crearOpcionesDesplegables(opciones, extraClass) {
    // Creamos un contenedor para el select con la clase "select-container"
    var contenedor = document.createElement("div");
    contenedor.classList.add("select-container");
    if (extraClass) {
        contenedor.classList.add(extraClass);
    }

    var select = document.createElement("select");

    // Añadir cada opción al desplegable
    opciones.forEach(opcionTexto => {
        var option = document.createElement("option");
        option.textContent = opcionTexto;
        option.value = opcionTexto;
        select.appendChild(option);
    });
    contenedor.appendChild(select);

    return contenedor;
}

/**
 * Crea las celdas para una entrada de prueba y las añade a la fila dada.
 * Cada entrada consta de 3 celdas: nombre de la prueba, selector de atletas y selector de dorsales.
 * Se reutiliza la función crearOpcionesDesplegables para generar los desplegables.
 * @param {string} prueba - La clave de la prueba.
 * @param {Object} datosPrueba - Objeto que contiene los datos de la prueba (por ejemplo, { prueba: "60m (m)", atletas: [...] }).
 * @param {HTMLTableRowElement} fila - La fila (tr) a la que se añadirán las celdas.
 */
function crearOpcionesPrueba(prueba, datosPrueba, fila) {
    // Celda 1: Nombre de la prueba
    var celdaPrueba = document.createElement("td");
    celdaPrueba.textContent = datosPrueba.prueba;
    fila.appendChild(celdaPrueba);
    
    // Celda 2: Selector de atletas (corredores)
    var celdaAtletas = document.createElement("td");
    var contenedorAtletas = crearOpcionesDesplegables(datosPrueba.atletas);
    celdaAtletas.appendChild(contenedorAtletas);
    fila.appendChild(celdaAtletas);
    
    // Celda 3: Selector de dorsales
    var celdaDorsal = document.createElement("td");
    var contenedorDorsales = crearOpcionesDesplegables(dorsales);
    celdaDorsal.appendChild(contenedorDorsales);
    fila.appendChild(celdaDorsal);
}

/**
 * Agrega la fila de "Golden Race" al final de la tabla.
 * Se busca en jsonData la entrada cuyo valor 'prueba' sea igual a goldenRace,
 * y se usan sus atletas para crear 3 desplegables usando la función crearOpcionesDesplegables.
 * Los desplegables se pintan con fondo oro, plata y bronce (según clases CSS).
 * @param {HTMLTableElement} tabla - La tabla donde se insertará la fila adicional.
 */
function agregarFilaGoldenRace(tabla) {
    var tbody = tabla.querySelector("tbody");
    var filaGoldenRace = document.createElement("tr");

    var celdaNombre = document.createElement("td");
    celdaNombre.innerHTML = `Prueba de Oro: ${goldenRace}<br><sub>podium +200 puntos, orden podium +300 puntos (máx +500 puntos)</sub>`;
    celdaNombre.colSpan = 2;
    celdaNombre.classList.add("celda-golden");
    filaGoldenRace.appendChild(celdaNombre);

    var celdaSelectores = document.createElement("td");
    celdaSelectores.colSpan = 4;

    var corredoresGoldenRace = [];
    for (const key in jsonData) {
        if (jsonData[key].prueba === goldenRace) {
            corredoresGoldenRace = jsonData[key].atletas;
            break;
        }
    }

    if (!corredoresGoldenRace.length) {
        console.warn(`No se encontraron corredores para ${goldenRace} en jsonData`);
    }

    var clases = ["oro", "plata", "bronce"];
    var contenedorSelectores = document.createElement("div");
    contenedorSelectores.classList.add("contenedor-selectores");

    for (let i = 0; i < 3; i++) {
        var selectorContainer = crearOpcionesDesplegables(corredoresGoldenRace, clases[i]);
        contenedorSelectores.appendChild(selectorContainer);
    }

    celdaSelectores.appendChild(contenedorSelectores);
    filaGoldenRace.appendChild(celdaSelectores);
    tbody.appendChild(filaGoldenRace);
}

/**
 * Crea la cabecera de la tabla con las columnas "Prueba", "Atleta" y "Dorsal".
 * @param {HTMLTableElement} tabla - La tabla donde se insertará la cabecera.
 */
function crearCabecera(tabla) {
    var thead = tabla.createTHead();
    var row = thead.insertRow();
    var headers = ["Prueba", "Atleta", "Dorsal", "Prueba", "Atleta", "Dorsal"];
    headers.forEach(text => {
        var th = document.createElement("th");
        th.textContent = text;
        row.appendChild(th);
    });
}

/**
 * Genera el formulario de la tabla.
 * Se crea una nueva fila (tr) cada dos pruebas y se utiliza crearOpcionesPrueba para cada entrada.
 */
function generarFormulario() {
    var formTable = document.getElementById("tabla-pruebas");
    formTable.innerHTML = "";

    crearCabecera(formTable);
    
    var tbody = formTable.createTBody();
    
    var numeroPrueba = 0;
    var fila; // Almacenará la fila actual
    
    for (const prueba in jsonData) {
        if (numeroPrueba % 2 === 0) {
            fila = document.createElement("tr");
        }

        crearOpcionesPrueba(prueba, jsonData[prueba], fila);

        if (numeroPrueba % 2 === 1) {
            tbody.appendChild(fila);
        }
        
        numeroPrueba++;
    }
    
    if (numeroPrueba % 2 !== 0) {
        tbody.appendChild(fila);
    }

    agregarFilaGoldenRace(formTable);
}

/**
 * Genera una tabla de dorsales con 2 filas y 10 columnas,
 * utilizando los 20 valores (excluyendo el placeholder) de la constante 'dorsales'.
 */
function generarTablaDorsales() {
    const valoresDorsales = dorsales.slice(1);
    const tablaDorsales = document.getElementById("tabla-dorsales");
    
    tablaDorsales.innerHTML = '';
    const tbody = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            let indice = i * 10 + j;
            let celda = document.createElement("td");
            celda.textContent = valoresDorsales[indice];
            celda.classList.add("dorsal-cell");
            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }

    tablaDorsales.appendChild(tbody);
}

/**
 * Agrega un listener al formulario de pruebas para que, cada vez que se modifique
 * algún desplegable (select), se actualicen los colores de las celdas de la tabla de dorsales.
 *
 * Se utiliza el evento "change" sobre el elemento con id "form-pruebas" para llamar a la función
 * {@link actualizarColoresDorsales}, que se encargará de actualizar la apariencia de cada celda
 * en función de los valores seleccionados.
 */
function agregarListenerDesplegables() {
    document.getElementById("form-pruebas").addEventListener("change", actualizarColoresDorsales);
}

/**
 * Actualiza los colores de fondo de las celdas en la tabla de dorsales en función de
 * cuántas veces se ha seleccionado cada valor en los desplegables del formulario.
 *
 * La función realiza los siguientes pasos:
 * 1. Recorre todos los elementos <select> dentro del formulario "form-pruebas" y cuenta 
 *    cuántas veces aparece cada valor seleccionado. Estos conteos se almacenan en el objeto 
 *    `seleccionados`.
 * 2. Recorre todas las celdas (<td>) de la tabla de dorsales (elemento con id "tabla-dorsales").
 *    Para cada celda, se obtiene el valor de su contenido y se compara con el objeto `seleccionados`:
 *      - Si la celda está vacía o el valor no aparece en `seleccionados`, se asigna la clase 
 *        "dorsal-cell amarillo".
 *      - Si el valor aparece una sola vez, se asigna la clase "dorsal-cell verde".
 *      - Si el valor aparece más de una vez, se asigna la clase "dorsal-cell rojo".
 *
 * Esto permite visualizar de forma inmediata si hay dorsales no asignados (amarillo), asignados
 * de manera única (verde) o duplicados (rojo).
 */
function actualizarColoresDorsales() {
    let seleccionados = {};
    let selects = document.querySelectorAll("#form-pruebas select");

    // Contar las veces que aparece cada valor seleccionado
    selects.forEach(select => {
        let valor = select.value;
        if (valor) {
            seleccionados[valor] = (seleccionados[valor] || 0) + 1;
        }
    });

    // Actualizar el color de fondo de cada celda en la tabla de dorsales
    let celdasDorsales = document.querySelectorAll("#tabla-dorsales td");
    celdasDorsales.forEach(celda => {
        let valor = celda.textContent.trim();
        if (!valor || !seleccionados[valor]) {
            celda.className = "dorsal-cell amarillo"; // Valor no asignado
        } else if (seleccionados[valor] === 1) {
            celda.className = "dorsal-cell verde"; // Valor asignado una única vez
        } else {
            celda.className = "dorsal-cell rojo";  // Valor asignado más de una vez (duplicado)
        }
    });
}

/**
 * Guarda las predicciones en la cookie "predicciones_ceurst_2025" con una validez de 10 días.
 * El contenido se construye a partir de los datos de la tabla de predicciones.
 * Se recorre cada fila de la tabla (excepto la cabecera) y se concatena la información
 * en formato CSV. Finalmente, se almacena en la cookie.
 *
 * @param {boolean} [mostrarAlerta=true] - Indica si se debe mostrar un alert de confirmación.
 */
function guardarPredicciones(mostrarAlerta = true) {
    let tabla = document.getElementById("tabla-pruebas");
    let filas = tabla.rows;
    let resultado = '';

    // Recorrer cada fila (desde la 1, asumiendo que la 0 es la cabecera)
    for (let i = 1; i < filas.length; i++) {
        let celdas = filas[i].cells;
        
        if (celdas.length >= 6) {
            let prueba1 = celdas[0].textContent.trim();
            let atleta1 = celdas[1].querySelector('select').value.trim();
            let dorsal1 = celdas[2].querySelector('select').value.trim();

            let prueba2 = celdas[3].textContent.trim();
            let atleta2 = celdas[4].querySelector('select').value.trim();
            let dorsal2 = celdas[5].querySelector('select').value.trim();

            resultado += `${prueba1};${atleta1};${dorsal1}\n`;
            resultado += `${prueba2};${atleta2};${dorsal2}\n`;
        }
    }

    resultado += `;Prueba de Oro: ${goldenRace}\n`;

    let ultimaFila = filas[filas.length - 1];
    let celdasUltima = ultimaFila.cells;

    if (celdasUltima.length >= 2) {
        let celdaSelectores = celdasUltima[1]; // La celda que contiene los selectores para la Prueba de Oro
        let selectores = celdaSelectores.querySelectorAll('select');

        if (selectores.length >= 3) {
            let atletaOro = selectores[0].value.trim();
            let atletaPlata = selectores[1].value.trim();
            let atletaBronce = selectores[2].value.trim();

            resultado += `;${atletaOro};${atletaPlata};${atletaBronce}`;
        } else {
            console.warn("No se encontraron suficientes selectores en la fila de Golden Race");
        }
    }

    // Guardar el contenido en la cookie con 10 días de validez
    document.cookie = `predicciones_ceurst_2025=${encodeURIComponent(resultado)};max-age=${10 * 24 * 60 * 60};path=/`;

    // Mostrar mensaje de confirmación solo si mostrarAlerta es true
    if (mostrarAlerta) {
        alert("Predicciones guardadas correctamente.");
    }
}

/**
 * Valida las predicciones y, si todo es correcto, genera y descarga un archivo CSV.
 * Luego de la descarga, tras 5 segundos, la ventana oculta se redimensiona y carga Gmail.
 */
function generarPredicciones() {
    if (!validarPredicciones()) {
        return;
    }

    // Guardar las predicciones en la cookie sin mostrar alert
    guardarPredicciones(false);

    // Leer la cookie "predicciones_ceurst_2025"
    let cookies = document.cookie.split(';');
    let prediccionesCookie = null;
    cookies.forEach(cookie => {
        let [nombre, valor] = cookie.trim().split('=');
        if (nombre === 'predicciones_ceurst_2025') {
            prediccionesCookie = decodeURIComponent(valor);
        }
    });

    if (!prediccionesCookie) {
        alert("No se han guardado predicciones en la cookie.");
        return;
    }

    alert('Se van a almacenar las predicciones en el archivo:\n\n${carpeta_descargas}/predicciones_ceurst_2025.csv');

    // Crear el Blob con el contenido de la cookie y generar la URL
    let blob = new Blob([prediccionesCookie], { type: 'text/csv;charset=utf-8;' });
    let url = URL.createObjectURL(blob);

    // Crear un enlace para la descarga y simular el clic
    let enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "predicciones_ceurst_2025.csv";
    document.body.appendChild(enlace);

    navigator.clipboard.writeText(prediccionesCookie);

    // Abrir la ventana oculta para Gmail
    let ventanaGmail = abrirVentanaOculta();

    // Descargar el archivo CSV
    enlace.click();

    // Eliminar el enlace del DOM después de la descarga
    document.body.removeChild(enlace);

    // Esperar 5 segundos antes de traer la ventana al frente y abrir Gmail
    setTimeout(() => {
        if (ventanaGmail) {
            // Después de los 5 segundos, centramos la ventana y redirigimos a Gmail
            moverVentanaAlFrente(ventanaGmail);
            abrirGmailEnVentana(ventanaGmail);
        }
    }, 5000);
}

/**
 * Abre una ventana oculta fuera de la pantalla.
 * @returns {Window|null} La referencia a la ventana oculta o null si no se pudo abrir.
 */
function abrirVentanaOculta() {
    let nuevaVentana = window.open('', '_blank', `width=1,height=1,left=-10000,top=-10000`);

    if (!nuevaVentana) {
        alert("No se pudo abrir Gmail. Desactiva el bloqueo de ventanas emergentes.");
        return null;
    }

    return nuevaVentana;
}

/**
 * Mueve la ventana a la posición central y le da foco.
 * @param {Window} ventana - La ventana que se quiere mover.
 */
function moverVentanaAlFrente(ventana) {
    let anchoVentana = 800;
    let altoVentana = 600;
    let izquierda = (window.screen.width - anchoVentana) / 2;
    let arriba = (window.screen.height - altoVentana) / 2;

    // Redimensionar y mover la ventana al frente después de 5 segundos
    ventana.resizeTo(anchoVentana, altoVentana);
    ventana.moveTo(izquierda, arriba);
    ventana.focus(); // Traer la ventana al frente
}

/**
 * Redirige la ventana Gmail a la URL correspondiente para adjuntar las predicciones.
 * @param {Window} ventanaGmail - La ventana a la que se va a redirigir.
 */
function abrirGmailEnVentana(ventanaGmail) {
    //let destinatario = "joseeloy@gmail.com";
    //let asunto = "Predicciones Pilar Campeonato de Europa de Short Track 2025";
    //let cuerpo = `Hola Eloy,\n\nAdjunto te envío el archivo de predicciones.\n\n` +
                 `{Adjunta el archivo de \${carpeta_descargas}/predicciones_ceurst_2025.csv}`;
    let asunto = "Predicciones Campeonato de Europa de Short Track 2025";
    let cuerpo = `Hola,\n\nAdjunto te envío el archivo de predicciones.\n\n` +
                 `{Adjunta el archivo de \${carpeta_descargas}/predicciones_ceurst_2025.csv}`;

    //let gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(destinatario)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    let gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    ventanaGmail.location.href = gmailURL;
}

/**
 * Carga las predicciones guardadas en la cookie "predicciones_ceurst_2025" y actualiza
 * los valores de los desplegables de la tabla de predicciones.
 *
 * El contenido de la cookie se espera en formato CSV, donde cada línea (excepto la última)
 * contiene 3 valores, y se asignan de la siguiente manera:
 *  - Las líneas con índice par (0, 2, 4, …) se usan para rellenar los selectores en la
 *    2ª y 3ª columna (prueba 1) de cada fila.
 *  - Las líneas con índice impar (1, 3, 5, …) se usan para rellenar los selectores en la
 *    5ª y 6ª columna (prueba 2) de la misma fila.
 *
 * La última línea del CSV corresponde a la "Prueba de Oro" y debe contener al menos 4 valores,
 * donde se ignora el primer campo y los siguientes 3 se asignan, respectivamente, a los 3 desplegables.
 *
 * Si la cookie no existe o no contiene datos, se muestra una alerta.
 */
function cargarPredicciones() {
    // Leer la cookie de predicciones
    let cookies = document.cookie.split(';');
    let prediccionesCookie = null;

    // Buscar la cookie 'predicciones_ceurst_2025' en las cookies
    cookies.forEach(cookie => {
        let [nombre, valor] = cookie.trim().split('=');
        if (nombre === 'predicciones_ceurst_2025') {
            prediccionesCookie = decodeURIComponent(valor);  // Decodificar el valor de la cookie
        }
    });

    // Si no se encontró la cookie, mostrar un mensaje y retornar
    if (!prediccionesCookie) {
        alert('No hay predicciones guardadas en la cookie.');
        return;
    }

    // Procesar las predicciones (CSV) de la cookie
    let lines = prediccionesCookie.split("\n");

    // Si no hay datos, mostrar un mensaje
    if (lines.length === 0) {
        alert("No se encuentran predicciones guardadas.");
        return;
    }

    // Obtener la tabla donde vamos a cargar los valores
    let tabla = document.getElementById("tabla-pruebas");
    let filas = tabla.rows;

    // Rellenar los selectores de la tabla con los valores del archivo CSV
    for (let i = 0; i < lines.length; i++) {
        let valores = lines[i].split(";");

        // Asegurarnos de que cada línea tiene 3 valores
        if (valores.length === 3) {
            let filaIndex = Math.floor(i / 2) + 1; // Calculamos a qué fila corresponde la línea (2 líneas por fila)
            let fila = filas[filaIndex];
            let celdas = fila.cells;

            // Si la línea es impar (índice par), asignar valores a la 2ª y 3ª columna
            if (i % 2 === 0) {
                // Verificar y asignar los valores de atleta y dorsal para la 2ª y 3ª columna (prueba 1)
                let atletaSelect1 = celdas[1].querySelector('select');
                let dorsalSelect1 = celdas[2].querySelector('select');
                if (atletaSelect1 && dorsalSelect1) {
                    atletaSelect1.value = valores[1].trim();  // Atleta de la prueba 1
                    dorsalSelect1.value = valores[2].trim();  // Dorsal de la prueba 1
                }
            } else { // Si la línea es par (índice impar), asignar valores a la 5ª y 6ª columna (prueba 2)
                // Verificar y asignar los valores de atleta y dorsal para la 5ª y 6ª columna (prueba 2)
                let atletaSelect2 = celdas[4].querySelector('select');
                let dorsalSelect2 = celdas[5].querySelector('select');
                if (atletaSelect2 && dorsalSelect2) {
                    atletaSelect2.value = valores[1].trim();  // Atleta de la prueba 2
                    dorsalSelect2.value = valores[2].trim();  // Dorsal de la prueba 2
                }
            }
        }
    }

    // Rellenar la última fila de la tabla (Prueba de Oro)
    let ultimaLinea = lines[lines.length - 1].split(";");
    if (ultimaLinea.length >= 4) {
        let filaGoldenRace = filas[filas.length - 1];  // Última fila (Golden Race)
        let celdasUltima = filaGoldenRace.cells;

        // Rellenar los selectores de la prueba de oro
        let selectores = celdasUltima[1].querySelectorAll('select');
        if (selectores.length >= 3) {
            selectores[0].value = ultimaLinea[1].trim(); // Atleta Oro
            selectores[1].value = ultimaLinea[2].trim(); // Atleta Plata
            selectores[2].value = ultimaLinea[3].trim(); // Atleta Bronce
        }
    }

    actualizarColoresDorsales();
}

/**
 * Función principal de validación antes de generar predicciones.
 * Retorna true si todas las validaciones son correctas, false si hay errores.
 */
function validarPredicciones() {
    let tabla = document.getElementById("tabla-pruebas");
    let filas = tabla.rows;
    let dorsalesSeleccionados = new Set();

    for (let i = 1; i < filas.length - 1; i++) {
        let celdas = filas[i].cells;
        if (celdas.length >= 6) {
            let atleta1 = celdas[1].querySelector('select').value.trim();
            let dorsal1 = celdas[2].querySelector('select').value.trim();
            let atleta2 = celdas[4].querySelector('select').value.trim();
            let dorsal2 = celdas[5].querySelector('select').value.trim();

            // Validación 1: No se han seleccionado los atletas de todas las pruebas
            if (atleta1 === "Seleccionar" || atleta2 === "Seleccionar") {
                alert("No se han seleccionado los atletas de todas las pruebas.");
                return false;
            }

            // Validación 2: No se han seleccionado dorsales de todas las pruebas
            if (dorsal1 === "Seleccionar" || dorsal2 === "Seleccionar") {
                alert("No se han seleccionado dorsales de todas las pruebas.");
                return false;
            }

            // Almacenar dorsales para validación de duplicados
            dorsalesSeleccionados.add(dorsal1);
            dorsalesSeleccionados.add(dorsal2);
        }
    }

    // Validación 3: No debe haber dorsales repetidos
    if (dorsalesSeleccionados.size !== (filas.length - 2) * 2) {
        alert("No debe haber dorsales repetidos.");
        return false;
    }

    // Validaciones de la última fila (Golden Race)
    let ultimaFila = filas[filas.length - 1];
    let celdasUltima = ultimaFila.cells;
    
    if (celdasUltima.length >= 2) {
        let celdaSelectores = celdasUltima[1];
        let selectores = celdaSelectores.querySelectorAll('select');
        let atletasGoldenRace = [];

        for (let i = 0; i < 3; i++) {
            let atleta = selectores[i].value.trim();
            atletasGoldenRace.push(atleta);

            // Validación 4: No se han seleccionado todos los atletas de la Prueba de Oro
            if (atleta === "Seleccionar") {
                alert("No se han seleccionado todos los atletas de la Prueba de Oro.");
                return false;
            }
        }

        // Validación 5: Se han de seleccionar 3 atletas distintos en la Prueba de Oro
        let setAtletas = new Set(atletasGoldenRace);
        if (setAtletas.size < 3) {
            alert("Se han de seleccionar 3 atletas distintos en la Prueba de Oro.");
            return false;
        }
    }

    return true; // Todas las validaciones pasaron correctamente
}

document.addEventListener('DOMContentLoaded', function() {
    generarFormulario();
    generarTablaDorsales();
    agregarListenerDesplegables();
});