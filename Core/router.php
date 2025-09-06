<?php

$uri = parse_url(url: $_SERVER["REQUEST_URI"])['path'];
$lastSide = checkCookie(thisSite: $uri);

$routes = [
    '/'           => 'controllers/home.php',
    '/card'       => 'controllers/cardss/card.php',
    '/series'     => 'controllers/cards/series.php',
    '/sets'       => 'controllers/cards/sets.php',
    '/camera'     => 'controllers/camera.php',
    '/profile'    => 'controllers/profile.php',
    '/management' => 'controllers/management.php'
];

function abort($code = 404): never {
    http_response_code(response_code: $code);;
    require base_path(path: "views/{$code}.php");
    die();
}

if (str_starts_with($uri, '/series/')) {
    require base_path('controllers/cards/series_id.php');
    exit;
}

if (str_starts_with($uri, '/sets/')) {
    require base_path('controllers/cards/set_id.php');
    exit;
}

if (str_starts_with($uri, '/card/')) {
    require base_path('controllers/cards/card_id.php');
    exit;
}


if(array_key_exists(key: $uri, array: $routes)) {
    require base_path(path: $routes[$uri]);
} else {
    abort(code: 404);
}