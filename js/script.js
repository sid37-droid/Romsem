'use strict'
// ---------------------------slider--------------------
let position = 0;
const sliderToShow = 1,//Количество видимых элементов
      sliderToScroll = 1,//Количество прокручиваемых элементов
      sliderContainer = document.querySelector('.slider__container'),
      sliderTrack = document.querySelector('.slider__track'),
      sliderBtn1 = document.querySelector('.slider__btn1'),
      sliderBtn2 = document.querySelector('.slider__btn2'),
      items = document.querySelectorAll('.slider'),
      tabOne =document.querySelector('.tab-one'),
      tabTwo =document.querySelector('.tab-two'),
      tabThree =document.querySelector('.tab-three'),
      tabfor =document.querySelector('.tab-for'),
      tabfive =document.querySelector('.tab-five'),
      itemCount = items.length,
      itemWidth = sliderContainer.clientWidth / sliderToShow,
      movePosition = sliderToScroll * itemWidth;

items.forEach((item)=>{
    item.style.minWidth = `${itemWidth}px`;
});

  const setPosition = ()=>{
    sliderTrack.style.transform = `translateX(${position}px)`;
  };

  function slide(){
      const itemLeft = itemCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
      position -= itemLeft >= sliderToShow ? movePosition : itemLeft * itemWidth;
      setPosition();
  }

setInterval(slide, 5000);
setInterval(n, 25000);
function n (){
    position = 950;
    slide();
    return n;
}
  function tabsCollor(){
      let i = position * 2;
    if(position === 0){
        tabOne.style.background = '#FF9846';
        tabTwo.style.background = '#A4ACAD';
        tabThree.style.background = '#A4ACAD';
        tabfor.style.background = '#A4ACAD';
        tabfive.style.background = '#A4ACAD';
      } 
    if(position === -950){
      tabOne.style.background = '#A4ACAD';
      tabTwo.style.background = '#FF9846';
      tabThree.style.background = '#A4ACAD';
      tabfor.style.background = '#A4ACAD';
      tabfive.style.background = '#A4ACAD';
    } 
    if(position === -1900){
      tabOne.style.background = '#A4ACAD';
      tabTwo.style.background = '#A4ACAD';
      tabThree.style.background = '#FF9846';
      tabfor.style.background = '#A4ACAD';
      tabfive.style.background = '#A4ACAD';
    }
    if(position === -2850){
      tabOne.style.background = '#A4ACAD';
      tabTwo.style.background = '#A4ACAD';
      tabThree.style.background = '#A4ACAD';
      tabfor.style.background = '#FF9846';
      tabfive.style.background = '#A4ACAD';
    }
    if(position === -3800){
      tabOne.style.background = '#A4ACAD';
      tabTwo.style.background = '#A4ACAD';
      tabThree.style.background ='#A4ACAD';
      tabfor.style.background = '#A4ACAD';
      tabfive.style.background = '#FF9846';
    }
      return tabsCollor
  }
setInterval(tabsCollor, 5000) 

  // ----------------------slider2--------------------------

  function sliderLaunch(){
    let position = 0;
    const sliderToShow = 3,//Количество видимых элементов
          sliderToScroll = 1,//Количество прокручиваемых элементов
          sliderContainer = document.querySelector('.slider__container2'),
          sliderTrack = document.querySelector('.slider__track2'),
          sliderBtn1 = document.querySelector('.slider__btn1'),
          sliderBtn2 = document.querySelector('.slider__btn2'),
          items = document.querySelectorAll('.slider2'),
          tabOne =document.querySelector('.tab-one'),
          tabTwo =document.querySelector('.tab-two'),
          tabThree =document.querySelector('.tab-three'),
          itemCount = items.length,
          itemWidth = sliderContainer.clientWidth / sliderToShow,
          movePosition = sliderToScroll * itemWidth;
  
    items.forEach((item)=>{
        item.style.minWidth = `${itemWidth}px`
    });
     
    
  sliderBtn1.addEventListener('click', ()=>{
      const itemsLeft = Math.abs(position) / itemWidth;
      position += itemsLeft >= sliderToScroll ? movePosition : itemsLeft * itemWidth;
      setPosition();
  });
  
  
  sliderBtn2.addEventListener('click', ()=>{
      const itemLeft = itemCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
      position -= itemLeft >= sliderToShow ? movePosition : itemLeft * itemWidth;
      setPosition();
  
    });
  
  
    const setPosition = ()=>{
      sliderTrack.style.transform = `translateX(${position}px)`;
    };
  
return  
  }
  sliderLaunch()

// ======================================================================



let moreShow = document.querySelector('.More__text'),
    moreBtn = document.querySelector('.More__btn'),
    moreParalax = document.querySelector('.More__paralax'),
    moreDown = document.querySelector('.more__down');




    moreBtn.addEventListener('click', ()=>{
      if(  moreShow.style.maxHeight == '280px'){
        moreShow.style.maxHeight = '505px';
        moreParalax.style.display = 'none'
        moreDown.style.transform = 'rotate(180deg)'
      } else{
        moreShow.style.maxHeight = '280px';
       setTimeout(()=>{
        moreParalax.style.display = 'block';
      },700)


        moreDown.style.transform = 'rotate(0deg)';
      }    

    });
    
  
const newMenu = document.querySelector('.title__new'),
      popMenu = document.querySelector('.title__pop'),
      mainSlider = document.querySelector('.Main__slider2'),
      testBlock = document.querySelector('.test__blcok');




popMenu.addEventListener('click', ()=>{
    popMenu.classList.remove('title__hidden');
    newMenu.classList.add('title__hidden');
    mainSlider.classList.add('hidden');
    testBlock.classList.remove('hidden');
});

newMenu.addEventListener('click', ()=>{
  newMenu.classList.remove('title__hidden');
  popMenu.classList.add('title__hidden');
  mainSlider.classList.remove('hidden');
  testBlock.classList.add('hidden');
});


// ===============================================
let    mainSlider2 = document.querySelector('.Main__slider'),
       mainCategories = document.querySelector('.categories'),
       mainNovelties = document.querySelector('.novelties'),
       mainSets = document.querySelector('.Main__sets'),
       menuItem = document.querySelector('.menu__item2');



      
menuItem.addEventListener('click', ()=>{
  mainSlider2.classList.add('hidden');
  mainCategories.classList.add('hidden');
  mainSlider.classList.add('hidden');
  mainSets.classList.add('hidden');
  mainNovelties.classList.add('hidden');
  mainSets.classList.remove('hidden')
  console.log('ashabhs')
});

