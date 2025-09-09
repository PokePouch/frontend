<?php

function dd($value) {
    echo"<pre>";
    var_dump($value);
    echo "</pre>";

    die();
}

function base_path($path): string {
    return __DIR__ . "/../" . $path;
}

function defineLink(): string {

    $host = $_SERVER["HTTP_HOST"];
    $fullUri = $_SERVER["REQUEST_URI"];

    return "https://{$host}{$fullUri}";
}

function defineHost(): string {
    $host = $_SERVER["HTTP_HOST"];

    return "https://{$host}";
}

function checkCookie($thisSite) {

    if (isset($_COOKIE['lastSite']) && isset($_COOKIE['lastSeen'])) {

        if ($_COOKIE['lastSite'] != $thisSite && time() - $_COOKIE['lastSeen'] <= 86400) {

            return $_COOKIE['lastSite'];
        }
    } else if (isset($_COOKIE['lastSite']) && !isset($_COOKIE['lastSeen'])) {
        return $_COOKIE['lastSite'];
    }
    return false;
}