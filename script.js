const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const public_mail_domain = [
  "live.com",
  "mail.ru",
  "web.de",
  "list-manage.com",
  "gmx.net",
  "outlook.com",
  "hotmail.com",
  "gmail.com",
  "sendgrit.net",
  "evite.com",
  "live.net",
  "szn.cz",
  "linkedinmobileapp.com",
  "mailchimp.com",
  "1drv.ms",
  "mail.com",
  "freemail.hu",
  "temp-mail.org",
  "mimecast.com",
  "liveinternet.ru",
  "families.google",
  "mlsend.com",
  "126.com",
  "gmx.ch",
  "gmx.de",
  "gmx.com",
  "gmx.fr",
  "cmail20.com",
  "campaign-archive.com",
  "clktec.com",
  "webmail.free.fr",
  "posteo.de",
  "yahoomail.com",
  "yahoo.fr",
  "sendinblue.com",
  "fastmail.com",
  "kpnmail.nl",
  "hdmoli.com",
  "greetingsisland.com",
  "chpok.site",
  "tegos.club",
  "hushmail.com",
  "deref-mail.com",
  "mail.ee",
  "convertkit-mail2.com",
  "yopmail.com",
  "highrich.net",
  "hao6v.tv",
  "memberkit.com.br",
  "aol.com",
  "aim.com",
  "proton.me",
  "protonmail.com",
  "tutanota.com",
  "tutanota.de",
  "tutamail.com",
  "tuta.io",
  "keemail.me",
  "icloud.com",
  "yandex.com",
  "yandex.ru",
  "zohomail.com",
  "msn.com",
  "wanadoo.fr",
  "orange.fr",
  "comcast.net",
  "rediffmail.com",
  "free.fr",
  "web.de",
  "ymail.com",
  "libero.it",
  "uol.com.br",
  "bol.com.br",
  "mail.ru",
  "cox.net",
  "hotmail.it",
  "sbcglobal.net",
  "sfr.fr",
  "verizon.net",
  "ig.com.br",
  "bigpond.com",
  "terra.com.br",
  "yahoo.it",
  "neuf.fr",
  "yahoo.de",
  "alice.it",
  "rocketmail.com",
  "att.net",
  "laposte.net",
  "bellsouth.net",
  "charter.net",
  "rambler.ru",
  "tiscali.it",
  "shaw.ca",
  "sky.com",
  "earthlink.net",
  "optonline.net",
  "freenet.de",
  "t-online.de",
  "aliceadsl.fr",
  "virgilio.it",
  "home.nl",
  "qq.com",
  "telenet.be",
  "me.com",
  "tiscali.co.uk",
  "voila.fr",
  "planet.nl",
  "tin.it",
  "ntlworld.com",
  "arcor.de",
  "frontiernet.net",
  "hetnet.nl",
  "zonnet.nl",
  "club-internet.fr",
  "juno.com",
  "optusnet.com.au",
  "blueyonder.co.uk",
  "bluewin.ch",
  "skynet.be",
  "sympatico.ca",
  "windstream.net",
  "mac.com",
  "centurytel.net",
  "chello.nl",
  "aim.com",
  "bigpond.net.au",
  "emailexpert.org",
  "inbox.com",
  "runbox.com",
  "mailfence.com",
  "startmail.com",
  "lycos.com",
  "zimbra.com",
  "maillinator.com",
  "guerrillamail.com",
  "disroot.org",
  "riseup.net",
  "openmailbox.org",
  "posteo.de",
  "sapo.pt",
  "torguard.net",
  "naver.com",
  "daum.net",
  "webmail.co.za",
  "btinternet.com",
  "o2.pl",
  "telenet.be",
  "sina.com",
  "netzero.net",
  "talktalk.net",
  "telus.net",
  "163.com",
  "hanmail.com",
  "seznam",
  "eclipse.eu",
  "interia.pl",
  "rogers.com",
  "walla.co.il",
  "excite.com",
  "gmavt.net",
  "lavabit.com",
  "eircom.net",
  "netscape.net",
  "myway.com",
  "cock.li",
  "mykolab.com",
  "snailmail.com",
  "caramail.com",
  "o2online.de",
  "scryptmail.com",
  "pobox.com",
  "1and1.com",
  "trash-mail.com",
  "temp-mail.org",
  "10minutemail.com",
  "anonbox.net",
  "mailinator.com",
  "yopmail.com",
  "jetable.org",
  "getnada.com",
  "maildrop.cc",
  "tempmailgen.com",
  "dispostable.com",
  "sharklasers.com",
  "mintemail.com",
  "spamgourmet.com",
  "fakeinbox.com",
  "tempmailo.com",
  "neomailbox.com",
  "autistic.org",
  "dismail.de",
  "kolabnow.com",
  "countermail.com",
  "getairmail.com",
  "stealthmail.com",
  "lockbin.com",
  "securetmail.com",
  "privy-mail.com",
  "guardmyemail.com",
  "safetymail.info",
  "encryptedmail.com",
  "safeguardmail.com",
  "confidentialmail.com",
  "mail2world.com",
  "inbox.lv",
  "rackspace.com",
  "sohu.com",
  "netease.com",
  "ctemplar.com",
  "canopymail.app",
  "postale.io",
  "privatemail.com",
  "criptext.com",
  "encryptedmail.com",
  "safe-mail.net",
  "privateme.com",
  "enigmail.net",
  "lockbin.com",
  "hush.com",
];
function getDateMonth(str) {
  const date = new Date(str);

  console.log(date, "date");
  return date.getMonth;
}

