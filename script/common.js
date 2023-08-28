// header nav JS
const gnb = document.querySelectorAll('.gnb > li > a')
const sub = document.querySelectorAll('.sub')
console.log(gnb, sub)
// 서브메뉴 숨기기
sub_func('none')
function sub_func(status){
    for(let i of sub){i.style.display=status}
}
// gnb메뉴에 마우스 올렸을 때 서브메뉴 보이기
gnb.forEach(function(t,i,a){
    t.addEventListener('mouseenter',function(e){
        e.preventDefault()
        for(let i of gnb){i.classList.remove('active')}
        t.classList.add('active')
        console.log(i)
        for(let i of sub){i.style.display='none'}
        sub[i].style.display = 'flex'
    })
    
    // gnb메뉴 중 첫번째, 마지막 메뉴에서 마우스가 떠났을 때
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        t.classList.remove('active')
        // sub[0].style.display = 'none'
        sub[4].style.display = 'none'
    })
})
sub.forEach(function(s){
    // 서브메뉴에서 마우스가 나갈 때
    s.addEventListener('mouseleave',function(){
        for(let j of gnb){j.classList.remove('active')}
        s.style.display = 'none' // 서브메뉴 숨기기
    })
})

// open_search JS
const open_search = document.querySelector('#open_search')
const search_close = document.querySelector('.search_close')
const search_btn = document.querySelector('#search')
console.log(open_search, search_close, search_btn)
// open_search 숨기기
open_search.style.display = 'none'
// 돋보기 클릭 시 open_search 출력
search_btn.addEventListener('click',function(){
    open_search.style.display = 'block'
})
// open_search 안 버튼(^) 클릭 시 open_search 숨기기
search_close.addEventListener('click',function(){
    open_search.style.display = 'none'
})