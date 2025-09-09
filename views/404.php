<!DOCTYPE html>
<html>

    <?php
        $heading = ':(';
        require base_path(path: "views/partial/head.php");
    ?>
    
<body>
    <center>
        <h1 style="margin:0">Hmm, scheinbar haben wir dich verloren</h1>
        <p>Diese Seite kennen wir leider nicht :/</p>
        <hr />
        <a href="/">zurück zur Startseite</a>
    </center>
    <?php require base_path(path: "views/partial/nav.php") ?>

    <style>
        .navContainer {
            position: absolute;
            bottom: 20px;
        }
    </style>
</body>