<!DOCTYPE html>
<html>

    <?php require base_path(path: "views/partial/head.php"); ?>

    <body>
        <?php require base_path(path: "views/partial/header.php") ?>

        <main>

            <h1><?php echo $heading ?></h1>
            
            <section id="allItems"></section>
   
        </main>
        <?php require base_path(path: "views/partial/footer.php") ?>

        <?php require base_path(path: "views/partial/nav.php") ?>
    </body>

</html>