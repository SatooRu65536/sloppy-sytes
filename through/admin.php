<!DOCTYPE html>
<html lang="jp">

<head>
    <meta charset="UTF-8">
    <title>admin</title>
    <style type="text/css">
        .cell1 {
            width: 30px;
        }

        .cell2 {
            width: 200px;
        }

        .cell3 {
            width: 120px;
        }

        .cell4 {
            width: 500px;
        }
    </style>
</head>

<body>
    <?php

    $c_user = 'admin';
    $c_pass = 'through1357';

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    if ($user == $c_user && $pass == $c_pass) {
    ?>
        <table border="1" cellspacing="0">

            <?php

            $pdo = new PDO('mysql:host=localhost;dbname=through', 'through', 'through1357');
            $result_rows = $pdo->query('SELECT * FROM main;');
            $i = 1;

            foreach ($result_rows as $row) {
            ?>
                <tr>
                    <td class="cell1"><?= $i; ?></td>
                    <td class="cell2"><?= $row['date']; ?></td>
                    <td class="cell3"><?= $row['ip']; ?></td>
                    <td class="cell4"><?= $row['url']; ?></td>
                </tr>
            <?php
                $i++;
            }
        } else {
            if ($user || $pass) {
                echo "<h3>認証できませんでした。</h3>";
            }
            ?>
            <div id="notadmin">
                <form action="#" method="post">
                    <p>ユーザー名：<br>
                        <input type="text" name="user">
                    </p>
                    <p>パスワード：<br>
                        <input type="password" name="pass">
                    </p>
                    <input type="submit" value="決定">
                </form>
            </div>
        <?php
        }
        ?>

        </table>

</body>

</html>