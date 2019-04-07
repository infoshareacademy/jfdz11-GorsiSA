WYMAGANIA 

1. Mechanizm poruszania sie postacia
2. Mechanizm zdobywania punktow
3. Mechanizm giniecia/przeszkody
4. Zapisywanie wynikow w localStorage
5. Wprowadzanie imienia gracza i przycisk start
6. Zliczanie punktacji i pokazywanie wyniku
7. Ranking wynikow w grze
8. Stopniowe zwiekszanie trudnosci gry


1. Na planszy: 
  * postac
  * przeszkody
  * tlo ziemii/podloze/moze byc gruba linia
  
  Postac: 
    wlasciwosci: 
      onGround, przy kliknieciu spacji sprawdza czy jest na ziemii, jezeli tak to moze skoczyc, jezeli nie to ignoruje spacje
    metody:
      skok: spacja, onGround na false i plynnie zwieksza jego pozycje/ animacja wznoszenia i spadania, ma byc interval, poki 
      osiagnie najwyzszy punkt a potem zmienia kierunek i spada poki nie dotknie ziemi
      pobranie jego wysokosci i Y
3. Sprawdzanie kolizji: 
    sprawdzanie czy postac ma ten sam x i y (+ wysokosc szerokosc postaci) co przeszkoda    https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
    
    przeszkoda powinna miec metode move, ktora przesuwa obiekt i tez sprawdza od razu czy jest kolizja
    
    mozliwosc zatrzymania gry, wszystkich przeszkod i timera, poleciec po tablicy przeszkod i wszystkie pause
    setTimeout 
4. Timer ktory jest obiektem i ma metode start to wtedy nalicza czas i metoda stop, pozwala tez wziac z niego akutalny czas.
kiedy sie kliknie stop/kolizja wtedy mozna go zapisac w localStorage

5. Popup z divem gdzie jest input i wyswietlasz imie potem nad gra i mozna je potem zapisac do localStogare do rankingu

6. Popup: GameOver, Czas timera, Imie

7. Obiekt JSONparse dostaje obiekt/ stringify zamienia w stringa
    Obiekt w localStorage ktory sprawdza czy jest pusty, jesli tak dodaje nowy
    jesli nie to sciaga, modyfikuje z akutalnym wynikiem i przesyla
8. ustaw interwal ktora wezmie timer, prawdza czas, jezeli przekroczy 20s to zmienia predkosc w przeszkodach.
  w tym samym inerwale zmienia predkosc w przeszkodach, akutalna predkosc przeszkod niech ma wartosc globalna zeby nie bylo
  w kazdej przeszkodzie w ich tablicy wartosci, tylko taka ktora korzysta ze zmiennej globalnej
