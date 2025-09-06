<?php

$uri = parse_url(url: $_SERVER["REQUEST_URI"])['path'];
$lastSide = checkCookie(thisSite: $uri);

$routes = [
    '/'           => 'controllers/home.php',
    '/card'       => 'controllers/card.php',
    '/camera'     => 'controllers/camera.php',
    '/series'     => 'controllers/series.php',
    '/sets'       => 'controllers/sets.php',
    '/profile'    => 'controllers/profile.php',
    '/management' => 'controllers/management.php'
];

function abort($code = 404): never {
    http_response_code(response_code: $code);;
    require base_path(path: "views/{$code}.php");
    die();
}

if(array_key_exists(key: $uri, array: $routes)) {
    require base_path(path: $routes[$uri]);
} else {
    abort(code: 404);
}