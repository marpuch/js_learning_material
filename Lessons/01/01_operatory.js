// Robocap | Programowanie | JavaScript

// Na potrzeby tego ćwiczenia uruchom przeglądarkę (Chrome lub Firefox),
// otwórz nową kartę, wciśnij F12 i przejdź do zakładki konsola.
// Masz tu do dyspozycji interpreter języka JavaScript działający w trybie
// REPL (https://en.wikipedia.org/wiki/REPL). Pozwoli on na szybkie sprawdzenie
// jak JavaScript radzi sobie ze zrozumieniem wyrażeń matematycznych 
// (i nie tylko), bez potrzeby pisania console.log(<wyrażenie>); i uruchamiania
// programu od nowa...

// Wrowadź poniższe wyrażenia do konsoli o obserwuj efekt:

/*

3
3+4*2
(3+4)*2
3.1415
3,1415 // nie działa tak jak myślisz, separatorem musi być kropka
5 % 3  // modulo, reszta z dzielenia

'to jest tzw. łańcuch znaków'
"to też"
"ala" + "ma" + 'kota' // tzw. konkatenacja tekstów
"tekst".length
"ala ma kota".substr(0, 3)

5 > 3
22 <= 20-1
3 != 2
2 == 2
2 == '2'  // :)
2 === '2' // takie smaczki JS

*/

// Powyżej widzimy wartości trzech różnych typów: liczbowego (number), 
// stringowego (string) oraz boolowskiego (boolean). Aby sprawdzić, jakiego typu
// jest wartość, można użyć operatora typeof.

/*
typeof true;
typeof "true";
typeof 1;
*/

// Istnieje fundamentalna różnica między typem tekstowym, a liczbowym.
// Sprawdź sam:

/*
3 + 1
3 + '1'
*/

// Poczytaj więcej o operatorach:
// https://www.w3schools.com/js/js_operators.asp