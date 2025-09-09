<?php

$heading;
$files = 'item_list';
$description;

if ($uri === '/series') {
    // all series
    $heading = "Alle Serien";
    $description = "Auflistung aller Serien";
} elseif (str_starts_with($uri, "/series/")) {
    // single series
    $heading = "Serie xy";
    $description = "Auflistung einer einzelnen Serie";
} else {
    // all sets
    $heading = "Alle Sets";
    $description = "Auflistung aller Sets";
}

require base_path(path: "views/item_list.views.php");