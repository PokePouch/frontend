<!DOCTYPE html>
<head>

    <!-- titel und metadaten -->
    <title><?php echo $heading; ?></title>
    <meta name="description" content="<?php echo $description ?>">
    <link rel="stylesheet" href="<?php echo $files ?>/styles.css">
    <script src="<?php echo $files ?>/script.js"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- open graph -->
    <meta property="og:url" content="<?php echo $link ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php echo $heading; ?>">
    <meta property="og:description" content="<?php echo $description ?>">
    <meta property="og:image" content="">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="<?php echo $host ?>">
    <meta property="twitter:url" content="<?php echo $link ?>">
    <meta name="twitter:title" content="<?php echo $heading; ?>">
    <meta name="twitter:description" content="<?php echo $description ?>">
    <meta name="twitter:image" content="">
</head>