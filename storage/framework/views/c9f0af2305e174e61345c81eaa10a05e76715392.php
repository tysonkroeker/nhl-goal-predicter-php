<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }

            .collabsibleTrigger {
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="content">
                <div id='nhl-app'></div>
            </div>
        </div>

        <script>
            let coll = document.getElementsByClassName('collabsibleTrigger');
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = document.getElementsByClassName(this.dataset.team + 'Players')[0];
                    if (content.style.display === "block") {
                        content.style.display = "none";
                        this.innerText = '+';
                    } else {
                        content.style.display = "block";
                        this.innerText = '-';
                    }
                });
            }
        </script>

        <script src="<?php echo e(asset('js/app.js')); ?>" defer></script>
    </body>
</html>
<?php /**PATH /home/tyson/Projects/nhl-goal-predicter-php/resources/views/app.blade.php ENDPATH**/ ?>