import { assertEquals } from "@std/assert";
import { Wuerfel } from "./wuerfel.ts";
import { Knobelscheit } from "./knobelsheit.ts";
import { knobelsheit } from './knobelsheit';

Deno.test("Startanzeige", () => {
    const knobelscheit = new Knobelscheit();
    const anzeige = knobelscheit.anzeige();
    assertEquals(anzeige.length, 9);
    assertEquals(anzeige(), "1 2 3 4 5 6 7 8 9");  
});

Deno.test("Gueltiges Umklsappen", () => {
    const knobelscheit = new Knobelscheit();
    assertEquals(knobelsheit.umklappen([2, 3], 5), true);
    assertEquals(knobelscheit.anzeige(), "X X X 4 5 6 7 8 9");
});

Deno.test("Ungueltiges Umklappen", () => {
    const knobelscheit = new Knobelscheit();
    assertEquals(knobelscheit.umklappen([2, 3], 5), false);
    assertEquals(knobelscheit.anzeige(), "1 2 3 4 5 6 7 8 9");
});

Deno.test("Spielende", () => {
    const knobelscheit = new Knobelscheit();
    for (let i = 1; i <= 9; i++) knobelsheit.umklappen([i], i);
    assertEquals(knobelscheit.beendet(), true);
});

Deno.test ("Take Result from Cubes", () => {
    // Arrange
    let sum = 0;
    const knobelscheit = new Knobelscheit();¨

    // Act
    const results = knobelscheit.turn();
    sum = results[0] + results[1];

    // Assert
    assertEquals(sum >= 2 && sum <= 12, true);
})

