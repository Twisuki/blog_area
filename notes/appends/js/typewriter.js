function startTypewriter() {
    
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == 200) {
                var allText = rawFile.responseText;
                callback(allText);
            }
        }
        rawFile.send(null);
    }

    function start() {
        readTextFile("Saysomething.md", function (text) {
            var strings = text.split("\n").filter(Boolean); // 过滤掉空行
            strings = strings.sort(() => Math.random() - 0.5); // 随机排序字符串数组
            var currentIndex = 0;
            var content = document.getElementById('typecontents');

            function typeWriter(str) {
                var str_ = '';
                var i = 0;
                var timer = setInterval(() => {
                    if (str_.length < str.length) {
                        str_ += str[i++];
                        content.innerHTML = '<p>' + str_ + '_</p>';
                    } else {
                        clearInterval(timer);
                        setTimeout(() => {
                            var deleteTimer = setInterval(() => {
                                if (str_.length > 0) {
                                    str_ = str_.slice(0, -1);
                                    content.innerHTML = '<p>' + str_ + '_</p>';
                                } else {
                                    clearInterval(deleteTimer);
                                    currentIndex = (currentIndex + 1) % strings.length;
                                    typeWriter(strings[currentIndex]); // 打印下一个字符串
                                }
                            }, 20); // 每20毫秒删除一个字符
                        }, 3000); // 暂停 2 秒后开始删除内容
                    }
                }, 100); // 每100毫秒打印一个字符
            }

            typeWriter(strings[currentIndex]); // 初始调用一次
        });
    }

    start();
}