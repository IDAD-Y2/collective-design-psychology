document.write( '<button class=\"hamburger hamburger--spring\" type=\"button\" id=\"menu-burger\" onclick=\"openNav()\">\n' );
document.write( '<span class=\"hamburger-box\">\n' );
document.write( '<span class=\"hamburger-inner\">\n' );
document.write( '</span>\n' );
document.write( '</span>\n' );
document.write( '</button>\n' );
document.write( '<div id=\"nav\" class=\"sidenav\">\n' );
document.write( '<a href=\"index.html\"> Home </a>\n' );
document.write( '<a href=\"dark-patterns.html\"> Dark Patterns </a>\n' );
document.write( '<a href=\"gamification.html\"> Gamification </a>\n' );
document.write( '<a href=\"cognitive-bias.html\"> Cognitive Bias in Design </a>\n' );
document.write( '<a href=\"rights-and-wrongs-online.html\"> Rights and wrongs of online activity </a>\n' );
document.write( '<a href=\"digital-privacy.html\"> Digital privacy </a>\n' );
document.write( '<a href=\"solutionism.html\"> Solutionism </a>\n' );
document.write( '<a href=\"digital-accessibility.html\"> Digital Accessibility </a>\n' );
document.write( '</div>' );

function openNav() {
    document.getElementById("menu-burger").classList.toggle("is-active");
    document.getElementById("nav").classList.toggle("show");
}
