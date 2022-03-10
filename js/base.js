window.addEventListener("load", function() {

    //关于首页简历介绍区域
    var firstP = document.querySelector('#first-page')
    var secondP = document.querySelector('#second-page')
    var dottedF = document.querySelector('.f-dotted');
    var dottedS = document.querySelector('.s-dotted');
    var photoDemo = document.querySelector('.photoDemo')
        //第一张简历
    secondP.addEventListener('click', function() {
            firstP.className = 'second-down'
            secondP.className = 'first-up'
        })
        //第二张简历
    firstP.addEventListener('click', function() {
        firstP.className = 'first-up'
        secondP.className = 'second-down'
    })
})