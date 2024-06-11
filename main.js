function redirectToLink(url) {
    window.location.href = url;
}

// COMPREHENSIVE FUNCTIONS
{
    // document.querySelectorAll('.page-click').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         // Ẩn tất cả các nội dung
    //         document.querySelectorAll('.Page').forEach(page => {
    //             page.classList.remove('active');
    //         });
    //         // Lấy id của liên kết được click
    //         const targetId = this.getAttribute('href').substring(1) + 'Page';
    //         // Hiển thị nội dung tương ứng
    //         document.getElementById(targetId).classList.add('active');
    //         // Cập nhật URL
    //         const stateObj = { id: targetId };
    //         history.pushState(stateObj, "", window.location.pathname + this.getAttribute('href'));

    //     });
    // });
    function changePage(page) {
        var pageValue = page.getAttribute('page');
        document.querySelectorAll('.Page').forEach(btn => {
            if (btn.classList.contains(pageValue)) {
                btn.classList.remove('hidden')
            } else {
                btn.classList.add('hidden')
            }
        })
    }
}


// SEARCH FUNCTIONS
{
    document.querySelector('.search-page__contents').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        let searchTerm = document.querySelector('.search-page__content-box').value;
        search(searchTerm);
    });

    function search(term) {
        document.querySelector(".search-page__content").innerHTML = "LỖI KHÔNG XÁC ĐỊNH"
        // alert('Searching for: ' + term);
    }

    document.getElementById('search-main').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('searchPage').classList.add('active');
    })
}
// PRODUCT FUNCTIONS
{
    document.querySelector('#nav-sanpham').addEventListener('click', () => {
        filter(document.querySelector('.sanpham-page_filter-option[filter="all"]'))
    })
    document.querySelectorAll('.header-nav__list-product-a').forEach(btn => {
        btn.addEventListener('click', function () {
            event.preventDefault();
            changePage(document.querySelector('#nav-sanpham'))
            var filterValuebtn = btn.getAttribute('filter');
            var button = document.querySelector(`.sanpham-page_filter-option[filter="${filterValuebtn}"]`)
            filter(button)
        })
    })
    function filter(button) {
        var filterValue = button.getAttribute('filter');
        if (filterValue === 'all') {
            document.querySelectorAll('.sanpham-page_filter-option').forEach(btn => btn.classList.remove('selected'));
            document.querySelectorAll('.sanpham-list').forEach(option => {
                option.classList.remove('hidden');
            })
            button.classList.add('selected')
        }
        else {
            document.querySelectorAll('.sanpham-page_filter-option').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected')
            document.querySelectorAll('.sanpham-list').forEach(btn => {
                if (btn.classList.contains(filterValue)) {
                    btn.classList.remove('hidden')
                }
                else {
                    btn.classList.add('hidden')
                }
            })
        }
    }
}