<!DOCTYPE html>
<html lang="jp">

<head>
    <meta charset="UTF-8">
    <title>制限を突破したい！</title>
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
    </style>
</head>

<body>
    <div class="main">
        <form action="<?php $_SERVER['PHP_SELF']; ?>" method="POST">
            URL: <input id="input" type="text" name="url" />
            <button id="button" type="submit">送信</button>
        </form>
    </div>
</body>

</html>

<?php
    date_default_timezone_set('Asia/Tokyo');
    $URL = $_POST['url'];
    $filename = 'site'.date('n-j-H-i-s');
    //https://www.nagi1024.com/through/index.php
    $wget = 'wget -p -r -l 1 -k -w 0.5 -P savesites/ https://www.nagi1024.com/index.html';
    //$wget = 'wget -p -r -l 1 -k -w 0.5 -P savesites/ '.$URL;
echo '<br><br><br><br>Hey -> ' .$wget .'<br>filename = ' .$filename;
    //exec($wget, $opt1, $return1);
    exec('ls -1 /var/www/html/through/savesites', $opt2, $return2);
echo '<br> 結果 : ' .$return1 .'-' .$return2;

    foreach($opt2 as $opt){
//echo $opt;
        if(strpos($opt, 'site') === false) {
            $mv = 'mv /var/www/html/through/savesites/' .$opt .' /var/www/html/through/savesites/' .$filename;
            exec($mv, $a, $return3);
            echo '<br>ls -> ' .$opt .' -- ' .$return3;
        }
    }

    if($return1 + $return2 !== 0){ 
?>
    <p>エラーが発生しました。ダウンロードできません。</p>
<?php
    } else { 
        echo '<br><a>https://www.nagi1024.com/through/savesites/' .$filename .'</a>';
    }
?>
