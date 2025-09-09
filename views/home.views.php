<!doctype html>
<html>

    <?php require base_path(path: "views/partial/head.php"); ?>

    <body>
        <?php require base_path(path: "views/partial/header.php") ?>

        <main>
            <!-- Suchleiste -->
            <section class="search">
                <input class="searchbar" type="text" id="search" maxlength="25"/><a id="startQuery">🔎</a>
                <label class="searchbar" for="search" id="searchbarLabel">Suche nach <span id="searchFor">Pokémon</span></label>
                <div id="suggBox"></div>
            </section>

            <!-- Begrüßung -->
            <section class="greeting">
                <div>
                    <h2 id="greetingUser">Willkommen</h2>
                    <?php

                    if ($lastSide) {
                        echo "<a href=\"$lastSide\">Weitermachen, wo du beim letzten Mal aufgehört hast</a>";
                    }
                    ?>
                </div>
            </section>

            <!-- Fächer aus drei Karten -->
            <section class="cards">
                <div class="cardWrapper" id="card1">
                    <img src="https://assets.tcgdex.net/en/swsh/swsh3/136/high.webp" tabindex="0">
                </div>
                <div class="cardWrapper" id="card2">
                    <img src="https://assets.tcgdex.net/en/swsh/swsh3/137/high.webp" tabindex="0">
                </div>
                <div class="cardWrapper" id="card3">
                    <img src="https://assets.tcgdex.net/en/swsh/swsh3/138/high.webp" tabindex="0">
                </div>
            </section>
        </main>

        <?php require base_path(path: "views/partial/footer.php") ?>

        <?php require base_path(path: "views/partial/nav.php") ?>
    </body>

</html>