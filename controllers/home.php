<?php

$heading = "Startseite";
$files = "home";
$description = "Beschreibung der Startseite";

$host = $_SERVER["HTTP_HOST"];
$completeUri = $_SERVER["REQUEST_URI"];
$link = "https://{$host}{$completeUri}";

require base_path("views/home.views.php");