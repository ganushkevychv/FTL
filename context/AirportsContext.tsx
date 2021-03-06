import React, { useState, createContext } from "react";


export const AirportContext = createContext();
export const AirportProvider = () => {
   
    const [airports, setAirports] = useState([
        {
            "tia":{
                "Albania":"<a href='http://www.tirana-airport.com'> Tirana International Airport Nënë Tereza (TIA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/41d3319d82/tirana/' data-label_1='TIRANA' data-label_2='WEATHER' data-theme='dark' >TIRANA WEATHER</a>"
            },
            "vie":{
                "Austria":"<a href='https://www.viennaairport.com'> Vienna International Airport (VIE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/48d2116d37/vienna/' data-label_1='VIENNA' data-label_2='WEATHER' data-theme='dark' >VIENNA WEATHER</a>"
            },
            "gyd":{
                "Azerbaijan":"<a href='http://www.airport.az'> Baku Airport (GYD)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/40d4149d87/baku/' data-label_1='BAKU' data-label_2='WEATHER' data-theme='dark' >BAKU WEATHER</a>"
            },
            "bru":{
                "Belgium":"<a href='https://www.brusselsairport.be/'> Brussels Airport (BRU)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d854d35/brussels/' data-label_1='BRUSSELS' data-label_2='WEATHER' data-theme='dark' >BRUSSELS WEATHER</a>"
            },
            "crl":{
                "Belgium":"<a href='http://www.charleroi-airport.com'> Brussels Charleroi Airport (CRL)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d854d35/brussels/' data-label_1='BRUSSELS' data-label_2='WEATHER' data-theme='dark' >BRUSSELS WEATHER</a>"
            },
            "sjj":{
                "Bosnia and Herzegovina":"<a href='http://www.sarajevo-airport.ba'> Sarajevo International Airport (SJJ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/43d8618d41/sarajevo/' data-label_1='SARAJEVO' data-label_2='WEATHER' data-theme='dark' >SARAJEVO WEATHER</a>"
            },
            "tzl":{
                "Bosnia and Herzegovina":"<a href='http://tuzla-airport.ba/'> Tuzla Airport (TZL)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/44d5418d67/tuzla/' data-label_1='TUZLA' data-label_2='WEATHER' data-theme='dark' >TUZLA WEATHER</a>"
            },
            "boj":{
                "Bulgaria":"<a href='https://burgas-airport.bg/'> Bourgas Airport (BOJ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d5027d46/burgas/' data-label_1='BOURGAS' data-label_2='WEATHER' data-theme='dark' >BOURGAS WEATHER</a>"
            },
            "sof":{
                "Bulgaria":"<a href='http://www.sofia-airport.bg/'> Sofia Airport - Terminal 1 (SOF)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d7023d32/sofia/' data-label_1='SOFIA' data-label_2='WEATHER' data-theme='dark' >SOFIA WEATHER</a>"
            },
            "var":{
                "Bulgaria":"<a href='http://www.varna-airport.bg'> Varna Airport (VAR)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/43d2127d91/varna/' data-label_1='VARNA' data-label_2='WEATHER' data-theme='dark' >VARNA WEATHER</a>"
            },
            "osi":{
                "Croatia":"<a href='http://www.osijek-airport.hr/'> Osijek (OSI)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d5518d70/osijek/' data-label_1='OSIJEK' data-label_2='WEATHER' data-theme='dark' >OSIJEK WEATHER</a>"
            },
            "spu":{
                "Croatia":"<a href='http://www.split-airport.hr'> Split Airport (SPU)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/43d5116d44/split/' data-label_1='SPLIT' data-label_2='WEATHER' data-theme='dark' >SPLIT WEATHER</a>"
            },
            "lca":{
                "Cyprus":"<a href='http://www.hermesairports.com'> Larnaca Airport (LCA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/34d9033d62/larnaca/' data-label_1='LARNACA' data-label_2='WEATHER' data-theme='dark' >LARNACA WEATHER</a>"
            },
            "brq":{
                "Czech Republic":"<a href='http://www.brno-airport.cz'> Brno Airport (BRQ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/49d2016d61/brno/' data-label_1='BRNO' data-label_2='WEATHER' data-theme='dark' >BRNO WEATHER</a>"
            },
            "prg":{
                "Czech Republic":"<a href='https://www.prg.aero/en#/'> Prague Airport (PRG)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d0814d44/prague/' data-label_1='PRAGUE' data-label_2='WEATHER' data-theme='dark' >PRAGUE WEATHER</a>"
            },
            "bll":{
                "Denmark":"<a href='https://www.bll.dk/da-dk'> Billund Airport (BLL)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/55d739d11/billund/' data-label_1='BILLUND' data-label_2='WEATHER' data-theme='dark' >BILLUND WEATHER</a>"
            },
            "cph":{
                "Denmark":"<a href='https://www.cph.dk/en/'> Copenhagen Airport (CPH)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/55d6812d57/copenhagen/' data-label_1='COPENHAGEN' data-label_2='WEATHER' data-theme='dark' >COPENHAGEN WEATHER</a>"
            },
            "tll":{
                "Estonia":"<a href='https://www.tallinn-airport.ee/en/'> Tallinn Airport (TLL)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/59d4424d75/tallinn/' data-label_1='TALLINN' data-label_2='WEATHER' data-theme='dark' >TALLINN WEATHER</a>"
            },
            "tku":{
                "Finland":"<a href='https://www.finavia.fi/en'> Turku Airport (TKU)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/60d4522d27/turku/' data-label_1='TURKU' data-label_2='WEATHER' data-theme='dark' >TURKU WEATHER</a>"
            },
            "mlh":{
                "France":"<a href='https://www.euroairport.com/en/'> Mulhouse-Freiburg Airport (MLH)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d567d59/basel/' data-label_1='BASEL' data-label_2='WEATHER' data-theme='dark' >BASEL WEATHER</a>"   
            },
            "bod":{
                "France":"<a href='https://www.bordeaux.aeroport.fr/en'> Bordeaux–Mérignac Airport (BOD)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/44d84n0d58/bordeaux/' data-label_1='BORDEAUX' data-label_2='WEATHER' data-theme='dark' >BORDEAUX WEATHER</a>"
            },
            "gnb":{
                "France":"<a href='http://www.grenoble-airport.com'> Grenoble Airport (GNB)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d195d72/grenoble/' data-label_1='GRENOBLE' data-label_2='WEATHER' data-theme='dark' >GRENOBLE WEATHER</a>"
            },
            "lys":{
                "France":"<a href='https://www.lyonaeroports.com/'> Lyon (Saint-Exupéry) Airport (LYS)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d764d84/lyon/' data-label_1='LYON' data-label_2='WEATHER' data-theme='dark' >LYON WEATHER</a>"
            },
            "nce":{
                "France":"<a href='https://en.nice.aeroport.fr/'> Nice Airport (NCE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/43d717d26/nice/' data-label_1='NICE' data-label_2='WEATHER' data-icons='Climacons Animated' data-theme='dark' >NICE WEATHER</a>"
            },
            "bva":{
                "France":"<a href='https://www.aeroportparisbeauvais.com/passagers/'> Paris Beauvais Airport (BVA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/48d862d35/paris/' data-label_1='PARIS' data-label_2='WEATHER' data-icons='Climacons Animated' data-theme='dark' >PARIS WEATHER</a>"
            },
            "kut":{
                "Georgia":"<a href='http://www.kutaisi.aero'> Kutaisi Airport (KUT)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d2742d72/kutaisi/' data-label_1='KUTAISI' data-label_2='WEATHER' data-icons='Climacons Animated' data-theme='dark' >KUTAISI WEATHER</a>"
            },
            "sxf":{
                "Germany":"<a href='https://www.berlin-airport.de/en/travellers-sxf/index.php'> Schoenefeld Airport (SXF)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/52d5213d40/berlin/' data-label_1='BERLIN' data-label_2='WEATHER' data-theme='dark' >BERLIN WEATHER</a>"
            },
            "bre":{
                "Germany":"<a href='https://www.bremen-airport.com/en/nc/'> Bremen Airport (BRE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/53d088d80/bremen/' data-label_1='BREMEN' data-label_2='WEATHER' data-theme='dark' >BREMEN WEATHER</a>"
            },
            "cgn":{
                "Germany":"<a href='http://www.koeln-bonn-airport.de'> Cologne Airport (CGN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d946d96/cologne/' data-label_1='COLOGNE' data-label_2='WEATHER' data-theme='dark' >COLOGNE WEATHER</a>"
            },
            "dtm":{
                "Germany":"<a href='https://www.dortmund-airport.com/'> Dortmund Airport (DTM)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/51d517d47/dortmund/' data-label_1='DORTMUND' data-label_2='WEATHER' data-theme='dark' >DORTMUND WEATHER</a>"
            },
            "fra":{
                "Germany":"<a href='https://www.frankfurt-airport.com/en.html'> Frankfurt International Airport (FRA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d118d68/frankfurt/' data-label_1='FRANKFURT' data-label_2='WEATHER' data-theme='dark' >FRANKFURT WEATHER</a>"
            },
            "fdh":{
                "Germany":"<a href='https://www.bodensee-airport.eu/'> Friedrichshafen Airport (FDH)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d669d48/friedrichshafen/' data-label_1='FRIEDRICHSHAFEN' data-label_2='WEATHER' data-theme='dark' >FRIEDRICHSHAFEN WEATHER</a>"
            },
            "ham":{
                "Germany":"<a href='https://www.hamburg-airport.de/en/index.php'> Hamburg Airport (HAM)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/53d559d99/hamburg/' data-label_1='HAMBURG' data-label_2='WEATHER' data-theme='dark' >HAMBURG WEATHER</a>"
            },
            "haj":{
                "Germany":"<a href='https://www.hannover-airport.de/index.php?id=4360&L=1'> Hanover (HAJ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/52d389d73/hanover/' data-label_1='HANNOVER' data-label_2='WEATHER' data-theme='dark' >HANNOVER WEATHER</a>"
            },
            "fkb":{
                "Germany":"<a href='https://www.baden-airpark.de/'> Karlsruhe/Baden-Baden Airport (FKB)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/48d778d23/baden-baden/' data-label_1='BADEN-BADEN' data-label_2='WEATHER' data-theme='dark' >BADEN-BADEN WEATHER</a>"
            },
            "lej":{
                "Germany":"<a href='https://www.leipzig-halle-airport.de/en/'> Leipzig/Halle Airport (LEJ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/51d3412d37/leipzig/' data-label_1='LEIPZIG' data-label_2='WEATHER' data-theme='dark' >LEIPZIG WEATHER</a>"
            },
            "fmm":{
                "Germany":"<a href='https://www.allgaeu-airport.de/'> Memmingen/Munich West Airport (FMM)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/48d1411d58/munich/' data-label_1='MUNICH' data-label_2='WEATHER' data-theme='dark' >MUNICH WEATHER</a>"
            },
            "nue":{
                "Germany":"<a href='https://www.airport-nuernberg.de/en'> Nuremberg Airport (NUE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/49d4511d08/nuremberg/' data-label_1='NUREMBERG' data-label_2='WEATHER' data-theme='dark' >NUREMBERG WEATHER</a>"
            },
            "ath":{
                "Greece":"<a href='https://www.aia.gr/traveler/'> Athens International Airport (ATH)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/37d9823d73/athens/' data-label_1='ATHENS' data-label_2='WEATHER' data-theme='dark' >ATHENS WEATHER</a>"
            },
            "cfu":{
                "Greece":"<a href='https://www.corfu-airport.com/'> Corfu Airport (CFU)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/39d6219d92/corfu/' data-label_1='CORFU' data-label_2='WEATHER' data-theme='dark' >CORFU WEATHER</a>"
            },
            "her":{
                "Greece":"<a href='http://www.heraklion-airport.info'> Heraklion Airport (HER)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/35d3425d14/heraklion/' data-label_1='HERAKLION' data-label_2='WEATHER' data-theme='dark' >HERAKLION WEATHER</a>"
            },
            "rho":{
                "Greece":"<a href='https://www.rho-airport.gr/en/'> Rhodes Airport (RHO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/36d4328d22/rhodes/' data-label_1='RHODES' data-label_2='WEATHER' data-theme='dark' >RHODES WEATHER</a>"
            },
            "skg":{
                "Greece":"<a href='http://www.thessalonikiairport.com'> Thessaloniki Airport (SKG)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/40d6422d94/thessaloniki/' data-label_1='THESSALONIKI' data-label_2='WEATHER' data-theme='dark' >THESSALONIKI WEATHER</a>"
            },
            "zth":{
                "Greece":"<a href='http://zante.gr'> Zakynthos Airport (ZTH)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/37d7920d90/zakinthos/' data-label_1='ZAKYNTHOS' data-label_2='WEATHER' data-theme='dark' >ZAKYNTHOS WEATHER</a>"
            },
            "bud":{
                "Hungary":"<a href='https://www.bud.hu/'> Budapest Airport - Terminal 2 (BUD)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d5019d04/budapest/' data-label_1='BUDAPEST' data-label_2='WEATHER' data-theme='dark' >BUDAPEST WEATHER</a>"
            },
            "deb":{
                "Hungary":"<a href='https://www.debrecenairport.com/hu'> Debrecen Airport (DEB)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d5321d63/debrecen/' data-label_1='DEBRECEN' data-label_2='WEATHER' data-theme='dark' >DEBRECEN WEATHER</a>"
            },
            "kef":{
                "Iceland":"<a href='https://www.isavia.is/en/keflavik-airport'> Reykjavik Airport (KEF)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/64d13n21d82/reykjavik/' data-label_1='REYKJAVÍK' data-label_2='WEATHER' data-theme='dark' >REYKJAVÍK WEATHER</a>"
            },
            "etm":{
                "Israel":"<a href='http://www.ramon-airport.com'> Ramon Airport (ETM)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/29d5634d95/eilat/' data-label_1='EILAT' data-label_2='WEATHER' data-theme='dark' >EILAT WEATHER</a>"
            },
            "tlv":{
                "Israel":"<a href='https://www.iaa.gov.il/en-US/airports/BenGurion/Pages/default.aspx'> Tel-Aviv Ben Gurion (TLV)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/32d0934d78/tel-aviv-yafo/' data-label_1='TEL AVIV' data-label_2='WEATHER' data-theme='dark' >TEL AVIV WEATHER</a>"
            },
            "cta":{
                "Italy":"<a href='http://www.aeroporto.catania.it'> Catania Fontanarossa Airport (CTA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/37d6114d94/province-of-catania/' data-label_1='CATANIA' data-label_2='WEATHER' data-theme='dark' >CATANIA WEATHER</a>"
            },
            "aho":{
                "Italy":"<a href='https://www.aeroportodialghero.it/'> Alghero Airport (AHO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/40d568d32/alghero/' data-label_1='ALGHERO' data-label_2='WEATHER' data-theme='dark' >ALGHERO WEATHER</a>"
            },
            "bri":{
                "Italy":"<a href='https://www.aeroportidipuglia.it/'> Bari Airport (BRI)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/41d1216d87/bari/' data-label_1='BARI' data-label_2='WEATHER' data-theme='dark' >BARI WEATHER</a>"
            },
            "blq":{
                "Italy":"<a href='https://www.bologna-airport.it/en/welcome-to-bologna-airport/?idC=62175'> Bologna Airport (BLQ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/44d5011d30/metropolitan-city-of-bologna/' data-label_1='BOLOGNA' data-label_2='WEATHER' data-theme='dark' >BOLOGNA WEATHER</a>"
            },
            "suf":{
                "Italy":"<a href='https://lameziaairport.it/'> Lamezia Terme (SUF)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/38d9616d31/lamezia-terme/' data-label_1='LAMEZIA TERME' data-label_2='WEATHER' data-theme='dark' >LAMEZIA TERME WEATHER</a>"
            },
            "mxp":{
                "Italy":"<a href='https://www.milanomalpensa-airport.com/en/'> Milan Malpensa Airport - Terminal 1 (MXP)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d469d19/milan/' data-label_1='MILANO' data-label_2='WEATHER' data-theme='dark' >MILANO WEATHER</a>"
            },
            "nap":{
                "Italy":"<a href='http://www.aeroportodinapoli.it'> Naples Airport (NAP)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/40d8514d27/naples/' data-label_1='NAPLES' data-label_2='WEATHER' data-theme='dark' >NAPLES WEATHER</a>"
            },
            "peg":{
                "Italy":"<a href='https://www.airport.umbria.it/en/home-en'> Perugia Airport (PEG)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d9412d62/province-of-perugia/' data-label_1='PERUGIA' data-label_2='WEATHER' data-theme='dark' >PERUGIA WEATHER</a>"
            },
            "psr":{
                "Italy":"<a href='http://www.abruzzoairport.com'> Pescara Airport (PSR)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d3613d96/province-of-pescara/' data-label_1='PESCARA' data-label_2='WEATHER' data-theme='dark' >PESCARA WEATHER</a>"
            },
            "psa":{
                "Italy":"<a href='https://www.pisa-airport.com/en/'> Pisa Airport (PSA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/43d7210d40/province-of-pisa/' data-label_1='PISA' data-label_2='WEATHER' data-theme='dark' >PISA WEATHER</a>"
            },
            "fco":{
                "Italy":"<a href='http://www.adr.it/web/aeroporti-di-roma-en-/pax-fco-fiumicino'> Rome Fiumicino Airport - Terminal 2 (FCO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/41d9012d50/rome/' data-label_1='ROME' data-label_2='WEATHER' data-theme='dark' >ROME WEATHER</a>"
            },
            "trn":{
                "Italy":"<a href='https://www.aeroportoditorino.it/en'> Turin Airport (TRN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d077d69/turin/' data-label_1='TURIN' data-label_2='WEATHER' data-theme='dark' >TURIN WEATHER</a>"
            },
            "tsf":{
                "Italy":"<a href='https://www.trevisoairport.it/'> Venice Treviso Airport (TSF)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d4912d42/metropolitan-city-of-venice/' data-label_1='VENICE' data-label_2='WEATHER' data-theme='dark' >VENICE WEATHER</a>"
            },
            "vrn":{
                "Italy":"<a href='https://www.aeroportoverona.it/en/'> Verona Airport (VRN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d4410d99/verona/' data-label_1='VERONA' data-label_2='WEATHER' data-theme='dark' >VERONA WEATHER</a>"
            },
            "bgy":{
                "Italy":"<a href='https://www.airport-bergamo.com/'> Bergamo Airport (BGY)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d869d88/province-of-bergamo/' data-label_1='BERGAMO' data-label_2='WEATHER' data-theme='dark' >BERGAMO WEATHER</a>"
            },
            "tse":{
                "Kazakhstan":"<a href='http://astanaairport.com/'> Nursultan Nazarbayev International Airport (TSE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/51d1671d47/astana/' data-label_1='NUR-SULTAN' data-label_2='WEATHER' data-theme='dark' >NUR-SULTAN WEATHER</a>"
            },
            "prn":{
                "Kosovo":"<a href='http://www.airportpristina.com/'> Pristina International Airport (PRN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d6621d17/prishtina/' data-label_1='PRIŞTINA' data-label_2='WEATHER' data-theme='dark' >PRIŞTINA WEATHER</a>"
            },
            "rix":{
                "Latvia":"<a href='http://www.riga-airport.com/en'> Riga Airport (RIX)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/56d9524d11/riga/' data-label_1='RIGA' data-label_2='WEATHER' data-theme='dark' >RIGA WEATHER</a>"
            },
            "kun":{
                "Lithuania":"<a href='https://www.kaunas-airport.lt/en/'> Kaunas Airport (KUN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/54d9023d90/kaunas/' data-label_1='KAUNAS' data-label_2='WEATHER' data-theme='dark' >KAUNAS WEATHER</a>"
            },
            "plq":{
                "Lithuania":"<a href='https://www.palanga-airport.lt/en'> Palanga – Klaipeda Airport (PLQ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/55d9221d07/palanga/' data-label_1='PALANGA' data-label_2='WEATHER' data-theme='dark' >PALANGA WEATHER</a>"
            },
            "vno":{
                "Lithuania":"<a href='https://www.vilnius-airport.lt/en/'> Vilnius Airport (VNO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/54d6925d28/vilnius/' data-label_1='VILNIUS' data-label_2='WEATHER' data-theme='dark' >VILNIUS WEATHER</a>"
            },
            "mla":{
                "Malta":"<a href='https://www.maltairport.com/'> Malta Airport (MLA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/35d9414d38/malta/' data-label_1='REPUBLIC OF MALTA' data-label_2='WEATHER' data-theme='dark' >REPUBLIC OF MALTA WEATHER</a>"
            },
            "kiv":{
                "Moldova":"<a href='http://www.airport.md/homepage-en/'> Chisinau Airport (KIV)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d0128d86/chisinau/' data-label_1='CHISINAU' data-label_2='WEATHER' data-theme='dark' >CHISINAU WEATHER</a>"
            },
            "tgd":{
                "Montenegro":"<a href='http://www.montenegroairports.com/eng/'> Podgorica Airport (TGD)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d4319d26/podgorica/' data-label_1='PODGORICA' data-label_2='WEATHER' data-theme='dark' >PODGORICA WEATHER</a>"
            },
            "aga":{
                "Morocco":"<a href='http://www.agadir-airport.com/en/index.php'> Agadir Al Massira Airport (AGA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/30d43n9d60/agadir/' data-label_1='AGADIR' data-label_2='WEATHER' data-theme='dark' >AGADIR WEATHER</a>"
            },
            "rak":{
                "Morocco":"<a href='https://www.marrakesh-airport.com/'> Menara Airport (RAK)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/31d64n8d06/menara/' data-label_1='MENARA' data-label_2='WEATHER' data-theme='dark' >MENARA WEATHER</a>"
            },
            "ein":{
                "Netherlands":"<a href='https://www.eindhovenairport.nl/en'> Eindhoven Airport (EIN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/51d445d47/eindhoven/' data-label_1='EINDHOVEN' data-label_2='WEATHER' data-theme='dark' >EINDHOVEN WEATHER</a>"
            },
            "grq":{
                "Netherlands":"<a href='https://www.groningenairport.nl/en/'> Groningen Airport (GRQ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/53d226d57/groningen/' data-label_1='GRONINGEN' data-label_2='WEATHER' data-theme='dark' >GRONINGEN WEATHER</a>"
            },
            "mst":{
                "Netherlands":"<a href='https://www.maa.nl/nl/pagina-niet-gevonden'> Maastricht Airport (MST)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d855d69/maastricht/' data-label_1='MAASTRICHT' data-label_2='WEATHER' data-theme='dark' >MAASTRICHT WEATHER</a>"
            },
            "ohd":{
                "North Macedonia":"<a href='http://ohd.airports.com.mk/default.aspx?ItemID=345'> Ohrid Airport (OHD)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/41d1220d80/ohrid/' data-label_1='OHRID' data-label_2='WEATHER' data-theme='dark' >OHRID WEATHER</a>"
            },
            "skp":{
                "North Macedonia":"<a href='http://skp.airports.com.mk/default.aspx?ItemID=345'> Skopje Airport (SKP)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/42d0021d43/skopje/' data-label_1='SKOPJE' data-label_2='WEATHER' data-theme='dark' >SKOPJE WEATHER</a>"
            },
            "aes":{
                "Norway":"<a href='https://avinor.no/en/airport/alesund-airport/'> Alesund Airport (AES)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/62d476d15/alesund/' data-label_1='ALESUND' data-label_2='WEATHER' data-theme='dark' >ALESUND WEATHER</a>"
            },
            "bgo":{
                "Norway":"<a href='https://avinor.no/en/airport/bergen-airport/'> Bergen Airport (BGO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/60d395d32/bergen/' data-label_1='BERGEN' data-label_2='WEATHER' data-theme='dark' >BERGEN WEATHER</a>"
            },
            "boo":{
                "Norway":"<a href='https://avinor.no/en/airport/bodo-airport/'> Bodø (BOO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/67d2814d40/bodo/' data-label_1='BODØ' data-label_2='WEATHER' data-theme='dark' >BODØ WEATHER</a>"
            },
            "hau":{
                "Norway":"<a href='https://flyhau.no/en/'> Haugesund Airport (HAU)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/59d415d27/haugesund/' data-label_1='HAUGESUND' data-label_2='WEATHER' data-theme='dark' >HAUGESUND WEATHER</a>"
            },
            "mol":{
                "Norway":"<a href='https://avinor.no/en/airport/molde-airport/'> Molde Airport (MOL)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/62d747d16/molde/' data-label_1='MOLDE' data-label_2='WEATHER' data-theme='dark' >MOLDE WEATHER</a>"
            },
            "osl":{
                "Norway":"<a href='https://avinor.no/en/airport/oslo-airport/'> Oslo airport (OSL)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/59d9110d75/oslo/' data-label_1='OSLO' data-label_2='WEATHER' data-theme='dark' >OSLO WEATHER</a>"
            },
            "trf":{
                "Norway":"<a href='https://www.torp.no/'> Oslo Sandefjord Torp Airport (TRF)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/59d9110d75/oslo/' data-label_1='OSLO' data-label_2='WEATHER' data-theme='dark' >OSLO WEATHER</a>"
            },
            "svg":{
                "Norway":"<a href='https://avinor.no/en/airport/stavanger-airport/'> Stavanger Airport (SVG)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/58d975d73/stavanger/' data-label_1='STAVANGER' data-label_2='WEATHER' data-theme='dark' >STAVANGER WEATHER</a>"
            },
            "tos":{
                "Norway":"<a href='https://avinor.no/en/airport/tromso-airport/'> Tromso Airport (TOS)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/69d6518d96/tromso/' data-label_1='TROMSØ' data-label_2='WEATHER' data-theme='dark' >TROMSØ WEATHER</a>"
            },
            "trd":{
                "Norway":"<a href='https://avinor.no/en/airport/trondheim-airport/'> Trondheim Airport (TRD)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/63d4310d40/trondheim/' data-label_1='TRONDHEIM' data-label_2='WEATHER' data-theme='dark' >TRONDHEIM WEATHER</a>"
            },
            "gdn":{
                "Poland":"<a href='https://www.airport.gdansk.pl/'> Gdansk Airport (GDN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/54d3518d65/gdansk/' data-label_1='GDAŃSK' data-label_2='WEATHER' data-theme='dark' >GDAŃSK WEATHER</a>"
            },
            "ktw":{
                "Poland":"<a href='https://www.katowice-airport.com/en'> Katowice Airport (KTW)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d2619d02/katowice/' data-label_1='KATOWICE' data-label_2='WEATHER' data-theme='dark' >KATOWICE WEATHER</a>"
            },
            "krk":{
                "Poland":"<a href='http://krakowairport.pl/blog/en/category/podroze/zoom/'> Krakow Airport (KRK)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/50d0619d94/krakow/' data-label_1='KRAKÓW' data-label_2='WEATHER' data-theme='dark' >KRAKÓW WEATHER</a>"
            },
            "luz":{
                "Poland":"<a href='https://www.airport.lublin.pl/en/'> Lublin Airport (LUZ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/51d2522d57/lublin/' data-label_1='LUBLIN' data-label_2='WEATHER' data-theme='dark' >LUBLIN WEATHER</a>"
            },
            "szy":{
                "Poland":"<a href='http://mazuryairport.pl/en/'> Olsztyn-Mazury Airport (SZY)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/53d7820d48/olsztyn/' data-label_1='OLSZTYN' data-label_2='WEATHER' data-theme='dark' >OLSZTYN WEATHER</a>"
            },
            "poz":{
                "Poland":"<a href='https://www.airport-poznan.com.pl/en/'> Poznan Airport (POZ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/52d4116d93/poznan/' data-label_1='POZNAŃ' data-label_2='WEATHER' data-theme='dark' >POZNAŃ WEATHER</a>"
            },
            "szz":{
                "Poland":"<a href='http://www.airport.com.pl/en/'> Szczecin Airport (SZZ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/53d4314d55/szczecin/' data-label_1='SZCZECIN' data-label_2='WEATHER' data-theme='dark' >SZCZECIN WEATHER</a>"
            },
            "waw":{
                "Poland":"<a href='https://www.lotnisko-chopina.pl/?lang=en'> Warsaw Chopin Airport (WAW)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/52d2321d01/warsaw/' data-label_1='WARSAW' data-label_2='WEATHER' data-theme='dark' >WARSAW WEATHER</a>"
            },
            "wro":{
                "Poland":"<a href='http://airport.wroclaw.pl/en/'> Wroclaw Airport (WRO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/51d1117d04/wroclaw/' data-label_1='WROCŁAW' data-label_2='WEATHER' data-theme='dark' >WROCŁAW WEATHER</a>"
            },
            "fao":{
                "Portugal":"<a href='https://www.aeroportofaro.pt/en/fao/home'> Faro (FAO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/37d02n7d93/faro/' data-label_1='FARO' data-label_2='WEATHER' data-theme='dark' >FARO WEATHER</a>"
            },
            "lis":{
                "Portugal":"<a href='http://www.lisbon-airport.com/'> Lisbon Airport (LIS)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/38d72n9d14/lisbon/' data-label_1='LISBON' data-label_2='WEATHER' data-theme='dark' >LISBON WEATHER</a>"
            },
            "opo":{
                "Portugal":"<a href='http://www.porto-airport.com/'> Porto Airport (OPO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/41d16n8d63/porto/' data-label_1='PORTO' data-label_2='WEATHER' data-theme='dark' >PORTO WEATHER</a>"
            },
            "otp":{
                "Romania":"<a href='http://www.bucharestairports.ro/index.php?lang=en'> Bucharest H. Coanda Airport (OTP)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/44d4326d10/bucharest/' data-label_1='BUCHAREST' data-label_2='WEATHER' data-theme='dark' >BUCHAREST WEATHER</a>"
            },
            "clj":{
                "Romania":"<a href='http://airportcluj.ro/?id_limba=2'> Cluj-Napoca Airport (CLJ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/46d7723d62/cluj-napoca/' data-label_1='CLUJ-NAPOCA' data-label_2='WEATHER' data-theme='dark' >CLUJ-NAPOCA WEATHER</a>"
            },
            "cnd":{
                "Romania":"<a href='http://www.mk-airport.ro/en'> Constanta Airport (CND)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/44d1628d63/constanta/' data-label_1='CONSTANȚA' data-label_2='WEATHER' data-theme='dark' >CONSTANȚA WEATHER</a>"
            },
            "cra":{
                "Romania":"<a href='http://www.aeroportcraiova.ro/'> Craiova Airport (CRA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/44d3323d79/craiova/' data-label_1='CRAIOVA' data-label_2='WEATHER' data-theme='dark' >CRAIOVA WEATHER</a>"
            },
            "ias":{
                "Romania":"<a href='https://www.aeroport-iasi.ro/'> Iasi Airport (IAS)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d1627d60/iasi/' data-label_1='IAȘI' data-label_2='WEATHER' data-theme='dark' >IAȘI WEATHER</a>"
            },
            "suj":{
                "Romania":"<a href='https://www.aeroportulsatumare.ro/'> Satu Mare (SUJ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d8022d86/satu-mare/' data-label_1='SATU MARE' data-label_2='WEATHER' data-theme='dark' >SATU MARE WEATHER</a>"
            },
            "sbz":{
                "Romania":"<a href='http://www.sibiuairport.ro/'> Sibiu Airport (SBZ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d8024d13/sibiu/' data-label_1='SIBIU' data-label_2='WEATHER' data-theme='dark' >SIBIU WEATHER</a>"
            },
            "scv":{
                "Romania":"<a href='https://www.aeroportsuceava.ro/en/'> Suceava Airport (SCV)</a>"
            },
            "tsr":{
                "Romania":"<a href='http://aerotim.ro/'> Timisoara Airport (TSR)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/45d7521d21/timisoara/' data-label_1='TIMIȘOARA' data-label_2='WEATHER' data-theme='dark' >TIMIȘOARA WEATHER</a>"
            },
            "tgm":{
                "Romania":"<a href='http://www.aeroportultransilvania.ro/'> Tirgu Mures Airport (TGM)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/46d5424d55/targu-mures/' data-label_1='TÂRGU MUREȘ' data-label_2='WEATHER' data-theme='dark' >TÂRGU MUREȘ WEATHER</a>"
            },
            "kzn":{
                "Russia":"<a href='http://www.kazan.aero/'> Kazan International Airport (KZN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/55d8349d07/kazan/' data-label_1='KAZAN' data-label_2='WEATHER' data-theme='dark' >KAZAN WEATHER</a>"
            },
            "vko":{
                "Russia":"<a href='http://www.vnukovo.ru/en/'> Moscow Vnukovo Airport (VKO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/55d7637d62/moscow/' data-label_1='MOSCOW' data-label_2='WEATHER' data-theme='dark' >MOSCOW WEATHER</a>"
            },
            "led":{
                "Russia":"<a href='https://pulkovoairport.ru/en/'> Saint Petersburg Airport (LED)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/59d9330d34/saint-petersburg/' data-label_1='SAINT PETERSBURG' data-label_2='WEATHER' data-theme='dark' >SAINT PETERSBURG WEATHER</a>"
            },
            "beg":{
                "Serbia":"<a href='https://beg.aero/lat'> Belgrade Airport (BEG)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/44d7920d45/belgrade/' data-label_1='BELGRADE' data-label_2='WEATHER' data-theme='dark' >BELGRADE WEATHER</a>"
            },
            "ini":{
                "Serbia":"<a href='http://nis-airport.com/en/'> Niš Airport (INI)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/43d3221d90/nis/' data-label_1='NIŠ' data-label_2='WEATHER' data-theme='dark' >NIŠ WEATHER</a>"
            },
            "bts":{
                "Slovakia":"<a href='https://www.bts.aero/en/'> Bratislava Airport (BTS)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/48d1517d11/bratislava/' data-label_1='BRATISLAVA' data-label_2='WEATHER' data-theme='dark' >BRATISLAVA WEATHER</a>"
            },
            "ksc":{
                "Slovakia":"<a href='https://www.airportkosice.sk/'> Kosice Airport (KSC)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/48d7221d26/kosice/' data-label_1='KOŠICE' data-label_2='WEATHER' data-theme='dark' >KOŠICE WEATHER</a>"
            },
            "tat":{
                "Slovakia":"<a href='http://www.airport-poprad.sk/'> Poprad - Tatry Airport (TAT)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/49d0520d30/poprad/' data-label_1='POPRAD' data-label_2='WEATHER' data-theme='dark' >POPRAD WEATHER</a>"
            },
            "lju":{
                "Slovenia":"<a href='http://www.lju-airport.si/en/Main'> Ljubljana Airport (LJU)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/46d0614d51/ljubljana/' data-label_1='LJUBLJANA' data-label_2='WEATHER' data-theme='dark' >LJUBLJANA WEATHER</a>"
            },
            "alc":{
                "Spain":"<a href='http://www.aena.es/es/pasajeros/pasajeros.html'> Alicante Airport (ALC)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/38d35n0d49/alicante/' data-label_1='ALICANTE' data-label_2='WEATHER' data-theme='dark' >ALICANTE WEATHER</a>"
            },
            "bcn":{
                "Spain":"<a href='http://www.aena.es/en/barcelona-airport/index.html'> Barcelona Airport - Terminal 2 (BCN)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/41d392d17/barcelona/' data-label_1='BARCELONA' data-label_2='WEATHER' data-theme='dark' >BARCELONA WEATHER</a>"
            },
            "cdt":{
                "Spain":"<a href='https://www.turismodecastellon.com/en/'> Castellón (CDT)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/40d15n0d15/castellon/' data-label_1='CASTELLÓN' data-label_2='WEATHER' data-theme='dark' >CASTELLÓN WEATHER</a>"
            },
            "fue":{
                "Spain":"<a href='http://www.aena.es/en/fuerteventura-airport/index.html'> Fuerteventura (Canary Islands) Airport (FUE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/28d29n16d63/canary-islands/' data-label_1='CANARY ISLANDS' data-label_2='WEATHER' data-theme='dark' >CANARY ISLANDS WEATHER</a>"
            },
            "ibz":{
                "Spain":"<a href='https://ibizaairport.org/'> Ibiza Airport (IBZ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/38d911d42/ibiza/' data-label_1='IBIZA' data-label_2='WEATHER' data-theme='dark' >IBIZA WEATHER</a>"
            },
            "ace":{
                "Spain":"<a href='https://www.lanzarote-airport.net/'> Lanzarote (Canary Islands) Airport (ACE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/28d29n16d63/canary-islands/' data-label_1='CANARY ISLANDS' data-label_2='WEATHER' data-theme='dark' >CANARY ISLANDS WEATHER</a>"
            },
            "mad":{
                "Spain":"<a href='http://www.aena.es/en/madrid-barajas-airport/index.html'> Madrid Airport - Terminal 1 (MAD)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/40d42n3d70/madrid/' data-label_1='MADRID' data-label_2='WEATHER' data-theme='dark' >MADRID WEATHER</a>"
            },
            "agp":{
                "Spain":"<a href='https://www.airport-malaga.com/'> Malaga Airport (AGP)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/36d72n4d42/malaga/' data-label_1='MÁLAGA' data-label_2='WEATHER' data-theme='dark' >MÁLAGA WEATHER</a>"
            },
            "pmi":{
                "Spain":"<a href='http://www.aena.es/en/palma-mallorca-airport/index.html'> Palma de Mallorca Airport (PMI)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/39d572d65/palma/' data-label_1='PALMA' data-label_2='WEATHER' data-theme='dark' >PALMA WEATHER</a>"
            },
            "sdr":{
                "Spain":"<a href='http://www.aena.es/en/santander-airport/index.html'> Santander (SDR)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/43d46n3d81/santander/' data-label_1='SANTANDER' data-label_2='WEATHER' data-theme='dark' >SANTANDER WEATHER</a>"
            },
            "svq":{
                "Spain":"<a href='https://www.sevilla-airport.com/en/'> Seville Airport (SVQ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/37d39n5d98/seville/' data-label_1='SEVILLE' data-label_2='WEATHER' data-theme='dark' >SEVILLE WEATHER</a>"
            },
            "tfs":{
                "Spain":"<a href='http://www.aena.es/en/tenerife-sur-airport/index.html'> Tenerife Airport (TFS)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/28d46n16d25/santa-cruz-de-tenerife/' data-label_1='TENERIFE' data-label_2='WEATHER' data-theme='dark' >TENERIFE WEATHER</a>" 
            },
            "vlc":{
                "Spain":"<a href='http://www.aena.es/en/valencia-airport/index.html'> Valencia Manises Airport (VLC)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/undefined/' data-label_1='TENERIFE' data-label_2='WEATHER' data-theme='dark' >TENERIFE WEATHER</a>"
            },
            "zaz":{
                "Spain":"<a href='http://www.zaragoza-airport.com/en/index.php'> Zaragoza Airport (ZAZ)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/41d65n0d89/zaragoza/' data-label_1='ZARAGOZA' data-label_2='WEATHER' data-theme='dark' >ZARAGOZA WEATHER</a>"
            },
            "got":{
                "Sweden":"<a href='https://www.swedavia.com/landvetter'> Gothenburg Landvetter Airport (GOT)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/57d7111d97/gothenburg/' data-label_1='GOTHENBURG' data-label_2='WEATHER' data-theme='dark' >GOTHENBURG WEATHER</a>"
            },
            "gse":{
                "Sweden":"<a href='https://www.saveflygplats.com/'> Gothenburg City Airport (GSE)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/57d7111d97/gothenburg/' data-label_1='GOTHENBURG' data-label_2='WEATHER' data-theme='dark' >GOTHENBURG WEATHER</a>"
            },
            "mmx":{
                "Sweden":"<a href='https://www.swedavia.com/malmo/'> Malmö Airport (MMX)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/55d6013d00/malmo/' data-label_1='MALMÖ' data-label_2='WEATHER' data-theme='dark' >MALMÖ WEATHER</a>"
            },
            "nyo":{
                "Sweden":"<a href='https://www.skavsta.se/en/'> Stockholm Skavsta Airport (NYO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/59d3318d07/stockholm/' data-label_1='STOCKHOLM' data-label_2='WEATHER' data-theme='dark' >STOCKHOLM WEATHER</a>"
            },
            "vxo":{
                "Sweden":"<a href='https://smalandairport.se/'> Vaxjo (VXO)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/56d8814d81/vaxjo/' data-label_1='VÄXJÖ' data-label_2='WEATHER' data-theme='dark' >VÄXJÖ WEATHER</a>"
            },
            "bsl":{
                "Switzerland":"<a href='https://www.euroairport.com/en/'> Basel-Mulhouse-Freiburg Airport (BSL)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/47d567d59/basel/' data-label_1='BASEL' data-label_2='WEATHER' data-theme='dark' >BASEL WEATHER</a>"
            },
            "gva":{
                "Switzerland":"<a href='http://www.gva.ch/en/DesktopDefault.aspx'> Geneva Airport (GVA)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/46d206d14/geneva/' data-label_1='GENEVA' data-label_2='WEATHER' data-theme='dark' >GENEVA WEATHER</a>"
            },
            "hrk":{
                "Ukraine":"<a href='https://hrk.aero/en'> Kharkiv International Airport (HRK)</a> <a class='weatherwidget-io' href='https://forecast7.com/en/49d9936d23/kharkiv/' data-label_1='KHARKIV' data-label_2='WEATHER' data-theme='dark' >KHARKIV WEATHER</a>"
            },
            "kbp":{
                "Ukraine":"<a href='https://kbp.aero/en/'> Boryspil International Airport (KBP)</a>"
            },
            "iev":{
                "Ukraine":"<a href='https://iev.aero/en/'> Kyiv Zhulyany Airport (IEV)</a>"
            },
            "lwo":{
                "Ukraine":"<a href='https://lwo.aero/'> Lviv Danylo Halytskyi International Airport (LWO)</a>"
            },
            "ods":{
                "Ukraine":"<a href='https://odesa.aero/'> Odesa International Airport (ODS)</a>"
            },
            "ozh":{
                "Ukraine":"<a href='https://ozh.aero/en/'> Zaporizhzhya International Airport (OZH)</a>"
            },
            "dwc":{
                "United Arab Emirates":"<a href='http://www.dubaiairports.ae/corporate/about-us/dwc-dubai-world-central'> Dubai Airport (DWC)</a>"
            },
            "abz":{
                "United Kingdom":"<a href='https://www.aberdeenairport.com/'> Aberdeen Airport (ABZ)</a>"
            },
            "bfs":{
                "United Kingdom":"<a href='http://www.belfastairport.com/'> Belfast (BFS)</a>"
            },
            "bhx":{
                "United Kingdom":"<a href='https://birminghamairport.co.uk/'> Birmingham Airport (BHX)</a>"
            },
            "brs":{
                "United Kingdom":"<a href='http://www.bristolairport.co.uk/'> Bristol Airport (BRS)</a>"
            },
            "dsa":{
                "United Kingdom":"<a href='http://flydsa.co.uk/'> Doncaster/Sheffield Airport (DSA)</a>"
            },
            "edi":{
                "United Kingdom":"<a href='https://www.edinburghairport.com/'> Edinburgh Airport (EDI)</a>"
            },
            "gla":{
                "United Kingdom":"<a href='https://www.glasgowairport.com/'> Glasgow International Airport (GLA)</a>"
            },
            "lpl":{
                "United Kingdom":"<a href='https://www.liverpoolairport.com/'> Liverpool Airport (LPL)</a>"
            },
            "sen":{
                "United Kingdom":"<a href='https://southendairport.com/'> London Southend Airport (SEN)</a>"
            },
            "lgw":{
                "United Kingdom":"<a href='https://www.gatwickairport.com/'> London Gatwick (LGW)</a>"
            },
            "ltn":{
                "United Kingdom":"<a href='https://www.london-luton.co.uk/'> London Luton Airport (LTN)</a>"
            }
        }
    ])
    return (
<AirportContext.Provider value={'hello'}>

</AirportContext.Provider>
    )
}