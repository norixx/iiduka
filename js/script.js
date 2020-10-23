// 要素の取得
var nav = document.querySelector('#globalnav');
var btn = document.querySelector('#btn-nav');

// ボタンのクリックを検知する
btn.addEventListener('click', function(){
    // navにis-openを追加削除する
    nav.classList.toggle('is-show');
});
