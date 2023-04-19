alert('현재는 우측 상단의 유저 아이콘을 통하여 로그인과 회원가입만 이용하실 수 있습니다.');

// header
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
categoryBtnOpen.addEventListener('mouseover', () => {
  categoryBtnOpen.style.background = 'var(--dark-grey-color)';
})
categoryBtnOpen.addEventListener('mouseout', () => {
  categoryBtnOpen.style.background = 'var(--main-color)';
})

categoryBtnClose.addEventListener('click', () => {
  categoryArea.classList.remove('grid');
  categoryBtnOpen.style.display = 'inline';
  categoryBtnClose.style.display = 'none';
  category.style.background = 'var(--main-color)';
})
categoryBtnClose.addEventListener('mouseover', () => {
  categoryBtnClose.style.background = 'var(--main-color)';
})
categoryBtnClose.addEventListener('mouseout', () => {
  categoryBtnClose.style.background = 'var(--dark-grey-color)';
})

// section1
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
  if (i === 0) {
    pagination.innerHTML += `<li class="active">•</li>`
  } else {
    pagination.innerHTML += `<li>•</li>`;
  }
}

const paginationItems = document.querySelectorAll(".pagination > li");

// 무한 슬라이드를 위해 start, end 슬라이드 복사 및 각 위치에 추가
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];

const startElem = document.createElement(startSlide.tagName);
const endElem = document.createElement(endSlide.tagName);

endElem.innerHTML = endSlide.innerHTML;
startElem.innerHTML = startSlide.innerHTML;

startSlide.before(endElem);
endSlide.after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".banner-list li");
let offset = slideWidth * currSlide;
slideItems.forEach(li => {
  li.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산 및 left 적용
    const offset = slideWidth * currSlide;
    slideItems.forEach(li => {
      li.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach(li => li.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach(li => {
      li.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    // setTimeout을 사용하는 이유는 비동기 처리를 이용해 transition이 제대로 적용되게 하기 위함
    setTimeout(() => {
      slideItems.forEach(li => {
        li.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach(li => li.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산 및 left 적용
    const offset = slideWidth * currSlide;
    slideItems.forEach(li => {
      li.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach(li => li.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach(li => {
      li.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    // setTimeout을 사용하는 이유는 비동기 처리를 이용해 transition이 제대로 적용되게 하기 위함
    setTimeout(() => {
      slideItems.forEach(li => {
        li.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach(li => li.classList.remove("active"));
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

paginationItems.forEach((v, i) => {
  v.addEventListener('click', () => {
    currSlide = i + 1;
    // 슬라이드를 이동시키기 위한 offset 계산 및 left 적용
    const offset = slideWidth * currSlide;
    slideItems.forEach(li => {
      li.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach(li => li.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  })
})

let IntervalId = setInterval(() => {
  nextMove();
}, 3000);
  
slide.addEventListener("mouseover", () => {
  clearInterval(IntervalId);
});
  
slide.addEventListener("mouseout", () => {
  IntervalId = setInterval(() => {
    nextMove();
  }, 3000);
});

// section3
// tab menu
document.querySelector(".tabmenu li:first-child .tab-title").classList.add('fill-main-color');
document.querySelector(".tabmenu li:first-child .tab-list").classList.add('flex');

// tab icon & unit img & unit info
const tabTitleList = document.querySelectorAll(".tab-title");
const tabList = document.querySelectorAll(".tab-list");


tabTitleList.forEach((title, i) => {
  title.addEventListener('click', () => {
    tabList.forEach((tab, j) => {
      tab.classList.remove('flex');
      tabTitleList[j].classList.remove('fill-main-color');
    })
    tabList[i].classList.add('flex');
    title.classList.add('fill-main-color');
  })
})

// footer
// to top
const toTopBtn = document.querySelector('.to-top');
toTopBtn.addEventListener('click',function(){
  window.scrollTo({top: 0, behavior:'smooth'});
});
