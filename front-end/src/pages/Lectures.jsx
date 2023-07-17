import React from 'react'
import { useEffect } from 'react'
import useAuthContext from '../context/AuthContext'
import questions1 from '../context/data1'
import questions2 from '../context/data2'
import questions3 from '../context/data3'
import questions4 from '../context/data4'
import questions5 from '../context/data5'
import questions6 from '../context/data6'
import Lecture from '../components/Lecture'
import { Fragment, useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FogComputing from "../images/fog_computing.jpg"
import Rozdiely from "../images/Rozdiely3.png"
import NodeDevices from "../images/NodeDevices.png"
import EdgeComputing from "../images/edge-computing.png"
import EdgeBenefits from "../images/5-key-benefits-of-edge-computing-2.jpg"
import CloudComputing from "../images/cloud-computing.png"
import { Navigate } from 'react-router-dom'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Lectures = () => {
  const { user, getUser } = useAuthContext();
  const [open, setOpen] = useState(0);
  const [lecture1] = useState("Lekcia 1 - Edge Computing");
  const [lecture2] = useState(" Lekcia 2 - Konkrétne využitia Edge computingu");
  const [lecture3] = useState("Lekcia 3 - Fog Computing");
  const [lecture4] = useState("Lekcia 4 - Cloud Computing");
  const [lecture5] = useState(" Lekcia 5 Rozdiely Cloud a Edge Computingu");
  const [lecture6] = useState("Lekcia 6 - Komunikácia zariadení v sieti");



  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    if (!user) {
      getUser;
    } else {

    }
  }, []);

  return (
    <>
      <Fragment>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p className='ml-[3%]'>Lekcia 1 - Edge Computing</p>
          </AccordionHeader>
          <AccordionBody>
            <h1 className='text-center text-2xl font-bold'>Edge Computing</h1>
            <br />
            <div className='mx-[10%]'>
              <p> <span className='ml-12'>Edge computing je metóda spracovania údajov bližšie k ich zdroju namiesto odosielania všetkých údajov do centrálneho miesta na spracovanie, ako je napríklad dátové centrum alebo cloud. Toto umožňuje rýchlejšie spracovanie a nižšiu latenciu, pretože údaje nemusia cestovať tak ďaleko, aby boli spracované. Edge computing je obzvlášť užitočný pre aplikácie, ktoré vyžadujú rozhodovanie v reálnom čase a potrebujú okamžité vyhodnotenie, to sú napríklad autonómne vozidlá, systémy priemyselnej automatizácie alebo lekárske zariadenia. Spracovanie údajov bližšie k zdroju dát navyše pomáha znižovať zaťaženie siete a umožňuje efektívnejšie využívanie výpočtových zdrojov. Edge computing tiež umožňuje spracovanie citlivých údajov lokálne bez ich posielania cez sieť, čím zvyšuje bezpečnosť. V dnešnej dobe sa väčšina dát generuje zariadeniami. Podľa spoločnosti Cisco bude v roku 2023 prepojených viac ako 29.3 miliárd zariadení na celom svete. Napriek tomu budú niektoré typy aplikácií vyžadovať nízku latenciu. Iné, budú napríklad vyžadovať lokálne spracovanie. To nie je v súlade so službami, ktoré poskytuje Cloud computing. Preto ako riešenie prichádza edge computing a ponúka technológie, ktoré riešia rôzne problémy súvisiace s technológiami Cloud computingu.  </span> </p>
              <br />
              <h2 className='ml-6 text-xl font-bold' >Využitie Edge Computingu</h2>
              <br />
              <p> <span className='ml-12'>Edge computing sa využíva v mnoho rôznych odvetviach. Napríklad, v priemysle sa edge computing používa na analýzu dát zo senzorov strojov a zariadení, čo umožňuje predchádzať poruchám a zvyšovať efektívnosť výroby. V doprave sa edge computing používa na spracovanie dát z kamier a senzorov v automobiloch, čo umožňuje automatizovať jazdu a zvyšovať bezpečnosť na cestách. V zdravotníctve sa edge computing používa na spracovanie dát z lekárskych zariadení, čo umožňuje rýchlejšie rozhodovanie o liečbe pacienta. Vďaka edge computingu sa tiež očakáva, že sa zlepší bezpečnosť dát a znížia sa náklady na prenos a spracovanie dát.</span></p>
              <br />
              <br />
              <img src={EdgeComputing} alt="Edge Computing" className="w-[70%] h-auto mx-auto" />
              <br />
              <h2 className='ml-6 text-xl font-bold' >Výhody edge computingu</h2>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' >Efektívnejšie  operácie.</span> Edge computing pomáha optimalizovať každodennú prevádzku systému rýchlym spracovaním veľkých objemov údajov na okraji sieti, kde sa tieto dáta zhromažďujú.  Je to efektívnejšie ako posielať všetky zozbierané údaje do centralizovaného cloudu alebo dátového centra vzdialeného stovky kilometrov, čo by spôsobilo nadmernú odozvu  sieti a zhoršený výkon.</span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' >Rýchlejšia odozva. </span> Obídenie dátových centier umožňuje spoločnostiam rýchlejšie a spoľahlivejšie spracovanie údajov v reálnom čase alebo v čase, ktorý sa mu približuje. Pri pokuse poslať naraz informácie z tisícov snímačov, kamier alebo iných inteligentných zariadení do dátových centier môže dôjsť k zníženiu kvality údajov. Namiesto toho edge computing umožňuje zariadeniam na okraji siete alebo v jej blízkosti okamžite upozorniť kľúčových pracovníkov a zariadenia na mechanické poruchy, bezpečnostné hrozby a iné kritické udalosti. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' >Vyššia produktivita zamestnancov. </span>Edge computing umožňuje podnikom rýchlejší prístup k údajom, ktoré pracovníci potrebujú pre svoju prácu. Naďalej Edge computing umožňuje spravovanie zariadení, čo vedie k väčšej spoľahlivosti systému. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Zvýšená spoľahlivosť.  </span> Edge computing môže pomôcť zvýšiť spoľahlivosť, pretože nie je závislý od internetového pripojenia alebo od funkčnosti serverov dátových centier. To môže byť výhodou na miestach, kde existuje riziko výpadkov elektrickej siete alebo internetu. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' >Zlepšenie bezpečnosti na pracovisku. </span> </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' ></span> V pracovných prostrediach, kde pomalé výpočty môžu spôsobiť zranenia, poškodenie zariadení, alebo poškodenie životného prostredia môže edge computing pomôcť udržať bezpečnosť na pracovisku. Napríklad na ropných plošinách, plynovodoch a v iných prípadoch priemyselného využitia môže prediktívna údržba a analyzované údaje v reálnom čase na mieste zariadení alebo v ich blízkosti pomôcť zvýšiť bezpečnosť na pracovisku a minimalizovať vplyv na životné prostredie. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Zvýšená bezpečnosť. </span> Bezpečnostné riziko tisícov zariadení pripojených na internet je pre podniky veľkým rizikom. Edge computing ho pomáha znížiť tým, že umožňuje podnikom spracovať údaje lokálne a ukladať ich offline. Znižuje sa tak objem údajov prenášaných cez sieť a podniky sú menej zraniteľné voči vonkajším útokom. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Zníženie nákladov. </span> Vďaka edge computingu môžu podniky optimalizovať svoje výdavky tým, že spracúvajú údaje lokálne. Okrem minimalizácie nákladov firiem na spracovanie a ukladanie dát v cloude znižuje edge computing náklady na prenos tým, že vyraďuje nepotrebné dáta na mieste zariadenia. </span></p>
              <br />
              <br />
              <img src={EdgeBenefits} alt="Bemefits of Edge Computing" className="w-[70%] h-auto mx-auto" />
              <br />
              <h2 className='ml-6 text-xl font-bold' >Nevýhody Edge Computingu</h2>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Počiatočné náklady.  </span>  Aj keď náklady na vzdialené úložisko sú nižšie, náklady na nákup zariadení sa zvyšujú. Taktiež je v niektorých prípadoch potrebné modernizovať starú sieťovú architektúru na novú, ktorá zvládne podporu zariadení na okraji siete. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Strata dát.  </span> Pri Edge computingu je dôležité dobre nakonfigurovať zariadenia aby sa predišlo strate dát. Veľa zariadení na okraji siete vymazáva irelevantné dáta a tým šetrí úložisko. Takto je to správne, ale ak sa nám potrebné dáta stratia, ich obnova je namáhavá a niekedy aj nemožná. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Údržba.  </span> Údržbu zariadení nemožno ignorovať. Zariadenia majú kratšiu životnosť batérií, rozbíjajú sa a treba im udržiavať aktuálny softvér. Preto podnik musí brať do úvahy aj udržiavanie a výmenu zariadení. </span></p>

              <p> <span className='ml-12'> <span className='font-bold' > </span>  </span></p>
              <p> <span className='ml-12'></span></p>
            </div>
            <Lecture questions={questions1} lecture={lecture1} />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <p className='ml-[3%]'>Lekcia 2 - Konkrétne využitia Edge computingu</p>
          </AccordionHeader>
          <AccordionBody>
            <h1 className='text-center text-2xl font-bold'>Konkrétne využitia Edge computingu</h1>
            <br />
            <div className='mx-[10%]'>
              <p> <span className='ml-12'> <span className='font-bold' > Zdravotná starostlivosť. </span> Okamžitá starostlivosť a rýchla diagnostika sú možné vďaka Edge computing, ktorý umožňuje spracovanie a analýzu údajov priamo na zdravotníckych zariadeniach a senzoroch. V rámci telemedicíny je Edge computing využívaný na spracovanie a prenos dát v reálnom čase medzi lekármi a pacientmi, čo umožňuje diaľkové konzultácie a monitorovanie pacientov na diaľku. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Automobilový priemysel. </span> V autonómnych vozidlách je Edge computing nevyhnutný pre spracovanie obrovského množstva údajov generovaných z rôznych senzorov a kamer. Tieto údaje sa spracovávajú priamo vo vozidle, čo umožňuje rýchlu reakciu a zabezpečuje bezpečnosť na cestách. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > V preprave </span> sa Edge computing využíva na optimalizáciu trasy, monitorovanie vozidiel a sledovanie stavu zásielok v reálnom čase, čo umožňuje efektívne riadenie a zlepšuje celkový efektivitu. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Automatizácia </span> v priemysle môže výrazne zvýšiť produktivitu a efektivitu. Vďaka pokročilej robotickej technológii možno úlohy, ktoré kedysi robili ľudia, automatizovať, čím sa zamestnancom uvoľní drahocenný čas, ktorý môže firma využiť na iné oblasti ich podnikania. To môže viesť k úsporám nákladov, ako aj k zvýšeniu efektivity práce. Okrem toho môže automatizácia zvýšiť bezpečnosť na pracovisku znížením rizika nehôd spôsobených ľudskou chybou. Je jasné, že výhody automatizácie z nej robia hodnotnú investíciu pre každý priemyselný podnik, ktorý nechce zaostávať za konkurenciou.
                <br />
                Efektívnosť výrobných procesov je v tomto odvetví možná  pomocou Edge computingu, ktorý rýchlo spracováva dáta získané z výrobných zariadení a senzorov, čím sa znižuje oneskorenie.
              </span> </p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Virtuálna a rozšírená realita. </span> V oblasti virtuálnej a rozšírenej reality umožňuje Edge computing rýchle spracovanie grafických a senzorických údajov priamo na zariadení. To zlepšuje užívateľský zážitok a minimalizuje oneskorenia. </span></p>
              <br />
              <p> <span className='ml-12'>  <span className='font-bold' > </span> Bezpečnosť a ochrana </span> Edge computing umožňuje rýchle spracovanie údajov z bezpečnostných kamer a senzorov, čo umožňuje rýchlu detekciu hrozieb a okamžitú reakciu. </p>
              <br />
              <p> <span className='ml-12'>  <span className='font-bold' > Inteligentné domy </span> Objem údajov, ktoré domácnosti generujú a prenášajú, sa prudko zvýšil, pretože v domácnostiach sa čoraz viac používajú moderné zariadenia cez všetko od virtuálnych asistentov s umelou inteligenciou, ako je napríklad Alexa až po bezpečnostné systémy, ktoré udržujú obyvateľov v bezpečí. Edge computing umiestnený v rámci domácnosti by mohol znížiť zaťaženie siete, zabezpečiť odozvu v reálnom čase a zvýšiť ochranu súkromia tým, že bude odosielať menej údajov aplikáciám tretích strán. </span></p>
              <br />
              <p> <span className='ml-12'> Toto sú len niektoré z mnohých aplikácií Edge computingu, ktoré majú významný vplyv na rôzne odvetvia. Jeho schopnosť posúvať výpočtovú silu na okraj siete prináša rýchlosť, spoľahlivosť a efektivitu do každodenných procesov a umožňuje nové príležitosti na inováciu. </span></p>
            </div>

            <Lecture questions={questions6} lecture={lecture2} />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <p className='ml-[3%]'>Lekcia 3 - Fog Computing</p>
          </AccordionHeader>
          <AccordionBody>
            <h1 className='text-center text-2xl font-bold'>Fog Computing</h1>
            <br />
            <div className='mx-[10%]'>
              <p> <span className='ml-12'>Fog computing, ktorý bol pôvodne pomenovaný spoločnosťou Cisco. Fog computing je výpočtová zóna umiestnená medzi cloudom a okrajom siete. Slovo „Fog“ vo voľnom preklade „Hmla“, vo fog computingu je metafora, pretože hmla sú v podstate oblaky blízko zeme. Toto sa týka toho, že Fog computing sa nachádza pod cloudom a tesne nad okrajom siete (Edge). </span> </p>
              <br />
              <h2 className='ml-6 text-xl font-bold'>Fog vs. Edge Computing.</h2>
              <br />
              <p> <span className='ml-12'></span>Spracovanie dát v reálnom čase ide tiež riešiť aj pomocou Edge computingu. Teda v čom sa líši Edge a Fog computing ? Fog je označenie pre virtualizovanú platformu, kde sa požiadavky na spracovanie údajov riešia pomocou dátového centra (Cloud computing), ako aj pomocou zariadení na okraji siete (Edge computing). Táto platforma sa nachádza medzi zariadeniami na okraji siete a tradičnými cloudovými dátovými centrami. Hlavný rozdiel oproti Edge computingu spočíva vo fakte, že pojem Fog computing zahrňuje nielen zdroje pre spracovanie dát v lokálnej sieti, ale zároveň aj zdroje v cloude.</p>
              <br />
              <br />
              <img src={FogComputing} alt="Fog Computing" className="w-[70%] h-auto mx-auto" />
              <p> <span className='ml-12'> <span className='font-bold' > </span>  </span></p>
              <p> <span className='ml-12'></span></p>
            </div>

            <Lecture questions={questions2} lecture={lecture3} />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            <p className='ml-[3%]'>Lekcia 4 - Cloud Computing</p>
          </AccordionHeader>
          <AccordionBody>
            <h1 className='text-center text-2xl font-bold'>Cloud Computing</h1>
            <br />
            <div className='mx-[10%]'>
              <p> <span className='ml-12'>Každým dňom nás obklopujú nové technologické inovácie. Jednou z týchto technologických inovácií je aj Cloud computing, voľne preložené „virtuálny oblak“ alebo „výpočtový mrak“.  Veľa ľudí si ani neuvedomuje, že služby cloudu využíva na každodennej báze. Typickým príkladom sú mailové služby ako Gmail alebo Zoznam, služby úložiska ako napríklad DropBox a OneDrive alebo Google Calendar.
                Vo všeobecnosti môžeme Cloud computing chápať ako uladanie, spracovanie a využívanie údajov prostredníctvom internetu. To znamená, že užívatelia majú k dispozícii výpočtový výkon na požiadanie a majú prístup ku svojim údajom kdekoľvek, kde je internetové pripojenie. Cloud computing tiež umožňuje organizáciám meniť svoje výpočtové požiadavky podľa potreby nahor alebo nadol, čo z neho robí flexibilný a nákladovo efektívny spôsob spravovania údajov. Cloud poznáme aj pod názvami „on-demand computing“ a „utility computing“.
              </span> </p>
              <br />
              <p> <span className='ml-12'>Podľa spoločnosti IMB je Cloud computing definovaný ako prístup k výpočtovým zdrojom - aplikáciám, serverom, dátovým úložiskám a vývojovým nástrojom na požiadanie prostredníctvom internetu. Tieto služby sú poskytované a spravované poskytovateľom cloudových služieb. Poskytovatelia cloudových služieb tieto zdroje sprístupňujú za mesačný poplatok alebo účtujú poplatky podľa používania.
                Cloudová technológia umožňuje firmám aj jednotlivcom využívať počítačové zdroje bez toho, aby museli mať fyzicky vlastnú výpočtovú infraštruktúru vo svojich vlastných priestoroch. Cloud computing je možné nasadiť pre riešenie rôznych typov problémov. Všeobecne existuje základné rozdelenie služieb Cloud computingu podľa spôsobu ich poskytovania, čiže aká organizácia tieto služby poskytuje. Pokiaľ ide o internú IT organizáciu, ktorá tieto služby poskytuje viacerým oddeleniam, dcérskym a partnerským firmám, hovoríme o privátnych cloudoch. V prípade, že službu poskytuje externý poskytovateľ manažovanej cloud služby, hovoríme o verejných cloudoch.
                Modely cloudu sú zavádzané a popisované podľa ich hlavných činností a poskytovaných služieb. Existuje mnoho rozdelení, ale všetky majú spoločný znak zakončenia svojho názvu skratkou aaS, čo znamená as a Service. V súlade s NITS existujú tri modely služieb: SaaS (softvér ako služba), PaaS (platforma ako služba) a IaaS (infraštruktúra ako služba).
              </span> </p>
              <br />
              <h2 className='ml-6 text-xl font-bold'>Využitie Cloud computingu</h2>
              <br />
              <p> <span className='ml-12'></span>Zo zavedenia Cloud computingu môžu ťažiť viaceré oblasti spoločnosti, ako sú napríklad vedecké a technické inštitúcie, hry a sociálne siete, ako aj mnohé ďalšie výpočtové a dátovo náročné činnosti. V cloude je možné uložiť širokú škálu údajov od výsledkov fyzikálnych experimentov, cez finančné údaje alebo údaje o podnikovom riadení, až po osobné údaje, ako sú fotografie, videá a filmy. Navyše, informácie uložené v cloude sa dajú ľahko zdieľať. Uvedená skutočnosť však otvára aj mnohé obavy vzhľadom na bezpečnosť a súkromie údajov. V konečnom dôsledku, je Cloud computing cenným nástrojom pre podniky všetkých rozmerov, ktorý môže pomôcť zvýšiť efektívnosť, znížiť náklady a zvýšiť dostupnosť dát a aplikácií pre zamestnancov. Avšak, je dôležité zvážiť potenciálne riziká a závislosti spojené s Cloud computigom predtým ako sa rozhodnete pre jeho implementáciu.</p>
              <br />
              <br />
              <img src={CloudComputing} alt="Cloud Computing" className="w-[70%] h-auto mx-auto" />
              <br />
              <h2 className='ml-6 text-xl font-bold'>Výhody Cloud computingu</h2>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Škálovateľnosť </span> je schopnosť Cloud computingu zvyšovať alebo znižovať zdroje podľa dopytu. Škálovateľnosť je jednou z charakteristických a najpopulárnejších znakov cloudu. Implementáciou škálovateľnosti umožníte, aby vaše zdroje rástli rovnako rýchlo ako vaše požiadavky a naopak. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Flexibilita. </span> Cloud computing zlepšuje flexibilitu na pracovisku. Umožňuje zamestnancom pristupovať k údajom z domu alebo z akéhokoľvek miesta kde majú prístup k internetu. Toto zvyšuje mobilitu zamestnancov a prináša možnosť zamestnancom pracovať z domu. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Úspora nákladov. </span> Cloud computing vo veľkej miere šetrí finančné náklady. Medzi jeho najväčšie výhody patria znížené počiatočné investície na nákup softvéru,  hardvéru a licencií. Ďalšou výhodou sú paušálne platby za využívanie zdrojov, ktoré môžete škálovať podľa potreby. Vďaka vyššej flexibilite cloudu sa zvyšuje produktivita vašich zamestnancov, čo ďalej zvyšuje efektivitu. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Obnova údajov po zlyhaní.  </span> Údaje sú najcennejšie aktívum IT podniku. Ich poškodenie alebo strata môže spôsobiť nenapraviteľné poškodenie. Je nemožné predpovedať, kedy dôjde k zlyhaniu a aký vážny vplyv bude mať. Cloud computing vám umožní zálohovať, ukladať a obnovovať údaje v priebehu niekoľkých sekúnd vďaka podpore populárnych prístupov k obnove po zlyhaní. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Vyššia úroveň bezpečnosti. </span> Cloud computing poskytuje vysokú bezpečnosť verejných aj súkromných cloudov. Uchováva údaje a zabezpečuje nulové narušenie dát. Hybridný cloud prichádza s automatizovaným zabezpečením údajov aj s pokročilou prediktívnou analýzou hrozieb. Systém Cloud computingu tiež zabezpečuje ochranu pred hackermi. Bezpečnosť v Cloud computingu je veľmi dôležitá, preto sa na ňu kladie vysoký dôraz.  </span></p>
              <br />
              <h2 className='ml-6 text-xl font-bold' >Nevýhody Cloud Computingu</h2>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Výpadky.  </span> Pri práci s Cloud computingom by sme mali zohľadniť aj technické výpadky. Poskytovateľ cloudových služieb sa totiž môže stretnúť s výpadkom prúdu, slabým pripojením na internet, údržbou služieb a podobne. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Kontrola nad dátami.  </span> Keďže cloudové služby bežia na vzdialených serveroch, ktoré sú v kompletnom vlastníctve poskytovateľov služieb, Cloud computing poskytuje obmedzenú kontrolu nad dátami. Čo sťažuje podnikom kontrolu nad ich back-end infraštruktúrou. </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > Problémy s odozvou. </span> Cloudová odozva je podstatný problém Cloud computingu, predovšetkým teraz, keď zažívame exponenciálny nárast množstva dostupných dát a zariadení pripojených k internetu. Zvýšeným množstvom dát sa zvyšuje čas potrebný na presun dát do cloudu na výpočtové procesy a späť na stranu klienta. Oneskorenie je jedným z hlavných dôvodov prečo podniky prechádzajú z Cloud computingu na Edge computing.   </span></p>
              <br />
              <p> <span className='ml-12'> <span className='font-bold' > </span>  </span></p>
              <p> <span className='ml-12'></span></p>
            </div>
            <Lecture questions={questions3} lecture={lecture4} />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            <p className='ml-[3%]'>Lekcia 5 - Rozdiely Cloud a Edge Computingu</p>
          </AccordionHeader>
          <AccordionBody>
            <h1 className='text-center text-2xl font-bold'>Rozdiely Cloud a Edge computingu</h1>
            <br />
            <div className='mx-[10%]'>
              <p> <span className='ml-12'>Hlavný rozdiel medzi Edge a Cloud computingom spočíva v tom, že Edge computing približuje výpočty a ukladanie dát na okraj siete. Naopak, Cloud computing sa spolieha na odosielanie údajov do centralizovaných dátových centier. Edge computing je vhodný pre aplikácie, ktoré si vyžadujú nízku latenciu a vysoký výkon, ako sú napríklad autonómne vozidlá, zariadenia v zdravotníctve a priemysle. Ako už bolo spomenuté, Edge computing dokáže zhromaždiť a spracovať údaje zo senzorov a zariadení v reálnom čase bez toho, aby sa tieto údaje posielali na cloud. Na druhej strane, Cloud computing je flexibilnejší a škálovateľnejší. Často sa používa na aplikácie, ktoré tolerujú oneskorenie, ako napríklad e-mail alebo rôzne prehliadače. Keďže sa údaje ukladajú v centralizovaných dátových centrách, možno k nim pristupovať odkiaľkoľvek na svete.
              </span> </p>
              <br />
              <img
                src={Rozdiely}
                alt="Rozdiely Edge a Cloud Computingu"
                className="w-[75%] md:w-[50%] h-auto mx-auto"
              />
              <br />
            </div>
            <Lecture questions={questions4} lecture={lecture5} />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            <p className='ml-[3%]'>Lekcia 6 - Zariadenia v sieti a ich komunikácia</p>
          </AccordionHeader>
          <AccordionBody>
            <h1 className='text-center text-2xl font-bold'>Zariadenia v sieti a ich komunikácia</h1>
            <br />
            <div className='mx-[10%]'>
              <h2 className='ml-6 text-xl font-bold'>Zariadenia v sieti</h2>
              <br />
              <p> <span className='ml-12'>Zariadenia v sieti tvoria kľúčovú súčasť informačných a komunikačných technológií. Siete spájajú zariadenia a umožňujú im vzájomne komunikovať a vymieňať si dáta. Zariadenia v sieti môžu byť rôzneho typu a zohrávajú rôzne úlohy v závislosti od ich požadovanej funkcie umiestnenia v sieti. Medzi najčastejšie používané zariadenia v sieti patria napríklad smerovače, prepínače, brány, mosty, servery, klientske počítače a mobilné zariadenia. Každé z týchto zariadení má svoje špecifické funkcie a prispieva k správnej funkčnosti siete. V tejto kapitole sa budeme zaoberať komunikáciou, architektúrou a funkcionalitou zariadení v sieti </span>
              </p>
              <br />
              <p> <span className='ml-12'>Jedným z najdôležitejších zariadení v sieti je smerovač, ktorý umožňuje zariadeniam v sieti komunikovať medzi sebou cez rôzne sieťové protokoly. Smerovač zisťuje najkratšiu cestu, ktorou majú dáta prejsť, a následne ich pošle do správneho miesta. Bez smerovačov by komunikácia v sieti bola nemožná</span> </p>
              <br />
              <p> <span className='ml-12'>Ďalším zariadením v sieti sú prepínače, ktoré sú podobné smerovačom, ale sú určené pre menšie siete. Prepínače umožňujú zariadeniam v sieti komunikovať medzi sebou na vyššej rýchlosti a s menším oneskorením. Využívajú sa najmä v sieťach s vysokým dátovým tokom, kde by smerovače nedokázali zvládnuť takúto rýchlosť.</span> </p>
              <br />
              <p> <span className='ml-12'>Brány sú zariadenia, ktoré umožňujú prepojenie medzi sieťami s rôznymi protokolmi. Ich úlohou je prekladať dáta z jedného protokolu na iný a zabezpečiť, aby sa dáta dostali do správneho miesta. Brány sa používajú najmä pri prepojení sietí rôznych organizácií alebo medzi internetom a súkromnými sieťami.</span> </p>
              <br />
              <p> <span className='ml-12'>Mosty sú zariadenia, ktoré umožňujú prepojenie medzi dvoma sieťami rovnakého typu. Ich úlohou je zisťovať, ktoré zariadenia sa nachádzajú v rovnakej sieti a ktoré sa nachádzajú v inej. Mosty umožňujú komunikáciu medzi zariadeniami v rôznych segmentoch siete a tým zabezpečujú efektívnejšiu výmenu dát. </span> </p>
              <br />
              <p> <span className='ml-12'> Servery sú zariadenia, ktoré slúžia na ukladanie a poskytovanie dát a služieb. Servery sú výkonné počítače, ktoré umožňujú prístup k súborom a aplikáciám z rôznych zariadení v sieti. Medzi najpoužívanejšie typy serverov patria súborové, aplikácie, web, databázové a e-mailové servery.  </span> </p>
              <br />
              <h2 className='ml-6 text-xl font-bold'>Komunikácia zariadení v sieti</h2>
              <br />

              <p> <span className='ml-12'>Komunikácia zariadení v sieti je dôležitá pre správne fungovanie a efektívne využitie siete. Keďže sieť je zložená z množstva zariadení, vrátane počítačov, serverov, routerov a prepínačov, je kľúčové, aby tieto zariadenia mohli navzájom komunikovať efektívne a bezproblémovo. V tejto kapitole sa pozrieme na niektoré z hlavných aspektov komunikácie zariadení v sieti a na to, ako tieto aspekty ovplyvňujú výkon siete.

                Jedným z najdôležitejších aspektov komunikácie zariadení v sieti je protokol, ktorý sa používa. Protokoly sú sady pravidiel, ktoré určujú, ako majú zariadenia v sieti komunikovať. Existuje mnoho rôznych protokolov, ktoré sa používajú v sieťach, vrátane protokolu TCP/IP, ktorý je najbežnejším protokolom používaným v súčasnosti. Protokoly sa líšia v závislosti od toho, ako zabezpečujú spoľahlivosť a rýchlosť prenosu dát, ako aj od toho, aké služby ponúkajú.
              </span> </p>
              <br />
              <p> <span className='ml-12'>Ďalším dôležitým aspektom komunikácie zariadení v sieti je adresa zariadenia. Adresovanie zariadenia je kľúčové pre identifikáciu konkrétnych zariadení v sieti. Adresy môžu byť buď fyzické alebo logické a zvyčajne sa používajú IP adresy pre logické adresovanie. IP adresy sa používajú na identifikáciu konkrétnych zariadení v sieti a ich používanie je nevyhnutné pre komunikáciu medzi zariadeniami.

                Ďalším faktorom, ktorý ovplyvňuje komunikáciu zariadení v sieti, je topológia siete. Topológia siete sa vzťahuje na fyzické usporiadanie zariadení v sieti a môže ovplyvniť rýchlosť a spoľahlivosť prenosu dát. Napríklad, v topológii hviezdy sú všetky zariadenia pripojené k centrálnej základni, ktorá kontroluje komunikáciu medzi nimi. V topológii kruhu sú zariadenia pripojené v uzavretej slučke, kde dáta prechádzajú cez každé zariadenie v kruhu, kým nedosiahnu cieľové zariadenie.
              </span> </p>
              <br />
              <br />
              <img src={NodeDevices} alt="Zariadenia v sieti" className="w-[70%] h-auto mx-auto" />
              <br />
            </div>
            <Lecture questions={questions5} lecture={lecture6} />
          </AccordionBody>
        </Accordion>
      </Fragment>
    </>

  )
}

export default Lectures