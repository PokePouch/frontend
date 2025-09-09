<head>
    <meta charset="UTF-8">
    <!-- titel und metadaten -->
    <title><?php echo $heading ?? '' ?> | PokéPouch</title>
    <meta name="description" content="<?php echo$description ?? '' ?>">

    <link rel="stylesheet" href="/styles.css"> <!-- globale styles -->
    <link rel="stylesheet" href="/data/<?php echo $files ?? '' ?>/styles.css"> <!-- lokale styles -->
    <script src="/script.js"></script> <!-- globale skripte -->
    <script src="/data/<?php echo $files ?? '' ?>/script.js"></script> <!-- lokale skripte -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;900&display=swap" rel="stylesheet">

    <!-- open graph -->
    <meta property="og:url" content="<?php echo defineLink() ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php echo $heading ?? '' ?> | PokéPouch">
    <meta property="og:description" content="<?php echo $description ?? '' ?>">
    <meta property="og:image" content="">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:domain" content="<?php echo defineHost() ?>">
    <meta name="twitter:url" content="<?php echo defineLink() ?>">
    <meta name="twitter:title" content="<?php echo $heading ?? '' ?> | PokéPouch">
    <meta name="twitter:description" content="<?php echo $description ?? '' ?>">
    <meta name="twitter:image" content="">
</head>