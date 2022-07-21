// category menu
const categoryBtnOpen = document.querySelector('.category-btn.open');
const categoryBtnClose = document.querySelector('.category-btn.close');
const categoryArea = document.querySelector('.category-area');
const category = document.querySelector('.category');

categoryBtnOpen.addEventListener('click', () => {
    categoryArea.classList.add('grid');
    categoryBtnOpen.style.display = 'none';
    categoryBtnClose.style.display = 'inline';
    category.style.background = 'var(--dark-grey-color)';
})
categoryBtnClose.addEventListener('click', () => {
    categoryArea.classList.remove('grid');
    categoryBtnOpen.style.display = 'inline';
    categoryBtnClose.style.display = 'none';
    category.style.background = 'var(--main-color)';
})

// slider
const slide = document.querySelector(".banner-list");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");

let slideItems = document.querySelectorAll(".banner-list li");
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;

// 페이지네이션 생성
const pagination = document.querySelector(".pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".pagination > li");

// 무한 슬라이드를 위해 start, end 슬라이드 복사하기
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];

// 엘리먼트 생성
const startElem = document.createElement(startSlide.tagName);
const endElem = document.createElement(endSlide.tagName);

// 엘리먼트에 클래스 적용 동일하게 하기
endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;
startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 각 복제한 엘리먼트를 각 위치에 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".banner-list li");
let offset = slideWidth * currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    // setTimeout을 사용하는 이유는 비동기 처리를 이용해 transition이 제대로 적용되게 하기 위함
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

nextBtn.addEventListener("click", () => {
  nextMove();
});

prevBtn.addEventListener("click", () => {
  prevMove();
});

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});


for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

let loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
  
  slide.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
  });
  
  slide.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
      nextMove();
    }, 3000);
  });

// tab frist tab-title color
document.querySelector(".tabmenu li:first-child .tab-title").classList.add('fill-main-color');

// tab first menu activate
document.querySelector(".tabmenu li:first-child .tab-list").classList.add('flex');

// tab icon & unit img & unit info
const tabTitleList = document.querySelectorAll(".tab-title");
const tabList = document.querySelectorAll(".tab-list");

// tab menu
// !!탭메뉴와 자동탭메뉴 동기화 시킬것
for (let i = 0; i < tabTitleList.length; i++) {
    tabTitleList[i].addEventListener('click', (e) => {
        e.preventDefault();
        for (let j = 0; j < tabTitleList.length; j++) {
            tabList[j].classList.remove('flex');
            tabTitleList[j].classList.remove('fill-main-color');
        }
        tabList[i].classList.add('flex');
        tabTitleList[i].classList.add('fill-main-color');
    })
};

// to top
const toTopBtn = document.querySelector('.to-top');
toTopBtn.addEventListener('click',function(){
  window.scrollTo({top: 0, behavior:'smooth'});
});