function initArticleMiniSlider() {
  $(".mini-article-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });
}

$(document).ready(function () {
  console.log("ready here  !");
  AOS.init();

  $(".video-thumbnail").on("click", function () {
    console.log("click on video thumbnail");
    $(".overlay").addClass("visible");
    $("body").addClass("overlay-visible");
  });

  $(".overlay").on("click", function (e) {
    console.log("clicked on overlay");
    // e.stopPropagation();
    $(this).removeClass("visible");
    $("iframe").attr("src", "");
    $("body").removeClass("overlay-visible");
  });

  $(".fs-ham-open").on("click", function (e) {
    $(this).addClass("d-none");
    $(".fs-ham-closed").removeClass("d-none");
    e.stopPropagation();
    if ($(".menu").hasClass("visible")) {
      $(".menu").removeClass("visible");
    } else {
      $(".menu").addClass("visible");
    }
  });

  $(".fs-ham-closed").on("click", function (e) {
    e.stopPropagation();
    $(".fs-ham-open").removeClass("d-none");
    $(this).addClass("d-none");
    if ($(".menu").hasClass("visible")) {
      $(".menu").removeClass("visible");
    } else {
      $(".menu").addClass("visible");
    }
  });

  $(".bell").on("click", function (e) {
    e.stopPropagation();
    $(".notification-container").toggleClass("visible");
  });

  $(".search-icon").on("click", function (e) {
    e.stopPropagation();
    $(".search-input-container").toggleClass("visible");
  });

  $("body").on("click", function (e) {
    $(".menu.visible").removeClass("visible");
    $(".notification-container").removeClass("visible");
    $(".search-input-container").removeClass("visible");
  });

  $(".notification-container").on("click", function (e) {
    e.stopPropagation();
  });

  $(".menu.visible").on("click", function (e) {
    e.stopPropagation();
  });
  $(".search-input-container").on("click", function (e) {
    e.stopPropagation();
  });

  const section3 = document.querySelector("#section3");

  const section4 = document.querySelector("#section4");
  const section5 = document.querySelector("#section5");

  console.log(section3, section4, section5);
  const section3Pos = section3.offsetTop - 300;

  const section4Pos = section4.offsetTop - 200;

  const section5Pos = section5.offsetTop - 200;

  console.log("section3 ", section3, section3Pos);
  console.log("section4 ", section4, section4Pos);
  console.log("section5 ", section5, section5Pos);

  // console.log("section3", topPos);

  $(window).on("scroll", function () {
    $(".menu").removeClass("visible");
    if (window.scrollY > 500) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
    if (window.scrollY > section3Pos) {
      $(".nav-fixed").addClass("visible");
      $("body").addClass("nav-visible");
    } else {
      $(".nav-fixed").removeClass("visible");
      $("body").removeClass("nav-visible");
    }
    if (window.scrollY > section3Pos && window.scrollY < section4Pos) {
      $(".nav-item.pill:not(.section1)").removeClass("active");
      $(".section1").addClass("active");
      console.log("between one and two");
    } else if (window.scrollY > section4Pos && window.scrollY < section5Pos) {
      $(".nav-item.pill:not(.section2)").removeClass("active");
      $(".section2").addClass("active");
      console.log("between two and three");
    } else if (window.scrollY > section5Pos) {
      $(".nav-item.pill:not(.section3)").removeClass("active");
      $(".section3").addClass("active");
      console.log("above 3");
    }
  });

  if (window.innerWidth < 768) {
    initArticleMiniSlider();
  }
});

jQuery(document).ready(function () {
  function fetchEvents() {}

  jQuery(".mark-as-read").click(function () {
    console.log("The Search function is hooked up");
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "content_search",
        search: $(".search").val(),
      },
      success: function (output) {
        console.log(output);
      },
    });
  });
  //alert('Inside custom script');
  jQuery(".mark-as-read").click(function () {
    console.log("The function is hooked up");
    var form_data = jQuery("#calender_form").serializeArray();
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "fetch_calender_events",
        message_id: $(".mark-as-read").val(),
        user_industry: $(".user_industry").val(),
        user_area_of_interest: $(".user_area_of_interest").val(),
        user_region: $(".user_region").val(),
        year: $(".year").val(),
        month: $(".month").val(),
        all_events: $(".all_region").val(),
      },
      success: function (output) {
        console.log(output.data, "is this events");
        const events = [];
        output.data.forEach((element) => {
          events.push(
            "<h1>Event title ---- " +
              element.title +
              " ---- with ID : " +
              element.ID
          );
        });
        jQuery("#calender_data").html(events);
      },
    });
  });

  jQuery(".mark-as-read").click(function () {
    console.log("The event register function is hooked up");
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "register_event",
        event_id: $(".event_id").val(),
      },
      success: function (output) {
        console.log(output);
      },
    });
  });

  function registerEvent(id) {
    console.log("The event register function is hooked up");
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "register_event",
        // event_id: $(".event_id").val(),
        event_id: id,
      },
      success: function (output) {
        console.log("REGSITER EVENT", output);
        return output;
      },
    });
  }

  jQuery(".mark-as-read").click(function () {
    console.log("The GPD function is hooked up");
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "gpd_email_request",
      },
      success: function (output) {
        console.log(output);
        return output;
      },
    });
  });

  jQuery(".mark-as-read").click(function () {
    console.log("The send email function is hooked up");
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "send_mail_function",
        subject: $(".subject").val(),
        message: $(".message").val(),
        receiver_email: $(".receiver_email").val(),
      },
      success: function (output) {
        console.log(output);
      },
    });
  });

  $(".event-item").on("click", function () {
    console.log("event item clicked", this);
    $(".event-details .image-container img").attr(
      "src",
      "https://dev.gilcouncil.com/wp-content/uploads/2023/05/Rectangle-112.png"
    );
    $(".event-details .image-container img").attr("src", "");
  });

  $(document).on("click", ".event-item", function () {
    console.log($(this).attr("data-img"));
    $(".event-details .image-container img").attr(
      "src",
      $(this).attr("data-img")
    );
    $(".event-details h2").text($(this).attr("data-title"));
    $(".event-details button.btn-primary").attr(
      "data-register",
      $(this).attr("data-id")
    );
    $(".event-details button.btn-primary").attr(
      "data-register-status",
      $(this).attr("data-registered-status")
    );
    if ($(this).attr("data-registered-status") === "true") {
      $(".event-details button.btn-primary").html("Registered");
    } else {
      $(".event-details button.btn-primary").html("Register");
    }
  });

  function handleSearch(e) {
    e.preventDefault();
    console.log("searched");
  }

  $('[data-function="register-event"]').on("click", function () {
    console.log("The event register function is hooked up");
    const currentButton = $(this);
    currentButton.html("processing");
    currentButton.addClass("btn-loading");
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "register_event",
        // event_id: $(".event_id").val(),
        event_id: currentButton.attr("data-register"),
      },
      success: function (output) {
        currentButton.html("Registered");
        currentButton.removeClass("btn-loading");
        currentButton.addClass("register-success");

        console.log("REGSITER EVENT", output);
      },
    });
  });

  // console.log('Calendar found', $('#my-calendar table tbody tr'))
  //   $('#my-calendar table tbody tr').each((i, row) => {
  // //  console.log( $(row).children('td'));
  //       $(row).children('td').each((index, col) =>{

  //         console.log("output calendar events data inside the loop", eventsData);
  //         // eventsData.data.each((id, event) =>{})
  //         console.log('what is insde the column' ,$(col).text())
  //         // $(col).addClass('jsCalendar-current')
  //       })

  //   })

  function dragStartFloatingButton() {
    console.log("DRAGGING FLOATING BUTTON");
  }

  $(".floating-button").on("ondrag", dragStartFloatingButton());

  $("#search-form").on("submit", function (e) {
    e.preventDefault();
    console.log(e, "event from the form submission", $("#search-input").val());
    $(".search-results-container").removeClass("hidden");
    $(".search-results ul").html(
      '<div class = "loader-outer"><div class="lds-dual-ring"></div></div>'
    );
    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "content_search",
        search: $("#search-input").val(),
      },
      success: function (output) {
        $(".lds-dual-ring").remove();
        $(".search-results-bottom").removeClass("hidden");
        console.log("search api integration", output);
        var results = [];
        var counter = 0;
        output.data.forEach((el) => {
          if (counter < 5) {
            results.push(`<li>
        <div><a href = "${el.redirect_url}">${el.title}</a></div>
         
        </li>`);
          }
          counter++;
        });
        $(".search-results ul").html(results);
      },
    });
  });

  $(".gpd-trigger").on("click", function () {
    $(".confrimation-overlay").removeClass("d-none");
    $("body").addClass("overlay-visible");
  });

  $(".confrimation-overlay").on("click", function () {
    console.log("CONFRIMATION OVERLAY CLICKED");
    $(this).addClass("d-none");
    $("body").removeClass("overlay-visible");
  });

  $(".confrimation-box").on("click", function (e) {
    e.stopPropagation();
    console.log("confrimation box clicked");
  });

  $(".confrimation-box button:not(.btn-danger)").on("click", function () {
    console.log("clicked on yes");
    const oldHTML = $(".confrimation-box").html();
    $(".confrimation-box").html(
      '<div class = "loader-outer"><div class="lds-dual-ring"></div></div>'
    );
    $(".confrimation-box").html();

    jQuery.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "gpd_email_request",
      },
      success: function (output) {
        $(".confrimation-box").html(
          '<h2 class = "text-center">You are registered</h2>'
        );
        setTimeout(function () {
          $(".confrimation-overlay").addClass("d-none");
          $("body").removeClass("overlay-visible");
          $(".confrimation-box").html(oldHTML);
        }, 1500);
      },
    });
  });

  $(".confrimation-box button.btn-danger").on("click", function () {
    console.log("clicked on NO");
    $(".confrimation-overlay").addClass("d-none");
    $("body").addClass("overlay-visible");
  });

  // if (element) {
  //   myCalendar.onDateClick(function (event, date) {
  //     console.log("date click", new Date(date).getDate());
  //     // inputA.value = date.toString();
  //   });
  //   myCalendar.onMonthChange(function (event, date) {
  //   // inputB.value = date.toString();
  //   console.log("month change", new Date(date).getMonth(), new Date(date).getFullYear())
  //   const currentMonth = new Date(date).getMonth()
  //   const currentYear =  new Date(date).getYear()
  //   if(currentMonth.length == 1){
  //     currentMonth = "0" + currentMonth
  //   }

  //   fetchEvents(currentYear,  currentMonth)
  // });

  // }

  // myCalendar.onMonthChange(function (event, date) {
  //   // inputB.value = date.toString();
  //   console.log("month change", new Date(date).getMonth(), new Date(date).getFullYear())
  //   const currentMonth = new Date(date).getMonth()
  //   const currentYear =  new Date(date).getYear()
  //   if(currentMonth.length == 1){
  //     currentMonth = "0" + currentMonth
  //   }

  //   fetchEvents(currentYear,  currentMonth)
  // });

  $(".jsCalendar-title-name").on("click", function () {
    console.log("clicked on the  prev arrow", $(".slick-custom-next"));
    $(".jsCalendar-nav-right")[0].click();
  });

  $(".view-all-btn").on("click", function () {
    $(".section-growth .slick-custom").toggleClass("d-none");
    $(this).toggleClass("expanded");

    if ($(".view-all-btn h3").text() == "View All") {
      $(".view-all-btn h3").text("Collapse");
    } else {
      $(".view-all-btn h3").text("View All");
    }
  });

  // console.log(
  //   "MY CALENDAR",
  //   $("#my-calendar td:not(.jsCalendar-previous):not(.jsCalendar-next)").forEach(el => console.log(el))
  // );

  //LOGIN FORM

  $("#email").on("change paste keyup", function () {
    console.log("CHANGE EVENT TRIGGERED ON INPUT");
    $(".error.email").html("");
  });

  $("#email").on("blur", function () {
    if (!$(this).val().length) {
      $(".error.email").html("This field is required");
      return;
    }

    var emailPattern = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!emailPattern.test($(this).val())) {
      $(".error.email").html("Please provide a correct email format");
    }
    var emailValue = $(this)
      .val()
      .substr($(this).val().indexOf("@") + 1, $(this).val().length);
    public_mail_domain.forEach((el, index) => {
      if (el == emailValue) {
        $(".error.email").html("Please provide a correct email format");
      }
    });
  });

  $(".toggle-visibility").on("click", function () {
    if ($(".form-control.password").attr("type") == "text") {
      $(".form-control.password").attr("type", "password");
      $(this).find(".visible-icon.open").removeClass("d-none");
      $(this).find(".visible-icon.closed").addClass("d-none");
    } else if ($(".form-control.password").attr("type") == "password") {
      $(".form-control.password").attr("type", "text");

      $(this).find(".visible-icon.open").addClass("d-none");
      $(this).find(".visible-icon.closed").removeClass("d-none");
    }
  });

  $(".toggle-visibility-confirm").on("click", function () {
    if ($(".form-control.passwordConfirm").attr("type") == "text") {
      $(".form-control.passwordConfirm").attr("type", "password");
      $(this).find(".visible-icon.open").removeClass("d-none");
      $(this).find(".visible-icon.closed").addClass("d-none");
    } else if ($(".form-control.passwordConfirm").attr("type") == "password") {
      $(".form-control.passwordConfirm").attr("type", "text");
      $(this).find(".visible-icon.open").addClass("d-none");
      $(this).find(".visible-icon.closed").removeClass("d-none");
    }
  });

  $("#password").on("blur", function () {
    if (!$(this).val().length) {
      $(".error.password").html("This field is required");
    }
  });

  $("#password").on("change paste keyup", function () {
    $(".error.password").html("");
    if ($(this).val().length > 20) {
      $(".error.password").html("Password must be under 20 characters");
    }
  });

  $(".form-login").on("submit", function (e) {
    e.preventDefault();
    if (!$("#email").val()) {
      $(".error.email").text("This field is required");
    }
    if (!$("#password").val()) {
      $(".error.password").text("This field is required");
    }
  });

  $("#passwordConfirm").on("blur", function () {
    if (!$(this).val().length) {
      $(".error.passwordConfirm").html("This field is required");
      return;
    }
    if ($("#passwordConfirm").val() !== $("#password").val()) {
      $(".error.passwordConfirm").text("Password do not match");
      return;
    }
  });

  $("#passwordConfirm").on("change paste keyup", function () {
    $(".error.passwordConfirm").html("");
    if ($(this).val().length > 20) {
      $(".error.password").html("Password must be under 20 characters");
    }
  });

  $(".signup-form").on("submit", function (e) {
    e.preventDefault();

    if (!$("#email").val()) {
      $(".error.email").text("This field is required");
      return;
    }
    if (!$("#password").val()) {
      $(".error.password").text("This field is required");
      return;
    }
    if (!$("#passwordConfirm").val()) {
      $(".error.passwordConfirm").text("This field is required");
      return;
    }
    if ($("#passwordConfirm").val() !== $("#password").val()) {
      $(".error.passwordConfirm").text("Password do not match");
      return;
    }
    $(".signup-form-step-2").removeClass("d-none");
    $(".signup-form-step-1").addClass("d-none");
  });

  $("#firstName").on("change paste keyup", function () {
    $(".error.firstName").html("");
  });

  $("#lastName").on("change paste keyup", function () {
    $(".error.lastName").html("");
  });

  $("#title").on("blur", function () {
    if (!$(this).val().length) {
      $(".error.title").html("This field is required");
      return;
    }
  });

  $("#company").on("change paste keyup", function () {
    $(".error.company").html("");
  });
  $("#company").on("blur", function () {
    if (!$(this).val().length) {
      $(".error.company").html("This field is required");
      return;
    }
  });

  $("#phone").on("change paste keyup", function () {
    $(".error.phone").html("");
  });
  $("#phone").on("blur", function () {
    if (!$(this).val().length) {
      $(".error.phone").html("This field is required");
      return;
    }
  });

  $("#country").on("change paste keyup", function () {
    $(".error.country").html("");
  });
  $("#country").on("blur", function () {
    if (!$(this).val().length) {
      $(".error.country").html("This field is required");
      return;
    }
  });

  $("#title").on("change paste keyup", function () {
    $(".error.title").html("");
  });

  $("#passwordConfirm").on("change paste keyup", function () {
    $(".error.passwordConfirm").html("");
    if ($(this).val().length > 20) {
      $(".error.password").html("Password must be under 20 characters");
    }
  });

  $("#terms1").on("change", function () {
    $(".terms1").removeClass("error");
  });
  $("#terms2").on("change", function () {
    $(".terms2").removeClass("error");
  });

  $(".signup-form-2").on("submit", function (e) {
    e.preventDefault();
    var form2ErrorCount = 0;
    if (!$("#firstName").val()) {
      $(".error.firstName").text("This field is required");
      form2ErrorCount++;
    }
    if (!$("#lastName").val()) {
      $(".error.lastName").text("This field is required");
      form2ErrorCount++;
    }
    if (!$("#title").val()) {
      $(".error.title").text("This field is required");
      form2ErrorCount++;
    }
    if (!$("#company").val()) {
      $(".error.company").text("This field is required");
      form2ErrorCount++;
    }
    if (!$("#phone").val()) {
      $(".error.phone").text("This field is required");
      form2ErrorCount++;
    }
    if (!$("#country").val()) {
      $(".error.country").text("This field is required");
      form2ErrorCount++;
    }
    if (!$("#terms2").is(":checked")) {
      $(".terms2").addClass("error");
      form2ErrorCount++;
    }
    if (!$("#terms1").is(":checked")) {
      $(".terms1").addClass("error");
      form2ErrorCount++;
    }

    if (!form2ErrorCount) {
      //submit form here
      console.log("ready to submit");
    }
  });
});
