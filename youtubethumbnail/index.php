<?php
  if(isset($_POST['button'])){
    $imgUrl = $_POST['imgurl'];
    $ch = curl_init($imgUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $download = curl_exec($ch);
    curl_close($ch);
    header('Content-type: image/jpg');
    header('Content-Disposition: attachment;filename="thumbnail.jpg"');
    echo $download;
  }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ThumbLoader</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>

<body>
    <div class="container">
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" >
            <header class="head">thumbloader</header>
            <div class="url-input">
                <span class="title">Paste video url : </span>
                <div class="field">
                    <input type="text"
                        placeholder="https://www.youtube.com/watch?Fx326Ws1MK4&ab_channel=codexprogramming" required>
                        <input type="hidden" class="hidden-input" name="imgurl" value="">
                </div>
            </div>
            <div class="preview-area">
                <img class="thumbnail" src="" alt="Thumbnail">
                <i class="fas fa-cloud-download-alt"></i>
                <span>Paste Video URL to see Preview</span>
            </div>
            <button class="download-btn" type="submit" name="button">Download Thumbnail</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>

</html>