<?php
$URLS = explode('/', $_POST['url']);
$count = count($URLS) - 1;
$URL = "https://www.youtube.com/embed/".$URLS[$count];

//https://www.youtube.com/embed/BO0BSRyVvPc
//https://youtu.be/BO0BSRyVvPc

//https://www.youtube.com/embed/311iAORPAKg
//https://youtu.be/311iAORPAKg
?>

<!DOCTYPE html>
<html lang="jp">

<head>
    <meta charset="UTF-8">
    <title>Youtubeをすり抜けたい！
    </title>
    <style type="text/css">
        .main {
            padding: 10px;
            position: fixed;
            z-index: 1000000;
            background-color: #fff;
            border: 1px solid #333333;
            opacity: 0.8;
        }

        #input {
            height: auto;
            font-size: 15px;
            border: 1px solid #333333;
        }

        #button {
            height: 30px;
            width: 60px;
            font-size: 15px;
            background-color: #393e46;
            color: #fff;
        }

        .sub {
            padding-top: 100px;
        }

        img {
            width: 100%;
        }
    </style>
</head>

<body>
    <form action="<?php $URL ?>" method="POST">
        URL: <input id="input" type="text" name="url" />
        <button id="button" type="submit">送信</button>
    </form>

    <video src="<?= $URL ?>"></video>
</body>

<script>

</script>

</html>
