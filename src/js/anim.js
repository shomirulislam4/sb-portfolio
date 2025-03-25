/* Scale Animation */
$(function () {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollTop = $(window).scrollTop();

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('scale__anim');
            }
        });

        lastScrollTop = currentScrollTop;
    }, {
        threshold: 0.5
    });

    $('.scale__anim__hide').each(function () {
        observer.observe(this);

        if (isInViewport(this)) {
            $(this).addClass('scale__anim');
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }
});

$(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('scale__anim__inf');
            } else {
                $(entry.target).removeClass('scale__anim__inf');
            }
        });
    });

    const hiddenElements = $('.scale__anim__hide__inf');
    hiddenElements.each(function () {
        observer.observe(this);
    });
});

/* Blur Animtion */
$(function () {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollTop = $(window).scrollTop();

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('blur__anim');
            }
        });

        lastScrollTop = currentScrollTop;
    }, {
        threshold: 0.5
    });

    $('.blur__anim__hide').each(function () {
        observer.observe(this);

        if (isInViewport(this)) {
            $(this).addClass('blur__anim');
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }
});

$(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('blur__anim__inf');
            } else {
                $(entry.target).removeClass('blur__anim__inf');
            }
        });
    });

    const hiddenElements = $('.blur__anim__hide__inf');
    hiddenElements.each(function () {
        observer.observe(this);
    });
});

/* Slide In Animtaion */
$(function () {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollTop = $(window).scrollTop();

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('slidein__anim');
            }
        });

        lastScrollTop = currentScrollTop;
    }, {
        threshold: 0.5
    });

    $('.slidein__anim__hide').each(function () {
        observer.observe(this);

        if (isInViewport(this)) {
            $(this).addClass('slidein__anim');
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }
});

$(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('slidein__anim__inf');
            } else {
                $(entry.target).removeClass('slidein__anim__inf');
            }
        });
    });

    const hiddenElements = $('.slidein__anim__hide__inf');
    hiddenElements.each(function () {
        observer.observe(this);
    });
});

/* Slide Up Animtaion */
$(function () {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollTop = $(window).scrollTop();

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('slideup__anim');
            }
        });

        lastScrollTop = currentScrollTop;
    }, {
        threshold: 0.5
    });

    $('.slideup__anim__hide').each(function () {
        observer.observe(this);

        if (isInViewport(this)) {
            $(this).addClass('slideup__anim');
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }
});

$(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('slideup__anim__inf');
            } else {
                $(entry.target).removeClass('slideup__anim__inf');
            }
        });
    });

    const hiddenElements = $('.slideup__anim__hide__inf');
    hiddenElements.each(function () {
        observer.observe(this);
    });
});