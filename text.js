document.addEventListener('DOMContentLoaded',function(){
    //ボタンクリック時に挨拶メッセージを反映
    document.getElementById('btn').addEventListener('click',function(){
        let name = document.getElementById('name');
        let result = document.getElementById('result');
        //result.innerHTML = 'こんにちは、' +name.value + 'さん！　'; innerHTMLだと　XSSができてしまう
        result.textContent = 'こんにちは、' +name.value + 'さん！　';
    },false);
},false);
