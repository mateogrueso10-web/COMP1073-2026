async function startProgram() {

    // ---- Countdown on matrix ----
    await setMainLed({ r: 255, g: 0, b: 0 });
    await scrollMatrixText("3", { r: 255, g: 255, b: 255 }, 15, true);
    await delay(1);

    await setMainLed({ r: 255, g: 165, b: 0 });
    await scrollMatrixText("2", { r: 255, g: 255, b: 255 }, 15, true);
    await delay(1);

    await setMainLed({ r: 255, g: 255, b: 0 });
    await scrollMatrixText("1", { r: 255, g: 255, b: 255 }, 15, true);
    await delay(1);

    await setMainLed({ r: 0, g: 255, b: 0 });
    await scrollMatrixText("0", { r: 255, g: 255, b: 255 }, 15, true);
    await speak("I made it");

    // ---- Movement 1 ----
    await roll(0, 10, 2);
    await setMainLed({ r: 0, g: 150, b: 255 });
    await speak("I made it");
    await delay(2);

    // ---- Movement 2 ----
    await roll(90, 14, 2);
    await setMainLed({ r: 180, g: 0, b: 255 });
    await speak("I made it");
    await delay(2);

    // ---- Movement 3 ----
    await roll(0, 50, 2);
    await setMainLed({ r: 255, g: 0, b: 80 });

    // ---- Finish effect ----
    await scrollMatrixText("FINISH", { r: 255, g: 0, b: 80 }, 15, true);
    await speak("I Finished");
}