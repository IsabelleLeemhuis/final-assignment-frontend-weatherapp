#	Installatie


## Inleiding

Deze applicatie is ontwikkeld in het kader van de bootcamp Full Stack Development aan Novi University, voor het onderdeel frontend development.
Met behulp van de applicatie kunnen de weersomstandigheden van een bepaalde plaats worden opgehaald en kan andersom aan de hand van bepaalde weersomstandigheden een plaats worden opgezocht. Hiervoor is het aanmaken van een account en inloggen op deze noodzakelijk.
Allereerst behandeld de installatiehandleiding de API key, deze is noodzakelijk voor het ontvangen van data over het weer. Voor het controleren van de opdracht heb ik hier mijn key toegevoegd, andere gebruikers moeten zelf een API key aanmaken.
Met betrekking tot installaties begint de handleiding bij de basis – IDE, GitHub en Node – en richt zich daarna specifiek  op de applicatie met het installeren van de dependencies en het daadwerkelijk runnen van de applicatie.


##  API key

De applicatie maakt voor het ophalen van de gegevens over het weer gebruik van de openweather API. Voor het gebruik van deze API is een api- key noodzakelijk. Via de website van de openweather API kan gemakkelijk een account worden aangemaakt en daarmee een API key worden verkregen: https://home.openweathermap.org/users/sign_in
Voor het nakijken van de opdracht voeg ik mijn API key toe (deze is al verwerkt in de ingeleverde applicatie, niet in de versie die op GitHub staat):


## Installatiehandleiding

Deze installatiehandleiding begint bij de basis – IDE, GitHub en Node – en richt zich daarna op de stappen die nodig zijn om de applicatie zelf te kunnen draaien. De handleiding is ook in het project zelf te vinden, als READ.me


### Randvoorwaarden

Om het installatieproces te kunnen doorlopen is het noodzakelijk over een IDE te beschikken en te weten hoe een GitHub project gekloond of gedownload kan worden.


#### IDE

Met een IDE kan het project worden geopend en in de browser worden gerund. Er bestaan een hoop IDE’s, sommige betaald en andere gratis.

##### WebStorm

Met deze IDE is het weer project gemaakt. Via deze link is meer informatie te vinden:
https://www.jetbrains.com/webstorm/promo/?source=google&medium=cpc&campaign=9641686272&term=webstorm&gclid=CjwKCAjwrZOXBhACEiwA0EoRD-zr4R4LHXD5AySY3tejU9-pqbcpzl45a1LUfVpnAhK47_Cm-Vr1fxoCRMUQAvD_BwE

##### Visual Studio

De meest gebruikte IDE. Klik op de link voor meer informatie en de download:
https://visualstudio.microsoft.com/
Een google search voor ‘IDE download’ levert nog veel andere opties op, met uitgebreide informatie over functionaliteit en downloads.


#### GitHub

Dit is een online platform waarop developers hun projecten delen en samen aan projecten kunnen werken. Vanuit dit platform moet het weer project gedownload of gecloned worden.
In de GitHub Docs staan alle functionaliteiten beschreven: https://docs.github.com/en Hoe een project gecloned moet worden staat hier: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository


#### Node

Node is o.a. nodig om de applicatie op de computer van de gebruiker te kunnen draaien en het bevat een aantal packages (stukjes code die iemand heeft geschreven) die in de weer applicatie zijn gebruikt. Uitgebreide informatie over node is hier te vinden: https://nodejs.dev/learn

1.	Download Node.js via deze link : https://nodejs.org/en/download/

2.	Open de terminal en typ het volgende commando om te controleren of de download goed is gegaan: 	node -v

Als een versienummer wordt getoond is het gelukt. Mocht er een andere melding verschijnen is iets niet goed gegaan. Herhaal in dat geval de installatie.

3.	In de volgende installatiestap is npm nodig (npm wordt geïnstalleerd samen met de node.js installatie en is dus geen afzonderlijke installatie).

Typ het volgende commando in de terminal om te controleren of npm goed mee geïnstalleerd is :	npm -v

Ook hier geldt: als een versienummer verschijnt is het gelukt. Bij een andere melding dient de node.js installatie te worden herhaald.


### Dependencies installeren

Om de applicatie te kunnen runnen moeten eerst de dependencies geïnstalleerd worden. Deze zitten niet in het GitHub project dat je gecloned of gedownload hebt omdat het bestand dan té groot zou zijn. Als je het project hebt geopend in de door jouw gekozen IDE, open de terminal en typ het volgende commando:

npm install

Nu beschikt het project op jouw computer over de nodige dependencies om de applicatie goed te kunnen runnen.


### Applicatie runnen

Als aan de voorwaarden is voldaan en de dependencies geïnstalleerd zijn kan de applicatie worden gestart. Open de terminal en typ het volgende commando:

npm run start

De applicatie opent nu in de browser. Mocht dit niet gebeuren of sluit je de browser, kan je de applicatie opnieuw openen door op de link in  de terminal te klikken (de localhost link).
In de browser wordt nu de homepage getoond. Hier kan je het weer voor een willekeurige plaats opzoeken. Via de navigatiebalk kan je andere onderdelen kiezen. Voor het bezoeken van de profielpagina en de persoonlijke weerzoeker moet je ingelogd zijn (en dus een account hebben aangemaakt).
