<?php

$def = 'value="https://nagi65536.ddns.net/syuyu/syuyu.html"';

$unitime = time();
date_default_timezone_set('Asia/Tokyo');

$url = $_POST['url'];
$ip = $_SERVER["REMOTE_ADDR"];

$pdo = new PDO('mysql:host=localhost;dbname=through', 'through', 'through1357');
$sql_cmd = 'INSERT INTO main (ip, url, date) VALUES ("' . $ip . '","' . $url . '",now())';
$result_rows = $pdo->query($sql_cmd);
?>

<!DOCTYPE html>
<html lang="jp">

<head>
    <meta charset="UTF-8">
    <title>制限を突破したい!</title>
    <style type="text/css">
        #through_main {
            width: 400px;
            padding: 10px;
            position: fixed;
            z-index: 1000000;
            background-color: #fff;
            border: 1px solid #333333;
            opacity: 0.8;
        }

        #input {
            height: auto;
            width: 250px;
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

        #through_sub {
            padding-top: 100px;
        }
    </style>
</head>

<body>
    <div id="through_main">
        <form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
            URL: <input id="input" type="text" name="url" <?php if ($_GET['def']) echo $def;?> />
            <button id="button" type="submit">送信</button>
        </form>
    </div>
    <div id="through_sub">
        <?PHP
        $url = $_POST['url']; //取得したいサイトのURL
        $reshtml = file_get_contents($url);
        print($reshtml);
        ?>
    </div>

    <script text="javascript">
        let url = new URL(window.location.href);
        let params = url.searchParams;
        params.delete('def');
        console.log(params.get('def'));
        console.log('ok');
        history.replaceState('', '', url.pathname);
    </script>
</body>

</html>