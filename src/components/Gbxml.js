import React, { Component } from 'react';
import '../index.css';
import 'tachyons';
import { Helmet } from 'react-helmet'

class Gbxml extends Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
    }
    render() {
        if (this.lang === 'hun') {
            return (
                <div className="Gbxml pl3 overflow-x-hidden ">
                    <Helmet><title>gbXML modul</title></Helmet>
                    <h2>WinWatt gbXML modul</h2>
                    <p>A
                    gbXML modul segítségével építész programokban elkészült modelleket
                    tudunk átvenni a WinWatt programba, meggyorsítva a helsiségek leírását,
a határoló szerkezetekre vonatkozó geometriai adatok átvételével.</p>

                    <p>A
                    gbXML fájlt létrehozását ismereteink szerint többek közt az ArchiCAD és
                    a REVIT is támogatja. Nézze meg, hogy az Ön változata képes-e erre,
mert csak ebben az esetben van értelme a modul használatának.</p>
                    <p>Mivel az építész programok igen nagy szabadságot adnak az
                    építésztervezőnek a terv létrehozásakor, nem követeli meg esetleg olyan
                    objektumoknak a terven való szerepeltetését, amik az energetikai
számításnál szükségesek, ezért <b>a programok közti kapcsolattal
                        automatikusan megszülető számítást ellenőrizni, azt szükség esetén
módosítani kell!</b> Fokozottan ellenőrizzük azokat a helyiségeket,
amelyek több szinten túlnyúlnak, eltolt födémeket tartalmaznak, illetve
a helyiségen belül a födém tulajdonsága változik. Az íves falak és a
rajtuk elhelyezett nyílászárok is problémák forrása. Ha több helyiséget
kívülről ugyanaz a falszerkezet határol (az építész programban egyetlen
objektum), de az különböző hőtechnikai jellemzőkkel bír, mert például
egyes helyiségeknél extra hőszigetelést alkalmazunk, módosítanunk kell
a számításkor a tényleges értékekre az eltérő szakaszokat. Kismértékű
eltérésnél, például az egyik helyiségnél belül festett mészvakolat
szerepel, másutt csempeburkolat, megint máshol tapéta kerül a
mészvakolatra, ezek nem befolyásolják az energetikai számítás
szempontjából lényegesen az adott falszerkezet hőátbocsátási
tényezőjét, ennek a helyiségeknél való korrekciója alapvetően nem
szükséges. A szerkezetek páradiffúziós ellenőrzésénél viszont célszerű
mindegyik esetet külön ellenőrizni, mivel egy egészen vékony rétegnek
is jelentős lehet a páraellenállása, illetve a helyiség szempontjából
mértékadó belső légállapot is jelentősen különbözhet.</p>


                    <p>Az építész programban elkészített fájlt az <code>Eszközök |
ARCHLine.XP projekt betöltés…</code> vagy az<code> ARCAD projekt </code><code>betöltés…</code><code> </code>vagy a<code> gbXML projekt </code><code>betöltés…</code> funkcióval dolgozhatjuk fel, egy több lépésen
átvezető varázsló segítségével.</p>


                    <p>Egy új terv feldolgozásakor célszerű egy új projektet létrehozni, ha
                    ugyanannak a tervnek egy ismételt, korrigált számításáról van szó,
                    akkor a korábbi projektben végezzük a számítást, így bizonyos, korábban
                    már megadott adatok (lényegében a helyiségek tervezési hőmérsékletei)
                    megmaradnak. Első lépésként a fájl megnyitás párbeszédpanelben meg kell
nyitnunk az építész programmal exportált fájlt.</p>


                    <p><b>A helyiségek csoportosítása</b></p>


                    <p>A program feldolgozza a fájlt, és a varázsló első képernyőjén
                    megjeleníti az egyes helyiségeket elnevezésük szerint. Ezen a képernyőn
                    meghatározhatjuk, hogy az egyes helyiségeket hogyan csoportosítsa a
                    program, illetve a helyiség neveket hogyan képezze. Mivel a WinWatt
                    program egy adott csoporton belül minden elemnek különböző nevet
                    követel meg, ezért, ha nem adtunk meg külön helyiség számokat az
                    építész programban, szükséges lehet az építész programban meglévő
egyedi belső azonosító (ID) alkalmazása is.</p>


                    <p>Mivel a WinWattban egy épület definícióra is szükség van, erről is
                    rendelkeznünk kell. Ha az építész programból sikerült erre vonatkozó
                    információt is átvenni, akkor azt használhatjuk is, de lehetőség van
                    egy teljesen új épület automatikus létrehozására, illetve, ha a projekt
                    már tartalmaz épület objektumot, azt is választhatjuk. Megnyomva a
tovább gombot jutunk a következő képernyőre.</p>


                    <p><b>A helyiség hőmérsékletek módosítása</b></p>


                    <p>Ezen a képernyőn módosíthatjuk az egyes helyiségek méretezési belső
                    hőmérsékletét, illetve, hogy egyáltalán átvegyük-e az adott helyiséget
                    a WinWatt projektbe. Nem csak a téli, hanem a nyári hőmérsékletre
                    vonatkozó értékek is megadhatók, bár egyes WinWatt változatok a nyári
                    hőmérsékleteket nem használják, de esetleg a projektet majd egy olyan
                    WinWatt verzióval fogjuk később feldolgozni, ahol már a nyári
hőterhelés számítás is elvégezhető.</p>


                    <p>Mivel a módosításnál alkalmazott értékek több helyiségnél is
                    alkalmasak, ezért először jelöljük ki azokat a helyiségeket, amiket
módosítani szeretnénk. A kijelölés megkönnyítése végett a <i>lista
rendezés </i>rész segítségével a megadott <i>rendezési szempont</i>
szerint a listát újrarendezhetjük. Töltsük ki a <i>módosító értékek</i>
részen belüli adatokat, majd <i>a kijelölteket módosítja</i> gomb
megnyomásával módosítsuk az értékeket. Fontos, hogy a hőmérsékleteket
helyesen adjuk meg, mert ezen a ponton még a program tudja, hogy
egy-egy falszerkezet, ha az belső szerkezet, melyik két helyiséget
választja el egymástól, így a túloldali hőmérsékletünk is korrekt lesz
az adott szerkezetnél. Magát a helyiség hőmérsékletet a WinWatt
alkalmas funkciójával később is meg tudnánk változtatni, de az egyes
szerkezetek túloldali hőmérsékletére ez már nincs hatással.</p>


                    <p>Ha egy adott projektet már korábban feldolgoztunk, és a projekt
                    beolvasást ugyanebben a projektben végezzük, akkor a program kikeresi a
                    korábban megadott helyiség hőmérsékleteket, azokat nem kell újra
                    megadnunk. Ez akkor is igaz, ha a korábbi beolvasást nem vittük végig,
                    mert ezen a képernyőn tovább lépve már létrejönnek a helyiség
                    objektumok a WinWatt projektben, és a hőmérsékletek már eltárolásra
kerülnek.</p>


                    <p><b>Problémás szerkezetek (csak ARCHLine esetén)</b></p>


                    <p>Ez a képernyő nem minden esetben jelenik meg, hanem csak akkor, ha
                    vannak olyan szerkezetek, amikhez az ARCHLine tervben nem rendeltük
                    hozzá a szerkezetre jellemző hőtechnikai adatokat, vagy annak típusát a
                    program nem találta helyesnek. A probléma többféleképpen is megoldható,
                    de az is előfordulhat, hogy ezen a ponton meg kell szakítanunk a
feldolgozást, és az ARCHLineban kell a tervünket módosítani.</p>


                    <p>Ha az adott projektben elérhető az a szerkezet típus, amit a
                    problémás szerkezethez kellett volna rendelnünk, megtehetjük úgy, hogy
                    a jobb oldali részben megfogjuk az adott szerkezet típust, és ráhúzzuk
                    a jobboldali részben a problémás szerkezetre. Ha ugyanazt a
                    szerkezettípust szeretnénk több problémás szerkezethez is
                    hozzárendelni, akkor először jelöljük ki a listában a módosítandó
                    tételeket, majd valamelyik kijelöltre ráhúzva a szükséges
                    szerkezettípust, egyszerre valamennyi kijelölt szerkezetet
                    elintézhetjük. Addig nem tudunk továbblépni, amíg vannak még problémás
                    szerkezetek. Lehet, hogy akkor is a mellett döntünk, hogy megszakítjuk
                    a folyamatot, és az ARCHLineban módosítjuk a tervet, ha ezen a szinten
                    is hozzá tudnánk rendelni a szerkezetekhez a szükséges típust, mivel
                    ott egyszer és mindenkorra orvosolni lehet a problémát, míg az itteni
megoldást egy újbóli feldolgozáskor újra alkalmaznunk kell.</p>


                    <p><b>Szerkezet típusok összerendelése (ARCAD és gbXML esetén)</b></p>


                    <p>Az építész programban a szerkezetekre vonatkozó hőtechnikai adatokat
                    nem adtunk meg, vagy azok nehezen adaptálhatók a WinWatt programban, , ezért szükséges,
                    hogy az egyes szerkezetekhez a WinWatt programban kidolgozott
szerkezeteket rendeljünk.</p>


                    <p>Az ablak felső listájában találhatók a projektben szereplő
                    szerkezetek, illetve a hozzárendelt WinWatt szerkezet megnevezések. Az
                    első beolvasáskor még nincsenek hozzárendelések, de később, ha egy már
                    korábban is használt szerkezet szerepel, akkor az ahhoz
                    hozzárendelt legutolsó WinWatt szerkezet neve már megjelenik. A lista
                    egy adott sorára kattintva a bal szélső ablakrészben megjelennek az
                    adott szerkezetről, a projektből rendelkezésre álló információk.
                    Egyrészről a rétegrendi adatok, másrészről pedig, hogy mely
helyiségeknél szerepel az adott szerkezet típus.</p>


                    <p>A jobb alsó részben egy szerkezet jegyzék szerepel, ahonnan az egyes
                    szerkezet típusokat a felső lista egy-egy elemére húzhatjuk, ezzel
                    megfeleltetve egymásnak egy-egy építész programban és WinWattban használt szerkezet típust. A
                    szerkezet jegyzékünk az első beolvasáskor szintén üres, de a jobb
                    egérgomb megnyomására feljövő menü segítségével létrehozhatunk új
                    szerkezet típusokat, de arra is van lehetőség, hogy egy korábban,
fájlba exportált szerkezet típusokat tartalmazó fájlt beolvassunk.</p>


                    <p>A tovább gombbal csak akkor léphetünk tovább, ha valamennyi szerkezet típushoz rendeltünk WinWatt szerkezet típust. </p>


                    <p><b>Szerkezetek további adatainak megadása</b></p>


                    <p>A következő képernyőn a szerkezetek további adataira adhatunk meg
                    alapértékeket. Ennél az ablaknál is vannak a nyári hőterhelés
                    számítással kapcsolatos adatok, amiket csak egyes WinWatt változatok
használnak.</p>


                    <p>A legfontosabb adat itt a <i>belső szerkezetek</i> <i>túloldali
hőmérséklete</i> és a <i>túloldali tér fűtetlen</i> kapcsoló. Ezt
olyan esetekben alkalmazza a program, ha az adott szerkezet típusa
alapján azt belső szerkezetnek észleli, de nincs tudomása arról, hogy
melyik a túloldali helyiség, például azért, mert nem is lett
szobapecsét az adott térrészhez az építész programban hozzárendelve.
Tipikusan ilyen a padlásfödém, ezért célszerű a padlástérnek
megfelelően kitölteni az adatokat. Ellenőrzéskor a belső határoló
szerkezetek túloldali hőmérsékletére is figyeljünk, mert esetleg nem
csak a padlásfödém volt ilyen szerkezet, szükséges lehet további
módosítás is.</p>


                    <p><b>Talajjal érintkező szerkezetek</b></p>


                    <p>Az utolsó képernyő táblázata sorolja fel azokat a szerkezeteket,
                    amiket a program talajjal érintkező szerkezetnek észlelt, ha talált
                    egyáltalán ilyeneket. Ezt a tulajdonságot csak onnan képes a program
                    felismerni, hogy ilyen típusúként létrehozott WinWatt szerkezetet
rendeltünk az adott objektumhoz. </p>


                    <p>Az ilyen szerkezetek számításakor nem csak a szerkezet felületének
                    nagysága fontos, hanem az a vonalhossz, külső élhossz, amellyel a
                    vonalmenti hőátbocsátási tényező megszorzandó, a szerkezeten keresztüli
                    veszteség számításakor. Ennek megállapítása is tartalmazhat eltérést a
                    projekt automatikus feldolgozásakor, ezért tartottuk fontosnak, hogy
                    ebben az ablakban lehetőséget adjunk az adatok ellenőrzésére és
módosítására. </p>


                    <p>A tovább gombot megnyomva befejeződik a funkció.</p>


                    <p>Újra megjegyezzük, hogy ezt követően célszerű ellenőrizni az így
                    átvett helyiségeket, szükség esetén javítsuk ki a hibákat,
pontatlanságokat.</p>


                    <p>A modul fejlesztése, javítása folyamatosan, a frissítésekkel együtt történik.</p>
                </div>
            );
        }
        else if (this.lang === 'eng') {
            return (
                <div className="Gbxml pl3 overflow-x-hidden overflow-y-hidden ">
                    <Helmet><title>gbXML module</title></Helmet>
                    <h2>WinWatt gbXML module</h2>
                    <p>With the help of the gbXML module, we can transfer models
                    created in architectural programs to WinWatt, accelerating the
                    description of localities by retrieving geometry data for boundaries.</p><p>As far as we know, creating a gbXML file is supported by ArchiCAD and REVIT, among others. See if your version can do this,</p><p>because only in this case does the use of the module make sense.</p>
                    <p>Because architectural programs give the architect a lot of freedom when
                    creating a plan, they may not require you to include objects that are
                    needed for energy computing in the plan, so check the <strong>computation that is automatically generated by the relationship between the programs, must be changed if necessary!</strong>
                    Premises that extend over several levels, have sliding slabs, or change
                    the properties of slabs within the room are subject to increased
                    control. The curved walls and the doors and windows on them are also a
                    source of problems. If several rooms are bordered on the outside by the
                    same wall structure (a single object in the architect's program) but
                    have different thermal characteristics, for example, some rooms have
                    extra thermal insulation, we need to adjust the different sections in
                    the calculation to the actual values. With a slight difference, for
                    example, one room has painted lime plaster, the other has tile flooring
                    and another place limescale wallpaper, these do not significantly
                    influence the heat transfer coefficient of the given wall structure in
                    terms of energy calculation; However, when conducting vapor diffusion
                    control of structures, it is advisable to check each case separately,
                    since a very thin layer can have a significant resistance to humidity
                    and a significant difference in the indoor air condition of the room.</p>
                    <p>The file created in the architect program can be loaded and processed with <code>Tools | Load ARCHLine.XP project </code>or the <code>ARCAD project load…</code> or&nbsp;<code>gbXML project load…</code> feature with a step-by-step wizard.</p>
                    <p>When processing a new plan, it is advisable to create a new project,
                    and if it is a recalculated calculation of the same plan, we calculate
                    it in the previous project, so that some previously entered data
(essentially the room design temperatures) is retained.<br />As a first step, in the Open File dialog box, you must open the file exported by the architect program.</p>
                    <p><b>Grouping of rooms</b></p>The program processes the file and
displays each room by their name on the first screen of the wizard.
From this screen you can define how to group the rooms and how to make
room names. Because WinWatt requires different names for each item
within a group, therefore, if you do not specify separate room numbers
in the architect program, you may also need to use the unique internal
ID (ID) in the architect program.<br /><br />Because WinWatt also needs
a building definition, we need to have that in mind. If the architect's
program has been able to retrieve the relevant information, we can use
it<br />, but it is possible to create a completely new building
automatically, or if the project already contains a building object,
you can also select it. Pressing the Next button takes you to the next
screen.<p><b>Change the room temperature</b></p>
                    <p>From this screen you can change the internal design temperature of
                    each room and whether or not to transfer that room to the WinWatt
                    project at all. Not only winter but also summer temperatures can be
                    entered, although some versions of WinWatt do not use summer
temperatures,but we may work on the project later with a version of WinWatt where summer heat load calculation can be done. </p>
                    <p>Since the values ​​used for the modification are applicable to more
                    than one room, first select the rooms that you wish to modify. To make
selection easier, you can use the <i>list sorting</i> section to reorder the list according to the <i>sort order</i> you specify. Fill in the data within the <i>modifier values</i> ​​section, and then press the <i>Edit selected</i>
button to edit the values. It is important to set the temperatures
correctly, because at this point the program knows that a wall
structure, if the internal structure separates the two rooms, so that
the temperature on the other side will also be correct for that
structure. The room temperature itself could be changed later with the
appropriate function of WinWatt, but this is no longer affected by the
temperature of the individual structures.</p>
                    <p>If a project has already been processed and the project scan is done
                    in the same project, the program will search for the previously
                    specified room temperatures without having to enter them again. This is
                    true even if we did not complete the previous scan, because moving on
                    this screen will already create the room objects in the WinWatt project
and the temperatures will already be stored.</p>
                    <p><b>Problem structures (in case of ARCHLine only)</b></p>
                    <p>This screen does not always appear, but only if there are structures
                    to which the ARCHLine design has not been associated with the thermal
                    data specific to the structure or its type has not been found to be
correct. There are several ways to solve this problem,we need to stop processing at this point and modify our plan in ARCHLine. </p>
                    <p>If the type of structure that was supposed to be assigned to the
                    problematic structure is available in a particular project, you can do
                    so by grabbing that type of structure on the right and dragging it to
                    the problematic structure on the right. If you want to assign the same
                    structure type to more problematic structures, first select the items
                    you want to modify in the list, and then dragging one of the selected
                    items to the required structure type allows you to arrange all the
                    selected structures at once. We cannot move on while there are still
                    problematic structures. We may still decide to interrupt the process,
                    and in ARCHLine we will modify the plan if we can assign the necessary
                    type to the structures at this level too, because there the problem can
                    be solved once and for all, while the solution here has to be
re-applied.</p>
                    <p><b>Mapping structure types (in case of ARCAD and gbXML)</b></p>In
the architect's program, thermal data for structures is not provided or
is difficult to adapt in WinWatt, so it is necessary to assign
structures developed in WinWatt to each structure.<br /><br />The top
list of the window lists the structures in the project, and the
associated WinWatt structure names. At first scan, there are no
mappings, but later, if a previously used structure is listed, the name
of the last WinWatt structure assigned to it is displayed. Clicking on
a specific line in the list will display the structure in the left-hand
pane, information available from the project. On the one hand, the
layer order data and, on the other hand, which rooms have the given
structure type.<br /><br />At the bottom right there is a list of
structures, where you can drag each type of structure to one of the
items in the top list, matching each other to the type of structure
used in the architect program and WinWatt. Our structure list at first
reading is also blank, but you can create new structure types using the
right-click menu, or you can also scan a file containing previously
exported structure types to a file.<br /><br />You can only move on with the Next button if you have assigned a WinWatt structure type to all structure types.<p><b>Enter additional details for structures</b></p>
                    <p>On the next screen, you can set default values ​​for additional
                    structure information. This window also contains summer heat load
calculation data, which is used only by some versions of WinWatt.</p>
                    <p>The most important data here is the <i>outside temperature of the internal structures</i> and the <i>outside space unheated</i>
switch. This is used when it is perceived as an internal structure
based on the type of structure, but you are not aware of the room on
the other side, because it didn't even have a room seal assigned to
that space in the architect's program. Typically, this is the attic
ceiling, so it is advisable to fill in the data according to the attic
space. When inspecting, be aware of the temperature on the outside of
the interior enclosures as they may not have been the attic ceiling,further modifications may be required. </p>
                    <p><b>Structures in contact with the ground</b></p>The table on the
last screen lists the structures that the program detected as
ground-contact structures, if any. This property can only be recognized
by assigning a WinWatt structure created as this type to the object.<br /><br />When
calculating such structures, not only the size of the surface of the
structure is important, but also the line length, outer edge length, by
which the line heat transfer coefficient is multiplied, when
calculating the loss through the structure. Determining this may also
have some variation when the project is being processed automatically,<br />to allow you to check and modify the data in this window.<br /><br />Pressing the continue button will end the function.<br /><br />Again, it is advisable to inspect the premises thus received, and correct any errors or inaccuracies if necessary.<br /><br />The module is constantly being developed and improved, along with updates.
                </div >
            );
        }
    }
}

export default Gbxml;